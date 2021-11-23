import { Component } from '@angular/core';

@Component({
  selector: 'docs-modal02',
  templateUrl: './modal02.component.html'
})
export class Modal02Component {

  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event.visible;
  }
}
