import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Aerolinea } from './Aerolinea';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {


private apiUrl: string = environment.baseUrl + '';
constructor(private http: HttpClient) { }
 

 getAerolineas(): Observable<Aerolinea[]> {
   return this.http.get<Aerolinea[]>(this.apiUrl);
 }
}
