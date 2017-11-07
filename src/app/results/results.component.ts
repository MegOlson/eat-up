import { Component, Input } from '@angular/core';
import { UserDetails } from '../user-details.model';
import { GooglePlacesService } from '../google-places.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() childRestaurants;

  zoom: number = 12;

  constructor() { }

}
