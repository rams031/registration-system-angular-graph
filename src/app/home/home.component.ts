import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable, map } from 'rxjs';

import { AccountService } from '../shared/Service/AccountService';
import { CrudService } from '../shared/crud.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

interface Credential {
  username: string;
  password: string;
}

interface RegisterCredential {
  id: string;
  fullName: string;
  userName: string;
  password: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private fireStore: AngularFirestore // private api: AccountService, // private service: AngularFireDatabase
  ) {}

  accountData$: Observable<any[]>;
  title: string = 'todolist';
  todoObject: any = [];
  todoName: string = '';
  todoList: string[] = ['Washing', 'Biking', 'Working', 'Teaching', 'Running'];

  ngOnInit(): void {
    // this.accountData$ = this.service.list('/account').valueChanges();
  }

  signInAccount(params: Credential) {
    const { username, password } = params || {};

    return this.fireStore
      .collection('accounts', (ref) =>
        ref.where('userName', '==', username).where('password', '==', password)
      )
      .valueChanges();
  }

  // Variables
  userCredential: Credential = {
    username: '',
    password: '',
  };

  // Actions
  addNewTodo = (data: any): any | void => this.todoList.push(data);
  handleOnchange = (event: Event | string | any) => {
    const {
      target: { value, name },
    } = event ?? {};
    const { userCredential } = this || {};
    let propHolder: any = {};
    propHolder = { ...userCredential, [name]: value };
    return (this.userCredential = propHolder);
  };

  onSubmit = (event: Event | string | any): any => {
    event.preventDefault();
    const { username, password } = this.userCredential || {};
    if (!username || !password) return alert('Make sure to fill form');

    return this.signInAccount(this.userCredential).subscribe((data: any) => {
      if (data.length > 0) {
        const { id, fullName }: RegisterCredential = data;
        localStorage.setItem('id', id);
        return location.reload();
      }
    });

    // this.service
    //   .list('/account', (ref) =>
    //     ref
    //       .orderByChild('username')
    //       .equalTo(username)
    //       .orderByChild('password')
    //       .equalTo(password)
    //   )
    //   .valueChanges()
    //   .subscribe((data) => console.log('data', data));

    // return this.apollo
    //   .mutate({
    //     mutation: LOGIN_USER,
    //     variables: this.userCredential,
    //   })
    //   .subscribe(({ data }) => console.log('val', data));
  };

  // Types;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
}
