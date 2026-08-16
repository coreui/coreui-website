import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';
import { MultiSelect17OptionsService } from './multi-select17-options.service';

@Component({
  selector: 'docs-multi-select17',
  standalone: true,
  imports: [ReactiveFormsModule, MultiSelectComponent, MultiSelectOptionComponent, AsyncPipe, JsonPipe],
  templateUrl: './multi-select17.component.html',
  providers: [MultiSelect17OptionsService]
})
export class MultiSelect17Component {
  readonly formGroup = new FormGroup({
    country: new FormControl<string[]>([]),
    user: new FormControl<string>('', [Validators.required])
  });
  formControls = Object.keys(this.formGroup.controls);

  optionsService = inject(MultiSelect17OptionsService);

  constructor() {
    // this.formGroup.events
    //   .pipe(
    //     filter((event) => event instanceof ValueChangeEvent && event.source instanceof FormGroup),
    //     takeUntilDestroyed()
    //   )
    //   .subscribe((controlEvent) => {
    //     if (controlEvent instanceof ValueChangeEvent) {
    //       const countriesSelected = controlEvent.value.country.length > 0;
    //       const userFormControl = this.formGroup.get('user');
    //       if (countriesSelected && userFormControl?.disabled) {
    //         userFormControl?.enable();
    //       } else if (!countriesSelected && userFormControl?.enabled) {
    //         userFormControl?.disable();
    //       }
    //     }
    //   });
  }

  handleValueChange($event: any) {
    this.optionsService.getUsers($event);
    // this.formGroup.reset({ country: $event, user: [] });
    this.formGroup.patchValue({ user: '' });
    // this.formGroup.get('user')?.patchValue([]);
  }
}
