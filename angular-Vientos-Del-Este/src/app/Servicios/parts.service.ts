import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Partes } from '../Partes';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  private PartesUrl= 'http://localhost:5000/Partes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPart(): Observable<Partes[]> {
    return this.http.get<Partes[]>(this.PartesUrl);
  }
  addPart(parte: Partes): Observable<Partes> {
    return this.http.post<Partes>(this.PartesUrl, parte, this.httpOptions);
  }
  deletePart(parte: Partes): Observable<Partes> {
    let _id = parte._id;
    const url = `${this.PartesUrl}/${_id}`;
    return this.http.delete<Partes>(url, this.httpOptions);
  }

}
