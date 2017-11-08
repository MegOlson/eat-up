import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../user-details.model';
import { UserAuthService } from '../user-auth.service';
import { GooglePlacesService } from '../google-places.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fullimagePath: string;
  update: boolean = false;
  constructor() { }

  ngOnInit() {
    // this.fullImagePath = Something?!?!?!?!
  }

  updateButtonClicked(){
    this.update = true;
  }

  saveButtonClicked(){
    this.update = false;
  }

}
