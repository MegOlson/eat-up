import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../user-details.model';
import { UserAuthService } from '../user-auth.service';
import { GooglePlacesService } from '../google-places.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
