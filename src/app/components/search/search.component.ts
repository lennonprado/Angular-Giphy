import { Component, OnInit } from '@angular/core';
import { GiphyApiService } from 'src/app/services/giphy-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private giphy : GiphyApiService) { }

  gifResults:any[] = []


  ngOnInit(): void {}



  search(searchInput: HTMLInputElement): void {
    console.log(`Query: ${searchInput.value}`);
    this.giphy.search(searchInput.value).subscribe(
      (result:any) => {
        
        this.gifResults = [ ...result.data]
        console.log(result)      
     
      
      }
    )

  }

}
