import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { reducer as blogReducer } from '../blog/blog.reducer';
import { reducer as userReducer } from '../user/user.reducer';
import { reducer as commentReducer } from '../comment/comment.reducer';

export const blogFeatureKey = 'blog';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  blog: blogReducer,
  user: userReducer,
  comment: commentReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
