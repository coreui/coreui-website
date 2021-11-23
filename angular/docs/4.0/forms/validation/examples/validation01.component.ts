import { Component } from '@angular/core';

@Component({
  selector: 'docs-validation01',
  templateUrl: './validation01.component.html'
})
export class Validation01Component {
  customStylesValidated = false;

    onSubmit1() {
    this.customStylesValidated = true;
    console.log('Submit... 1');
  }

  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }
}
