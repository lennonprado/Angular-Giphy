import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {

  constructor(private http:  HttpClient ) { }


  search(query:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=CHqKSbhN3avWYIENnELyQe4kVtF3CdrT`)
  }





}
