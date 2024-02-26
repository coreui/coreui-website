import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../../../../../coreui-angular/src/lib/footer/footer.component';

@Component({
    selector: 'docs-footer01',
    templateUrl: './footer01.component.html',
    styleUrls: ['./footer01.component.scss'],
    standalone: true,
    imports: [FooterComponent]
})
export class Footer01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
