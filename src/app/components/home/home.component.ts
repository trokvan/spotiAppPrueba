import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // public paises:any[]=[];
  // public cargando:boolean=true;
  // constructor(private _http:HttpClient) { 
  //   this._http.get('https://restcountries.eu/rest/v2/lang/fr')
  //     .subscribe((resp:any)=>{
  //       this.paises=resp;
  //       console.log(resp);
  //       this.cargando=false;
  //     });
  // }
  public nuevosLanzamientos:any[]=[];
  
  constructor(private _spotiService:SpotifyService){
    this._spotiService.getNuevosLanzamientos()
    .subscribe((resultados:any)=>{
      console.log(resultados.albums.items);
      this.nuevosLanzamientos=resultados.albums.items;
    });
  }
  ngOnInit(): void {
  }

}
