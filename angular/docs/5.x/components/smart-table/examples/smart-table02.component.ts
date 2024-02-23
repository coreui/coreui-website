import { Component } from '@angular/core';

import usersData from './data';
import { SmartTableComponent } from '../../../../../../../coreui-angular/src/lib/smart-table/smart-table/smart-table.component';

@Component({
    selector: 'docs-smart-table02',
    templateUrl: './smart-table02.component.html',
    styleUrls: ['./smart-table02.component.scss'],
    standalone: true,
    imports: [SmartTableComponent]
})
export class SmartTable02Component {

  usersData = usersData;

}
