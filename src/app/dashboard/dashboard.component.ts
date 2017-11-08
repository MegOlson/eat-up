import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from '../user-details.model';
import { UserAuthService } from '../user-auth.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserAuthService]
})
export class DashboardComponent implements OnInit {
  favorites: FirebaseListObservable<any[]>;
  fullImagePath: string;
  update: boolean = false;

  constructor(private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.fullImagePath = '../../assets/images/user.png'; 
    // this.favorites = this.userAuthService.getFavorites();
  }

  updateButtonClicked(){
    this.update = true;
  }

  saveButtonClicked(){
    this.update = false;
  }

}
