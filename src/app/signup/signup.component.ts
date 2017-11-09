import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { UserDetails } from '../user-details.model';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  providers: [UserAuthService, AngularFireAuth]
})

export class SignupComponent implements OnInit {
  user: Observable<firebase.User>;
  emailError: string;
  passwordError: string;
  userError: string;

  constructor(
    private authService: UserAuthService,
    private route: ActivatedRoute,
    private location: Location,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = afAuth.authState;

  }

  ngOnInit() {}

  submitSignUpForm(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    if(!this.checkEmail(email)){
      this.emailError = "Invalid Email!"
    } else if (!this.checkPassword(password, confirmPassword)){
      this.passwordError = "Passwords do not match!"
    }  else {
      this.authService.createUser(email, password, firstName, lastName);
      if (this.signupAnyError) {
      }else {
        this.router.navigate([""]);
      }
    }
  }

  checkEmail(
    email: string,
  ) {
    if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      return true;
    } else {
      return false;
    }
   }

  checkPassword(password: string, confirmPassword: string){
    if(password === confirmPassword){
      return true;
    } else {
      return false;
    }
  }

  signupAnyError(){
    if(this.authService.createUserError){
      this.userError = this.authService.createUserError;
      return true;
    } else {
      return false;
    }
  }

}
