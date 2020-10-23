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
      email: ['', [Validators.required]],
      graduation: ['', [Validators.required]],
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

    if (this.user) {
      this.edit();
    } else {
      this.save();
    }
  }

  save(): void {
    this.userService.newUser(this.form.value)
      .subscribe(
        (res: any) => {
          this.router.navigate(['/user/list'])
        }
      )
  }

  edit(): void {
    this.userService.editUser(this.user, this.form.value)
      .subscribe(
        (res: any) => {
          this.router.navigate(['/user/list'])
        }
      )
  }

}
