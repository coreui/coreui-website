import { Component } from '@angular/core';
import { ChartjsComponent } from '@coreui/angular-chartjs';

@Component({
  selector: 'docs-charts02',
  templateUrl: './charts02.component.html',
  standalone: true,
  imports: [ChartjsComponent]
})
export class Charts02Component {

  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 80, 40]
      }
    ]
  };
}
