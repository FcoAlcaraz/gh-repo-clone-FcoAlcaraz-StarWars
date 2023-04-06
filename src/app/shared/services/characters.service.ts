import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Character } from '../Interfaces/characterInterface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${environment.baseUrlAPI}/people`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${environment.baseUrlAPI}/people/${id}`);
  }

  getCharacterByUrl(Url: string): Observable<Character> {
    return this.http.get<Character>(`${Url}`);
  }
}
