import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'edit/:id',
        component: FormComponent
      },
      {
        path: 'new',
        component: FormComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
}];

export const UserRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
