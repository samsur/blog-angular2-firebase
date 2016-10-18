import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent }   from './blog.component';
import { BlogDetailComponent} from './blog.detail.component';

const blogRoutes: Routes = [
  { path: 'blog',  component: BlogComponent },
  { path: 'blogdetail', component: BlogDetailComponent}
];
@NgModule({
  imports: [ RouterModule.forChild(blogRoutes) ],
  exports: [ RouterModule ]
})
export class BlogRoutingModule {}