import { Injectable } from '@angular/core';
import { Voters } from './voters';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Account } from './account';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  account: Observable<any[]>;
  votersRef: AngularFireList<any>;
  accountRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase // private firestore: AngularFirestore
  ) // private service: AngularFirestore
  {}

  // Create Student
  AddVoter(voter: Voters) {
    this.votersRef.push({
      firstName: voter.firstName,
      lastName: voter.lastName,
    });
  }

  // Create Account
  AddAccount(account: Account) {
    this.accountRef = this.db.list('/account');
    return this.accountRef
      .push({
        fullName: account.fullName,
        username: account.userName,
        password: account.password,
        email: account.email,
        accountType: account.accountType,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  GetAccountList = () => {
    // this.votersRef =
    this.db
      .list('/account')
      .valueChanges()
      .subscribe((items) => {
        console.log(`items`, items);
      });

    return 'test';
    // return this.votersRef;
  };
}
