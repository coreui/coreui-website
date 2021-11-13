import { Component } from '@angular/core';

@Component({
  selector: 'docs-validation05',
  templateUrl: './validation05.component.html'
})
export class Validation05Component {

  tooltipValidated = false;

  onSubmit3() {
    this.tooltipValidated = true;
    console.log('Submit... 3');
  }

  onReset3() {
    this.tooltipValidated = false;
    console.log('Reset... 3');
  }

}
