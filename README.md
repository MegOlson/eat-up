# EatUp

## Description

![eat_up](https://user-images.githubusercontent.com/20192033/32675447-ce480fec-c60b-11e7-8414-ad99d7759453.png)

An Angular 2 Web Application that allows users to create an account and search for restaurants by cuisine type within a specified city.

User's can....

Sign In or create an new account

![signin_new_account](https://user-images.githubusercontent.com/20192033/32675475-df4f977e-c60b-11e7-9346-ae359214bfd1.png)

![new_account_screenshot](https://user-images.githubusercontent.com/20192033/32675462-d7089ebc-c60b-11e7-8159-8222b8c38e83.png)

Sign in with account information or Google

![login_screen_shot](https://user-images.githubusercontent.com/20192033/32675582-321d32f4-c60c-11e7-806a-7bf0a317bfc7.png)

Once signed in you can go to your dashboard, search for restaurants, or log out

![once_logged_in](https://user-images.githubusercontent.com/20192033/32675722-c93db4b0-c60c-11e7-8fe7-596fc17f1ab0.png)

While on the search page you search by food type and city

![sreach_screenshot](https://user-images.githubusercontent.com/20192033/32675478-e20656e2-c60b-11e7-946c-9a1fcf86a34b.png)

And a map and list of 20 restaurants be generated. By clicking the ```Love it``` button you will add the restaurant to your dashboard

![map_screenshot](https://user-images.githubusercontent.com/20192033/32675461-d6dff494-c60b-11e7-8ed5-99dfec8f0ea1.png)


While in your dashboard you can upload a photo from your personal computer and remove restaurants from your list.

![add_photo_screenshot](https://user-images.githubusercontent.com/20192033/32675445-ce16ccde-c60b-11e7-973c-44126e9915f5.png)

![dashboard_screenshot](https://user-images.githubusercontent.com/20192033/32675446-ce303548-c60b-11e7-9076-b08f5244267e.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Installation and Setup

* Clone Repository named _eat-up_
* Create a database using Firebase and import json named _sample-users.json_
* Run the following commands in terminal:
  * `$ npm install`
  * `$ bower install`
  * `$ ng build`
  * `$ ng serve`
* Visit [Firebase](https://firebase.google.com)
* Log in with Google credentials.
* Click get started button.
* Click Add Project button.
* In project name field enter ```eat-up```
* Click create project button.
* In terminal, in root directory, enter ```touch src/app/api-keys.ts```
* Open project with text editor of choice
* Back to the firebase page, click "Add firebase to your web app". A pop-up modal should appear on your screen.
* In your newly created api-keys.ts file add the following from the modal:
```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## User Stories

* User can create an account with a username and email.
* User can search for restaurants by cuisine type within a specified city and receive a list of 20 restaurants.
* User can view and interact with each restaurant on google map simulator.
* User can choose to save a restaurant to their favorite's list.
* User can view a list of their favorited restaurants.

## Technologies Used

* _HTML_
* _CSS_
* _Javascript/jQuery_
* _NPM_
* _Bower_
* _Bootstrap_
* _Angular2_
* _Firebase_

## Known Bugs 🐛🐛🐛

No known bugs

## Support and contact details

_Feel free to contact Megan at meganannetteolson@yahoo.com, Kristen at kristen.m.kulha@gmail.com, Elrey at elbelmonti@gmail.com, and Linda at SOMETHING_

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

Copyright (c) 2017 **Megan Olson, Kristen Kulha, Elrey Belmonti, Linda Luu**

<!-- Contributors START
Elrey_Belmonti ElreyB https://github.com/ElreyB code doc bug design tests
Megan_Olson MegOlson https://github.com/MegOlson code doc bug design tests
Linda_Luu tocodenow https://github.com/tocodenow code doc bug design tests
Kristen_Kulha kristenmarie https://github.com/kristenmarie code doc bug design tests
Contributors END -->
<!-- Contributors table START -->
| <img src="https://avatars.githubusercontent.com/ElreyB?s=100" width="100" alt="Elrey Belmonti" /><br />[<sub>Elrey Belmonti</sub>](https://github.com/ElreyB)<br />[💻](https://github.com/MegOlson/eat-up/commits?author=ElreyB) [📖](https://github.com/MegOlson/eat-up/commits?author=ElreyB) [🐛](https://github.com/MegOlson/eat-up/issues?q=author%3AElreyB) 🎨 [⚠️](https://github.com/MegOlson/eat-up/commits?author=ElreyB) | <img src="https://avatars.githubusercontent.com/MegOlson?s=100" width="100" alt="Megan Olson" /><br />[<sub>Megan Olson</sub>](https://github.com/MegOlson)<br />[💻](https://github.com/MegOlson/eat-up/commits?author=MegOlson) [📖](https://github.com/MegOlson/eat-up/commits?author=MegOlson) [🐛](https://github.com/MegOlson/eat-up/issues?q=author%3AMegOlson) 🎨 [⚠️](https://github.com/MegOlson/eat-up/commits?author=MegOlson) | <img src="https://avatars.githubusercontent.com/tocodenow?s=100" width="100" alt="Linda Luu" /><br />[<sub>Linda Luu</sub>](https://github.com/tocodenow)<br />[💻](https://github.com/MegOlson/eat-up/commits?author=tocodenow) [📖](https://github.com/MegOlson/eat-up/commits?author=tocodenow) [🐛](https://github.com/MegOlson/eat-up/issues?q=author%3Atocodenow) 🎨 [⚠️](https://github.com/MegOlson/eat-up/commits?author=tocodenow) | <img src="https://avatars.githubusercontent.com/kristenmarie?s=100" width="100" alt="Kristen Kulha" /><br />[<sub>Kristen Kulha</sub>](https://github.com/kristenmarie)<br />[💻](https://github.com/MegOlson/eat-up/commits?author=kristenmarie) [📖](https://github.com/MegOlson/eat-up/commits?author=kristenmarie) [🐛](https://github.com/MegOlson/eat-up/issues?q=author%3Akristenmarie) 🎨 [⚠️](https://github.com/MegOlson/eat-up/commits?author=kristenmarie) |
| :---: | :---: | :---: | :---: |
<!-- Contributors table END -->
This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.
