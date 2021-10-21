import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { ValidationComponent } from './components/validation/validation.component';

const routes: Routes = [
  { path: '', component: TabsComponent },
  { path: 'change', component: ValidationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponeents=[TabsComponent,ValidationComponent];
