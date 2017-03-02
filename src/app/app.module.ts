import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelWeatherComponent } from './hotel-weather/hotel-weather.component';
import { HotelProfileComponent } from './hotel-profile/hotel-profile.component';
import { TabPipe } from './tab.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    HotelWeatherComponent,
    HotelProfileComponent,
    TabPipe
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
