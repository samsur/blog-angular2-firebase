import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog.detail.component';
import {BlogPostComponent} from './blog.post.component';
import {BlogRoutingModule} from './blog.routing';
import { FormsModule } from '@angular/forms';
import{TinyMceEditorComponent} from   '../shared/tinymce.editor.component';
@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ],
  declarations: [
    BlogComponent,
    BlogDetailComponent,
    BlogPostComponent,
    TinyMceEditorComponent
    ]
})
export class BlogModule { }
