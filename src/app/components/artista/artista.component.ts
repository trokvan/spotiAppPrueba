import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  public infoArtista:any={};
  public nombreArtista:string;
  public seguidores:number;
  public generos:string[]=[];
  public animacion:boolean=true;
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _spotifyService:SpotifyService
  ) { 
    this._activatedRoute.params.subscribe(params=>{
      this.getInfoArtista(params['id']);
    });
  }

  private getInfoArtista(id:string){
    this._spotifyService.getInfoArtista(id)
    .subscribe(resultado=>{
      this.infoArtista=resultado;
      this.animacion=false;
      console.log(this.infoArtista);
    });
  }
  ngOnInit(): void {
  }

}
