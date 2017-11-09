import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { UserDetails } from "./user-details.model";

@Injectable()
export class UserAuthService {
  user: Observable<firebase.User>;
  userDetailList: FirebaseListObservable<any[]>;
  createUserError: string;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private database: AngularFireDatabase
  ) {
    this.user = afAuth.authState;
    this.userDetailList = database.list("users");
  }

  getUsers() {
    return this.userDetailList;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  getUserById(userId: string) {
    return this.database.object("/users/" + userId);
  }

  getUserEmail() {
    return firebase.auth().currentUser.email;
  }

  createUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(respond => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: firstName + " " + lastName,
          photoURL: ""
        });
        const newUser: UserDetails = new UserDetails(email);
        newUser.userId = user.uid;
        this.addUser(newUser);
      })
      .then(() => firebase.auth().signOut())
      .catch(error => {
        console.log(this);
        this.createUserError = error.message;
        console.log(error.message, "service");
      });
  }

  addUser(newUserDetails: UserDetails) {
    this.userDetailList.push(newUserDetails);
  }

  signIn(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(respond => {
        this.router.navigate([""]);
      })
      .catch(error => {
        this.createUserError = error.message;
      });
  }

  googleSignIn() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        // var token = result.credential.accessToken;
        const googleUser = result.user;

        const newUser: UserDetails = new UserDetails(googleUser.email);
        let userList;

        this.getUsers().subscribe(data => {
          userList = data;
          console.log(userList);
          const findUser = user => {
            return user.email === newUser.email;
          };
          console.log(userList.find(findUser));
          if (!userList.find(findUser)) {
            this.addUser(newUser);
          }
        });
      });
  }

  updateUserInDatabase(userToUpdate) {
    const userFromFirebase = this.getUserById(userToUpdate.$key);
    userFromFirebase.update({
      email: userToUpdate.email,
      favorites: userToUpdate.favorites,
      image: userToUpdate.image
    });
  }

  returnErrors(){
    return this.createUserError;
  }
}
