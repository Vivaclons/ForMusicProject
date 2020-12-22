import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../../auth-service.service";
import {ProServiceService} from "../../../pro-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  new = false;
  formG: FormGroup;

  constructor(private auth: AuthServiceService, private formBuilder: FormBuilder, private service: ProServiceService, private router: Router) {
    this.formG = this.formBuilder.group({
      Name: ['', Validators.required],
      Surname: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.new = true;
  }

  create() {
    this.formG.getRawValue();
    this.service.createUser(this.formG.getRawValue()).subscribe(result => {
      this.getUsers();
    });
    alert("Success!");
    this.router.navigate(["../supAdmin"]);
  }


  getUsers() {
    this.service.getAllUsers().subscribe(res => {
    });
  }


  ngOnInit(): void {
    this.getUsers();
  }

}
