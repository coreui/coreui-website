import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import usersData from './data';
import { IItem } from '@coreui/angular';

@Component({
  selector: 'docs-smart-table07',
  templateUrl: './smart-table07.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartTable07Component {

  readonly selectedItemsCount = signal(0);

  protected readonly usersData = usersData.map((item) => {
    const { name, registered, role, status, ...rest } = item;
    return { name, registered, role, status };
  });

  onSelectedItemsChange(selectedItems: IItem[]) {
    this.selectedItemsCount.set(selectedItems.length ?? 0);
  }
}
