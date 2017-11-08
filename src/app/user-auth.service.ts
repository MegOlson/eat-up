import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { UserDetails } from './user-details.model';

@Injectable()
export class UserAuthService {
  user: Observable<firebase.User>;
  users: FirebaseListObservable<any[]>;
  currentUser;

  constructor(public afAuth: AngularFireAuth, private database: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.users = database.list('users');
  }

  getUsers() {
    return this.users;
  }

  // firebase.auth().currentUser.email
  // this.database.object(users/0)
  addToFavoritesList(chosenRestaurant) {
    console.log(this.users);
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
      .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
      .catch(function(error) {
        let errorCode = error;
        let errorMessage = error.message;
      });

  }

  signIn(
    email: string,
    password: string
  ) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      let errorCode = error;
      let errorMessage = error.message;
    });
   }

   googleSignIn() {
       this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
     }


}
