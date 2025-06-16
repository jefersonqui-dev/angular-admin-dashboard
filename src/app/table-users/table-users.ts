import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-users',
  imports: [CommonModule],
  templateUrl: './table-users.html',
  styleUrl: './table-users.css'
})
export class TableUsers {
  usuario = [{id : 1, nombre : 'jeferson quiguantar', correo: 'jeffersonquiguantar@gmail.com'},
             {id : 2, nombre: 'Maria Camila', correo: 'mariac@gmail.com'},
             {id : 3, nombre: 'Alejandra ibañez', correo: 'alejaib@gmail.com'},
             {id : 4, nombre: 'Daniela Tobar', correo: 'dtobar@gmail.com'}
  ];
}
