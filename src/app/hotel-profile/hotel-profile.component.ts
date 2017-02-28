import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hotel-profile',
  templateUrl: './hotel-profile.component.html',
  styleUrls: ['./hotel-profile.component.css']
})
export class HotelProfileComponent implements OnInit {

  @Input()
  public profile: Profile;

  public constructor() { }

  public ngOnInit(): void {
  }

}
