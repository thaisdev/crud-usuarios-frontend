import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { UserInterface } from 'app/models/user.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  user: UserInterface;
  today: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      graduation: [0, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap => {
      const userID = parseInt(paramMap.get('id'), 10);

      if (userID) {
        this.getUser(userID);
      }
    }));
  }

  getUser(userID: number): void {
    this.userService.getUser(userID)
      .subscribe(
        (user: UserInterface) => {
          this.user = user;
          this.fillForm();
        }
      )
  }

  fillForm(): void {
    this.form.patchValue(this.user);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let formValue = this.form.value;
    formValue.graduation = parseInt(formValue.graduation);  
    this.user = {...this.user, ...formValue}; 

    if (this.user.id) {
      this.edit();
    } else {
      this.user.id = null;
      this.save();
    }
  }

  save(): void {
    this.userService.newUser(this.user)
      .subscribe(
        (res: any) => {
          this.router.navigate(['/user/list'])
        }
      )
  }

  edit(): void {
    this.userService.editUser(this.user)
      .subscribe(
        (res: any) => {
          this.router.navigate(['/user/list'])
        }
      )
  }

}
