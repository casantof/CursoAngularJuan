import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importamos el modulo de Angular para hacer peticiones http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Importamos el modulo de Angular para hacer peticiones http
    HttpClientModule,
    // Agregamos el modulo share
    SharedModule,
    // Agegamos el modulo de gifs
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
