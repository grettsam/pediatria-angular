import { Component, OnInit } from '@angular/core';

interface datos {
  id: number;
  nombre: string;
  url: string;
  icon?: string;
}

@Component({
  selector: 'app-particular',
  templateUrl: './particular.component.html',
  styleUrls: ['./particular.component.scss'],
})
export class ParticularComponent implements OnInit {
  particulares: Array<datos> = [
    {
      id: 1,
      nombre: 'Criterios de ingreso servicio de pediatría HGGB',
      url: '/criterios-de-ingreso',
    },
    {
      id: 2,
      nombre: 'Reanimación cardiopulmonar en pediatría',
      url: '/reanimacion-cardiopulmonar',
    },
    {
      id: 3,
      nombre: 'Protocolo analgesia y sedación',
      url: '/analgesia-y-sedacion',
    },
    {
      id: 4,
      nombre: 'EXAMENES DE LABORATORIO DISPONIBLES EN HGGB',
      url: '/examenes-de-laboratorio',
    },
    {
      id: 5,
      nombre: 'ARSENAL FARMACOLÓGICO HGGB',
      url: '/arsenal-farmacologico',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
