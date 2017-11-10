import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GooglePlacesService {
  constructor(private http: Http) {}

  getByCityAndType(city: string, foodType) {
    return this.http.get(
      "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" +
        foodType +
        "+in+" +
        city +
        "&key=AIzaSyDGSdrAlnmRxGQwhSe5y3oxUp5lxQr2s_I"
    );
  }
}
