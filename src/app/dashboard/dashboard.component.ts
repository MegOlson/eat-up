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
  fullImagePath: string;
  users: FirebaseListObservable<any[]>
  update: boolean = false;
  @Input() selectedUser;
  subUsers;
  currentUserImageUpdate;

  constructor(private userAuthService: UserAuthService) { }

  ngOnInit() {
    this.users = this.userAuthService.getUsers();
    this.users.subscribe(data => {
      this.subUsers = data;
    })
    this.fullImagePath = '../../assets/images/user.png';
    console.log(this.currentUserImageUpdate);
    // this.favorites = this.userAuthService.getFavorites();
    if (this.currentUserImageUpdate.image.match(" ") ){
    return this.fullImagePath = '../../assets/images/user.png';
  } else {
    return this.fullImagePath = '../../assets/images/' + this.currentUserImageUpdate.image;
    }
  }

  removeItem(userToUpdate, favoriteToDelete) {
    userToUpdate.favorites.splice(favoriteToDelete, 1);
    this.userAuthService.addToFavoritesList(userToUpdate);
  }

  updateButtonClicked(){
    this.update = true;
  }

  savePhotoButtonClicked(image: string, userToUpdate: UserDetails){
    this.update = false;
    this.currentUserImageUpdate = userToUpdate;
    userToUpdate.image = image.slice(12, image.length);
    this.userAuthService.updateUserImage(userToUpdate);
  }

}
