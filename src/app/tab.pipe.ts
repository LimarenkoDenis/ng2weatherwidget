import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tab'
})
export class TabPipe implements PipeTransform {

  public transform(hotels: Hotel[], stars?: number): Hotel[] {
    if (!stars) {
      return hotels;
    }
    return hotels.filter((hotel: Hotel) => hotel.stars === stars );
  }

}
