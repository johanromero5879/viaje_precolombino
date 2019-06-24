import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
    private preguntas_service: PreguntasService,
    private textoService: FormatearTextoService,
    private dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPreguntas);
  }

  ngOnInit() {}

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

  cambiar_recurso(recurso){
    if(recurso){
      this.recurso = recurso;
      for (let pregunta of this.recurso.preguntas) {
        this.respuestas.push({
          indice: -1,
          pregunta: pregunta._id
        });
      }
    }
    
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
