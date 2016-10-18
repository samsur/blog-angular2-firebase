import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogModule }   from './blog/blog.module';
import { AppComponent }  from './app.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' }
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) , BlogModule],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
