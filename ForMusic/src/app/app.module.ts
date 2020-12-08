import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserPageComponent} from "./user-page/user-page.component";
import {MillionsComponent} from "./home-page/millions/millions.component";
import {InfoComponent} from "./home-page/info/info.component";
import {LogAdminComponent} from "./log-admin/log-admin.component";
import {SupAdminPageComponent} from "./sup-admin-page/sup-admin-page.component";
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {LoginComponent} from "./login/login.component";
import {FooterComponent} from "./footer/footer.component";
import {NavigationExitComponent} from "./navigation-exit/navigation-exit.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {SupportComponent} from "./home-page/support/support.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {Translate1Pipe} from "./translate1.pipe";
import {TranslatePipe} from "./translate.pipe";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { TableComponent } from './user-page/table/table.component';
import { AdminTableComponent } from './admin-page/admin-table/admin-table.component';
import {MusicCreateComponent} from "./admin-page/music-create/music-create.component";
import { SupTableComponent } from './sup-admin-page/sup-table/sup-table.component';
import { CreateUserComponent } from './sup-admin-page/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    AdminPageComponent,
    SupAdminPageComponent,
    LoginComponent,
    SignUpComponent,
    LogAdminComponent,
    NavigationBarComponent,
    FooterComponent,
    TranslatePipe,
    Translate1Pipe,
    InfoComponent,
    MillionsComponent,
    SupportComponent,
    NavigationExitComponent,
    TableComponent,
    AdminTableComponent,
    MusicCreateComponent,
    SupTableComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  entryComponents: []
  ,
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
