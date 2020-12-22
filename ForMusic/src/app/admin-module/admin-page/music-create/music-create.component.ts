import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../../auth-service.service";
import {ProServiceService} from "../../../pro-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-music-create',
  templateUrl: './music-create.component.html',
  styleUrls: ['./music-create.component.css']
})
export class MusicCreateComponent implements OnInit {

  new = false;
  formG: FormGroup;

  constructor(private auth: AuthServiceService, private formBuilder: FormBuilder, private service: ProServiceService, private router: Router) {
    this.formG = this.formBuilder.group({
      name: ['', Validators.required],
      Author: ['', Validators.required],
      Year: ['', Validators.required],
      min: ['', Validators.required]
    });
    this.new = true;
  }

  create() {
    this.formG.getRawValue();
    this.service.createTask(this.formG.getRawValue()).subscribe(result => {
      this.getUsers();
    });
    alert("Success!");
    this.router.navigate(["../admin"]);
  }


  getUsers() {
    this.service.getAllTasks1().subscribe(res => {
    });
  }


  ngOnInit(): void {
    this.getUsers();
  }
}
