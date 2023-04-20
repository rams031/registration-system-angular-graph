import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface RegisterCredential {
  id: string;
  fullName: string;
  userName: string;
  password: string;
}

interface Credential {
  username: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  private accountCollection: AngularFirestoreCollection<any>;
  accountList: Observable<any[]>;

  constructor(private fireStore: AngularFirestore, private router: Router) {
    this.accountCollection = fireStore.collection<RegisterCredential[]>('accounts');
    this.accountList = this.accountCollection.valueChanges();
  }

  ngOnInit(): void {}

  addItem(params: RegisterCredential) {
    return this.accountCollection.add(params).then((res) => res);
  }

  RegisterCredential: RegisterCredential = {
    id: '',
    fullName: '',
    userName: '',
    password: '',
  };

  arrayMap: RegisterCredential[];

  onSubmit = (event: Event | string | any): any => {
    event.preventDefault();
    const { fullName, userName, password } = this.RegisterCredential || {};

    if (!fullName || !userName || !password) {
      return Swal.fire({
        icon: 'error',
        title: 'Make sure to fill up all fields',
      });
    }

    return this.addItem({ ...this.RegisterCredential, id: uuidv4() }).then(
      (res) => {
        if (res && res.id) {
          Swal.fire({
            icon: 'error',
            title: 'Make sure to fill up all fields',
          });

          this.RegisterCredential = {
            id: '',
            fullName: '',
            userName: '',
            password: '',
          };

          return this.router.navigateByUrl('/login');
        }
      }
    );
  };
}
