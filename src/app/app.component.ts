import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface Credential {
  username: String;
  password: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  condition: boolean | any = true;
  isAuthenticated: any = Observable;
  constructor() {}

  ngOnInit(): void {
    this.isAuthenticated = localStorage.getItem('id');
  }

  // Variables
  // userCredential: Credential = {
  //   username: '',
  //   password: '',
  // };

  // title: string = 'todolist';
  // todoObject: any = [];
  // todoName: string = '';
  // todoList: string[] = ['Washing', 'Biking', 'Working', 'Teaching', 'Running'];

  // Actions
  // addNewTodo = (data: any): any | void => this.todoList.push(data);
  // handleOnchange = (event: Event | string | any) => {
  //   const { target: { value, name } } = event ?? {};
  //   const { userCredential } = this || {};
  //   let propHolder: any = {};
  //   propHolder = { ...userCredential, [name]: value };
  //   return this.userCredential = propHolder;
  // }

  // onSubmit = (event: Event | string | any): any => {
  //   event.preventDefault();
  //   const { username, password } = this.userCredential || {};
  //   if (!username || !password) return alert('Make sure to fill form');
  //   return this.apollo
  //     .mutate({
  //       mutation: LOGIN_USER,
  //       variables: this.userCredential,
  //     })
  //     .subscribe(({ data }) => console.log('val', data));
  // };

  // // Types
  // Toast = Swal.mixin({
  //   toast: true,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer);
  //     toast.addEventListener('mouseleave', Swal.resumeTimer);
  //   },
  // });
}
