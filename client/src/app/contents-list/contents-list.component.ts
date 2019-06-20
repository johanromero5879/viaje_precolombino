import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents-list',
  templateUrl: './contents-list.component.html',
  styleUrls: ['./contents-list.component.css']
})
export class ContentsListComponent implements OnInit {
  
  private contenido = {};
  private tema_actual = '';
  constructor( ) { }

  ngOnInit() {}
  
  cambiar_subcontenidos(contenido){
    this.contenido = contenido;
    this.tema_actual = this.contenido['tema_principal'] ? this.contenido['tema_principal']._id : '';
  }

  cambiar_contenido(id){
    this.tema_actual = id;
  }
}
