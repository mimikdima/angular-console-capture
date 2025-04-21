import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'
import { AngularConsoleCaptureModule } from 'angular-console-capture'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularConsoleCaptureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
