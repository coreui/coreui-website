import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressComponent } from '@coreui/angular';

@Component({
  selector: 'docs-progress-css',
  imports: [NgStyle, ProgressComponent],
  templateUrl: './progress-css.component.html'
})
export class ProgressCssComponent {}
