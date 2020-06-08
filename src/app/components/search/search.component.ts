import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  public artistas:any[]=[];
  constructor(private _spotiService:SpotifyService) { }

  public buscarArtista(termino:string){
    this._spotiService.getAristas(termino)
    .subscribe(resultado=>{
      this.artistas=resultado['artists'].items;
      console.log(this.artistas);
    })
  }

}
