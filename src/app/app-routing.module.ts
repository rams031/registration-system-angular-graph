import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './AuthRoutes/login/login.component';
import { AuthGuard } from './auth.guard';

export const adminChildRoutes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'accounts',
    component: AccountComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
];

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'adminportal',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: adminChildRoutes,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
