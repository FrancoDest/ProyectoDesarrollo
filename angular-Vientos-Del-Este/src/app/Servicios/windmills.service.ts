import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Molino } from '../Molino';
import { fetchPost } from './fetchFunctions';

@Injectable({
  providedIn: 'root'
})

export class WindmillsService {
  
  private WindmillUrl= 'http://localhost:5000/Molinos'
  
  constructor(private http: HttpClient) { }

    /** GET Molino from the server */
  getWindmill(): Observable<Molino[]> {
    return this.http.get<Molino[]>(this.WindmillUrl)
  }
  
  createWindmill(molino : Molino){
    return fetchPost(this.WindmillUrl, molino).then(resp => {
      return resp
    }).catch(err => {return err})
  }
}
