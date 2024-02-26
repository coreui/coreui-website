import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormControlDirective, FormFloatingDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-floating-labels04',
  templateUrl: './floating-labels04.component.html',
  standalone: true,
  imports: [FormFloatingDirective, FormControlDirective, NgStyle, FormLabelDirective]
})
export class FloatingLabels04Component {}
