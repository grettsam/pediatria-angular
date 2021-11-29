import { Component, OnInit } from '@angular/core';

interface datos {
  id: number;
  nombre: string;
  url: string;
  icon?: string;
}
// TODO buscar un icono por cada uno de los generales
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  generales: Array<datos> = [
    { id: 1, nombre: 'BRONCOPULMONAR', url: '/broncopulmonar' },
    { id: 2, nombre: 'CARDIOLOGÍA', url: '/cardiologia' },
    { id: 3, nombre: 'ENDOCRINOLOGÍA', url: '/endocrinologia' },
    { id: 4, nombre: 'GASTROENTEROLOGÍA', url: '/gastroenterologia' },
    { id: 5, nombre: 'GENETICA', url: '/genetica' },
    { id: 6, nombre: 'INFECTOLOGÍA', url: '/infectologia' },
    {
      id: 7,
      nombre: 'INMUNOLOGÍA Y REUMATOLOGÍA',
      url: '/inmunologia-y-reumatologia',
    },
    { id: 8, nombre: 'NEFROLOGÍA', url: '/nefrologia' },
    { id: 9, nombre: 'NEUROLOGÍA', url: '/neurologia' },
    { id: 10, nombre: 'NUTRICIÓN', url: '/nutricion' },
    { id: 11, nombre: 'PSIQUIATRÍA', url: '/psiquiatria' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
