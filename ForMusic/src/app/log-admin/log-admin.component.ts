import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../auth-service.service";
import {AuthService2Service} from "../auth-service2.service";

@Component({
  selector: 'app-log-admin',
  templateUrl: './log-admin.component.html',
  styleUrls: ['./log-admin.component.css']
})
export class LogAdminComponent implements OnInit {

  formG: FormGroup;
  constructor(private auth: AuthService2Service, private formBuilder: FormBuilder) {
    this.formG = this.formBuilder.group({
      userName: ['', Validators.required],
      passWord: ['', [Validators.required, Validators.minLength(8)]],
      // , Validators.pattern('^[A-Za-z]')
    });
  }

  login() {
    this.auth.loginAdmin(this.formG.getRawValue().userName, this.formG.getRawValue().passWord);
  }

  ngOnInit(): void {
  }
}
