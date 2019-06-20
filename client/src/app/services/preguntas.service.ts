import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private URL = 'api/pregunta';
  constructor(
    private http: HttpClient
  ) { }

  evaluar(respuestas){
    let url = `${this.URL}/evaluar`;
    return this.http.post(url, respuestas);
  }
}
