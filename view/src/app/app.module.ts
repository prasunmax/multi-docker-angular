import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FibCalculatorComponent } from './fib-calculator/fib-calculator.component';


import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import { JoinPipe } from './join.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FibCalculatorComponent,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
