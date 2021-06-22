// firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// if you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// if you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

// firebase App (the core Firebase SDK) is always required and must be listed first

// if you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
@Component({
  selector: "app-loot-leaderboard",
  templateUrl: "./loot-leaderboard.component.html",
  styleUrls: ["./loot-leaderboard.component.css"]
})
export class LootLeaderboardComponent implements OnInit {
  loot: any = [];

  users: any;
  database: firebase.database.Database;
  app: firebase.app.App;
  constructor(private readonly http: HttpClient) {
    // your web app's Firebase configuration
    // for Firebase JS SDK v7.20.0 and later, measurementId is optional
    // your web app's Firebase configuration
    // for Firebase JS SDK v7.20.0 and later, measurementId is optional
    // for Firebase JS SDK v7.20.0 and later, measurementId is optional
  }

  // when you comeback to this set it up in a local folder and use firebase cli
  ngOnInit(): void {
    const firebaseConfig: any = {
      apiKey: "AIzaSyAnPCD6oKP_0XuT5ptHlXvNIZlmr1Abuo4",
      authDomain: "pirates-friend.firebaseapp.com",
      databaseURL: "https://pirates-friend-default-rtdb.firebaseio.com",
      projectId: "pirates-friend",
      storageBucket: "pirates-friend.appspot.com",
      messagingSenderId: "311560368568",
      appId: ":311560368568:web:0ca4596c7a1215fa76df4d",
      measurementId: "G-FQDEYWJCQR"
    };
    // initialize Firebase

    try {
      this.app = firebase.app();
    } catch (err: any) {
      this.app = firebase.initializeApp(firebaseConfig, "foo");
    }

    this.database = this.app.database();
    // firebase.analytics();

    console.log(this.database);
  }

  // make this function work
  writeUserData(): void {
    // tslint:disable-next-line:typedef
    var ref = this.database.ref("server/loot-tracker");
    ref.child("users").set({
      alanisawesome: {
        date_of_birth: "June 23, 1912",
        full_name: "Alan Turing"
      },
      gracehop: {
        date_of_birth: "December 9, 1906",
        full_name: "Grace Hopper"
      }
    }, (error) => {
      if (error) {
        console.log("err");
        // the write con...
      } else {
        console.log("save");
        // data saved successfully!
      }
    });
  }

}
