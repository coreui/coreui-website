import { Component } from '@angular/core';

import usersData from './_data';

@Component({
  selector: 'docs-smart-table02',
  templateUrl: './smart-table02.component.html',
  styleUrls: ['./smart-table02.component.scss']
})
export class SmartTable02Component {

  usersData = usersData;

}
