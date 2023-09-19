/* global i18next, i18nextBrowserLanguageDetector, i18nextHttpBackend */

const normalizeData = value => {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === '' || value === 'null') {
    return null;
  }
  if (typeof value !== 'string') {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
};
const geti18nDataAttributes = element => {
  const attributes = {};
  let values = element.dataset.coreuiI18n || element.dataset.coreuiI18nDate;
  if (values.split(',').length > 1) {
    values = values.slice(Math.max(0, values.indexOf(',') + 1));
    values = normalizeData(values.trim().replace(/'/g, '"'));
  }
  if (typeof values === 'object' && values !== null) {
    Object.assign(attributes, values);
  }
  const i18nKeys = Object.keys(element.dataset).filter(key => key.startsWith('coreuiI18n') && key !== 'coreuiI18n' && key !== 'coreuiI18nDate');
  for (const key of i18nKeys) {
    let pureKey = key.replace(/^coreuiI18n/, '');
    pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
    attributes[pureKey] = normalizeData(element.dataset[key]);
  }
  return attributes;
};
const translate = language => {
  const currentLanguage = language || document.documentElement.lang;
  document.documentElement.setAttribute('lang', currentLanguage);
  const btnToActive = document.querySelector(`[data-coreui-language-value="${currentLanguage}"]`);
  for (const element of document.querySelectorAll('[data-coreui-language-value]')) {
    element.classList.remove('active');
  }
  btnToActive.classList.add('active');
  for (const element of document.querySelectorAll('[data-coreui-i18n]')) {
    let key = element.dataset.coreuiI18n.split(',')[0].toString();
    element.innerHTML = i18next.t(key, geti18nDataAttributes(element));
    const re = /(?<=\[).*?(?=])/g;
    const attributeInKey = key.match(re);
    if (attributeInKey) {
      key = key.replace(`[${attributeInKey}]`, '');
      element[attributeInKey] = i18next.t(key, geti18nDataAttributes(element));
    } else {
      element.innerHTML = i18next.t(key, geti18nDataAttributes(element));
    }
  }
  for (const element of document.querySelectorAll('[data-coreui-i18n-date]')) {
    const key = element.dataset.coreuiI18nDate.split(',')[0].toString();
    const {
      date,
      dateFormat
    } = geti18nDataAttributes(element);
    element.innerHTML = i18next.t(key, {
      date: new Date(Date.parse(date)),
      formatParams: {
        date: normalizeData(dateFormat.trim().replace(/'/g, '"')) || {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      }
    });
  }
};
i18next.use(i18nextHttpBackend).use(i18nextBrowserLanguageDetector).init({
  fallbackLng: 'en',
  backend: {
    loadPath: './locales/{{lng}}/translation.json'
  }
}, () => {
  translate();
});
i18next.on('languageChanged', language => {
  translate(language);
});
//# sourceMappingURL=i18next.js.map