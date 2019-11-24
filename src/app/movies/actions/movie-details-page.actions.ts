import { createAction, props } from '@ngrx/store';

export const loadActor = createAction(
  '[Movie Details Page] Load Actor',
  props<{ id: string }>()
);
