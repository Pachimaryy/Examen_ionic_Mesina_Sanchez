import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth : Auth
  ) { }

  async register ({email,password,nombre,edad,telefono}:any){
    try {
      console.log("Creando Usuario",email,nombre,edad,telefono)
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password, 
      );
      return user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async login ({email,password}:any){
    try {
      console.log("Intentando crear usuario", email);
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  logout () {
    return signOut(this.auth);
  }
}
