import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //Constante que contiene los headers necesarios para que spotify pueda regresarnos la informacion
  private _HEADERS=new HttpHeaders({
    'Authorization': 'Bearer BQC16LEcC2yidb-BaD0uKtLLEqyG5W3QuKEO4A7Lo9Aek-_-VOS2oVe1LbP9Le1hw9ZW72zleDkJhTZ7Bss'
  });
  constructor(private _http:HttpClient) { 
    //console.log("Servicio listo");
  }

  getNuevosLanzamientos(){
    //En la función get después de la url podemos especificar las opciones, en este caso los headers, retornamos todo el observable
    return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=30', { headers:this._HEADERS })
          .pipe(map(resultados=>resultados['albums'].items)); //map nos ayudará a obtener sólo lo que necesitamos
  }

  getAristas(termino:string){
    return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers:this._HEADERS})
          .pipe(map(resultados=>resultados['artists'].items));
  }
}
