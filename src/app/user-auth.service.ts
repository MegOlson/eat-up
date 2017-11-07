import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";

import { UserDetails } from './user-details.model';


@Injectable()
export class UserAuthService {
  user: Observable<firebase.User>;
  createUserError: string;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  createUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(respond) {
        let user = firebase.auth().currentUser;
        return user.updateProfile({
          displayName: firstName + " " + lastName,
          photoURL: ""
        });
      })
      .then(() => firebase.auth().signOut())
      // .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
      .catch((error) => {
        this.createUserError = error.message;
      });

  }

  signIn(
    email: string,
    password: string
  ) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((respond) => {
      this.router.navigate([""]);
    })
    .catch((error) => {
      this.createUserError = error.message;
    });
   }

   googleSignIn() {
       this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
     }
}
