import { Injectable } from '@angular/core';
import {ProServiceService} from './pro-service.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private users = [];
  private isAuth = false;
  constructor(private router: Router, private service: ProServiceService) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  login(userName, password) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userName === userName && this.users[i].password === password) {
        this.isAuth = true;
        localStorage.setItem('userName', this.users[i].userName);
        alert('Success');
        this.router.navigate(['../user']);
        break;
      }
    }
    if(this.isAuth == false){
      alert("Error");
    }
  }


  check() {
    if (this.isAuth !== true) {
      alert('You are not authorized as User. Please return back');
    }
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('userName');
    this.router.navigate(['../home']);
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (localStorage.getItem('userName')) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
        resolve(this.isAuth);
      }, 1000);
    });
  }

}
