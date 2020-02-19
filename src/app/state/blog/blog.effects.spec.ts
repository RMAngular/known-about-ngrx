import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BlogEffects } from './blog.effects';

describe('BlogEffects', () => {
  let actions$: Observable<any>;
  let effects: BlogEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BlogEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<BlogEffects>(BlogEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
