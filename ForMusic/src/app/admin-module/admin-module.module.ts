import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {AdminTableComponent} from "./admin-page/admin-table/admin-table.component";
import {MusicCreateComponent} from "./admin-page/music-create/music-create.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [AdminPageComponent, AdminTableComponent, MusicCreateComponent],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
