import { ChangeDetectionStrategy, Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { ColComponent, DatePickerComponent, RowComponent } from '@coreui/angular';

registerLocaleData(localeEs);     // es-ES

@Component({
  selector: 'docs-date-picker15',
  templateUrl: './date-picker15.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RowComponent, ColComponent, DatePickerComponent]
})
export class DatePicker15Component {}
