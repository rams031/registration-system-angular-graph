import { Component } from '@angular/core';
import Swal from 'sweetalert2';
// import { Apollo, gql } from 'apollo-angular';

// const loginUser = gql` 
//     query LoginUser($username: String!, $password: String!) {
//         loginUser(username: $username, password: $password) {
//         message,
//         status
//     }
// }`;

interface Credential {
  username: String;
  password: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // constructor(private apollo: Apollo) { }

  // Types  
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  // Variables
  userCredential: Credential = {
    username: "",
    password: ""
  }
  title: string = 'todolist';
  todoObject: any = [];
  todoName: string = "";
  todoList: string[] = [
    'Washing',
    'Biking',
    'Working',
    'Teaching',
    'Running'
  ]

  // Actions
  addNewTodo = (data: any): any | void => this.todoList.push(data);
  handleOnchange = (event: Event | string | any) => {
    const { target: { value, name } } = event ?? {};
    const { userCredential } = this || {};
    let propHolder: any = {};
    propHolder = { ...userCredential, [name]: value };
    return this.userCredential = propHolder;
  }


  onSubmit = (event: Event | string | any): any => {
    event.preventDefault();

    const { username, password } = this.userCredential || {};
    console.log(`this.userCredential`, this.userCredential)


  }
}
