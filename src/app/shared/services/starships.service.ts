import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.development';
import { IStarship } from '../Interfaces/istarship';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  starship: IStarship[];
  constructor(private http: HttpClient) {}

  getAllStarships(): Observable<IStarship[]> {
    return this.http.get<IStarship[]>(`${environment.baseUrlAPI}/starships`);
  }

  getStarship(id: number): Observable<IStarship> {
    return this.http.get<IStarship>(
      `${environment.baseUrlAPI}/starships/${id}`
    );
  }

  getStarshipByUrl(Url: string): Observable<IStarship> {
    return this.http.get<IStarship>(`${Url}`);
  }
}
