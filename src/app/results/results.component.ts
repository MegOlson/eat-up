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
  numbers: string[] = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
  constructor() { }

}
