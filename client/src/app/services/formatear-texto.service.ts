import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatearTextoService {

  constructor() { }

  convertir_a_HTML(texto){
    /*Agrupa los parrafos en etiquetas <p>*/
    texto = '<p>' + texto.replace(/\\r\\n|\\r|\\n/g, '</p><p>');

    /*Pone en negrilla los subtitulos*/
    texto = texto.replace(/<p>([^:]{1,125}):/g, function(x, p1) {
      return `<p><strong>${p1}:</strong>`;
    })
    return texto ;
  }
}
