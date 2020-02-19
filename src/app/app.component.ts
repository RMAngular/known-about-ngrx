import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectCompleteBlog } from './state/blog';
import { BlogFull, Blog } from './state/blog/blog.model';
import { loadBlogs } from './state/blog/blog.actions';
import * as fromBlogs from 'src/app/state/blog/blog.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'known-about-ngrx';
  blogs$: Observable<Blog[]>;

  constructor(private store: Store<{ count: number }>) {
  }

  ngOnInit() {
    this.store.dispatch(loadBlogs());
    this.blogs$ = this.store.pipe(select(fromBlogs.selectEntities));
  }
}
