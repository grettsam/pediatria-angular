import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Temas } from 'src/app/interfaces/temas';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router, private RutasService: RutasService) {}

  ngOnInit(): void {}
  encontrados: any[] = [];
  bandera: boolean = false;
  buscado = { nombre: '' };

  searchText(valor: string) {
    this.encontrados = [];
    valor = valor.trim().toLowerCase();

    if (valor.length > 2) {
      // this.bandera = false;
      this.RutasService.rutas.map((ruta: any) => {
        if (ruta.nombre.toLowerCase().includes(valor)) {
          this.encontrados.push(ruta);
          // this.bandera = true;
        }
        ruta.autor.forEach((element: string) => {
          if (element.toLowerCase().includes(valor)) {
            this.encontrados.push(ruta);
            // this.bandera = true;
          }
        });
      });
    }

    // if (this.encontrados.length > 6) {
    //   this.encontrados = this.encontrados.slice(0, 5);
    // }
  }

  buscar(valor: string) {
    let bandera = false;
    valor = valor.trim().toLowerCase();
    this.encontrados.map((encontrado) => {
      if (encontrado.nombre.toLowerCase().trim() == valor) {
        this.router.navigateByUrl(encontrado.ruta);
        bandera = true;
      }
    });
    if (!bandera) {
      this.RutasService.buscado(valor);
      this.router.navigate(['/search/' + valor]);
      // this.router.navigateByUrl(`/search/${valor}`);
    }
  }
}
