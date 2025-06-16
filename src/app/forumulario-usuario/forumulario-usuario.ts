import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-forumulario-usuario',
  imports: [FormsModule],
  templateUrl: './forumulario-usuario.html',
  styleUrl: './forumulario-usuario.css'
})
export class ForumularioUsuario {

   
  usuario = {
    nombre: '',
    correo: ''
  }

  contador = 0;
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

  enviar(){
    console.log('Datos enviados: ', this.usuario);
  }
}
