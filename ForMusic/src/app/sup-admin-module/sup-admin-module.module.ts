import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupAdminModuleRoutingModule } from './sup-admin-module-routing.module';
import {SupAdminPageComponent} from "./sup-admin-page/sup-admin-page.component";
import {CreateUserComponent} from "./sup-admin-page/create-user/create-user.component";
import {SupTableComponent} from "./sup-admin-page/sup-table/sup-table.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [SupAdminPageComponent, CreateUserComponent, SupTableComponent],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    SupAdminModuleRoutingModule
  ]
})
export class SupAdminModuleModule { }
