import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  audio :any;

  goToItem (){
    this.router.navigateByUrl('items');
  }

  goToLogin () {
    this.authService.logout();
    this.router.navigateByUrl('')
  }

  playMusic (){
    this.audio.play();
  }
  
  pauseMusic(){
    this.audio.pause();
  }

  stopMusic(){
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  constructor(
    private router : Router,
    private authService: AuthService
  ) { }

  goTo (destiny:string){
    this.router.navigateByUrl(destiny);
  }

  logout () {
    this.authService.logout();
    this.router.navigateByUrl('login')
  }

  goToPerfil(){
    this.router.navigateByUrl('perfil');
  }

}
