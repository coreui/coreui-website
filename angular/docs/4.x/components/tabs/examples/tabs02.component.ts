import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-tabs02',
  templateUrl: './tabs02.component.html'
})
export class Tabs02Component implements OnInit {
  public panes = [
    { name: 'Home 01', content: 'One' },
    { name: 'Profile 02', content: 'Two' },
    { name: 'Contact 03', content: 'Three' },
    { name: 'Disabled 04', content: 'Four' }
  ];

  activePane = 0;

  onTabChange($event: number) {
    this.activePane = $event;
    console.log('onTabChange', $event);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activePane = 1;
      setTimeout(() => {
        this.activePane = 2;
        setTimeout(() => {
          this.activePane = 0;
        }, 3000);
      }, 3000);
    }, 3000);
  }
}
