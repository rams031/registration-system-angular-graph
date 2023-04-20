import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, catchError, map, observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CloudService } from 'src/app/cloud.service';
import Swal from 'sweetalert2';

interface loginCredential {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private service: HttpClient,
    private api: CloudService,
    private router: Router
  ) {}
  public accountData: Observable<HttpResponse<any>>;

  ngOnInit(): void {
    this.accountData = this.api.getApi('account') ?? [];
  }

  public httpService: any;
  public result: HttpResponse<any>;

  public onSubmit = (f: any): void | boolean => {
    const Toast = Swal.mixin({
      toast: true,
      title: 'User Not Found',
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
    });

    const { valid, form }: { valid: boolean; form: any } = f || {};
    const { value }: { value: loginCredential } = form || {};
    if (!valid) return false;

    this.api
      .postApi('account/login', value)
      .subscribe((res: HttpResponse<any>) => {
        const { status, body }: HttpResponse<any> = res || {};
        if (body.length === 0)
          return Toast.fire({
            icon: 'error',
            title: 'User Not Found',
          });

        if (status === 201) {
          const { data } = body || {};
          const { tokenBearer } = data || {};
          console.log('body', body);
          localStorage.setItem('token', tokenBearer);
          // return this.router.navigate(['/adminportal/dashboard']);
        }
      });
  };
}
