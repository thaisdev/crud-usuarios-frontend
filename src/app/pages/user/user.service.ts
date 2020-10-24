import { Injectable } from '@angular/core';
import { UserInterface } from 'app/models/user.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const url = `${environment.apiUrl}/Users`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(url);
  }

  getUser(userID: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${url}/${userID}`);
  }

  newUser(newUser: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(url, newUser);
  }

  editUser(user: UserInterface): Observable<UserInterface> {
    return this.http.put<UserInterface>(`${url}/${user.id}`, user);
  }

  deleteUser(user: UserInterface): Observable<boolean> {
    return this.http.delete<boolean>(`${url}/${user.id}`);
  }

}
