import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Match } from '../../models/match';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  getMatchesByDate(date: string){
    return this.http.get('http://localhost:8080/'+date).map((response : Match[])=>{ 
      console.log(response);
    return response;});
  }

}
