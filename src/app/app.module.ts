import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyDGSdrAlnmRxGQwhSe5y3oxUp5lxQr2s_I',
});

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    ResultsComponent,
    DashboardComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing,
    googleMapsCore,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGSdrAlnmRxGQwhSe5y3oxUp5lxQr2s_I'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
