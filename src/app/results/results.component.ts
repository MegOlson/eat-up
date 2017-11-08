import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from '../user-details.model';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [UserAuthService]
})
export class ResultsComponent {
  @Input() childRestaurants;
  users: FirebaseListObservable<any[]>
  zoom: number = 12;
  subUsers;
  constructor(private userAuthService: UserAuthService) { }

  ngOnInit(){
    this.users = this.userAuthService.getUsers();
    this.users.subscribe(data => {
      this.subUsers = data;
      console.log("subUsers", this.subUsers)
    })
  }

  addFavorite(chosenRestaurant, userToUpdate) {
    userToUpdate.favorites.push(chosenRestaurant);
    this.userAuthService.addToFavoritesList(userToUpdate);
  }

}
