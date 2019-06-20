import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { RecursosService } from '../services/recursos.service';
import { PreguntasService } from '../services/preguntas.service';

@Component({
  selector: 'app-formulario-preguntas',
  templateUrl: './formulario-preguntas.component.html',
  styleUrls: ['./formulario-preguntas.component.css']
})
export class FormularioPreguntasComponent implements OnInit {
  recurso;
  forms_group = {};
  respuestas = [];
  resultados;
  constructor(
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private recursos_service: RecursosService,
    private preguntas_service: PreguntasService) {}

  ngOnInit() {
    this.recursos_service.obtener_recurso(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        if(data){
          this.recurso = data;
          for (let pregunta of this.recurso.preguntas) {
            this.respuestas.push({
              indice: -1,
              pregunta: pregunta._id
            });
          }
        }
      });
  }

  enviar(){
    if(this.validar()){
      this.preguntas_service.evaluar(this.respuestas)
        .subscribe((data) => {
          this.resultados = data;
        });
    }else{
      alert('Debe responder toda las preguntas');
    }
  }

  validar(){
    let b = true;
    for(let respuesta of this.respuestas){
      if(respuesta.indice == -1){
        b = false;
        break;
      }
    }
    return b;
  }

  resetear(){
    this.resultados = null;
    for(let respuesta of this.respuestas){
      respuesta.indice = -1;
    }
  }

  cambiar_recurso(recurso){
    console.log(recurso);
    // this.recurso = recurso;
  }

}
