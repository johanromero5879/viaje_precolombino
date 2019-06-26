import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contents-list',
  templateUrl: './contents-list.component.html',
  styleUrls: ['./contents-list.component.css']
})
export class ContentsListComponent implements OnInit {
  
  private contenido = {};
  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {}
  
  cambiar_contenido(contenido){
    // console.log(contenido);
    // console.log(this.contenido);
    // if(contenido.tema_principal && contenido.tema_principal == this.contenido['tema_principal']){
    //   console.log('Cambia URL');
    //   this.router.navigate([this.obtener_url(this.contenido['tema_principal'])]);
    // }else{
    //   this.contenido = contenido;
    // }
    // console.log(contenido);
    this.contenido = contenido;
  }

  
  obtener_url(id_subcontenido){
    return this.contenido['recursos'] ? '../../../recurso/'+id_subcontenido : 
    this.contenido['tema_principal'] ? '../../'+id_subcontenido+'/contenido' : '../tema/'+id_subcontenido+'/contenido';
  }
}
