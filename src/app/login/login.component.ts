import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserDetails } from "../user-details.model";
import { UserAuthService } from "../user-auth.service";
import { GooglePlacesService } from "../google-places.service";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [UserAuthService, AngularFireAuth]
})
export class LoginComponent implements OnInit {
  loginError: string;
  currentRoute: string = this.router.url;
  constructor(private authService: UserAuthService, private router: Router) {}

  ngOnInit() {}

  logIn(email: string, password: string) {
    this.authService.signIn(email, password);
  }

  googleLogIn() {
    this.authService.googleSignIn();
    this.router.navigate([""]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate([""]);
  }

  anyError() {
    if (this.authService.createUserError) {
      this.loginError = this.authService.createUserError;
      return true;
    } else {
      return false;
    }
  }
}
