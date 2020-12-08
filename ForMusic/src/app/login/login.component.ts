import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formG: FormGroup;
  constructor(private auth: AuthServiceService, private formBuilder: FormBuilder) {
    this.formG = this.formBuilder.group({
      userName: ['', Validators.required],
      passWord: ['', [Validators.required, Validators.minLength(8)]],
      // , Validators.pattern('^[A-Za-z]')
    });
  }
  login() {
    this.auth.login(this.formG.getRawValue().userName, this.formG.getRawValue().passWord);
  }

  ngOnInit(): void {
  }

}
