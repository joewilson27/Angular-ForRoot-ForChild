import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooModule } from '../foo/foo.module';
import { UsersComponent } from './users.component';

// dashboard path ini bisa di tangkap dari parent nya
// { path: 'usersx', component: UsersComponent} // old
const routes = [
  { path: '', component: UsersComponent}
]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    FooModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
