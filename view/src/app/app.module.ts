import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FibCalculatorComponent } from './fib-calculator/fib-calculator.component';


import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { JoinPipe } from './join.pipe';

import { LoggingInterceptorService } from './http-service/logging-interceptor.service';
import { NumbersOnly } from './common/numbersOnly';

@NgModule({
  declarations: [
    AppComponent,
    FibCalculatorComponent,
    JoinPipe,
    NumbersOnly
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptorService,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
