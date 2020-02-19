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
  loadBlogs$ = createEffect(() => this.actions$.pipe(
    ofType(BlogActions.loadBlogs),
    mergeMap(() => this.blogService.getAll()
      .pipe(
        map(blogs => (BlogActions.decomposeBlogs({ data: this.splitModels(blogs) }))),
        catchError(() => BlogActions.loadBlogsFailure)
      ))
  ));

  decomposeBlogs$ = createEffect(() => this.actions$.pipe(
    ofType(BlogActions.decomposeBlogs),
    flatMap(action => [
      /// split this action into 3 other actions
      BlogActions.addBlogs({ blogs: action.data.blogs }),
      UserActions.addUsers({ users: action.data.users }),
      CommentActions.addComments({ comments: action.data.comments })
    ])
  ));

  splitModels(data): BlogsUsersComments {
    const dictionary = normalize(data, blogListSchema);

    return {
      blogs: Object.values(dictionary.entities.blogs) as Blog[],
      users: Object.values(dictionary.entities.users) as User[],
      comments: Object.values(dictionary.entities.comments) as Comment[],
    }
  }

  constructor(private actions$: Actions,
    private blogService: BlogService) { }

}
