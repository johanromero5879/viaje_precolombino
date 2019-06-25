import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FormatearTextoService {

  private titulo = 'Viaje Precolombino';
  constructor(
    private titleService: Title
  ) { }

  cambiar_titulo(titulo = ''){
    if(titulo){
      titulo = titulo+' - '+this.titulo;
    }

    titulo += this.titulo;
    
    this.titleService.setTitle(titulo);
  }
  convertir_a_HTML(texto){
    /*Agrupa los parrafos en etiquetas <p>*/
    texto = '<p>' + texto.replace(/\\r\\n|\\r|\\n/g, '</p><p>');

    /*Pone en negrilla los subtitulos*/
    texto = texto.replace(/<p>([^:]{1,80}):/g, function(x, p1) {
      return `<p><strong>${p1}:</strong>`;
    })
    return texto ;
  }

  /* op: 1 para cambiar de url a texto, 2 viceversa*/
  convertir_URL_texto(texto, op){
    if(op == 1){
      texto = texto.replace(/-/g, ' ');
    }else{
      texto = texto.replace(/\s/g, '-');
    }
    return texto;
  }
}
