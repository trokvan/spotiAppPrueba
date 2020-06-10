import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private _http:HttpClient) { 
    //console.log("Servicio listo");
  }

  /*Funcion para obtener la consulta que se va a realizar a la API,
   de esta forma no repetimos codigo cada vez que necesitemos realizar una petición*/
  getQuery(query:string){
    //Constante que contiene los headers necesarios para que spotify pueda regresarnos la informacion
    const HEADERS=new HttpHeaders({
      'Authorization': 'Bearer BQCbCMbBEJ2KgwZbO8bYyeRmIqBC6HIpsbE8bmIVR9tp6SaWXnagc2gf5256rPgXaxRySuyV8PwmvFo-c48'
    });
    const url=`https://api.spotify.com/v1/${ query }`;

    //En la función get después de la url podemos especificar las opciones, en este caso los headers, retornamos todo el observable
    return this._http.get(url,{headers:HEADERS});
  }

  getNuevosLanzamientos(){ 
    return this.getQuery('browse/new-releases?limit=30')
          .pipe(map(resultados=>resultados['albums'].items)); //map nos ayudará a obtener sólo lo que necesitamos
  }

  getAristas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
          .pipe(map(resultados=>resultados['artists'].items));
  }
}
