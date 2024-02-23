import { Component } from '@angular/core';
import { ChartjsComponent } from '@coreui/angular-chartjs';

@Component({
  selector: 'docs-charts05',
  templateUrl: './charts05.component.html',
  standalone: true,
  imports: [ChartjsComponent]
})
export class Charts05Component {

  data = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
      }
    ]
  };
}
