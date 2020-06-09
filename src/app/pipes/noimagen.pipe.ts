import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(imagenes: any[]): string {
    //Si no hay imagenes retornaremos la imagen por defecto
    if (!imagenes){
      return 'assets/img/no-imagen.jpg';
    }
    else if(imagenes.length>0){
      return imagenes[0].url;
    }
    else{
      return 'assets/img/no-imagen.jpg';
    }
  }

}
