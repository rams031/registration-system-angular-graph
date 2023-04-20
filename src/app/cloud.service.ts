import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import Swal from 'sweetalert2';

export interface Config {
  url: string;
  body: any;
  date: any;
}

const Toast = Swal.mixin({
  toast: true,
  title: 'User Not Found',
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
});

@Injectable({
  providedIn: 'root',
})
export class CloudService {
  public serverLink: string = 'http://localhost:5000/';
  // 'https://med-inventory-service-prod.onrender.com/';

  
  private result;
  constructor(private service: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    console.log('error', error);
    if (error.status === 422 || error.status === 500 || error.status === 404) {
      const { message } = error?.error || {};
      Toast.fire({ icon: 'error', title: message });
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    observe: 'response' as 'body',
  };

  getApi(path: string): Observable<HttpResponse<any>> {
    const url: string = this.serverLink + path;
    return this.service
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  postApi(path: string, body: any): Observable<HttpResponse<any>> {
    const url: string = this.serverLink + path;
    return this.service
      .post<any>(url, body, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
