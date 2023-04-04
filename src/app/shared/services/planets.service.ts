import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPlanet } from '../interfaces/iplanet';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getAllPlanets(): Observable<IPlanet[]> {
    return this.http.get<IPlanet[]>(`${environment.baseUrlAPI}/species`);
  }

  getPlanet(id: number): Observable<IPlanet> {
    return this.http.get<IPlanet>(`${environment.baseUrlAPI}/species/${id}`);
  }

  getPlanetsByUrl(Url: string): Observable<IPlanet> {
    return this.http.get<IPlanet>(`${Url}`);
  }
}
