import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';
import { FibVal } from './fib-val';

import { Post } from './post.model';
import { Subscription } from 'rxjs';

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
  private errorSub: Subscription;
  error = null;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {
    this.errorSub = this.httpService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.httpService.fetchValues().subscribe(
      values => {
        this.isFetching = false;
        this.calValues = values;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
    this.httpService.fetchIndexes().subscribe(
      values => {
        this.isFetching = false;
        this.numbers = values;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );

  }
  
  public handleClick(ev){

  }
  onCreatePost(postData: {id:string}) {
    // Send Http request
    //this.postsService.createAndStorePost(postData.title, postData.content);
    //console.log(postData);
    this.httpService.postData(postData.id);
    postData.id='';
    this.isFetching = true;
    this.httpService.fetchValues().subscribe(
      values => {
        this.isFetching = false;
        this.calValues = values;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
    this.httpService.fetchIndexes().subscribe(
      values => {
        this.isFetching = false;
        this.numbers = values;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }
}
