import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

interface AccountCredential {
  id: string;
  fullName: string;
  userName: string;
  password: string;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.pug',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  private accountCollection: AngularFirestoreCollection<any>;
  public accountList: Observable<any[]>;
  public title: string = 'Accounts';
  public columns: { field: any; fieldName: any }[];
  public f: any;
  public modalSwitch: boolean = false;

  constructor(private fireStore: AngularFirestore) {}

  ngOnInit(): void {
    this.accountCollection =
      this.fireStore.collection<AccountCredential[]>('accounts');
    this.accountList = this.accountCollection.valueChanges();

    this.columns = [
      { field: 'fullName', fieldName: 'Full Name' },
      { field: 'userName', fieldName: 'User Name' },
      { field: 'password', fieldName: 'Password' },
      { field: 'email', fieldName: 'Email' },
      { field: 'accountType', fieldName: 'Account Type' },
    ];
  }

  public changeModalViewStatus = () => (this.modalSwitch = !this.modalSwitch);
  public onSubmit = (f) => {
    const {
      valid,
      form: { value },
    } = f || {};
    if (!valid) return false;

    return this.accountCollection
      .add({ ...value, id: uuidv4() })
      .then(() => this.changeModalViewStatus());
  };
}
