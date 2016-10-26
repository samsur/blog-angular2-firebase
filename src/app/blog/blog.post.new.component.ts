import{Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseListObservable, AngularFire} from 'angularfire2';
@Component({
    selector:'blog-post-new',
    templateUrl: './blog.post.new.component.html'
})
export class BlogPostNewComponent implements OnInit{

    items:FirebaseListObservable<any>;
    title:string;
    article:string;
    constructor(private af:AngularFire, private router: Router){

    }
    ngOnInit():void{
    this.items = this.af.database.list('posts');
    console.log('i am here')
    }
    add():void{
        this.items.push({title:this.title,article:this.article})
        this.router.navigateByUrl('/blog/posts');
    }
     keyupHandlerFunction(content:any):void{
    this.article=content;
  }
}