import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*Services*/
import { TemasService } from '../services/temas.service';
import { RecursosService } from '../services/recursos.service';
import { FormatearTextoService } from '../services/formatear-texto.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Output() output_contenido = new EventEmitter();
  @Output() output_recurso = new EventEmitter();

  private contenido = {};
  constructor(
    private temas_service: TemasService,
    private recursos_service: RecursosService,
    private textoService: FormatearTextoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.obtener_contenido_url();
  }

  obtener_contenido_url(){
    if(this.activatedRoute.snapshot.params['tema']){
      this.cambiar_contenido(this.activatedRoute.snapshot.params['tema'], 't');
    }else if(this.activatedRoute.snapshot.params['recurso']){
      this.cambiar_contenido(this.activatedRoute.snapshot.params['recurso'], 'r');
    }else{
      this.cambiar_contenido('', 't');
    }
  }

  cambiar_contenido(contenido, tipo){
    switch (tipo){
      case 't':
        this.temas_service.obtener_contenido(contenido).subscribe(data => {
          if(data){
            this.contenido = data;
            /*Cambia el titulo de <title>*/
            if(this.contenido['tema_principal']){
              this.textoService.cambiar_titulo(this.contenido['tema_principal'].nombre);
            }
            this.output_contenido.emit(this.contenido);
          }
        });
        break;
      case 'r':
        this.recursos_service.obtener_recurso(contenido).subscribe(data => {
          if(data){
            this.contenido['tema_principal'] = {_id:data['_id'], nombre: data['nombre']};
            /*Cambia el titulo de <title>*/
            this.textoService.cambiar_titulo(this.contenido['tema_principal'].nombre);
            this.contenido['tema_anterior'] = data['tema'];
            this.output_recurso.emit(data);
          }
        });
        break;
    }
  }

}
