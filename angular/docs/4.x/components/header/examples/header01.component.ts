import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-header01',
  templateUrl: './header01.component.html',
  styleUrls: ['./header01.component.scss']
})
export class Header01Component implements OnInit {

  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
