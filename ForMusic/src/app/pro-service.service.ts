import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProServiceService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/users');
  }

  getAllUsers1(page: string): Observable<any> {
    return this.http.get('http://localhost:3000/users?' + page + '&_sort=name&_order=desc');
  }

  deleteUser(id) {
    return this.http.delete('http://localhost:3000/users/' + id);
  }

  createUser(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', user);
  }

  getAllSubs(): Observable<any> {
    return this.http.get('http://localhost:3000/roles');
  }

  getAllAdmin(): Observable<any> {
    return this.http.get('http://localhost:3000/admin');
  }

  createTask(task: any) {
    return this.http.post('http://localhost:3000/tasks', task);
  }

  getAllTasks(page: string): Observable<any> {
    return this.http.get('http://localhost:3000/tasks?' + page + '&_sort=name&_order=desc');
  }

  getAllTasks1(): Observable<any> {
    return this.http.get('http://localhost:3000/tasks');
  }

  deleteTask(id) {
    return this.http.delete('http://localhost:3000/tasks/' + id);
  }


}
