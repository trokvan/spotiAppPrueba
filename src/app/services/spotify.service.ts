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
      'Authorization': 'Bearer BQD-QkYEP815AqKlSjgSClL8NCenQd0lkkCli-mYLv4F5QlXkS15SpFCksOl4Av5y0Abgoak50Nrf4uneQw'
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

  getInfoArtista(idArtista:string){
    return this.getQuery(`artists/${idArtista}`);
  }
}
