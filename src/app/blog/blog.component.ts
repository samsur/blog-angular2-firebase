import { Component, OnInit } from '@angular/core';
import {AngularFire,FirebaseListObservable} from 'angularfire2'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  title = 'Welcome to The Angular 2 and Firebase Blog';
  items:FirebaseListObservable<any>;
  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.items = this.af.database.list('posts');
  }

}
