import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private _http:HttpClient) { 
    console.log("Servicio listo");
  }

  getNuevosLanzamientos(){
    //Constante que contiene los headers necesarios para que spotify pueda regresarnos la informacion
    const HEADERS=new HttpHeaders({
      'Authorization': 'Bearer BQAMZ1hr76aGlI_1lJn91vvZnpOpb6ACjFZpQqw4mtCX4Rz0VwakLYTgPERi6-6DLCVWvHXUk8s-iX2iif0'
    });
    //En la función get despues de la url podemos especificar las opciones, en este caso los headers, retornamos todo el observable
    return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=30', { headers:HEADERS });
  }
}
