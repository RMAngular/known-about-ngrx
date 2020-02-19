import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Blog, BlogsUsersComments } from './blog.model';

export const loadBlogs = createAction(
  '[Blog/API] Load Blogs'
);

export const loadBlogsUsersComments = createAction(
  '[Blogs/API] Load Blogs Users Comments',
  props<{ data: BlogsUsersComments }>()
);

export const loadBlogsFailure = createAction(
  '[Blogs/API] Load Blogs Failure'
);

export const addBlog = createAction(
  '[Blog/API] Add Blog',
  props<{ blog: Blog }>()
);

export const upsertBlog = createAction(
  '[Blog/API] Upsert Blog',
  props<{ blog: Blog }>()
);

export const addBlogs = createAction(
  '[Blog/API] Add Blogs',
  props<{ blogs: Blog[] }>()
);

export const upsertBlogs = createAction(
  '[Blog/API] Upsert Blogs',
  props<{ blogs: Blog[] }>()
);

export const updateBlog = createAction(
  '[Blog/API] Update Blog',
  props<{ blog: Update<Blog> }>()
);

export const updateBlogs = createAction(
  '[Blog/API] Update Blogs',
  props<{ blogs: Update<Blog>[] }>()
);

export const deleteBlog = createAction(
  '[Blog/API] Delete Blog',
  props<{ id: string }>()
);

export const deleteBlogs = createAction(
  '[Blog/API] Delete Blogs',
  props<{ ids: string[] }>()
);

export const clearBlogs = createAction(
  '[Blog/API] Clear Blogs'
);
