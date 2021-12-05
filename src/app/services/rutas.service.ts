import { Injectable, Input, Output } from '@angular/core';
import { Temas } from '../interfaces/temas';

@Injectable({
  providedIn: 'root',
})
export class RutasService {

  nombre: any[] = [];
  autor: any[] = [];

  constructor() {}

  rutas: Temas[] = [
    {
      general: '',
      nombre: 'Criterios de ingreso servicio de pediatría HGGB',
      ruta: '/criterios-de-ingreso',
      autor: [],
    },
    {
      general: '',
      nombre: 'Reanimación cardiopulmonar en pediatría',
      ruta: '/reanimacion-cardiopulmonar',
      autor: ['Carlos Figueroa'],
    },
    {
      general: '',
      nombre: 'Protocolo analgesia y sedación',
      ruta: '/analgesia-y-sedacion',
      autor: ['Margot Bastías Andrades'],
    },
    {
      general: '',
      nombre: 'Arsenal farmacológico HGGB',
      ruta: '/analgesia-y-sedacion',
      autor: [],
    },
    {
      general: '',
      nombre: 'Examenes de laboratorio disponibles en HGGB',
      ruta: '/examenes-de-laboratorio',
      autor: [],
    },
    {
      nombre: 'Broncopulmonar',
      ruta: '/broncopulmonar',
      autor: [],
    },
    {
      general: 'broncopulmonar',
      nombre: 'Oxigenoterapia',
      ruta: '/broncopulmonar/oxigenoterapia',
      autor: ['Bernardo Bancalari M.'],
    },
    {
      general: 'broncopulmonar',
      nombre: 'Bronquiolitis',
      ruta: '/broncopulmonar/bronquiolitis',
      autor: ['Javier Cepeda S.', 'Daniel Zenteno A.'],
    },
    {
      general: 'broncopulmonar',
      nombre: 'Exacerbación moderada a severa de asma bronquial',
      ruta: '/broncopulmonar/asma-bronquial',
      autor: ['Javier Cepeda S.', 'Daniel Zenteno A.'],
    },
    {
      general: 'broncopulmonar',
      nombre: 'Neumonía Complicada',
      ruta: '/broncopulmonar/neumonia-complicada',
      autor: ['Camila Jerez Ríos'],
    },
    {
      general: 'broncopulmonar',
      nombre: 'Neumonía Recurrente',
      ruta: '/broncopulmonar/neumonia-recurrente',
      autor: ['Javier Cepeda S.', 'Claudia Fuentes.'],
    },
    {
      general: 'broncopulmonar',
      nombre: 'Fibrosis Quística',
      ruta: '/broncopulmonar/fibrosis-quistica',
      autor: ['Daniel Zenteno', 'Rubén Peña', 'Fernanda Bello'],
    },
    {
      general: 'broncopulmonar',
      nombre: 'ALTE / BRUE',
      ruta: '/broncopulmonar/alte-brue',
      autor: ['Daniel Zenteno', 'Javier Cepeda'],
    },
    {
      general: 'cardiologia',
      nombre: 'Interpretación simplificada del electrocardiograma Pediátrico',
      ruta: '/cardiologia/electrocardiograma-pediatrico',
      autor: ['Equipo Cardiología Pediátrica'],
    },
    {
      general: 'cardiologia',
      nombre: 'Cardiopatías Congénitas',
      ruta: '/cardiologia/cardiopatias-congenitas',
      autor: [],
    },
    {
      general: 'cardiologia',
      nombre: 'Insuficiencia cardiaca en pediatría',
      ruta: '/cardiologia/insuficiencia-cardiaca',
      autor: [],
    },
    {
      general: 'cardiologia',
      nombre: 'Shock Cardiogénico',
      ruta: '/cardiologia/shock-cardiogenico',
      autor: [],
    },
  ];

  buscado(valor: string) {
    this.autor = [];
    this.rutas.map((ruta) => {
      ruta.autor.forEach((autor) => {
        if (autor.toLowerCase().includes(valor)) {
          this.autor.push(ruta);
        }
      });
    });
    return this.autor
  }
}
