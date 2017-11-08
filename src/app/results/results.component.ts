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
    })
  }

  addFavorite(chosenRestaurant, chosenRestaurantAddress, userToUpdate) {
    userToUpdate.favorites.push(chosenRestaurant);
    // userToUpdate.addresses.push(chosenRestaurantAddress);
    this.userAuthService.addToFavoritesList(userToUpdate);
  }


// Replace previous method in UserAuth Service
  // addToFavoritesList(userToUpdate) {
  //   let userFromFirebase= this.getUserById(userToUpdate.$key);
  //   userFromFirebase.update({ email: userToUpdate.email,
  //                         favorites: userToUpdate.favorites,
  //                         image: userToUpdate.image,
  //                         addresses: userToUpdate.addresses
  //   });
  // }

// Replace previous method in Dashbaord Component
  // removeItem(userToUpdate, favoriteToDelete, addressToDelete) {
  //   userToUpdate.favorites.splice(favoriteToDelete, 1);
  //   userToUpdate.addresses.splice(addressToDelete, 1);
  //   this.userAuthService.addToFavoritesList(userToUpdate);
  // }

  // Pass through address in Dashboard html

}
