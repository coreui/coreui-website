import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-checks-radios01',
  templateUrl: './checks-radios01.component.html',
  styleUrls: ['./checks-radios01.component.scss']
})
export class ChecksRadios01Component implements OnInit {
  checked: any = undefined;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.checked = true;
      this.cdr.markForCheck();
      setTimeout(() => {
        this.checked = false;
        this.cdr.markForCheck();
        setTimeout(() => {
          this.checked = undefined;
          this.cdr.markForCheck();
        }, 3000)
      }, 3000)
    }, 3000)
  }

  onClick($event: any) {
    console.log($event, $event.target, $event.target.value, $event.target.checked)
  }
}
