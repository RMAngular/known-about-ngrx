import { AppState } from './../reducers/index';
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Blog } from './blog.model';
import * as BlogActions from './blog.actions';
import { createSelector } from '@ngrx/store';

export const blogsFeatureKey = 'blogs';

export interface BlogState extends EntityState<Blog> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Blog> = createEntityAdapter<Blog>();

export const initialState: BlogState = adapter.getInitialState({
  // additional entity state properties
});

const reduce = createReducer(
  initialState,
  on(BlogActions.addBlog,
    (state, action) => adapter.addOne(action.blog, state)
  ),
  on(BlogActions.upsertBlog,
    (state, action) => adapter.upsertOne(action.blog, state)
  ),
  on(BlogActions.addBlogs,
    (state, action) => adapter.addMany(action.blogs, state)
  ),
  on(BlogActions.upsertBlogs,
    (state, action) => adapter.upsertMany(action.blogs, state)
  ),
  on(BlogActions.updateBlog,
    (state, action) => adapter.updateOne(action.blog, state)
  ),
  on(BlogActions.updateBlogs,
    (state, action) => adapter.updateMany(action.blogs, state)
  ),
  on(BlogActions.deleteBlog,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BlogActions.deleteBlogs,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BlogActions.loadBlogs,
    (state, action) => adapter.removeAll(state)
  ),
  on(BlogActions.clearBlogs,
    state => adapter.removeAll(state)
  ),
);

export function blogReducer(state: BlogState | undefined, action: Action) {
  return reduce(state, action);
}

export const {
  selectEntities: blogEntities,
  selectAll: allBlogs,
} = adapter.getSelectors((state: AppState) => state.blog);

