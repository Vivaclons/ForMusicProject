import { Component, OnInit } from '@angular/core';
import {AuthGuService} from "../../auth-gu.service";
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../../login/login.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  lan = "en";
  count = 2;

  constructor(private auth: AuthGuService, private dialog: MatDialog) {
  }
  ru(count){
    if(this.count%2 == 0) {
      this.lan = "ru";
      this.count++;
    }else{
      this.lan = "en";
      this.count++;
    }
  }

}
