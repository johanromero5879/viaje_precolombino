import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  private URL = "api/tema"; //URL to web api

  constructor(
    private http:HttpClient
  ) { }

  obtener_contenido(tema = ''){
    let url = `${this.URL}/`;
    if(tema){
      url += `${tema}/`;
    }
    url += 'contenido';
    
    return this.http.get(url);
  }
}
