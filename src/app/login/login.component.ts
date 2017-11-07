import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../user-details.model';
import { UserAuthService } from '../user-auth.service';
import { GooglePlacesService } from '../google-places.service';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserAuthService, AngularFireAuth]
})
export class LoginComponent implements OnInit {

  constructor(public authService: UserAuthService,) { }

  ngOnInit() {
  }

  logIn(
    email: string,
    password: string
  ) {
    this.authService.signIn(email, password);
   }

}
