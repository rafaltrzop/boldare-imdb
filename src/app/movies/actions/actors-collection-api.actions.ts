import { createAction, props } from '@ngrx/store';

import { ApiError } from '@app/core/models';
import { Actor } from '@app/movies/models';

export const loadActorSuccess = createAction(
  '[Actors Collection API] Load Actor Success',
  props<{ actor: Actor }>()
);

export const loadActorFailure = createAction(
  '[Actors Collection API] Load Actor Failure',
  props<{ error: ApiError }>()
);
