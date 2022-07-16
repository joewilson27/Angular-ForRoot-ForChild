import { ModuleWithProviders, NgModule } from '@angular/core';
import { FooComponent } from './foo.component';
import { FooConfig } from './foo.config';

@NgModule({
  declarations: [
    FooComponent
  ],
  exports: [FooComponent]
})
export class FooModule {
  static forRoot(config: FooConfig): ModuleWithProviders<FooModule> { 
    return {
      ngModule: FooModule,
      providers: [{
        provide: FooConfig, useValue: config
      }]
    }
  }
 }
