import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-areas',
  imports: [CommonModule],
  templateUrl: './table-areas.html',
  styleUrl: './table-areas.css'
})
export class TableAreas {
  areas = [
    {
      id: 1,
      nombre: 'Dessarrollo de Software',
      descripcion: 'Encargada de crear y mantener aplicaciones'
    },
    {
      id: 2,
      nombre: 'Infreaestructura',
      descripcion: 'Gestiona servidors, redes y sistemas'
    },
    {
      id: 3,
      nombre: 'Talento Humano',
      descripcion: 'Maneja procesos de personal y bienestar'
    },
    {
      id: 4,
      nombre: 'Finanzas',
      descripcion: 'Supervisa la contabilidad y presupuesto institucional'
    }];
}
