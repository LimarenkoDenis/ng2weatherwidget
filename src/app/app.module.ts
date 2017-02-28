import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelWeatherComponent } from './hotel-weather/hotel-weather.component';
import { HotelProfileComponent } from './hotel-profile/hotel-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    HotelWeatherComponent,
    HotelProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
