import {Injectable} from '@angular/core';
import {identity} from 'rxjs';
export interface IPersona {
  id: string;
  nombre: string;
  apellido: string;
}
@Injectable({providedIn: 'root'})
export class GestionPersonasService {
  personas: IPersona[] = [
    {id: 'aa', nombre: 'Aitor', apellido: 'Arana'},
    {id: 'sr', nombre: 'Sara', apellido: 'Ruiz'},
    {id: 'mo', nombre: 'Miren', apellido: 'Ojer'}
  ];
  constructor() {}
  getPersonas() {
    return this.personas;
  }
  insertarPersona(id: string, nombre: string, apellido: string) {
    let nuevaPersona: IPersona = {
      id: id,
      nombre: nombre,
      apellido: apellido,
    };
    this.personas.push(nuevaPersona);
    console.log(this.personas);
  }
  borrarPersona(id: string) {
    let personaEncontrada: IPersona = this.personas.find(function(cadaPersona) {
      return cadaPersona.id == id
    });
    console.log(personaEncontrada);

    let indice: number = this.personas.indexOf(personaEncontrada);
    console.log(indice);

    this.personas.splice(indice, 1);
    console.log(this.personas);
  }
}
