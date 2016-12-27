import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2'
import { AppRoutingModule } from './app-routing.module';

import { SetupComponent } from './setup/setup.component';
import { OverviewComponent } from './overview/overview.component';
import { GasEntryComponent } from './gas-entry/gas-entry.component';
import { GasEntryDetailsComponent } from './gas-entry-details/gas-entry-details.component';
import { GasEntryService } from './gas-entry/gas-entry.service';

export const firebaseConfig =  {
    apiKey: "AIzaSyAygZPKw4l6BU4fDuNfEwuD979vL64h6ME",
    authDomain: "igas-354a6.firebaseapp.com",
    databaseURL: "https://igas-354a6.firebaseio.com",
    storageBucket: "igas-354a6.appspot.com",
    messagingSenderId: "519699951950"
  };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
   declarations: [
    AppComponent,
    SetupComponent,
    OverviewComponent,
    GasEntryComponent,
    GasEntryDetailsComponent,
  ],
  providers: [ GasEntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
