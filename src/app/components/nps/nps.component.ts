import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Calificar, LoginResponse } from 'src/app/api/Interfases/Calificaciones';
import { NPSService } from 'src/app/api/nps.services';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nps',
  standalone: true,
  imports: [MatFormFieldModule, ToolbarComponent],
  templateUrl: './nps.component.html',
  styleUrl: './nps.component.css'
})
export class NpsComponent {
  currentUser: any;

  constructor(private servicenps: NPSService, private router: Router){}

  obtenerValor(valorSeleccionado: string) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser) as LoginResponse;
    } else {
      // Handle case where no user data is found in localStorage
      this.router.navigate(['/login']);
    }
    const Calificacion: Calificar = {
      usuarioID: this.currentUser.usuarioID,
      Calificar: parseInt(valorSeleccionado)
    };

    this.servicenps.insertarCalificacion(Calificacion)
    this.servicenps.insertarCalificacion(Calificacion).subscribe({
      next: (response: string) => {
        alert('Gracias por calificarnos')
      },
      error: (error) => {
        console.log(error);
        
        alert(error.error ? error.error.text : 'Error no controlado');
      }
    });
    
  }}
