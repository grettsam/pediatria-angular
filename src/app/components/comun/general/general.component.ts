import { Component, OnInit } from '@angular/core';

interface datos {
  id: number;
  nombre: string;
  url: string;
  icon?: string;
  svg?: string;
}

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  generales: Array<datos> = [
    {
      id: 1,
      nombre: 'BRONCOPULMONAR',
      url: '/broncopulmonar',
      icon: 'fas fa-lungs',
    },
    {
      id: 2,
      nombre: 'CARDIOLOGÍA',
      url: '/cardiologia',
      icon: 'fas fa-heartbeat',
    },
    {
      id: 3,
      nombre: 'ENDOCRINOLOGÍA',
      url: '/endocrinologia',
      svg: '../assets/icon/endocrinologia.svg',
    },
    {
      id: 4,
      nombre: 'GASTROENTEROLOGÍA',
      url: '/gastroenterologia',
      svg: '../assets/icon/estomago.svg',
    },
    { id: 5, nombre: 'GENETICA', url: '/genetica', icon: 'fas fa-dna' },
    {
      id: 6,
      nombre: 'INFECTOLOGÍA',
      url: '/infectologia',
      icon: 'fas fa-head-side-mask',
    },
    {
      id: 7,
      nombre: 'INMUNOLOGÍA Y REUMATOLOGÍA',
      url: '/inmunologia-y-reumatologia',
      icon: 'fas fa-shield-virus',
    },
    {
      id: 8,
      nombre: 'NEFROLOGÍA',
      url: '/nefrologia',
      svg: '../assets/icon/rinon.svg',
    },
    { id: 9, nombre: 'NEUROLOGÍA', url: '/neurologia', icon: 'fas fa-brain' },
    { id: 10, nombre: 'NUTRICIÓN', url: '/nutricion', icon: 'fas fa-utensils' },
    {
      id: 11,
      nombre: 'PSIQUIATRÍA',
      url: '/psiquiatria',
      svg: '../assets/icon/psico.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
