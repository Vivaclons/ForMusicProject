import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import {HomePageComponent} from "./home-page/home-page.component";
import {InfoComponent} from "./home-page/info/info.component";
import {MillionsComponent} from "./home-page/millions/millions.component";
import {SupportComponent} from "./home-page/support/support.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [HomePageComponent, InfoComponent, MillionsComponent, SupportComponent],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
