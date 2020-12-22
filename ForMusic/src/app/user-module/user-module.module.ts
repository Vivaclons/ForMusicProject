import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {UserPageComponent} from "./user-page/user-page.component";
import {TableComponent} from "./user-page/table/table.component";


@NgModule({
  declarations: [UserPageComponent, TableComponent],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
