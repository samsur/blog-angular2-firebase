import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent }   from './blog.component';
import { BlogDetailComponent} from './blog.detail.component';
import{ BlogPostComponent} from './blog.post.component';

const blogRoutes: Routes = [
  { path: 'blog',  component: BlogComponent },
  { path: 'blog/posts',  component: BlogDetailComponent },
    { path: 'blog/post/:id',  component: BlogDetailComponent },
  { path: 'blog/posts/:id', component: BlogPostComponent}
];
@NgModule({
  imports: [ RouterModule.forChild(blogRoutes) ],
  exports: [ RouterModule ]
})
export class BlogRoutingModule {}