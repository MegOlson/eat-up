import { Component, OnInit } from "@angular/core";
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

    this.router.events.subscribe((event: any) => {
      document.body.classList.remove("signup-page", "login-page", "dashboard-page", "welcome-page");

      if (event.url.startsWith("/signup")) {
        document.body.classList.add("signup-page");
      } else if (event.url.startsWith("/login")) {
        document.body.classList.add("login-page");
      } else if (event.url.startsWith("/dashboard")) {
        document.body.classList.add("dashboard-page");
      } else if (event.url.startsWith("")) {
        document.body.classList.add("welcome-page");
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate([""]);
  }
}
