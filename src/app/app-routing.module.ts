import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSurveysComponent } from './components/add-surveys/add-surveys.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ValidationComponent } from './components/validation/validation.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'main', component: HeaderComponent ,canActivate:[AuthGuard]},
  { path: 'change', component: ValidationComponent,canActivate:[AuthGuard] },
  { path: 'add', component: AddSurveysComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {path: 'logout', component: LoginComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponeents=[TabsComponent,ValidationComponent,AddSurveysComponent];
