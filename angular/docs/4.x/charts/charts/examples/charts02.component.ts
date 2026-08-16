import { Component } from '@angular/core';

@Component({
  selector: 'docs-charts02',
  templateUrl: './charts02.component.html'
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
