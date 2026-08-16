import { Component, computed, signal } from '@angular/core';
import { ColComponent, ProgressComponent, RowComponent, WidgetStatBComponent } from '@coreui/angular';

@Component({
  selector: 'docs-widgets02',
  templateUrl: './widgets02.component.html',
  imports: [RowComponent, ColComponent, WidgetStatBComponent, ProgressComponent]
})
export class Widgets02Component {
  readonly value = signal<number>(75.9);
  readonly valuePercent = computed(() => `${this.value()}%`);
}
