import { Component } from "@angular/core";
import { UserAuthService } from "./user-auth.service";
import { Router } from "@angular/router";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AngularFireAuth, UserAuthService]
})
export class AppComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: UserAuthService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate([""]);
  }
}
