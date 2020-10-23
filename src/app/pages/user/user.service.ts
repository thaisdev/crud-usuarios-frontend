import { Injectable } from '@angular/core';
import { UserInterface } from 'app/models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: UserInterface[] = [
    {
      id: 1,
      name: 'Thais',
      lastName: 'Oliveira',
      email: 'email@email.com',
      birthday: new Date(),
      graduation: 1
    }
  ];

  constructor() { }

  getUsers(): Observable<UserInterface[]> {
    return new Observable((observer) => {
      observer.next(this.userList);
    });
  }

  getUser(userID: number): Observable<UserInterface> {
    return new Observable((observer) => {
      const user = this.userList.find((u) => u.id === userID);
      observer.next(user);
    });
  }

  newUser(formData: UserInterface): Observable<boolean> {
    return new Observable((observer) => {
      const userData = {
        id: Math.floor(Math.random() * 10000000),
        ...formData
      };

      this.userList.push(userData);
      observer.next(true);
    });
  }

  editUser(user: UserInterface, formData: UserInterface): Observable<boolean> {
    return new Observable((observer) => {
      const userData = {
        id: user.id,
        ...formData
      };

      const userIndex = this.userList.findIndex((u) => u.id === user.id);
      this.userList.splice(userIndex, 1, userData);

      observer.next(true);
    });
  }

  deleteUser(user: UserInterface): Observable<boolean> {
    return new Observable((observer) => {
      const userIndex = this.userList.findIndex((u) => u.id === user.id);
      this.userList.splice(userIndex, 1);

      observer.next(true);
    });
  }

}
