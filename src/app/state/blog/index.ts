import { BlogFull } from './blog.model';
import { createSelector } from '@ngrx/store';

import * as fromBlogs from './blog.reducer';
import * as fromUsers from '../user/user.reducer';
import * as fromComments from '../comment/comment.reducer';


export const selectCompleteBlog = createSelector(
  fromBlogs.selectAll,
  fromUsers.selectEntities,
  fromComments.selectEntities,
  (blogs, users, comments) => {
    return blogs;
    // return blogs.map(blog => {
    //   return {
    //     ...blog, author: users[blog.author], comments: []
    //   }
    // })
  }
);
