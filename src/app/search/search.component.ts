import { Component } from '@angular/core';
import { UserDetails } from '../user-details.model';
import { GooglePlacesService } from '../google-places.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GooglePlacesService]
})
export class SearchComponent {
  restaurants: any[];
  constructor(private googlePlacesService: GooglePlacesService) { }

  getRestaurants(city: string, foodType: string) {
    this.googlePlacesService.getByCityAndType(city, foodType).subscribe(response => {
      this.restaurants = response.json().results;
    });
  }
}
