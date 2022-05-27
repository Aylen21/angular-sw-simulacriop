import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HorosocopoService {
  constructor(private _http: HttpClient) {}
  public getHoroscope(
    signoSeleccionado: string,
    diaSeleccionado: string
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '76337765ebmsh3046a0479496547p1b0740jsn2fb0c7ab6a57',
      }),
    };
    const body = new HttpParams()
      .set('sign', signoSeleccionado)
      .set('day', diaSeleccionado);
    return this._http.post(
      'https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=' +
        signoSeleccionado +
        '&day=' +
        diaSeleccionado,
      body,
      httpOptions
    );
  }
}
