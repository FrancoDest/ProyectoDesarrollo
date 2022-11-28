import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Molino } from '../Molino';

@Injectable({
  providedIn: 'root'
})

export class WindmillsService {
  
  private WindmillUrl= 'http://localhost:5000/Molinos'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

    /** GET Molino from the server */
  getWindmill(): Observable<Molino[]> {
    return this.http.get<Molino[]>(this.WindmillUrl);
  }
  
  createWindmill(molino : Molino){
    return this.http.post<Molino>(this.WindmillUrl, molino, this.httpOptions);
  }///Disapprove

  approveWindmill(molino : Molino){
    return this.http.put<Molino>(this.WindmillUrl + '/aprobar', molino, this.httpOptions);
  }
  disapproveWindmill(molino : Molino  ){
    return this.http.put<Molino>(this.WindmillUrl + '/rechazar', molino, this.httpOptions);
  }
}
