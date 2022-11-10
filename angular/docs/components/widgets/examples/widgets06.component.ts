import { Component, OnInit } from '@angular/core';
import { cilChartPie } from '@coreui/icons';

@Component({
  selector: 'docs-widgets06',
  templateUrl: './widgets06.component.html',
  styles: [
  ]
})
export class Widgets06Component implements OnInit {

  icons = { cilChartPie };

  constructor() { }

  ngOnInit(): void {
  }

}
