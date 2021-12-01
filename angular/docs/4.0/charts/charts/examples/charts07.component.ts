import { Component } from '@angular/core';

@Component({
  selector: 'docs-charts07',
  templateUrl: './charts07.component.html'
})
export class Charts07Component {

  data = {
    datasets: [{
      label: 'Scatter Dataset 1',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      borderColor: 'rgb(222,99,156)',
      backgroundColor: 'rgb(231,25,69)'
    }, {
      label: 'Scatter Dataset 2',
      data: [{
        x: -1,
        y: 6
      }, {
        x: -4,
        y: 7
      }, {
        x: 9,
        y: 4
      }, {
        x: 0.7,
        y: 1.7
      }],
      borderColor: 'rgb(133,178,56)',
      backgroundColor: 'rgb(124,213,17)'
    }]
  };

}
