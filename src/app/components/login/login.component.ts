import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginResponse } from 'src/app/api/Interfases/Calificaciones';
import { NPSService } from 'src/app/api/nps.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
}) 
export class LoginComponent {

  loginObject: LoginData
  constructor(private httpService: NPSService, private router: Router){
 this.loginObject = new LoginData()
  }

  OnLogin() {
    this.httpService.login(this.loginObject).subscribe({
      next: (res: LoginResponse) => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        const perfil = res.perfil;
        
        if (perfil === 'Administrador') {
          this.router.navigate(['/nps']);
        } else if (perfil === 'Votante') {
          this.router.navigate(['/calificarNPS']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      error: (err) => {
        alert(err.error ? err.error.error : 'Error no controlado');
      }
    });
  }
  
}

export class LoginData{
  NombreUsuario: string;
  Contrasena:string;
  constructor(){
    this.NombreUsuario = '';
    this.Contrasena = ''
  }
}



