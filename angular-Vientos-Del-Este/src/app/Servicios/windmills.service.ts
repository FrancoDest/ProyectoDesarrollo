import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Molino } from '../Molino';
import { catchError, map, tap} from 'rxjs/operators';

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
    return this.http.get<Molino[]>(this.WindmillUrl).pipe(
      catchError(this.HandleError<Molino[]>([])));
  }
  
  createWindmill(molino : Molino){
    return this.http.post<Molino>(this.WindmillUrl, molino, this.httpOptions).pipe(
      catchError(this.HandleError<Molino>()));
  }///Disapprove

  approveWindmill(molino : Molino){
    return this.http.put<Molino>(this.WindmillUrl + '/aprobar', molino, this.httpOptions).pipe(
      catchError(this.HandleError<Molino>()));
  }
  disapproveWindmill(molino : Molino  ){
    return this.http.put<Molino>(this.WindmillUrl + '/rechazar', molino, this.httpOptions).pipe(
      catchError(this.HandleError<Molino>()));
  }
  private HandleError<T>( result?: T){
    return (error : any) : Observable<T> => {
      return of (result as T)
    }
  }
}
