import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  @Input() public hotels: Hotel[];
  @Input() public currentHotel: Hotel;

  @Output()
  public hotel: EventEmitter<Hotel> = new EventEmitter();

  public constructor() { }

  public ngOnInit(): void {
  }

  public selectHotel(hotel: Hotel): void {
    this.hotel.emit(hotel);
  }
}
