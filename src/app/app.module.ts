import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConsoleCaptureModule } from 'console-capture';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConsoleCaptureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
