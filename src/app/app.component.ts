import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';

  constructor(private store: AngularFirestore) {
    this.store.collection("collection").add({ "name": "Jorge Guerra Pires" });

  }
}

