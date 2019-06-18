import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';

/*Services*/
import { TemasService } from '../services/temas.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit, OnChanges {
  @Input() tema_actual:string;
  @Output() output_contenido = new EventEmitter();

  private tema_anterior:string;
  private contenido = {};
  constructor(
    private temas_service: TemasService
  ) { }

  ngOnInit() {}

  ngOnChanges() {
    this.cambiar_contenido(this.tema_actual);
  }

  cambiar_contenido(id = ''){
    this.temas_service.obtener_contenido(id).subscribe(data => {
      if(data){
        this.contenido = data;
        this.tema_anterior = this.contenido['tema_anterior'] ? this.contenido['tema_anterior'] : '';
        this.tema_actual = this.contenido['tema_principal'] ? this.contenido['tema_principal']._id : '';
        this.output_contenido.emit(this.contenido);
      }
    });
  }

}
