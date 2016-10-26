import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent }   from './blog.component';
import { BlogDetailComponent} from './blog.detail.component';
import{ BlogPostComponent} from './blog.post.component';
import {BlogPostEditComponent} from './blog.post.edit.component';
import {BlogPostNewComponent} from './blog.post.new.component';

const blogRoutes: Routes = [
  { path: 'blog',  component: BlogComponent },
  { path: 'blog/posts',  component: BlogDetailComponent },
  { path: 'blog/post/:id',  component: BlogPostComponent },
  { path: 'blog/post/edit/:id',  component: BlogPostEditComponent },
  {path: 'blog/post/new/item', component:BlogPostNewComponent},
  { path: 'blog/posts/:id', component: BlogPostComponent}
];
@NgModule({
  imports: [ RouterModule.forChild(blogRoutes) ],
  exports: [ RouterModule ]
})
export class BlogRoutingModule {}