import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'app/models/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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
  }

}
