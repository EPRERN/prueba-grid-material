import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table'; 
import { MatSortModule } from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
