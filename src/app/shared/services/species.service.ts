import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { ISpecie } from '../interfaces/ispecie';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  character: ISpecie[];
  constructor(private http: HttpClient) {}

  getAllSpecies(): Observable<ISpecie[]> {
    return this.http.get<ISpecie[]>(`${environment.baseUrlAPI}/species`);
  }

  getSpecie(id: number): Observable<ISpecie> {
    return this.http.get<ISpecie>(`${environment.baseUrlAPI}/species/${id}`);
  }

  getSpecieByUrl(Url: string): Observable<ISpecie> {
    return this.http.get<ISpecie>(`${Url}`);
  }
}
