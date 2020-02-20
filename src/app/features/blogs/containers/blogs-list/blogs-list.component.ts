import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadBlogs } from '@state/blog/blog.actions';
import { AppState } from '@state/reducers';
import { BlogView } from '@state/blog/blog.model';
import { blogView } from '@state/blog';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  blogs$: Observable<BlogView[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadBlogs());
    this.blogs$ = this.store.select(blogView);
  }

}
