import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import{Observable} from 'rxjs';
//import 'rxjs/operator'  

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  //url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http : HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts',http);
  }

}
