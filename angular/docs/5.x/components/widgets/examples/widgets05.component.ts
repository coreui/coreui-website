import { Component } from '@angular/core';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { ColComponent, RowComponent, TextColorDirective, WidgetStatEComponent } from '@coreui/angular';

@Component({
  selector: 'docs-widgets05',
  templateUrl: './widgets05.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    WidgetStatEComponent,
    ChartjsComponent
  ]
})
export class Widgets05Component {

  barOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };

  lineOptions = {
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };

  data = [
    {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
      datasets: [
        {
          backgroundColor: '#321fdb',
          borderColor: 'transparent',
          borderWidth: 1,
          data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47]
        }
      ]
    }, {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: '#321fdb',
          borderWidth: 2,
          data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
          pointBackgroundColor: '#321fdb'
        }
      ]
    }
  ];
}
