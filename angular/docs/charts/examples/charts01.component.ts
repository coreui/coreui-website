import { Component, DestroyRef, inject, signal } from '@angular/core';
import { type ChartData } from 'chart.js';
import { ChartjsComponent } from '@coreui/angular-chartjs';

@Component({
  selector: 'docs-charts01',
  templateUrl: './charts01.component.html',
  imports: [ChartjsComponent]
})
export class Charts01Component {
  readonly #destroyRef = inject(DestroyRef);
  #timeoutID: ReturnType<typeof setTimeout> | undefined = undefined;

  constructor() {
    this.#destroyRef.onDestroy(() => {
      clearTimeout(this.#timeoutID);
    });
  }

  readonly data = signal<ChartData>({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [40, 20, 12, 39, 10, 80, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [50, 12, 28, 29, 7, 25, 60]
      }
    ]
  });

  handleChartRef($chartRef: any) {
    if ($chartRef) {
      console.log('handleChartRef', $chartRef);
      this.#timeoutID = setTimeout(() => {
        this.data.update((data) => {
          data.labels?.push('August');
          data.datasets[0].data.push(60);
          data.datasets[1].data.push(20);
          return data;
        });
        $chartRef?.update();
        this.#timeoutID = undefined;
      }, 5000);
    }
  }
}
