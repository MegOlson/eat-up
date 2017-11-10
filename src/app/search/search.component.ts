import { Component } from "@angular/core";
import { UserDetails } from "../user-details.model";
import { GooglePlacesService } from "../google-places.service";
import { UserAuthService } from "../user-auth.service";
import { Router } from "@angular/router";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  providers: [GooglePlacesService]
})
export class SearchComponent {
  restaurants: any[];
  users: FirebaseListObservable<any[]>;
  searchError: string;

  constructor(
    private googlePlacesService: GooglePlacesService,
    private userAuthService: UserAuthService
  ) {}

  getRestaurants(city: string, foodType: string) {
    this.searchError = "";
    if (city && foodType) {
      this.googlePlacesService
        .getByCityAndType(city, foodType)
        .subscribe(response => {
          this.restaurants = response.json().results;
        });
    } else {
      if (!city && !foodType) {
        this.searchError = "Please provide search options.";
      } else if (!foodType) {
        this.searchError = "Please provide food type.";
      } else {
        this.searchError = "Please provide city.";
      }
    }
  }
}
