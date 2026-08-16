/* global i18next, i18nextBrowserLanguageDetector, i18nextHttpBackend */

/**
 * --------------------------------------------------------------------------
 * CoreUI PRO Boostrap Admin Template i18next.js
 * License (https://coreui.io/pro/license/)
 * --------------------------------------------------------------------------
 */

/**
 * Internationalization (i18n) with i18next
 *
 * This module implements multi-language support using the i18next library.
 * It allows the template to display content in multiple languages based on user preferences.
 *
 * Key features:
 * - Automatic language detection (from URL params, cookies, localStorage, sessionStorage)
 * - Dynamic translation of page content
 * - Language switcher UI integration
 * - Date formatting with locale support
 * - Translation data loaded from JSON files in ./locales/ directory
 *
 * How it works:
 * 1. Elements with [data-coreui-i18n] attribute are automatically translated
 * 2. Elements with [data-coreui-i18n-date] attribute handle date localization
 * 3. Language switcher buttons use [data-coreui-language-value] attribute
 * 4. Translation keys and options can be embedded in data attributes
 *
 * Translation files structure:
 * - ./locales/{language}/translation.json
 * - Fallback language: English (en)
 *
 * @requires i18next
 * @requires i18next-browser-languagedetector
 * @requires i18next-http-backend
 * @see https://www.i18next.com/
 */

/**
 * Normalizes string values from data attributes to proper JavaScript types
 * @param {string} value - The value to normalize
 * @returns {boolean|number|null|object|string} Normalized value
 */
const normalizeData = value => {
  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  if (value === Number(value).toString()) {
    return Number(value)
  }

  if (value === '' || value === 'null') {
    return null
  }

  if (typeof value !== 'string') {
    return value
  }

  try {
    return JSON.parse(decodeURIComponent(value))
  } catch {
    return value
  }
}

/**
 * Extracts i18n options from a data attribute string
 * Parses strings like "key,{option1:value1,option2:value2}"
 * @param {string} string - The data attribute string to parse
 * @returns {object} Parsed options object
 */
const extractOptionsFromString = string => {
  const options = {}
  const regex = /{([^}]+)}/

  if (regex.test(string)) {
    const values = regex.exec(string)[1]

    if (values) {
      for (const val of values.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)(?=(?:[^']*'[^']*')*[^']*$)(?![^()[\]{}]*[)\]}])/g)) {
        const [key, value] = val.replace(/'/g, '').split(':')
        options[key.trim()] = normalizeData(value.trim())
      }
    }
  }

  return options
}

/**
 * Retrieves all i18n options from an element's data attributes
 * @param {HTMLElement} element - The element to extract options from
 * @returns {object} Combined options from all i18n data attributes
 */
const geti18nOptions = element => {
  const data = element.dataset.coreuiI18n || element.dataset.coreuiI18nDate
  const options = extractOptionsFromString(data)

  const i18nKeys = Object.keys(element.dataset).filter(key => key.startsWith('coreuiI18n') && key !== 'coreuiI18n' && key !== 'coreuiI18nDate')

  for (const key of i18nKeys) {
    let pureKey = key.replace(/^coreuiI18n/, '')
    pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1)
    options[pureKey] = extractOptionsFromString(element.dataset[key])
  }

  return options
}

/**
 * Translates all i18n elements on the page to the specified language
 * Updates the language switcher UI and applies translations
 * @param {string} language - The language code to translate to (e.g., 'en', 'pl')
 */
const translate = language => {
  const currentLanguage = language || document.documentElement.lang
  document.documentElement.setAttribute('lang', currentLanguage)

  const btnToActive = document.querySelector(`[data-coreui-language-value="${currentLanguage}"]`)

  for (const element of document.querySelectorAll('[data-coreui-language-value]')) {
    element.classList.remove('active')
  }

  btnToActive.classList.add('active')

  for (const element of document.querySelectorAll('[data-coreui-i18n]')) {
    const key = element.dataset.coreuiI18n.split(',')[0].toString()
    element.innerHTML = i18next.t(key, geti18nOptions(element))
  }

  for (const element of document.querySelectorAll('[data-coreui-i18n-date]')) {
    const key = element.dataset.coreuiI18nDate.split(',')[0].toString()
    const { date, dateFormat } = geti18nOptions(element)

    element.innerHTML = i18next.t(
      key, {
        date: new Date(Date.parse(date)),
        ...dateFormat && {
          formatParams: {
            date: dateFormat
          }
        }
      })
  }
}

i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json'
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage']
    }
  }, () => {
    translate()
  })

i18next.on('languageChanged', language => {
  i18next
    .loadNamespaces('translation')
    .then(() => {
      translate(language)
    })
})
