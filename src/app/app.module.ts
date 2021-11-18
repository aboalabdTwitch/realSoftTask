import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import {MatListModule} from '@angular/material/list';
import { AppRoutingModule, routingComponeents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule}  from '@angular/material/card';
import {MatIconModule}  from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { CardComponent } from './components/tabs/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatGridListModule} from '@angular/material/grid-list';
import { TabsComponent } from './components/tabs/tabs.component';
import {MatButtonModule} from '@angular/material/button';
import { DataService } from './shared/data.service';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { TableComponent } from './components/tabs/table/table.component';

import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { ValidationComponent } from './components/validation/validation.component';
import { ReactiveFormsModule } from '@angular/forms';

import { DirectiveDirective } from './shared/directive.directive';
import { HttpClientModule } from '@angular/common/http';
import { AddSurveysComponent } from './components/add-surveys/add-surveys.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';






@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DialogComponent,
    TableComponent,
    routingComponeents,
    DirectiveDirective,
    AddSurveysComponent,
    LoginComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatTabsModule,
    FontAwesomeModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    ToastrModule.forRoot(), 
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
