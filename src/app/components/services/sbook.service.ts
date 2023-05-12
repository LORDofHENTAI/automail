import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SBOOK } from '../models/SBOOKAnswer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SBOOKService {

  constructor(
    private http: HttpClient
  ) { }

  getMail = environment.apiUrl + 'director/GetAll/'
  createMail = environment.apiUrl + 'director/Create/'
  updateMail = environment.apiUrl + 'director/Update/'
  deletemail = environment.apiUrl + 'director/Delete/'

  GetDirectors(): Observable<SBOOK[]> {
    return this.http.get<SBOOK[]>(this.getMail);
  }

  CreateDirectors(data: SBOOK): Observable<string> {
    return this.http.post<string>(this.createMail, data)
  }
  UpdateDirectors(data: SBOOK): Observable<string> {
    return this.http.post<string>(this.updateMail, data)
  }
  DeleteDirectors(data: number): Observable<string> {
    console.log(data)
    return this.http.post<string>(this.deletemail, data)
  }
}
