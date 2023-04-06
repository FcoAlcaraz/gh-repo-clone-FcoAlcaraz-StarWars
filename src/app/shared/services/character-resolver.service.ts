import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Character } from '../Interfaces/characterInterface';

@Injectable({
  providedIn: 'root',
})
export class CharacterResolverService implements Resolve<Character> {
  constructor(private readonly http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Character> {
    const id = route.params['id'];
    return this.http.get<Character>(`${environment.baseUrlAPI}/peoples/${id}`);
  }
}
