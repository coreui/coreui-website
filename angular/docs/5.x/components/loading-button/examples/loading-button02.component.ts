import { Component } from '@angular/core';
import { LoadingButtonComponent } from '../../../../../../../coreui-angular/src/lib/loading-button/loading-button.component';

@Component({
    selector: 'docs-loading-button02',
    templateUrl: './loading-button02.component.html',
    standalone: true,
    imports: [LoadingButtonComponent]
})
export class LoadingButton02Component {

  public loading = new Array(4);

  onClick(idx: number) {

    if (!!this.loading[idx]) {
      clearTimeout(this.loading[idx]);
      this.loading[idx] = undefined;
    } else {
      this.loading[idx] = setTimeout(() => {
        this.loading[idx] = undefined;
      }, 3000);
    }
  }
}
