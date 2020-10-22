import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'app/models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: Array<UserInterface> = [
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

  ngOnInit(): void {
    console.log(this.users);
  }

}
