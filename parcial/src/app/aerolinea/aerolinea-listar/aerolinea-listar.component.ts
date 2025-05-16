import { Component, OnInit } from '@angular/core';
import { AerolineaService } from '../Aerolinea.service';
import { Aerolinea } from '../Aerolinea';

@Component({
  selector: 'app-aerolinea-listar',
  templateUrl: './aerolinea-listar.component.html',
  styleUrls: ['./aerolinea-listar.component.css']
})
export class AerolineaListarComponent implements OnInit {

  constructor(private aerolineaService: AerolineaService) { }

  aerolineas: Array<Aerolinea> = [];


  ngOnInit() :void{
    this.getAerolineas();
  }


   getAerolineas(): void {
    this.aerolineaService.getAerolineas().subscribe((aerolineas) => {
      this.aerolineas = aerolineas;
    });
  }
}
