import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formatCurrency } from '@angular/common';

import {HttpClientModule,HttpClient} from '@angular/common/http'



@Injectable()
export class ImageService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File) : Observable<any>{//Observable<Response>
    const formData = new FormData();

    formData.append('image',image);
    
    return this.http.post('/imagen/guardar', formData);
    
    
  }
}