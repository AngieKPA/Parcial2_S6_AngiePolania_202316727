import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AerolineaModule } from './aerolinea/aerolinea.module';
import { VueloComponent } from './vuelo/vuelo.component';
import { HttpClientModule } from '@angular/common/http';
import { AerolineaModule_1 as AerolineaModule } from "./aerolinea/aerolinea.module";
import { AerolineaListarComponent } from "./aerolinea/aerolinea-listar/aerolinea-listar.component";

@NgModule({
  declarations: [	
    AppComponent,
      VueloComponent
  imports: [
    BrowserModule,
    AppRoutingModule,
    AerolineaModule,
    HttpClientModule,
    AerolineaModule_1
] HttpClientModule,
    AerolineaListarComponent
],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
