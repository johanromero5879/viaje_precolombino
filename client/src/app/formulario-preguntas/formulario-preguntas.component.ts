import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { RecursosService } from '../services/recursos.service';
import { PreguntasService } from '../services/preguntas.service';
import { FormatearTextoService } from '../services/formatear-texto.service';

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
    private preguntas_service: PreguntasService,
    private textoService: FormatearTextoService,
    private dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPreguntas);
  }

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
      this.openDialog();
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

  // convertir_texto_HTML(texto){
  //   texto = '<p>' + texto.replace(/\\r\\n|\\r|\\n/g, '</p><p>');

  //   texto = texto.replace(/<p>([^:]{1,125}):/g, function(x, p1) {
  //     return `<p><strong>${p1}:</strong>`;
  //   })
  //   return texto ;
  // }

  cambiar_recurso(recurso){
    console.log(recurso);
    // this.recurso = recurso;
  }

}

@Component({
  selector: 'dialog-preguntas',
  templateUrl: 'dialog.html',
})
export class DialogPreguntas {

  constructor(
    public dialogRef: MatDialogRef<DialogPreguntas>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
