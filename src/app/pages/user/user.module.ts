import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UserRoutingModule } from './user.routing.module';



@NgModule({
  declarations: [UserComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
