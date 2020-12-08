import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {ProServiceService} from "../../pro-service.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  filterAuth = '';
  filterName = '';

  formAuth: FormGroup;
  formName: FormGroup;

  limit = 3;
  page = 0;

  dataTask = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'Author', 'Year', 'min'];

  constructor(private service: ProServiceService, private formS: FormBuilder, private formI: FormBuilder) {
    this.formAuth = this.formS.group({
      Author: ['']
    });

    this.formName = this.formI.group({
      name: []
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
    this.filterAuth = this.formAuth.getRawValue().Author;
    this.service.getAllTasks(this.setFilterAndSort()).subscribe(res => {
        this.dataTask = res;
    })
  }

  setFilterName() {
    this.filterName = this.formName.getRawValue().name;
    this.service.getAllTasks(this.setFilterAndSort()).subscribe( res => {
      this.dataTask = res;
    });
  }
  changeTableList(event) {
    this.limit = event.pageSize;
    this.service.getAllTasks(this.setFilterAndSort()).subscribe(res => {
      this.dataTask = res;
    });
  }

  getTask() {
    this.service.getAllTasks(this.formAuth.getRawValue()).subscribe(res => {
      this.dataTask = res;
    })
  }

}
