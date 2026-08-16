import { Component } from '@angular/core';

@Component({
  selector: 'docs-charts06',
  templateUrl: './charts06.component.html'
})
export class Charts06Component {

  data = {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Second Dataset',
      data: [{
        x: 18,
        y: 26,
        r: 27
      }, {
        x: 23,
        y: 16,
        r: 42
      }],
      backgroundColor: 'rgb(99,138,255)'
    }, {
      label: 'Third Dataset',
      data: [{
        x: 27,
        y: 22,
        r: 9
      }, {
        x: 26,
        y: 18,
        r: 24
      }],
      backgroundColor: 'rgb(71,208,66)'
    }]
  };
}
