import {Component, Input, OnInit} from '@angular/core';
import {AuthServiceService} from "../../auth-service.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  addSubs(subs: number ){
    if(subs == 1){
      alert("User Subscribe changed! New Subs: Family");
    } else if(subs == 2){
      alert("User Subscribe changed! New Subs: Premium");
    }else{
      alert("User Subscribe changed! New Subs: Student");
    }
  }

}
