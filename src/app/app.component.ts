import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd-buyAndSell';

  constructor(public auth: AngularFireAuth) { }
  
  signInClicked() {
    this.auth.signInWithPopup(new GoogleAuthProvider())
  }

  signOutClicked() {
    this.auth.signOut();
  }
}
