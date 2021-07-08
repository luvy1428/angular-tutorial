import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs'
import {map,catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url, private http : HttpClient) { }

  getAll(){
    return this.http.get(this.url).pipe(
      map(response =>response)
    )
  }

  create(resource){
    //Example for generating 404 error using below url
    //this.url = 'https://jsonplaceholder.typicode.com/postss'
    return this.http.post(this.url,JSON.stringify(resource));
  }

  update(resource){
    
    return this.http.patch(this.url+'/'+resource.id,JSON.stringify({isRead : true}));
  }

  delete(id){
    //Example for generating 404 error using below url
    this.url = 'https://jsonplaceholder.typicode.com/postss'
    return this.http.delete (this.url+'/'+id).pipe(
      map(res => res),
      catchError((error: HttpErrorResponse) => {  
        if (error.status === 404)   
          return throwError(new NotFoundError(error));  
            
        return throwError(new AppError(error)); 
      })
    ); 

  }
}
