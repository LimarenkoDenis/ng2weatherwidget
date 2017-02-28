import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-weather',
  templateUrl: './hotel-weather.component.html',
  styleUrls: ['./hotel-weather.component.css']
})
export class HotelWeatherComponent implements OnInit {

  @Input()
  public weather: Weather;

  public constructor() { }

  public ngOnInit(): void {
  }

}
