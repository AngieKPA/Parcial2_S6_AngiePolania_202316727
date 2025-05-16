import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineaListarComponent } from './aerolinea-listar/aerolinea-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AerolineaListarComponent],
  exports: [AerolineaListarComponent]
})
export class AerolineaModule { }
