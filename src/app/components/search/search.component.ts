import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  public artistas:any[]=[];
  public animacion:boolean=false;
  constructor(private _spotiService:SpotifyService) { }

  public buscarArtista(termino:string){
    this.animacion=true;
    this._spotiService.getAristas(termino)
    .subscribe(resultado=>{
      this.animacion=false;
      return this.artistas=resultado
    });
  }

}
