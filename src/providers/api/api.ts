import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiProvider {

  constructor(private http: Http) { }

  getCoins() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/?limit=100')
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError)
  }

  getGlobal() {
	  return this.http.get('https://api.coinmarketcap.com/v1/global/')
	  .map(this.extractData)
	  .do(this.logResponse)
	  .catch(this.catchError)
  }

  private catchError(error: Response | any) {
	  console.log(error);
	  return Observable.throw(error.json().error || "Server error!");
  }
  private logResponse(res: Response) {
		console.log(res);
	}
  private extractData(res: Response){
		return res.json();
	}
}
