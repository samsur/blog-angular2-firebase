import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog.post.component.html',
  styleUrls: ['./blog.post.component.css']
})
export class BlogPostComponent implements OnInit, OnDestroy {
  title = 'The Angular 2 and Firebase Blog';
  item:any;
  sub:any;
  id:string;
  constructor(private af: AngularFire, private route:ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
       console.log(this.id);
       this.item = this.af.database.object('/posts/'+this.id);
       console.log(this.item);
       
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}