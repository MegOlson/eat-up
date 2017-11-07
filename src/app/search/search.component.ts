import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user-details.model';
import { GooglePlacesService } from '../google-places.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
