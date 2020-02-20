import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './containers/blogs-list/blogs-list.component';
import { BlogsComponent } from './components/blogs/blogs.component';

import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [BlogsListComponent, BlogsComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [BlogsListComponent, BlogsComponent]
})
export class BlogsModule { }
