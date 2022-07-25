import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './Heroes/Heroes.module';
import { Contadormodule } from './contador/Contador.Module';



@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    Contadormodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
