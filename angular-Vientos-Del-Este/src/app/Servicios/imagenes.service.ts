import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http : HttpClient) { }

  postImage(body : any) {
    this.http.post('http://localhost:5000/uploadBase64', JSON.stringify(body), 
    { headers: new HttpHeaders({ 'content-type': 'application/json' }) })
    .subscribe(res =>{
      console.log(res)
      },error=>{
      }
    )    
  }
}
