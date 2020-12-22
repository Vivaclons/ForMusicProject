import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuService} from './auth-gu.service';
import {AuthGu2Service} from './auth-gu2.service';
import {UserPageComponent} from "./user-module/user-page/user-page.component";
import {AdminPageComponent} from "./admin-module/admin-page/admin-page.component";
import {LogAdminComponent} from "./log-admin/log-admin.component";
import {SupAdminPageComponent} from "./sup-admin-module/sup-admin-page/sup-admin-page.component";
import {LoginComponent} from "./login/login.component";
import {HomePageComponent} from "./home-module/home-page/home-page.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {MusicCreateComponent} from "./admin-module/admin-page/music-create/music-create.component";
import {CreateUserComponent} from "./sup-admin-module/sup-admin-page/create-user/create-user.component";


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'user', component: UserPageComponent, canActivate: [AuthGuService]},
  {path: 'admin', component: AdminPageComponent, canActivate: [AuthGu2Service]},
  {path: 'supAdmin', component: SupAdminPageComponent, canActivate: [AuthGu2Service]},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'loginAdmin', component: LogAdminComponent},
  {path: 'musicCreate', component: MusicCreateComponent},
  {path: 'createUser', component: CreateUserComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
