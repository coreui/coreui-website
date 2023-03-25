import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

import { cilPaperclip, cilFolderOpen } from '@coreui/icons';
import { IOption } from '@coreui/angular';
import { OptionsRemoteService } from './optionsRemote.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'docs-multi-select14',
  templateUrl: './multi-select14.component.html',
  providers: [OptionsRemoteService]
})
export class MultiSelect14Component {
  icons = { cilPaperclip, cilFolderOpen };

  options$: Observable<IOption[]>;
  readonly searchValue$ = new BehaviorSubject<string>('');

  formGroup = new FormGroup({
    sampleSelect: new FormControl<string[]>(['200'])
  });

  constructor(
    private optionsService: OptionsRemoteService
  ) {
    this.options$ = this.optionsService.search(this.searchValue$).pipe(
      map(next => {
        return next.map(option => {
          const value = option.id.toString().trim();
          const label = option.last_name;
          const text = `${option.last_name} [${value}]`;
          return { value, label, text };
        });
      })
    );
  }

  handleValueChange($event: any) {
    console.log('handleValueChange', $event);
  }
}
