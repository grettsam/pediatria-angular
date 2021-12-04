import { Component, OnInit, OnChanges, Input, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  encontrados: string | null = '';
  autores: any = [];
  temas: any = [];
  busqueda: string = '';
  broncopulmonar: any = [];
  cardiologia: any = [];
  constructor(
    private route: ActivatedRoute,
    private RutasService: RutasService
  ) {
    this.broncopulmonar = this.RutasService.rutas.filter(
      (f) => f.general == 'broncopulmonar'
    );
    this.cardiologia = this.RutasService.rutas.filter(
      (f) => f.general == 'cardiologia'
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe((p: any) => {
      this.busqueda = p.elemento;
    });
  }

  ngDoCheck(): void {
    this.temas = [];
    this.autores = [];

  if(this.busqueda.length>2){
    this.RutasService.rutas.map((ruta) => {
      ruta.autor.forEach((autor) => {
        if (autor.toLowerCase().includes(this.busqueda)) {
          this.autores.push(ruta);
        }
      });
      if (ruta.nombre.toLowerCase().includes(this.busqueda)) {
        this.temas.push(ruta);
      }
    });
  }

    
  }
}
