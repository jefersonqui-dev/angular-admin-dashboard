import { Component } from '@angular/core';
import { TableUsers } from "./table-users/table-users";
import { TableAreas } from './table-areas/table-areas';

@Component({
  selector: 'app-root',
  imports: [TableUsers,TableAreas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = '04-lab-comp';
}
