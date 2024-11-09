import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http: HttpClient) { }

  getDummyData(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    return this.http.get<any>(url).pipe(
      catchError(this.handlerror)
    );
  }

  private handlerror(error: HttpErrorResponse):Observable<any>{
 
    alert("url not found");
    return throwError(error.message);
  }
  
}
