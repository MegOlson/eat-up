import { Component, OnInit , Input} from '@angular/core';
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
  users: FirebaseListObservable<any[]>
  fullImagePath: string;
  update: boolean = false;
  @Input() selectedUser;
  subUsers;


  constructor(private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.users = this.userAuthService.getUsers();
    this.users.subscribe(data => {
      this.subUsers = data;
    })
    this.fullImagePath = '../../assets/images/user.png';
    // this.favorites = this.userAuthService.getFavorites();
  //   if (this.selectedUser.image === ""){
  //   return this.fullImagePath = '../../assets/images/user.png';
  // } else {
  //   return this.fullImagePath = '../../assets/images/' + this.selectedUser.image;
  //   }
  }

  updateButtonClicked(){
    this.update = true;
  }

  // beginRemovingItem(favoriteToDelete, currentUser) {
  //   this.userAuthService.removeFavoriteItem(favoriteToDelete, currentUser);
  // }

  saveButtonClicked(){
    this.update = false;
  }

  // addPhoto(image: string){
  //   this.selectedUser.image += image;
  // }

}
