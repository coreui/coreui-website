# Vue Password Strength Component API

> Explore the API reference for the Vue Password Strength component and discover how to effectively utilize its props for customization.

## CPasswordStrength

```jsx
import { CPasswordStrength } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `busyLabel` | `string` | `'Checking…'` | Text announced while an asynchronous scorer is pending. |
| `debounce` | `number` | `200` | Milliseconds to wait after the last change before evaluating. |
| `levels` | `string[]` | `() => ['Very weak', 'Weak', 'Fair', 'Good', 'Strong']` | Labels for the strength levels, weakest first. The meter renders one segment fewer than there are levels, and a score above the last label is clamped to it. |
| `minLength` | `number` | `8` | Minimum length the built-in scorer awards points for. |
| `scorer` | `(password: string, userInputs: string[]) => StrengthResult \| Promise<StrengthResult>` | `undefined` | Custom scorer - return a score (or `{ score, warning, suggestions }`), or a promise resolving to one. |
| `thresholds` | `number[]` | `() => [2, 4, 6]` | Point thresholds between the built-in scorer's levels. A threshold left out keeps its default. |
| `userInputs` | `string[] \| (() => string[])` | `() => []` | Words the password must not contain - the user's name, e-mail, the site name. Pass a function to read them lazily. |
| `value` | `string` | `''` | The password to evaluate. |
| `weights` | `Record<string, number>` | `() => ({ minLength: 1, extraLength: 1, longPassword: 1, lowercase: 1, uppercase: 1, numbers: 1, special: 1, multipleSpecial: 1, })` | Points the built-in scorer awards per fulfilled rule. A rule left out keeps its default, so the object is a set of overrides rather than a replacement. |

### Events

| Name | Description |
| --- | --- |
| `strength-change` | Callback fired when the computed score changes. The password is masked. |
