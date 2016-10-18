import { Component, OnInit } from '@angular/core';
import {AngularFire,FirebaseListObservable} from 'angularfire2'
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog.post.component.html',
  styleUrls: ['./blog.post.component.css']
})
export class BlogPostComponent implements OnInit {
  title = 'The Angular 2 and Firebase Blog';
  constructor(private af: AngularFire) { }

  ngOnInit() {
    
  }

}