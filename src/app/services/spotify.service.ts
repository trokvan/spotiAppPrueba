import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //Constante que contiene los headers necesarios para que spotify pueda regresarnos la informacion
  private _HEADERS=new HttpHeaders({
    'Authorization': 'Bearer BQChSlZaX2Ln9vL-WaH2Qsuk4Q4nqJKGLOFTJ-arMhYP963lQ5W_NUX66frRJm1C0rvCj0K7mnYxrXwPNxY'
  });
  constructor(private _http:HttpClient) { 
    console.log("Servicio listo");
  }

  getNuevosLanzamientos(){
    //En la función get despues de la url podemos especificar las opciones, en este caso los headers, retornamos todo el observable
    return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=30', { headers:this._HEADERS });
  }

  getAristas(termino:string){
    return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers:this._HEADERS});
  }
}
