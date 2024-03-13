import { Component } from '@angular/core';

import { SmartTableComponent } from '@coreui/angular';
import usersData from './data';

@Component({
  selector: 'docs-smart-table02',
  templateUrl: './smart-table02.component.html',
  standalone: true,
  imports: [SmartTableComponent]
})
export class SmartTable02Component {

  usersData = usersData;

}
