import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'result-grid',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() gifResults :any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
