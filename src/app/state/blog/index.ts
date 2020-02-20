import { BlogView } from './blog.model';
import { createSelector } from '@ngrx/store';
import { allBlogs } from './blog.reducer';
import { userEntities } from '../user/user.reducer';
import { commentEntities } from '../comment/comment.reducer';


export const blogView = createSelector(
  allBlogs,
  userEntities,
  commentEntities,
  (blogs, users, comments) =>
    blogs.map(blog => ({
      ...blog,
      author: users[blog.author],
      comments: blog.comments.map(commentId => comments[commentId]).map(comment => ({
        id: comment.id,
        commenter: users[comment.commenter]
      }))
    })));
