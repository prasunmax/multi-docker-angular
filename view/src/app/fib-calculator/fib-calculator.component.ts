import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';
import { FibVal } from './fib-val';



@Component({
  selector: 'app-fib-calculator',
  templateUrl: './fib-calculator.component.html',
  styleUrls: ['./fib-calculator.component.css']
})
export class FibCalculatorComponent implements OnInit {
  calValues: FibVal[];
  fval:FibVal;
  //numbers: number[];
  numbers=[2,3,4,5];
  id: number;

  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {
    this.fval = new FibVal();

  }
  
  public handleClick(ev){

  }
}
