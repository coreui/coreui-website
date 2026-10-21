# Bootstrap 6 Password Strength

> Show how strong a password is as it is typed — a segmented meter, a label, and a pluggable scorer that can be asynchronous so a real strength estimator or a breach check can drive it.

## Example

_Added in 6.0.0._

Point the component at a password field and it renders the meter, the label and
the feedback itself. You write one empty element.

```html
<label for="strengthDemo" class="form-label">Password</label>
<input type="password" class="form-control mb-3" id="strengthDemo" data-coreui-password-input placeholder="Type a password…">
<div data-coreui-password-strength data-coreui-input="#strengthDemo"></div>
```

## How it works

- **The field stays yours.** The meter never wraps, moves or re-types the input.
  It listens for `input` and `change` and renders next to it, which is what lets
  it sit alongside [Password Input](https://coreui.io/bootstrap/docs/forms/password-input/) — that component owns
  the field's frame and visibility toggle, and the two do not compete.
- **It does not care whether the password is visible.** Revealing the value
  switches the field's `type`, and the meter keeps scoring across the toggle in
  either direction — including when it is created while the password is already
  showing.
- **The meter is built for you.** It creates the segments, the label, and the
  places a scorer's warning and suggestions go. Segments are one fewer than
  there are levels, so the top level fills the bar.
- **The score is a number from 0 to 4.** Level `0` is the worst. That is the
  same scale [zxcvbn](#zxcvbn) returns, so a real estimator drops in without a
  conversion step.
- **The meter is hidden from assistive technology** (`aria-hidden`) because it
  only restates the label. The label and its feedback sit in a polite live
  region, so a screen reader hears the verdict once, not twice.

## What the built-in scorer is worth

> **The built-in scorer is a UX hint, not a security control.** It counts length
> and character classes — lowercase, uppercase, digits, symbols. That measures
> *composition*, not how guessable a password actually is. `P@ssw0rd1` clears
> every rule it checks and is among the first passwords any attacker tries.
> 
> [NIST SP 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html) recommends
> **against** composition rules of exactly this kind, and **for** checking the
> password against lists of known-breached secrets. Do that on the server, where
> it cannot be skipped. Treat this meter as encouragement while typing, and never
> as the thing that decides whether a password is allowed.

The default scorer stays small and rule-based on purpose: a real estimator ships
a dictionary far larger than this entire library. Plug one in with `scorer`.

## Custom scorer

`scorer` replaces the built-in scoring completely. It receives the password and
the [user inputs](#user-inputs), and returns either a bare number or an object:

```js
type StrengthResult = number | { score: number, warning?: string, suggestions?: string[] }
```

Return a number when that is all you have — the simple case stays simple:

```html
<input type="password" class="form-control mb-3" id="scorerDemo" data-coreui-password-input placeholder="Length alone decides…">
<div id="scorerMeter"></div>
```

Return an object to say *why*. The `warning` and `suggestions` are rendered
below the label, and both are inserted as text — markup in them is never parsed.

```js
new coreui.PasswordStrength('#meter', {
  input: '#password',
  scorer(password) {
    if (/^[a-z]+$/.test(password)) {
      return {
        score: 1,
        warning: 'Letters only is easy to guess.',
        suggestions: ['Add a digit or a symbol.', 'Use several unrelated words.']
      }
    }

    return { score: 3 }
  }
})
```

A score outside the range of `levels` is clamped, and a scorer that throws
clears the meter rather than leaving a stale verdict on screen.

### Asynchronous scorers

`scorer` may return a promise. This is what makes a serious estimator possible:
zxcvbn loads its language packs asynchronously, and a breach check is a network
call. Both are impossible against a synchronous contract.

Three things the component handles so you do not have to:

- **Debounce.** Input is coalesced (`debounce`, 200 ms by default) so typing a
  password does not fire a request per keystroke.
- **Out-of-order results.** Every evaluation takes a sequence token. If a slow
  answer for an old password arrives after a newer one has already resolved, it
  is discarded. Without this, pausing mid-word and typing on can leave the meter
  showing the verdict for a prefix.
- **A pending state.** While a promise is outstanding the root gets
  `.password-strength-busy` and the label shows `busyLabel`. A synchronous
  scorer never gets this state, so it cannot flicker.

A rejected promise clears the meter, for the same reason a throw does.

> **A scorer that calls the network sends the password off the page.** Anything
> you `fetch` from inside `scorer` receives the secret the user is in the middle
> of typing — before they have submitted anything, and on every debounce tick.
> 
> If you check against a breach corpus, use a protocol built for it: the
> [Pwned Passwords range API](https://haveibeenpwned.com/API/v3#PwnedPasswords)
> takes the first five characters of the password's SHA-1 hash and returns every
> matching suffix, so the password itself never leaves the browser. Sending the
> raw password to a third party is a credential disclosure, whatever the endpoint
> promises.

### zxcvbn

[zxcvbn](https://github.com/dropbox/zxcvbn) and its maintained successor
[zxcvbn-ts](https://github.com/zxcvbn-ts/zxcvbn) estimate how many guesses a
password would survive, using dictionaries of common passwords, names, words and
keyboard patterns. That is a different question from "does it have a capital
letter", and a much more useful one.

We do not ship an adapter — the shapes already line up. zxcvbn returns
`{ score, feedback: { warning, suggestions } }`, and `score` is 0–4 on the same
scale this component uses:

```js
import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'
import * as common from '@zxcvbn-ts/language-common'
import * as en from '@zxcvbn-ts/language-en'

zxcvbnOptions.setOptions({
  dictionary: { ...common.dictionary, ...en.dictionary },
  graphs: common.adjacencyGraphs,
  translations: en.translations
})

new coreui.PasswordStrength('#meter', {
  input: '#password',
  userInputs: () => [
    document.getElementById('email').value,
    document.getElementById('username').value
  ],
  scorer(password, userInputs) {
    const { score, feedback } = zxcvbn(password, userInputs)

    return { score, warning: feedback.warning, suggestions: feedback.suggestions }
  }
})
```

The language packs are large. Load them on demand and let the promise support do
the waiting — the meter shows its pending state until the pack has arrived:

```js
let zxcvbnReady = null

const loadZxcvbn = () => {
  zxcvbnReady ||= Promise.all([
    import('@zxcvbn-ts/core'),
    import('@zxcvbn-ts/language-common'),
    import('@zxcvbn-ts/language-en')
  ]).then(([core, common, en]) => {
    core.zxcvbnOptions.setOptions({
      dictionary: { ...common.dictionary, ...en.dictionary },
      graphs: common.adjacencyGraphs,
      translations: en.translations
    })

    return core.zxcvbn
  })

  return zxcvbnReady
}

new coreui.PasswordStrength('#meter', {
  input: '#password',
  async scorer(password, userInputs) {
    const zxcvbn = await loadZxcvbn()
    const { score, feedback } = zxcvbn(password, userInputs)

    return { score, warning: feedback.warning, suggestions: feedback.suggestions }
  }
})
```

Both run entirely in the browser, so neither sends the password anywhere.

## User inputs

A password containing the user's own email, username or site name is weak no
matter how it is composed, and no amount of character-class counting notices
that. `userInputs` is the list to penalize against.

Pass a function when the values live in fields the user is still filling in — it
is called on every evaluation, so it always sees current values. Pass an array
when they are fixed.

```html
<input type="text" class="form-control mb-3" id="userEmail" value="ada@example.com">
<input type="password" class="form-control mb-3" id="userPassword" data-coreui-password-input placeholder="Try using the email above…">
<div id="userInputsMeter"></div>
```

The built-in scorer returns `0` when the password contains any of these values
(three characters or more, case-insensitive). A custom scorer receives the same
list as its second argument and decides for itself — zxcvbn takes it directly.

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. The meter is a child of the field like any other, so it picks up the same gap.

```html
<div class="form-field">
  <label for="strengthField" class="form-label">Password</label>
  <input type="password" class="form-control" id="strengthField" data-coreui-password-input placeholder="Type a password…">
  <div data-coreui-password-strength data-coreui-input="#strengthField"></div>
  <div class="form-text">At least 12 characters.</div>
</div>
```

## Without JavaScript

The meter is driven entirely by two hooks, so a server that already knows the
score can render the result without loading the plugin: `data-coreui-strength`
on the wrapper picks the colour, and `.active` on a segment fills it.

The score runs `0`–`4` and there is one segment fewer than there are levels —
four segments for the five default labels.

```html
<div class="password-strength" data-coreui-strength="2">
  <div class="password-strength-meter" aria-hidden="true">
    <span class="password-strength-segment active"></span>
    <span class="password-strength-segment active"></span>
    <span class="password-strength-segment"></span>
    <span class="password-strength-segment"></span>
  </div>
  <div class="password-strength-feedback" role="status">
    <span class="password-strength-text">Fair</span>
  </div>
</div>
```

This is the same markup the plugin builds, so a field can start server-rendered
and keep working once the script initializes it.

## Accessibility

- The segmented bar is `aria-hidden`, because it carries no information the
  label does not.
- The label, warning and suggestions share one `role="status"` region with
  `aria-live="polite"`, so the verdict is announced without interrupting, and as
  a single message rather than three.
- Debouncing keeps that region from being updated on every keystroke, which is
  what makes a live region usable here at all.
- The strength label is never the only signal — it is text, not colour alone.

## Usage

### Via data attributes

Add `data-coreui-password-strength` to an empty element and point it at
a field with `data-coreui-input`. Without `data-coreui-input`, the component uses
the first `input[type="password"]` inside its parent, or the first input marked
`data-coreui-password-input` — the second is what keeps the pairing
working while the password is revealed and the field's `type` is `text`.

```html
<input type="password" class="form-control" id="password" data-coreui-password-input>
<div data-coreui-password-strength data-coreui-input="#password"></div>
```

### Via JavaScript

```js
const meter = new coreui.PasswordStrength('#meter', {
  input: '#password'
})
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-coreui-`, as in `data-coreui-debounce="500"`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `busyLabel` | string | `'Checking…'` | Label shown while an asynchronous scorer is pending. |
| `debounce` | number | `200` | Milliseconds to wait after typing stops before scoring. `0` scores on every input event. |
| `input` | string, element, null | `null` | Selector or element of the password field. When `null`, the first `input[type="password"]` or `input[data-coreui-password-input]` in the parent is used. |
| `levels` | array | `['Very weak', 'Weak', 'Fair', 'Good', 'Strong']` | Labels by score. The meter renders one segment fewer than there are levels, and a score above the last label is clamped to it. |
| `minLength` | number | `8` | Length the built-in scorer treats as the first threshold. Ignored when `scorer` is set. |
| `scorer` | function, null | `null` | `(password, userInputs) => StrengthResult \| Promise<StrengthResult>`. Replaces the built-in scoring. |
| `thresholds` | array | `[2, 4, 6]` | Point boundaries the built-in scorer maps to scores 1–4. A boundary you leave out, or set to something that is not a number, keeps its default, so a partial array has to ascend past the defaults it keeps. Ignored when `scorer` is set. |
| `userInputs` | array, function | `[]` | Values to penalize a password for containing, or a function returning them. |
| `weights` | object | see below | Points the built-in scorer awards per rule. Ignored when `scorer` is set. |

Each key in `weights` is one rule the built-in scorer checks, and its value is what a pass is worth. Set a rule to `0` to stop it counting — useful when a policy does not ask for that class of character and a meter demanding it would only mislead. Raise a value to make one rule outweigh the others.

| Rule | Passes when the password |
| --- | --- |
| `minLength` | reaches `minLength` characters |
| `extraLength` | reaches `minLength` + 4 |
| `longPassword` | reaches 16 |
| `lowercase` / `uppercase` / `numbers` | contains one |
| `special` | contains a symbol |
| `multipleSpecial` | contains two or more symbols |

Every rule defaults to `1`, so out of the box the score is a count of rules passed, measured against `thresholds`. A rule you leave out of `weights`, or set to something that is not a number, keeps its default, so the object above is a set of overrides rather than a replacement.

```js
// Do not ask for an uppercase letter, and reward real length instead
new coreui.PasswordStrength(element, {
  weights: { uppercase: 0, longPassword: 3 }
})
```

Three of the eight rules measure length and two measure symbols, so a short password dense with symbols can outscore a long passphrase. That is the composition problem the callout above describes; `scorer` is the way out of it, not these numbers.

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys the instance and removes the meter and the feedback it created. |
| `evaluate` | Scores the current value immediately, skipping the debounce. |
| `getInstance` | Static method to get the instance associated with a DOM element. |
| `getOrCreateInstance` | Static method to get the instance associated with a DOM element, or create a new one if it was not initialized. |
| `getScore` | Returns the current score, or `null` when there is none. |

### Events

| Event | Description |
| --- | --- |
| `change.coreui.password-strength` | Fires when the score changes — not on every keystroke. |

The event carries `score`, `level` (the label for that score), and `password`,
which is `'***'` for any non-empty value. The real password is never put on an
event, because a listener anywhere on the page could read it.

```js
const meter = document.getElementById('meter')

meter.addEventListener('change.coreui.password-strength', event => {
  console.log(event.score, event.level)
})
```

## Customizing

### CSS variables

The component reads these from `.password-strength`. The level colour is one
token, reassigned per score, so restyling the scale is five declarations:

```scss
$password-strength-tokens: () !default;
$password-strength-tokens: defaults(
  (
    --cui-password-strength-gap: .5rem,
    --cui-password-strength-meter-gap: .25rem,
    --cui-password-strength-segment-height: .25rem,
    --cui-password-strength-segment-bg: var(--cui-bg-2),
    --cui-password-strength-segment-border-radius: var(--cui-radius-pill),
    --cui-password-strength-font-size: var(--cui-font-size-sm),
    --cui-password-strength-text-font-weight: 600,
    --cui-password-strength-warning-color: var(--cui-fg-2),
    --cui-password-strength-suggestions-color: var(--cui-fg-3),
    --cui-password-strength-busy-opacity: .65,
    --cui-password-strength-color: var(--cui-fg-3),
  ),
  $password-strength-tokens
);
```

Colour by score:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$password-strength-levels: defaults(
  (
    "0": var(--cui-danger-base),
    "1": var(--cui-danger-base),
    "2": var(--cui-warning-base),
    "3": var(--cui-info-base),
    "4": var(--cui-success-base),
  ),
  $password-strength-levels
);
```
