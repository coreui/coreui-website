# React Time Picker Component

> React Time Picker is a customizable and user-friendly tool for selecting times in forms. It supports various locales, sizes, and states to enhance the user experience.

## Example

To create a basic React Time Picker, use:

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6} lg={4}>
        <CTimePicker label="Time" locale="en-US" />
      </CCol>
      <CCol sm={6} lg={4}>
        <CTimePicker label="Time" locale="en-US" time="02:17:35 PM" />
      </CCol>
    </CRow>
  )
}
```

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerSizingExample = () => {
  return (
    <>
      <CRow className="mb-3">
        <CCol lg={5}>
          <CTimePicker locale="en-US" size="lg" />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCol lg={4}>
          <CTimePicker locale="en-US" />
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={3}>
          <CTimePicker locale="en-US" size="sm" />
        </CCol>
      </CRow>
    </>
  )
}
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerDisabledExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker disabled locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Readonly

Add the `inputReadOnly` boolean attribute to prevent modification of the input's value.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerReadonlyExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker inputReadOnly locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Custom formats

### Disable minutes and seconds

Customize React Time Picker to display only hours, or hours and minutes by disabling minutes/seconds.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerDisableMinutesAndSecondsExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6} lg={4}>
        <CTimePicker label="Only hours and minutes" locale="en-US" seconds={false} />
      </CCol>
      <CCol sm={6} lg={4}>
        <CTimePicker label="Only hours" locale="en-US" minutes={false} seconds={false} />
      </CCol>
    </CRow>
  )
}
```

### Custom hours, minutes and seconds

Tailor the React Time Picker to your needs by specifying custom values for hours, minutes, and seconds. Use arrays to define selectable options or functions for dynamic filtering. The example below demonstrates setting specific hour options, minute intervals, and a condition for seconds only to include values less than 20.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerCustomHoursMinutesAndSecondsExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker
          locale="en-US"
          hours={[1, 3, 5, 7]}
          minutes={[0, 15, 30, 45]}
          seconds={(s) => s < 20}
        />
      </CCol>
    </CRow>
  )
}
```

In this configuration, the React TimePicker restricts hours to a predefined set, minutes to quarter intervals, and seconds to values under 20, offering a high degree of customization for precise time selection scenarios.

## Locale

Tailor the React Time Picker to match different locales, offering an inclusive user experience across diverse languages. Automatically adapt or set specific locales to meet your application's needs.

### Auto

Our Time Picker component automatically detects and adapts to the user's locale, ensuring a localized experience without explicit configuration.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocaleAutoExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker />
      </CCol>
    </CRow>
  )
}
```

### Chinese

Specify the locale to Chinese (`zh-CN`) for users in China, enhancing usability with a familiar format and language.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocaleChineseExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker placeholder="入住日期" locale="zh-CN" />
      </CCol>
    </CRow>
  )
}
```

### Japanese

Set the Time Picker's locale to Japanese (`ja`) to cater to Japanese users, presenting date and time in a localized format.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocaleJapaneseExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker placeholder="日付を選択" locale="ja" />
      </CCol>
    </CRow>
  )
}
```

### Korean

Configure the locale to Korean (`ko`) for a tailored experience in Korea, offering date and time selection in the local language.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocaleKoreanExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker placeholder="날짜 선택" locale="ko" />
      </CCol>
    </CRow>
  )
}
```

This approach ensures that our React TimePicker component is versatile and adaptable, providing a seamless and intuitive interface for users worldwide.

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

Optimize the Time Picker for Hebrew-speaking users with RTL layout. Set the locale to Hebrew (`he-IL`) and apply RTL direction to align with Hebrew script.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocaleHebrewExample = () => {
  return (
    <CRow dir="rtl">
      <CCol sm={6} lg={4}>
        <CTimePicker placeholder="בחר תאריך" locale="he-IL" />
      </CCol>
    </CRow>
  )
}
```

### Persian

Adapt the Time Picker for Persian-speaking audiences by enabling RTL layout. Customize the locale to Persian (`fa-IR`) and utilize RTL directionality for seamless integration.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocalePersianExample = () => {
  return (
    <CRow dir="rtl">
      <CCol sm={6} lg={4}>
        <CTimePicker placeholder="تاریخ شروع" locale="fa-IR" />
      </CCol>
    </CRow>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTimePicker /&gt;](./api/#ctimepicker)
