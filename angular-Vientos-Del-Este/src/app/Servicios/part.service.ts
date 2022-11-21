import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Partes } from '../Partes';
import { fetchDelete, fetchPost } from './fetchFunctions';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private PartesUrl= 'http://localhost:5000/Partes';

  constructor(private http: HttpClient) { }

    /** GET Usuarios from the server */
  getPart(): Observable<Partes[]> {
    return this.http.get<Partes[]>(this.PartesUrl);
  }

  createPart(parte : Partes){
    return fetchPost(this.PartesUrl, parte).then(resp => {
      return resp
    }).catch(err => {return err})
  }
  deletePart(parte : Partes){
    return fetchDelete(this.PartesUrl + '/' + parte._id).then(resp => {
      return resp
    }).catch(err => {return err})
  }
}
