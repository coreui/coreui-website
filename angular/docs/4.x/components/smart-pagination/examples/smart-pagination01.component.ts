import { Component } from '@angular/core';

@Component({
  selector: 'docs-smart-pagination01',
  templateUrl: './smart-pagination01.component.html',
})
export class SmartPagination01Component {

public activePage = 2;

  setActivePage(page: number) {
    this.activePage = page;
  }

}
