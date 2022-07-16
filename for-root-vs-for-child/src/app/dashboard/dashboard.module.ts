import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooModule } from '../foo/foo.module';
import { DashboardComponent } from './dashboard.component';

// dashboard path ini bisa di tangkap dari parent nya
const routes = [
  { path: 'dashboardx', component: DashboardComponent}
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    FooModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
