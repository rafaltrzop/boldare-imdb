import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ActorsService } from '@app/movies/services';
import {
  ActorsCollectionApiActions,
  MovieDetailsPageActions
} from '@app/movies/actions';

@Injectable()
export class ActorsCollectionEffects {
  loadActor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieDetailsPageActions.loadActor),
      mergeMap(({ id }) =>
        this.actorsService.getActor(id).pipe(
          map(actor => ActorsCollectionApiActions.loadActorSuccess({ actor })),
          catchError(({ error }) =>
            of(ActorsCollectionApiActions.loadActorFailure(error))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private actorsService: ActorsService
  ) {}
}
