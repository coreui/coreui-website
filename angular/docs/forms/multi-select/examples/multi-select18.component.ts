import { Component, effect, input, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IOption, MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';

@Component({
  selector: 'docs-multi-select07',
  templateUrl: './multi-select07.component.html',
  imports: [ReactiveFormsModule, FormsModule, MultiSelectComponent, MultiSelectOptionComponent, JsonPipe]
})
export class MultiSelect07Component {
  // To replicate what's happening, simple selecte one => two => three.
  // When three is selected, our collection will change.
  // We can see that the form value is different but we still see three rendered in our selections.

  // Function that I currently implement for filtering.
  readonly callback = input<(value: number[]) => void>();
  // Filter object that gets passed in with options.
  // This would be an input instead of a signal, but this works for testing purposes
  readonly filter = signal<IOption[]>([
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
    { value: 4, label: 'Four' },
    { value: 5, label: 'Five' },
    { value: 6, label: 'Six', disabled: true },
    { value: 7, label: 'Seven' }
  ]);
  selectedOptions = signal<number[]>([5, 6]);
  // selectedBuffer = signal<number[]>([5]);

  constructor() {
    effect(() => {
      // Detect changes done to the collection of options that we're sending in.
      // Currently, not adding any checks so it just gets re-run.
      // if (this.filter().length === 0) {
      //   // If we have no options, empty the selection.
      //   this.selectedOptions.set([]);
      // }
      // this.syncSelection();
    });
  }

  syncSelection() {
    const validOptionsIds = new Set(this.filter().map((option) => option.value));
    const validOptionsSelected = this.selectedOptions().filter((option) => validOptionsIds.has(option));
    this.selectedOptions.set(validOptionsSelected);
  }

  changeCollection(): void {
    // This function is going to simulate a change in the collection, in my implementation this is done by
    // another component.
    const newOptionSet = [
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
      { value: 4, label: 'Four' },
      { value: 5, label: 'Five' },
      { value: 7, label: 'Seven' }
    ];
    this.filter.set(newOptionSet);
  }

  onSelectionChange(newValue: number[]): void {
    // The behavior I see in my application is, after running syncSelection, the changes
    // go into the multi-select, and then the multi-select emits a valueChange.
    // This valueChange that it emits is the multi-select 'correcting' the data I send in
    // to the value it has internally, instead of using the value that I passed in.

    // Emulate an event that chagnes the selection.
    if (newValue.find((option) => option === 3)) {
      this.changeCollection();
      // We know collection changed so selection should only have valid values.
      // So we filter out the wrong selections and write to the signal to pass to the multi-select.
      this.syncSelection();
    }

    // This is how I send my filter since selectedOptions will have the options the user has selected (ideally).
    // this.callback()(
    //   this.selectedOptions()
    // );
  }

  readonly selectedOptionsEffect = effect(() => {
    this.onSelectionChange(this.selectedOptions());
  });
}
