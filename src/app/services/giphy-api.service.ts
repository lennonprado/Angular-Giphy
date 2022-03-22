import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GiphyApiService {

  constructor(private http:  HttpClient ) { }


  search(query:string, offset:number){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=9&offset=${offset}&api_key=CHqKSbhN3avWYIENnELyQe4kVtF3CdrT`)
  }





}
