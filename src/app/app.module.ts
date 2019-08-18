import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { TodoChocoblastComponent } from './todo-chocoblast/todo-chocoblast.component';
import { TodoReadComponent } from './todo-read/todo-read.component';
import { TodoMeetingComponent } from './todo-meeting/todo-meeting.component';
import { ReactiveFormsModule, FormsModule } from  '@angular/forms';
// MATERIAL
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { REDUCER_TOKEN, getReducers } from './Store';
import { StoreModule } from '@ngrx/store';
// NGRX


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent,

    TodoChocoblastComponent,
    TodoReadComponent,
    TodoMeetingComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(REDUCER_TOKEN)
  ],
  providers: [{
    provide: REDUCER_TOKEN,
    useFactory: getReducers
  }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
