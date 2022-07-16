import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FooConfig } from './foo/foo.config';
import { FooModule } from './foo/foo.module';
import { UsersModule } from './users/users.module';

// { path: 'usersx', loadChildren: 'app/users/users.module#UsersModule' }, // old
const routes : Routes = [
  { path: '', redirectTo: 'dashboardx', pathMatch: 'full' },
  { 
    path: 'usersx', 
    loadChildren: () => import('./users/users.module').then(x => x.UsersModule) // lazy module, set from parent instead of its module
  }
  
];
// https://www.youtube.com/watch?v=Mtp0Ijw3lSE&ab_channel=DirkLuijk minutes 05:00
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FooModule.forRoot({
      prefix: 'Custom prefix'
    }),
    RouterModule.forRoot(routes),
    DashboardModule,
    // UsersModule // let's use a lazy routing...
  ],
  bootstrap: [AppComponent],
  // providers: [{
  //   provide: FooConfig, useValue: {
  //     prefix: "Custom prefix"
  //   }
  // }]
})
export class AppModule { }
