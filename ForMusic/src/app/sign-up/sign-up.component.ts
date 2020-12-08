import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProServiceService} from "../pro-service.service";
import {Router} from "@angular/router";
import {AuthServiceService} from "../auth-service.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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
    this.router.navigate(["../login"]);
  }


  getUsers() {
    this.service.getAllUsers().subscribe(res => {
    });
  }


  ngOnInit(): void {
    this.getUsers();
  }
}
