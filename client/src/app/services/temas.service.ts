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

  obtener_contenido(id = ''){
    let url = `${this.URL}/contenido/${(id ? id : '')}`;
    return this.http.get(url);
  }
}
