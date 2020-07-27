import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';
import { FibVal } from './fib-val';

import { Post } from './post.model';

@Component({
  selector: 'app-fib-calculator',
  templateUrl: './fib-calculator.component.html',
  styleUrls: ['./fib-calculator.component.css']
})
export class FibCalculatorComponent implements OnInit {
  calValues: FibVal[];
  isFetching = false;
  fval:FibVal;
  //numbers: number[];
  numbers=[2,3,4,5];
  id: number;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {
    

  }
  
  public handleClick(ev){

  }
  onCreatePost(postData: {id:string}) {
    // Send Http request
    //this.postsService.createAndStorePost(postData.title, postData.content);
    //console.log(postData);
    this.httpService.postData(postData.id);
    postData.id='';
  }
}
