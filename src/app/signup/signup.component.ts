import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user-details.model';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
