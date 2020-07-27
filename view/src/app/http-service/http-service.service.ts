import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { FibVal } from '../fib-calculator/fib-val';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  error = new Subject<string>();
  constructor(private httpClient: HttpClient) { }

  public fetchValues() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.httpClient.get<{ [id: string]: FibVal }>('/api/values/current', {
      /* Optional parameter added for docuemntation purposes  */
      headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
      params: searchParams,
      responseType: 'json'
    }
    ).pipe(
      map(responseData => {
        const postsArray: FibVal[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ "index": key, "fibVal":responseData[key].toString() });
          }
        }
        return postsArray;
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
  }

  public fetchIndexes() {
    return this.httpClient.get('/api/values/all')
    .pipe(
      map(responseData => {
        const postsArray= [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push(responseData[key]["number"]);
          }
        }
        return postsArray;
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
  }

  public postData(id: string) {
    let url = '/api/values';
    const postData: FibVal = { index: id };
    return this.httpClient.post(url,
      postData,
      {
        observe: 'response'
      })
      .subscribe(
        responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }
}
