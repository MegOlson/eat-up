import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../user-details.model';
import { UserAuthService } from '../user-auth.service';
import { GooglePlacesService } from '../google-places.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
