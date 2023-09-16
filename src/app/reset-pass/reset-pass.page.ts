import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: 'reset-pass.page.html',
  styleUrls: ['reset-pass.page.scss'],
})
export class ResetPassPage {

  constructor(private router: Router) {}

  resetPassword() {
    // Aquí puedes agregar la lógica para enviar un correo de restablecimiento de contraseña
    // y luego redirigir al usuario a la página de inicio de sesión
    // En este ejemplo, simplemente redirigimos al usuario a la página de inicio de sesión (login)
    this.router.navigate(['/login']);
  }
}
