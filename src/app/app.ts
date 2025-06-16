import { Component } from '@angular/core';
import { TableUsers } from "./table-users/table-users";
import { TableAreas } from './table-areas/table-areas';
import { ForumularioUsuario } from "./forumulario-usuario/forumulario-usuario";

@Component({
  selector: 'app-root',
  imports: [TableUsers, TableAreas, ForumularioUsuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '04-lab-comp';
}
