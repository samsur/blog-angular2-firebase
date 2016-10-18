import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog.detail.component';
import {BlogPostComponent} from './blog.post.component';
import {BlogRoutingModule} from './blog.routing';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogComponent,
    BlogDetailComponent,
    BlogPostComponent
    ]
})
export class BlogModule { }
