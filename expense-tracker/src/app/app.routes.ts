import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InsightsComponent } from './components/insights/insights.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
