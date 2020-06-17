import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent{
  //Esta información será recibida desde el componente que utiliza la tarjeta
  @Input() elementos:any[] = [];
  constructor(private _router:Router) { }

  public verArtista(elemento:any){
    let id:string;
    switch (elemento.type){
      case 'artist': 
        id=elemento.id; 
        break;
      default: 
        id=elemento['artists'][0].id; 
        break;
    }
    this._router.navigate(['artista',id]);
  }
}
