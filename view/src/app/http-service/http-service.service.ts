import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }

  public fetchValues(){
    return this.httpClient.get('/api/values/current');
  }

  public fetchIndexes(){
    return this.httpClient.get('/api/values/all');
  }

  public getData(url: string){
    return this.httpClient.get(url);
  }
}
