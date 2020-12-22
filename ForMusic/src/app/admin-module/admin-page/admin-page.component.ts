import {
  Component,
  OnInit,
  Output, EventEmitter
} from '@angular/core';
import {AuthService2Service} from "../../auth-service2.service";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProServiceService} from "../../pro-service.service";
import {AuthServiceService} from "../../auth-service.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  ngOnInit(): void {
  }


}
