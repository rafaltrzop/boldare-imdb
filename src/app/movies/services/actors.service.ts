import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Actor } from '@app/movies/models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  constructor(private http: HttpClient) {}

  getActor(id: string): Observable<Actor> {
    return this.http.get<Actor>(`${environment.apiUrl}/actors/${id}`);
  }
}
