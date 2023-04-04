import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IVehicle } from '../Interfaces/ivehicle';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  vechicle: IVehicle[];
  constructor(private http: HttpClient) {}

  getAllVechicles(): Observable<IVehicle[]> {
    return this.http.get<IVehicle[]>(`${environment.baseUrlAPI}/species`);
  }

  getVechicle(id: number): Observable<IVehicle> {
    return this.http.get<IVehicle>(`${environment.baseUrlAPI}/species/${id}`);
  }

  getVechicleByUrl(Url: string): Observable<IVehicle> {
    return this.http.get<IVehicle>(`${Url}`);
  }
}
