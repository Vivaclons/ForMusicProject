import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import {AuthService2Service} from "../auth-service2.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today: number = Date.now();
  constructor(private auth: AuthServiceService, private auth2: AuthService2Service) { }

  ngOnInit(): void {
  }

  check(){
    this.auth.check();
  }

  checkA(){
    this.auth2.check();
  }
}
