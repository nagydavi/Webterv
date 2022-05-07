import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { KosarService } from '../services/kosar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  emailLog: string = '';

  constructor(private auth: AngularFireAuth,private afs: AngularFirestore, private kosarService: KosarService) { }

  login(email: string, password: string) {
    this.emailLog=email;
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    return this.auth.user;
  }

  logout() {
    return this.auth.signOut();
    
    
  }
  getEmail(){
    return this.emailLog;
  }

}

