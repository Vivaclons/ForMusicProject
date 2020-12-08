import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {AuthServiceService} from "../../auth-service.service";
import {AuthService2Service} from "../../auth-service2.service";
import {ProServiceService} from "../../pro-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sup-table',
  templateUrl: './sup-table.component.html',
  styleUrls: ['./sup-table.component.css']
})
export class SupTableComponent implements OnInit {

  filterAuth = '';
  filterName = '';

  formAuth: FormGroup;
  formName: FormGroup;
  limit = 3;
  page = 0;
  dataTask = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'Name', 'Surname', 'userName', 'password', 'action'];

  constructor(private auth2: AuthServiceService, private auth: AuthService2Service, private service: ProServiceService, private formS: FormBuilder, private formI: FormBuilder, private router: Router) {
    this.formAuth = this.formS.group({
      userName: ['']
    });

    this.formName = this.formI.group({
      Name: []
    });
  }
  ngOnInit(): void {
    this.getTask();
  }

  setFilterAndSort() {
    let str = '_page=' + this.page + '&_limit=' + this.limit;
    if (this.filterAuth !== '' && this.filterAuth !== null && this.filterAuth !== 'none') {
      str += '&Author=' + this.filterAuth;
    }
    if (this.filterName !== '' && this.filterName !== null) {
      str += '&name=' + this.filterName;
    }
    return str;
  }

  setFilterAuthor() {
    this.filterAuth = this.formAuth.getRawValue().userName;
    this.service.getAllUsers1(this.setFilterAndSort()).subscribe( res => {
      this.dataTask = res;
    });
  }

  setFilterName() {
    this.filterName = this.formName.getRawValue().Name;
    this.service.getAllUsers1(this.setFilterAndSort()).subscribe( res => {
      this.dataTask = res;
    });
  }

  changeTableList(event) {
    this.limit = event.pageSize;
    this.service.getAllUsers1(this.setFilterAndSort()).subscribe(res => {
      this.dataTask = res;
    });
  }

  getTask() {
    this.service.getAllUsers1(this.formName.getRawValue()).subscribe(res => {
      this.dataTask = res;
    });
    // this.service.getAllTasks(this.setFilterAndSort()).subscribe(res => {
    //   this.dataTask = res;
    // });
  }

  delete(id) {
    this.service.deleteUser(id).subscribe(res => {
      this.getTask();
    }, error => {
      console.error(error);
    });
  }

  // update
  update(task: any) {
    // this.dialog.open(DialogBox2Component, {
    //   width: '450px',
    //   data: task
    // }).afterClosed().subscribe(res => {
    //   this.service.updateTask(res).subscribe(result =>
    //     this.getTask());
    // });
  }

  create() {
    this.router.navigate(["../createUser"]);
  }

}
