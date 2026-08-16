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
const extractOptionsFromString = string => {
  const options = {};
  const regex = /{([^}]+)}/;
  if (regex.test(string)) {
    const values = regex.exec(string)[1];
    if (values) {
      for (const val of values.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)(?=(?:[^']*'[^']*')*[^']*$)(?![^()[\]{}]*[)\]}])/g)) {
        const [key, value] = val.replace(/'/g, '').split(':');
        options[key.trim()] = normalizeData(value.trim());
      }
    }
  }
  return options;
};
const geti18nOptions = element => {
  const data = element.dataset.coreuiI18n || element.dataset.coreuiI18nDate;
  const options = extractOptionsFromString(data);
  const i18nKeys = Object.keys(element.dataset).filter(key => key.startsWith('coreuiI18n') && key !== 'coreuiI18n' && key !== 'coreuiI18nDate');
  for (const key of i18nKeys) {
    let pureKey = key.replace(/^coreuiI18n/, '');
    pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
    options[pureKey] = extractOptionsFromString(element.dataset[key]);
  }
  return options;
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
    const key = element.dataset.coreuiI18n.split(',')[0].toString();
    element.innerHTML = i18next.t(key, geti18nOptions(element));
  }
  for (const element of document.querySelectorAll('[data-coreui-i18n-date]')) {
    const key = element.dataset.coreuiI18nDate.split(',')[0].toString();
    const {
      date,
      dateFormat
    } = geti18nOptions(element);
    element.innerHTML = i18next.t(key, {
      date: new Date(Date.parse(date)),
      ...(dateFormat && {
        formatParams: {
          date: dateFormat
        }
      })
    });
  }
};
i18next.use(i18nextHttpBackend).use(i18nextBrowserLanguageDetector).init({
  fallbackLng: 'en',
  backend: {
    loadPath: './locales/{{lng}}/{{ns}}.json'
  },
  detection: {
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage']
  }
}, () => {
  translate();
});
i18next.on('languageChanged', language => {
  i18next.loadNamespaces('translation').then(() => {
    translate(language);
  });
});
//# sourceMappingURL=i18next.js.map