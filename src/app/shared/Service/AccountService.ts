import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Account } from './../account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accountList: any[] = [];
  votersRef: AngularFireList<any>;
  accountRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {}

  // Create Account
  AddAccount(account: Account) {
    this.accountRef = this.db.list('/account');
    return this.accountRef
      .push({
        fullName: account.fullName,
        username: account.userName,
        password: account.password,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  // Get Account List
  GetAccountList = async () => {
    await this.db.list('/account').valueChanges().subscribe((data) => {this.accountList = data});
    return this.accountList;
    console.log('this.accountList', this.accountList);
    // return this.accountList;
  };
}
