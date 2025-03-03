import {Component} from '@angular/core';

import {GestionPersonasService} from './../../servicios/gestion-personas.service';

export interface IPersona {
  id: string;
  nombre: string;
  apellido: string;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public gestionPersonas: GestionPersonasService) {}
}
