import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpRequest } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

// Implementing a Retry-Circuit breaker policy
// is pending to do for the SPA app
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  get(url: string, params?: any): Observable<any> {
    let headers = this.getAuthHeader();

    return this.http.get(url, { headers })
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        map((res: any) => {
          return res;
        }),
        catchError(this.handleError)
      );
  }

  public getFile(url: string, params?: any): Observable<HttpEvent<Blob>> {
    let headers = this.getAuthHeader();
    return this.http.request(new HttpRequest('GET', url, null, { reportProgress: true, responseType: 'blob' }));
  }

  postWithId(url: string, data: any, params?: any): Observable<any> {
    return this.doPost(url, data, true, false, params);
  }

  post(url: string, data: any, params?: any): Observable<any> {
    return this.doPost(url, data, false, false, params);
  }
  postAndUpload(url: string, data: any, params?: any): Observable<any> {
    return this.doPost(url, data, false, true, params);
  }

  putWithId(url: string, data: any, params?: any): Observable<any> {
    return this.doPut(url, data, true, params);
  }

  private doPost(url: string, data: any, needId: boolean, includeFileUpload: boolean, params?: any): Observable<any> {
    let headers = this.getAuthHeader(needId);
    if (includeFileUpload)
      headers["headers"].set('Content-Type', 'multipart/form-data');

  //  headers = new HttpHeaders({
  //    'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre- check=0',
  //      'Pragma': 'no-cache',
  //    'Expires': '0'
   // });
    return this.http.post(url, data, { headers })
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.handleError)
      );
  }

  delete(url: string, params?: any) {
    let options = this.getAuthHeader();

    //console.log('data.service deleting');

    this.http.delete(url/*, options*/)
      .subscribe((res) => {
        console.log('deleted');
      });
  }

  private handleError(error: any) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('Client side network error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log('Backend - ' +
        `status: ${error.status}, ` +
        `statusText: ${error.statusText}, ` +
        `message: ${error.message}`);
    }

    // return an observable with a user-facing error message
    return throwError(error || 'server error');
  }

  private doPut(url: string, data: any, needId: boolean, params?: any): Observable<any> {
    let options = this.getAuthHeader(needId);

    return this.http.put(url, data/*, options*/)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError(this.handleError)
      );
  }
  private getAuthHeader(needId?: boolean): HttpHeaders{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    headers.append('Content-Type', 'application/json');
    headers.append("Cache-Control", "no-cache, no-store, must-revalidate");
    headers.append("Pragma", "no-cache");
    headers.append("Expires", "0");
    return headers;
  }
}
