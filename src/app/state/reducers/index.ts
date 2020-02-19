import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { blogReducer, BlogState } from '../blog/blog.reducer';
import { userReducer, UserState } from '../user/user.reducer';
import { commentReducer, CommentState } from '../comment/comment.reducer';

export const blogFeatureKey = 'blog';

export interface AppState {
  blog: BlogState;
  user: UserState;
  comment: CommentState;
}

export const reducers: ActionReducerMap<AppState> = {
  blog: blogReducer,
  user: userReducer,
  comment: commentReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
