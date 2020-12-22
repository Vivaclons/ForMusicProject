import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SupAdminPageComponent} from "./sup-admin-page/sup-admin-page.component";


const routes: Routes = [
  {path: '', component: SupAdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupAdminModuleRoutingModule { }
