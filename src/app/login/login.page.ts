import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials !: FormGroup;
  randomNumber !: number;
  audio: any;
  

  playMusic2 (){
    this.audio.play();
  }

  



  generateRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
  }
  

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    
  ) {
    this.audio = new Audio();
    this.audio.src ='assets/music/rock.mp3'
   }

  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }

  get nombre(){
    return this.credentials.get('nombre');
  }

  get edad(){
    return this.credentials.get('edad');
  }

  get telefono(){
    return this.credentials.get('telefono');
  }

  ngOnInit() {
    this.credentials = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]],
      nombre: ['',[Validators.required]],
      edad: ['',[Validators.required]],
      telefono: ['',[Validators.required, Validators.minLength(9)]]
    })
  }

  async register (){
    console.log(this.credentials.value);

    const user = await this.authService.register(this.credentials.value);

    if (user) {
      console.log("ok");
      this.router.navigateByUrl("/home");

    } else {
      console.log("No se puede papito")
    }
  }

  async login (){
    console.log(this.credentials.value);

    const user = await this.authService.login(this.credentials.value);

    if (user) {
      console.log("Tamos");
      this.router.navigateByUrl("home");
    } else {
      console.log("Registrese mi rey");
    }
  }

  goToHome (){
    this.router.navigateByUrl('home');
  }

}
