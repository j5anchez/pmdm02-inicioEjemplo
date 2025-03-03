import { GestionPersonasService } from './../../servicios/gestion-personas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage implements OnInit {
  id: string;
  nombre: string;
  apellido: string;

  constructor(private gestionPersonas:GestionPersonasService) { }

  ngOnInit() {
  }

  onClick() {

    // Insertar
    this.gestionPersonas.insertarPersona(this.id, this.nombre, this.apellido);
  }

}
