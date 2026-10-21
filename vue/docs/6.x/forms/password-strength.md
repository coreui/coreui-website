# Vue Password Strength Component

> Show how strong a password is as it is typed — a segmented meter, a label, and a pluggable scorer that can be asynchronous so a real strength estimator or a breach check can drive it.

## Example

_Added in 6.0.0._

Pass the password to `<CPasswordStrength>` and it renders the meter, the label and the feedback itself — pair it with [Password Input](https://coreui.io/vue/docs/forms/password-input/), which owns the field's frame and visibility toggle.

```html
<template>
  <CFormLabel for="strengthDemo">Password</CFormLabel>
  <CPasswordInput
    id="strengthDemo"
    v-model="password"
    class="mb-3"
    placeholder="Type a password…"
  />
  <CPasswordStrength :value="password" />
</template>

<script setup>
import { ref } from 'vue'
import { CFormLabel } from '@coreui/vue'
import { CPasswordInput, CPasswordStrength } from '@coreui/vue-pro'

const password = ref('')
</script>
```

## How it works

- **The field stays yours.** The meter never wraps, moves or re-types the input — it just receives the password through the `value` property, so it works with any field you control.
- **The meter is built for you.** It renders the segments, the label, and the places a scorer's warning and suggestions go. Segments are one fewer than there are levels, so the top level fills the bar.
- **The score is a number from 0 to 4.** Level `0` is the worst. That is the same scale [zxcvbn](#zxcvbn) returns, so a real estimator drops in without a conversion step.
- **The meter is hidden from assistive technology** (`aria-hidden`) because it only restates the label. The label and its feedback sit in a polite live region, so a screen reader hears the verdict once, not twice.

## What the built-in scorer is worth

> **The built-in scorer is a UX hint, not a security control.** It counts length and character classes — lowercase, uppercase, digits, symbols. That measures *composition*, not how guessable a password actually is. `P@ssw0rd1` clears every rule it checks and is among the first passwords any attacker tries.
> 
> [NIST SP 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html) recommends **against** composition rules of exactly this kind, and **for** checking the password against lists of known-breached secrets. Do that on the server, where it cannot be skipped. Treat this meter as encouragement while typing, and never as the thing that decides whether a password is allowed.

The default scorer stays small and rule-based on purpose: a real estimator ships a dictionary far larger than this entire library. Plug one in with `scorer`.

## Custom scorer

`scorer` replaces the built-in scoring completely. It receives the password and the [user inputs](#user-inputs), and returns either a bare number or an object:

```js
type StrengthResult = number | { score: number, warning?: string, suggestions?: string[] }
```

Return a number when that is all you have — the simple case stays simple:

```html
<template>
  <CPasswordInput v-model="password" class="mb-3" placeholder="Length alone decides…" />
  <CPasswordStrength
    :value="password"
    :scorer="(value) => Math.min(4, Math.floor(value.length / 4))"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CPasswordInput, CPasswordStrength } from '@coreui/vue-pro'

const password = ref('')
</script>
```

Return an object to say *why*. The `warning` and `suggestions` are rendered below the label, and both are inserted as text — markup in them is never parsed. A score outside the range of `levels` is clamped, and a scorer that throws clears the meter rather than leaving a stale verdict on screen.

### Asynchronous scorers

`scorer` may return a promise. This is what makes a serious estimator possible: zxcvbn loads its language packs asynchronously, and a breach check is a network call. Three things the component handles so you do not have to:

- **Debounce.** Input is coalesced (`debounce`, 200 ms by default) so typing a password does not fire a request per keystroke.
- **Out-of-order results.** Every evaluation takes a sequence token. If a slow answer for an old password arrives after a newer one has already resolved, it is discarded. Without this, pausing mid-word and typing on can leave the meter showing the verdict for a prefix.
- **A pending state.** While a promise is outstanding the root gets `.password-strength-busy` and the label shows `busyLabel`. A synchronous scorer never gets this state, so it cannot flicker.

A rejected promise clears the meter, for the same reason a throw does.

> **A scorer that calls the network sends the password off the page.** Anything you `fetch` from inside `scorer` receives the secret the user is in the middle of typing — before they have submitted anything, and on every debounce tick.
> 
> If you check against a breach corpus, use a protocol built for it: the [Pwned Passwords range API](https://haveibeenpwned.com/API/v3#PwnedPasswords) takes the first five characters of the password's SHA-1 hash and returns every matching suffix, so the password itself never leaves the browser. Sending the raw password to a third party is a credential disclosure, whatever the endpoint promises.

### zxcvbn

[zxcvbn](https://github.com/dropbox/zxcvbn) and its maintained successor [zxcvbn-ts](https://github.com/zxcvbn-ts/zxcvbn) estimate how many guesses a password would survive, using dictionaries of common passwords, names, words and keyboard patterns. That is a different question from "does it have a capital letter", and a much more useful one.

We do not ship an adapter — the shapes already line up. zxcvbn returns `{ score, feedback: { warning, suggestions } }`, and `score` is 0–4 on the same scale this component uses. The language packs are large — load them on demand and let the promise support do the waiting:

```vue
<template>
  <CPasswordStrength :value="password" :scorer="scorer" />
</template>

<script setup>
let zxcvbnReady = null

const loadZxcvbn = () => {
  zxcvbnReady ||= Promise.all([
    import('@zxcvbn-ts/core'),
    import('@zxcvbn-ts/language-common'),
    import('@zxcvbn-ts/language-en'),
  ]).then(([core, common, en]) => {
    core.zxcvbnOptions.setOptions({
      dictionary: { ...common.dictionary, ...en.dictionary },
      graphs: common.adjacencyGraphs,
      translations: en.translations,
    })

    return core.zxcvbn
  })

  return zxcvbnReady
}

const scorer = async (password, userInputs) => {
  const zxcvbn = await loadZxcvbn()
  const { score, feedback } = zxcvbn(password, userInputs)

  return { score, warning: feedback.warning, suggestions: feedback.suggestions }
}
</script>
```

Both run entirely in the browser, so neither sends the password anywhere.

## User inputs

A password containing the user's own email, username or site name is weak no matter how it is composed, and no amount of character-class counting notices that. `userInputs` is the list to penalize against.

Pass a function when the values live in fields the user is still filling in — it is called on every evaluation, so it always sees current values. Pass an array when they are fixed.

```html
<template>
  <CFormInput v-model="email" class="mb-3" aria-label="Email" />
  <CPasswordInput v-model="password" class="mb-3" placeholder="Try using the email above…" />
  <CPasswordStrength :value="password" :user-inputs="() => [email]" />
</template>

<script setup>
import { ref } from 'vue'
import { CFormInput } from '@coreui/vue'
import { CPasswordInput, CPasswordStrength } from '@coreui/vue-pro'

const email = ref('ada@example.com')
const password = ref('')
</script>
```

The built-in scorer returns `0` when the password contains any of these values (three characters or more, case-insensitive). A custom scorer receives the same list as its second argument and decides for itself — zxcvbn takes it directly.

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. The meter is a child of the field like any other, so it picks up the same gap.

```html
<template>
  <CFormField>
    <CFormLabel for="strengthField">Password</CFormLabel>
    <CPasswordInput id="strengthField" v-model="password" placeholder="Type a password…" />
    <CPasswordStrength :value="password" />
    <CFormText>At least 12 characters.</CFormText>
  </CFormField>
</template>

<script setup>
import { ref } from 'vue'
import { CFormField, CFormLabel, CFormText } from '@coreui/vue'
import { CPasswordInput, CPasswordStrength } from '@coreui/vue-pro'

const password = ref('')
</script>
```

## Accessibility

- The segmented bar is `aria-hidden`, because it carries no information the label does not.
- The label, warning and suggestions share one `role="status"` region with `aria-live="polite"`, so the verdict is announced without interrupting, and as a single message rather than three.
- Debouncing keeps that region from being updated on every keystroke, which is what makes a live region usable here at all.
- The strength label is never the only signal — it is text, not colour alone.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CPasswordStrength /&gt;](./api/#cpasswordstrength)
