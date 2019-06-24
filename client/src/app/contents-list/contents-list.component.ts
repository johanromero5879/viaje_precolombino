import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents-list',
  templateUrl: './contents-list.component.html',
  styleUrls: ['./contents-list.component.css']
})
export class ContentsListComponent implements OnInit {
  
  private contenido = {};
  constructor( ) { }

  ngOnInit() {}
  
  cambiar_contenido(contenido){
    this.contenido = contenido;
  }
}
