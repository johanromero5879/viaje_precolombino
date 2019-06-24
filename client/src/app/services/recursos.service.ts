import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  private URL = "api/recurso"; //URL to web api

  constructor(private http: HttpClient) { }

  obtener_recurso(recurso){
    let url = `${this.URL}/${recurso}`;
    return this.http.get(url);
  }
}
