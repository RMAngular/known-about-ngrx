import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadBlogs } from './state/blog/blog.actions';
import { AppState } from './state/reducers';
import { allBlogs } from './state/blog/blog.reducer';
import { Blog, BlogView } from './state/blog/blog.model';
import { blogView } from './state/blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'known-about-ngrx';
  blogs$: Observable<BlogView[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(loadBlogs());
    this.blogs$ = this.store.select(blogView);
  }
}
