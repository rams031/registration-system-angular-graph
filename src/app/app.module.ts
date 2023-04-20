import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpLink } from 'apollo-angular/http';

import { AppRoutingModule } from './app-routing.module';
// import { HomeComponent } from './home/home.component';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { TableModule } from 'ngx-easy-table';

// Components
import { environment } from '../environments/environment';

// Route
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { TableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormInvalidComponent } from './Components/Form/form-invalid/form-invalid.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './AuthRoutes/login/login.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    AdminComponent,
    AccountComponent,
    TableComponent,
    FormInvalidComponent,
    CategoryComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
    FontAwesomeModule,
    StoreModule.forFeature(CounterFeature),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
