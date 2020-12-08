import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import {AuthService2Service} from "../auth-service2.service";

@Component({
  selector: 'app-navigation-exit',
  templateUrl: './navigation-exit.component.html',
  styleUrls: ['./navigation-exit.component.css']
})
export class NavigationExitComponent implements OnInit {

  constructor(private auth: AuthServiceService, private auth2: AuthService2Service) { }

  ngOnInit(): void {
  }

  exit() {
    this.auth.logout();
    this.auth2.logout();
  }
}
