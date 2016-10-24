import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire,FirebaseListObservable} from 'angularfire2'
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog.detail.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogDetailComponent implements OnInit {
  title = 'Welcome to The Angular 2 and Firebase Blog';
  items:FirebaseListObservable<any>;
  constructor(private af: AngularFire, private router:Router) { }

  ngOnInit() {
    this.items = this.af.database.list('posts');
  }
showDetails(id:any):void{
  this.router.navigateByUrl('/blog/posts/' +id);
  console.log(id);
}
}
