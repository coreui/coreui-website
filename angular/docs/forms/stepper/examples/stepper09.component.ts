import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { StepperComponent, StepperStepComponent } from '@coreui/angular';

@Component({
  selector: 'docs-stepper09',
  imports: [NgStyle, StepperComponent, StepperStepComponent],
  templateUrl: './stepper09.component.html'
})
export class Stepper09Component {}
