import { ChangeDetectionStrategy, Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);     // es-ES

@Component({
  selector: 'docs-date-picker15',
  templateUrl: './date-picker15.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePicker15Component {}
