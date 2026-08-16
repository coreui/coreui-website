import { Component, signal } from '@angular/core';
import { LoadingButtonComponent } from '@coreui/angular';

@Component({
  selector: 'docs-loading-button03',
  templateUrl: './loading-button03.component.html',
  imports: [LoadingButtonComponent]
})
export class LoadingButton03Component {
  readonly loading = signal(new Array(4));

  onClick(idx: number): void {
    if (this.loading()[idx]) {
      clearTimeout(this.loading()[idx]);
      this.loading.update((value) => {
        value[idx] = undefined;
        return [...value];
      });
    } else {
      this.loading.update((value) => {
        value[idx] = setTimeout(() => {
          this.loading.update((v) => {
            v[idx] = undefined;
            return [...v];
          });
        }, 3000);
        return [...value];
      });
    }
  }
}
