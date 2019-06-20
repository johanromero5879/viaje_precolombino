import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
/*Services*/
import { TemasService } from '../services/temas.service';
import { RecursosService } from '../services/recursos.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit, OnChanges {
  @Input() tema_actual:string;
  @Output() output_contenido = new EventEmitter();
  @Output() output_recurso = new EventEmitter();

  private tema_anterior:string;
  private contenido = {};
  constructor(
    private temas_service: TemasService,
    private recursos_service: RecursosService,
    private router: Router
  ) { }

  ngOnInit() {}

  ngOnChanges() {
    this.cambiar_contenido(this.tema_actual);
    this.output_recurso.emit('data');
  }

  cambiar_contenido(id = ''){
    this.temas_service.obtener_contenido(id).subscribe(data => {
      if(data){
        this.contenido = data;
        this.tema_actual = this.contenido['tema_principal'] ? this.contenido['tema_principal']._id : '';
        this.output_contenido.emit(this.contenido);
      }else{
        this.recursos_service.obtener_recurso(id).subscribe((data) => {
          if(data){
            this.contenido['tema_principal'] = {_id: data['_id'], nombre: data['nombre']};
            this.contenido['subcontenidos'] = [];
            this.contenido['tema_anterior'] = this.tema_actual;
            this.tema_actual = data['_id'];
            // console.log(data);
            // console.log(this.contenido);
            this.router.navigate([`/recurso/${id}`]);
            this.output_recurso.emit(data);
          }
        });
      }
    });
  }

}
