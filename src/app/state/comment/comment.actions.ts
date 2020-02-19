import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Comment } from './comment.model';

export const loadComments = createAction(
  '[Comment/API] Load Comments', 
  props<{ comments: Comment[] }>()
);

export const addComment = createAction(
  '[Comment/API] Add Comment',
  props<{ comment: Comment }>()
);

export const upsertComment = createAction(
  '[Comment/API] Upsert Comment',
  props<{ comment: Comment }>()
);

export const addComments = createAction(
  '[Comment/API] Add Comments',
  props<{ comments: Comment[] }>()
);

export const upsertComments = createAction(
  '[Comment/API] Upsert Comments',
  props<{ comments: Comment[] }>()
);

export const updateComment = createAction(
  '[Comment/API] Update Comment',
  props<{ comment: Update<Comment> }>()
);

export const updateComments = createAction(
  '[Comment/API] Update Comments',
  props<{ comments: Update<Comment>[] }>()
);

export const deleteComment = createAction(
  '[Comment/API] Delete Comment',
  props<{ id: string }>()
);

export const deleteComments = createAction(
  '[Comment/API] Delete Comments',
  props<{ ids: string[] }>()
);

export const clearComments = createAction(
  '[Comment/API] Clear Comments'
);
