import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { GraduationEnum } from 'app/models/graduation.enum';
import { UserInterface } from 'app/models/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public GraduationEnum = GraduationEnum;

  public users: UserInterface[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(
        (userList: UserInterface[]) => {
          this.users = userList;
        }
      )
  }

  deleteUser(user: UserInterface): void {
    this.userService.deleteUser(user)
      .subscribe(
        (res: any) => {
          this.getUsers();
        }
      )
  }

}
