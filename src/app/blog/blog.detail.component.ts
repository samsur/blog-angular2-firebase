import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire,FirebaseListObservable} from 'angularfire2'
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog.detail.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogDetailComponent implements OnInit {
  title = 'Latest Posts';
  items:FirebaseListObservable<any>;
  constructor(private af: AngularFire, private router:Router) { }

  ngOnInit() {
    this.items = this.af.database.list('posts');
  }
showDetails(id:any):void{
  this.router.navigateByUrl('/blog/post/'+id);
  console.log(id);
}
htmlToPlaintext(text:string) {
  return text ? String(text).replace(/<[^>]+>/gm, '') : '';
}
shorten(text:string){
  if(text.length>200){
    text=text.substr(0,200);
  }
  return text;
}
new():void{
  this.router.navigateByUrl('/blog/post/new/item')
}
}
