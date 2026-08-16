import { Component } from '@angular/core';
import { type ChartData } from 'chart.js';
import { ChartjsComponent } from '@coreui/angular-chartjs';

@Component({
  selector: 'docs-charts04',
  templateUrl: './charts04.component.html',
  imports: [ChartjsComponent]
})
export class Charts04Component {
  data: ChartData = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'Angular'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  };
}
