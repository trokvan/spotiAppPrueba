import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent{
  //Esta información será recibida desde el componente que utiliza la tarjeta
  @Input() elementos:any[] = [];
  constructor() { }

}
