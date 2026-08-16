import { Component } from '@angular/core';

@Component({
  selector: 'docs-validation02',
  templateUrl: './validation02.component.html'
})
export class Validation02Component {
  browserDefaultsValidated = false;

  onSubmit2() {
    this.browserDefaultsValidated = true;
    console.log('Submit... 2');
  }

  onReset2() {
    this.browserDefaultsValidated = false;
    console.log('Reset... 3');
  }
}
