import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular'; // Agrega Animation y AnimationController

@Component({
  selector: 'app-usuario',
  templateUrl: 'usuario.page.html',
  styleUrls: ['usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  username: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private animationCtrl: AnimationController // Inyecta AnimationController
  ) {}

  ngOnInit() {
    // Recupera el nombre de usuario de los parámetros de la ruta
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['username']) {
        this.username = params['username'];
      }
    });
  }

  ionViewDidEnter() {
    const usuarioCard = document.querySelector('.usuario-card');
  
    if (usuarioCard) {
      // Creamos una animación
      const animation: Animation = this.animationCtrl.create()
        .addElement(usuarioCard) // Elemento a animar
        .duration(500) // Duración en milisegundos
        .fromTo('transform', 'translateX(100%)', 'translateX(0)'); // De derecha a izquierda
  
      // Ejecutamos la animación
      animation.play();
    }
  }
  

  solicitarViaje() {
    // Lógica para solicitar un viaje
  }

  unirseViaje() {
    // Lógica para solicitar un viaje
  }
}

