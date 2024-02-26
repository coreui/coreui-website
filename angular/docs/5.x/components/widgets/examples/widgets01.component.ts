import { Component, OnInit } from '@angular/core';

import { cilArrowTop, cilOptions } from '@coreui/icons';
import { getStyle } from '@coreui/utils';
import { ChartjsComponent } from '../../../../../../../coreui-angular-chartjs/src/lib/chartjs.component';
import { RouterLink } from '@angular/router';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownMenuDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-menu/dropdown-menu.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { DropdownComponent, DropdownToggleDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown/dropdown.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { IconDirective } from '../../../../../../../coreui-icons-angular/src/lib/icon/icon.directive';
import { TemplateIdDirective } from '../../../../../../../coreui-angular/src/lib/shared/template-id.directive';
import { WidgetStatAComponent } from '../../../../../../../coreui-angular/src/lib/widget/widget-stat-a/widget-stat-a.component';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';

@Component({
    selector: 'docs-widgets01',
    templateUrl: './widgets01.component.html',
    standalone: true,
    imports: [
        RowComponent,
        ColComponent,
        WidgetStatAComponent,
        TemplateIdDirective,
        IconDirective,
        ThemeDirective,
        DropdownComponent,
        ButtonDirective,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective,
        RouterLink,
        ChartjsComponent,
    ],
})
export class Widgets01Component implements OnInit {

  icons = { cilOptions, cilArrowTop };

  data: any = {};
  options: any = {};

  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'April'
  ];

  datasets = [
    {
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-primary'),
      pointHoverBorderColor: getStyle('--cui-primary'),
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ];

  optionsDefault = {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: 30,
        max: 89,
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  };

  ngOnInit(): void {
    this.data = {
      labels: this.labels.slice(0, 7),
      datasets: this.datasets
    };
    this.options = this.optionsDefault;
  }
}
