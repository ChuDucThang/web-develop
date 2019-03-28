import { Injector, Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService{
	private baseUrl:string;
	protected http: HttpClient = this.injector.get(HttpClient);

	constructor(
		protected injector:Injector
	){}

	setBaseUrl(url:string){
		this.baseUrl = `${environment.api_url}${url}`;
	}

	private buildUrl(url?:string){
		return this.baseUrl + url;
	}

	get(url:string, params:HttpParams = new HttpParams()):Observable<any>{
		return this.http.get(this.buildUrl(url),{params});
	}

	put(url: string, body: Object = {}): Observable<any> {
    	return this.http.put(this.buildUrl(url), body);
  	}

  	post(url: string, body: Object = {}): Observable<any> {
    	return this.http.post(this.buildUrl(url),body);
  	}

  	delete(url: string): Observable<any> {
    	return this.http.delete(this.buildUrl(url));
  	}

  	downloadByGet(url: string, body: Object = {}): Observable<any> {
    	return this.http.post(this.buildUrl(url), JSON.stringify(body), {responseType: 'blob', observe: 'response'});
  	}
}