import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, flatMap } from 'rxjs/operators';
import { BlogService } from './../../core/services/blog.service';
import { BlogsUsersComments, Blog } from './blog.model';

import * as BlogActions from './blog.actions';
import * as UserActions from './../user/user.actions';
import * as CommentActions from './../comment/comment.actions';
import { normalize, schema, denormalize } from 'normalizr';
import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
});

// Define your article
const blogSchema = new schema.Entity('blogs', {
  author: user,
  comments: [comment]
});

const blogListSchema = new schema.Array(blogSchema);

@Injectable()
export class BlogEffects {

  // loadBlogs$ = createEffect(() => this.actions$.pipe(
  //   ofType(BlogActions.loadBlogs),
  //   mergeMap(() => this.blogService.getAll()
  //     .pipe(
  //       map(blogs => (BlogActions.loadBlogsSuccess({ blogs }))),
  //       catchError(() => BlogActions.loadBlogsFailure)
  //     ))
  // ));

  loadBlogs2$ = createEffect(() => this.actions$.pipe(
    ofType(BlogActions.loadBlogs),
    mergeMap(() => this.blogService.getAll()
      .pipe(
        map(blogs => (BlogActions.decomposeBlogs({ data: this.splitModels(blogs) }))),
        catchError(() => BlogActions.loadBlogsFailure)
      ))
  ));

  loadBlogsUsersComments$ = createEffect(() => this.actions$.pipe(
    ofType(BlogActions.decomposeBlogs),
    flatMap(action => [
      /// split this action into 3 other actions
      BlogActions.addBlogs({ blogs: this.getBlogs(action.data) }),
      UserActions.addUsers({ users: this.getUsers(action.data) }),
      CommentActions.addComments({ comments: this.getComments(action.data) })
    ])
  ));

  splitModels(data): BlogsUsersComments {
    return normalize(data, blogListSchema);
  }

  dictionarytoArray(data) {
    return Object.values(data);
  }

  getBlogs(data): Blog[] {
    return this.dictionarytoArray(data.entities.blogs) as Blog[];
  }

  getUsers(data): User[] {
    return this.dictionarytoArray(data.entities.users) as User[];
  }

  getComments(data): Comment[] {
    return this.dictionarytoArray(data.entities.comments) as Comment[];
  }

  constructor(private actions$: Actions,
    private blogService: BlogService) { }

}
