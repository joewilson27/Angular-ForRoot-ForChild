import { Component, OnInit, Input } from '@angular/core';
import { FooConfig } from './foo.config';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {

  @Input() label?: string;

  prefix?: string;

  constructor(config: FooConfig) {
    this.prefix = config.prefix;
  }
}
