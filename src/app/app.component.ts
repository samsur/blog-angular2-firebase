import { Component } from '@angular/core';
import {AngularFire,FirebaseListObservable} from 'angularfire2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog - Angular2 and Firebase!';
  items:FirebaseListObservable<any>;
   constructor(private af: AngularFire) {
    this.items = af.database.list('posts');
  }
}
