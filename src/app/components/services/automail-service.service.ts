import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutoMailAnswer } from '../models/autoMailAnswer';

@Injectable({
  providedIn: 'root'
})
export class AutomailServiceService {

  constructor(private http: HttpClient) { }

  getMail = environment.apiUrl + 'automail/GetAll/'
  createMail = environment.apiUrl + 'automail/Create/'
  updateMail = environment.apiUrl + 'automail/Update/'
  deletemail = environment.apiUrl + 'automail/Delete/'

  GetMail(): Observable<AutoMailAnswer[]> {
    return this.http.get<AutoMailAnswer[]>(this.getMail);
  }

  CreateMail(data: AutoMailAnswer): Observable<string> {
    return this.http.post<string>(this.createMail, data)
  }
  UpdateMail(data: AutoMailAnswer): Observable<string> {
    return this.http.post<string>(this.updateMail, data)
  }
  DeleteMail(data: number): Observable<string> {
    console.log(data)
    return this.http.post<string>(this.deletemail, data)
  }
}
