import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProServiceService} from './pro-service.service';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService2Service {
  private admin = [
    // {adminName: 'admin', password: 'pass'},
    // {adminName: 'supAdmin', password: 'pass'}
  ];
  private isAuth = false;
  constructor(private http: HttpClient, private router: Router, private service: ProServiceService) {
    this.getAllAdmin();
  }

  getAllAdmin() {
    this.service.getAllAdmin().subscribe(res => {
      this.admin = res;
    });
  }

  loginAdmin(userName, password) {
    for (let i = 0; i < this.admin.length; i++) {
      if (this.admin[i].adminName === userName && this.admin[i].password === password) {
        console.log(this.admin[i].adminName);
        this.isAuth = true;
        localStorage.setItem('adminName', this.admin[i].adminName);
        alert('Success');
        this.router.navigate(['../admin']);
        break;
      }
    }
    if(this.isAuth == false){
      alert("Error");
    }
  }

  check() {
    if (this.isAuth !== true) {
      alert('You are not authorized as Admin. Please return back');
    }
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('adminName');
    this.router.navigate(['../home']);
  }

  isAuthenticated2(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (localStorage.getItem('adminName')) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
