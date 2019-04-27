import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class JsonService {

  constructor(public http: HttpClient) {
    this.http = http;
   }

   getRestaurants(): Observable<any> {
    return this.http.get('./assets/resturants.json');
  }

}
