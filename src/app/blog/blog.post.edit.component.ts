import {Component, OnInit, OnDestroy} from '@angular/core';
import {AngularFire,FirebaseObjectObservable} from 'angularfire2'
import { ActivatedRoute } from '@angular/router';
@Component({
    selector:'blog-post-edit',
    templateUrl: './blog.post.edit.component.html'
})
export class BlogPostEditComponent implements OnInit, OnDestroy{
    item: FirebaseObjectObservable<any>;
    id:string;
    sub:any;
    title:string;
    article:string;
    editorId: string = 'my-editor-id';
    constructor(private af: AngularFire, private route: ActivatedRoute){

    }
    ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
       this.item = this.af.database.object('/posts/'+this.id,{ preserveSnapshot: true });
       this.item.subscribe(snapshot => {
          console.log(snapshot.key)
          this.title = snapshot.val().title;
          this.article = snapshot.val().article;
          if(this.article !=null){
          tinymce.get(this.editorId).setContent(this.article);
          }
        });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  keyupHandlerFunction(content:any):void{
    this.article=content;
  }
  save():void{
    this.item.update({title:this.title, article:this.article});

    console.log('saved');
  }
}