import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ResponseUsers, ResponseUpdate, ResponseUser ,ResponseCreate , RequestUpdate,RequestCreate} from './user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url ="https://reqres.in/api/users";

  constructor(private http: HttpClient) {
    
  }

  getUsers(): Observable<ResponseUsers> {

    return this.http.get<ResponseUsers>(this.url);

  }

  createUser(request: RequestCreate): Observable<ResponseCreate>
  {
    return this.http.post<ResponseCreate>(this.url,request);

  }

  getUser(id: string): Observable<ResponseUser> {
    const _url= `${this.url}/${id}`;
    return this.http.get<ResponseUser>(_url);

  }

  updateUser(id:string, request:RequestUpdate): Observable<ResponseUpdate>{
    const _url= `${this.url}/${id}`;
    return this.http.post<ResponseUpdate>(_url,request);
  }

  deleteUser(id:string): Observable<any>{
    const _url= `${this.url}/${id}`;
    return this.http.delete<ResponseUpdate>(_url);
  }
}
