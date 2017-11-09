import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UserDetails } from "../user-details.model";
import { UserAuthService } from "../user-auth.service";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [UserAuthService]
})
export class DashboardComponent implements OnInit {
  favorites: FirebaseListObservable<any[]>;
  fullImagePath: string;
  users: FirebaseListObservable<any[]>;
  update: boolean = false;
  @Input() selectedUser;
  subUsers;
  currentUserImageUpdate;

  constructor(private userAuthService: UserAuthService) {}

  ngOnInit() {
    this.users = this.userAuthService.getUsers();
    this.users.subscribe(data => {
      this.subUsers = data;
    });
    this.fullImagePath = "../../assets/images/user.png";
  }

  removeItem(userToUpdate, favoriteToDelete) {
    userToUpdate.favorites.splice(favoriteToDelete, 1);
    this.userAuthService.updateUserInDatabase(userToUpdate);
  }

  updateButtonClicked() {
    this.update = true;
  }

  savePhotoButtonClicked(image: any, userToUpdate: UserDetails) {
    const canvas = document.createElement("canvas");
    canvas.setAttribute("width", "200px");
    canvas.setAttribute("height", "200px");
    const context = canvas.getContext("2d");

    if (image.files && image.files[0]) {
      const FR = new FileReader();
      FR.onload = (e: any) => {
        const img = new Image();
        img.addEventListener("load", () => {
          context.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            0,
            0,
            canvas.width,
            canvas.height
          );
          userToUpdate.image = canvas.toDataURL();
          this.userAuthService.updateUserInDatabase(userToUpdate);
          this.currentUserImageUpdate = userToUpdate;
        });
        img.src = e.target.result;
      };
      FR.readAsDataURL(image.files[0]);
    }
    this.update = false;
    if (!this.currentUserImageUpdate.image) {
      return (this.fullImagePath = "../../assets/images/user.png");
    } else {
      return (this.fullImagePath = this.currentUserImageUpdate.image);
    }
  }
}
