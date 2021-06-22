import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
import database from 'firebase/database';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

const CURRENT_APP = 'pirates-friend';
@Component({
  selector: 'app-loot-leaderboard',
  templateUrl: './loot-leaderboard.component.html',
  styleUrls: ['./loot-leaderboard.component.css']
})
export class LootLeaderboardComponent implements OnInit {
  loot: any = [];

  constructor(private readonly http: HttpClient) {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: 'AIzaSyAnPCD6oKP_0XuT5ptHlXvNIZlmr1Abuo4',
      authDomain: 'pirates-friend.firebaseapp.com',
      databaseURL: 'https://pirates-friend-default-rtdb.firebaseio.com',
      projectId: 'pirates-friend',
      storageBucket: 'pirates-friend.appspot.com',
      messagingSenderId: '311560368568',
      appId: '1:311560368568:web:0ca4596c7a1215fa76df4d',
      measurementId: 'G-FQDEYWJCQR'
    };
    // Initialize Firebase
    try {
      firebase.initializeApp(CURRENT_APP);
    } catch (err) {
      firebase.app(CURRENT_APP);
      //i probably need to return something?
    }
    // firebase.analytics();
  }

  ngOnInit() {
    let users = firebase
      .database()
      .ref('users')
      .get();
  }

  //make this function work
  writeUserData() {
    firebase
      .database()
      .ref('users/2')
      .set({
        username: 'doug'
      });
  }
}
