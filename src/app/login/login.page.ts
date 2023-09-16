import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Validar los campos de entrada antes de redirigir
    if (this.username.trim() !== '' && this.password.trim() !== '') {
      // Lógica de autenticación (simulada)
      // En un proyecto real, debes verificar las credenciales con un servicio de autenticación o una API.
      // Si la autenticación es exitosa, redirige al usuario a la página de usuario con el nombre de usuario en la URL.
      this.router.navigate(['/usuario'], { queryParams: { username: this.username } });
    }
  }
}
