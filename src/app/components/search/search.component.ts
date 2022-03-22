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
  offset = 0;
  gridLength = 9;
  total = 0;
  noresult = false;
  query : string ="";

  ngOnInit(): void {}

  search(): void {
    
    this.giphy.search(this.query, this.offset).subscribe(
      (result:any) => {
        this.offset += this.gridLength;
        this.total = result.pagination.total_count
        if(result.data.length === 0)
          this.noresult = true;

        this.gifResults.push(...result.data)     
      }
    )

  }

  reset(){
    this.offset = 0;
    this.total = 0;
    this.noresult = false;
    this.gifResults =[];
  }


}
