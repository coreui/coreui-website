# React Form Controls

> React input and textarea components. Give textual form controls like `<input>`s and `<textarea>`s an upgrade with custom styles, sizing, focus states, and more.

## Example

```html
import { CForm, CFormInput, CFormLabel, CFormTextarea } from '@coreui/react'

export const FormControlExample = () => (
  <CForm>
    <div className="mb-3">
      <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
      <CFormInput type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div className="mb-3">
      <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
      <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
    </div>
  </CForm>
)
```

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
import { CFormInput } from '@coreui/react'

export const FormControlSizingExample = () => (
  <>
    <CFormInput type="text" size="lg" placeholder="Large input" aria-label="lg input example" />
    <CFormInput type="text" placeholder="Default input" aria-label="default input example" />
    <CFormInput type="text" size="sm" placeholder="Small input" aria-label="sm input example" />
  </>
)
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
import { CFormInput } from '@coreui/react'

export const FormControlDisabledExample = () => (
  <>
    <CFormInput
      type="text"
      placeholder="Disabled input"
      aria-label="Disabled input example"
      disabled
    />
    <CFormInput
      type="text"
      placeholder="Disabled readonly input"
      aria-label="Disabled input example"
      disabled
      readOnly
    />
  </>
)
```

## Readonly

Add the `readOnly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

```html
import { CFormInput } from '@coreui/react'

export const FormControlReadonlyExample = () => (
  <CFormInput
    type="text"
    placeholder="Readonly input here..."
    aria-label="readonly input example"
    readOnly
  />
)
```

## Readonly plain text

If you want to have `<input readonly>` elements in your form styled as plain text, use the `plainText` boolean property to remove the default form field styling and preserve the correct margin and padding.

```html
import { CCol, CFormInput, CFormLabel, CRow } from '@coreui/react'

export const FormControlReadonlyPlainTextExample = () => (
  <>
    <CRow className="mb-3">
      <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">
        Email
      </CFormLabel>
      <CCol sm={10}>
        <CFormInput
          type="text"
          id="staticEmail"
          defaultValue="email@example.com"
          readOnly
          plainText
        />
      </CCol>
    </CRow>
    <CRow className="mb-3">
      <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">
        Password
      </CFormLabel>
      <CCol sm={10}>
        <CFormInput type="password" id="inputPassword" />
      </CCol>
    </CRow>
  </>
)
```

```html
import { CButton, CCol, CForm, CFormInput, CFormLabel } from '@coreui/react'

export const FormControlReadonlyPlainTextInlineExample = () => (
  <CForm className="row g-3">
    <CCol xs="auto">
      <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
        Email
      </CFormLabel>
      <CFormInput
        type="text"
        id="staticEmail2"
        defaultValue="email@example.com"
        readOnly
        plainText
      />
    </CCol>
    <CCol xs="auto">
      <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
        Password
      </CFormLabel>
      <CFormInput type="password" id="inputPassword2" placeholder="Password" />
    </CCol>
    <CCol xs="auto">
      <CButton color="primary" type="submit" className="mb-3">
        Confirm identity
      </CButton>
    </CCol>
  </CForm>
)
```

## File input

```html
import { CFormInput, CFormLabel } from '@coreui/react'

export const FormControlFileInputExample = () => (
  <>
    <div className="mb-3">
      <CFormLabel htmlFor="formFile">Default file input example</CFormLabel>
      <CFormInput type="file" id="formFile" />
    </div>
    <div className="mb-3">
      <CFormLabel htmlFor="formFileMultiple">Multiple files input example</CFormLabel>
      <CFormInput type="file" id="formFileMultiple" multiple />
    </div>
    <div className="mb-3">
      <CFormLabel htmlFor="formFileDisabled">Disabled file input example</CFormLabel>
      <CFormInput type="file" id="formFileDisabled" disabled />
    </div>
    <div className="mb-3">
      <CFormLabel htmlFor="formFileSm">Small file input example</CFormLabel>
      <CFormInput type="file" size="sm" id="formFileSm" />
    </div>
    <div>
      <CFormLabel htmlFor="formFileLg">Large file input example</CFormLabel>
      <CFormInput type="file" size="lg" id="formFileLg" />
    </div>
  </>
)
```

## Color

```html
import { CFormInput, CFormLabel } from '@coreui/react'

export const FormControlColorExample = () => (
  <>
    <CFormLabel htmlFor="exampleColorInput">Color picker</CFormLabel>
    <CFormInput
      type="color"
      id="exampleColorInput"
      defaultValue="#563d7c"
      title="Choose your color"
    />
  </>
)
```

## API

### CFormInput

```jsx
import { CFormInput } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `delay` | `number \| boolean` | `false` | Delay onChange event while typing. If set to true onChange event will be delayed 500ms, you can also provide the number of milliseconds you want to delay the onChange event. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `ReactNode` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | - | Method called immediately after the `value` prop changes. |
| `plainText` | `boolean` | - | Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `size` | `"sm" \| "lg"` | - | Size the component small or large. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `type` | `string` | `text` | Specifies the type of component. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `value` | `string \| number \| string[]` | - | The `value` attribute of component. |

### CFormTextarea

```jsx
import { CFormTextarea } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `ReactNode` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `onChange` | `ChangeEventHandler<HTMLTextAreaElement>` | - | Method called immediately after the `value` prop changes. |
| `plainText` | `boolean` | - | Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `value` | `string \| number \| string[]` | - | The `value` attribute of component. |
