const CURRENCIES = [
  "USD",
  "EUR",
  "GBP",
  "RON",
  "AUD",
  "CAD",
  "CHF",
  "CZK",
  "DKK",
  "HUF",
  "JPY",
  "NOK",
  "PLN",
  "SEK",
  "TRY",
  "RUB",
  "CNY",
  "BGN",
  "HRK",
  "BRL",
  "HKD",
  "IDR",
  "KRW",
  "MXN",
  "MYR",
  "NZD",
  "PHP",
  "SGD",
  "ZAR",
  "MDL",
  "AED",
  "EGP",
  "INR",
  "RSD",
  "UAH",
  "TWD",
  "ILS",
  "QAR",
  "SAR",
  "ARS",
  "CLP",
  "BOB",
  "COP",
  "DOP",
  "PYG",
  "PEN",
  "UYU",
  "NGN",
  "NAD",
  "TND",
  "DZD",
  "KES",
  "MAD",
  "PKR",
  "THB",
  "BYN",
];

const EM_CURRENCIES = [
  "PLN",
  "ARS",
  "BRL",
  "BGN",
  "CLP",
  "CNY",
  "COP",
  "CZK",
  "EGP",
  "HUF",
  "INR",
  "IDR",
  "MYR",
  "MXN",
  "MAD",
  "NGN",
  "PKR",
  "PEN",
  "PHP",
  "QAR",
  "RON",
  "RUB",
  "SAR",
  "ZAR",
  "TWD",
  "THB",
  "TRY",
  "UAH",
  "AED",
  "TND",
];

const triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  const tabTrigger = new coreui.Tab(triggerEl)

  triggerEl.addEventListener('click', function (e) {
    e.preventDefault()
    tabTrigger.show()
  })
})

const userLang = () => navigator.language || navigator.userLanguage;

const formatCurrency = (amount, currency, monthly) => {
  return new Intl.NumberFormat(userLang, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(monthly ? Math.ceil(amount / 12) : amount);
};

const getQueryParams = (params, url) => {
  let href = url;
  //this expression is to get the query strings
  let reg = new RegExp("[?&]" + params + "=([^&#]*)", "i");
  let queryString = reg.exec(href);
  return queryString ? queryString[1] : null;
};

const getOldPrice = (product, currency, quantity) => {
  if (product["Prices"]["Old"].length > 0) {
    const price = product["Prices"]["Old"]
      .filter((price) => price["Currency"] === currency)
      .filter((price) => quantity >= price["MinQuantity"])
      .filter((price) => quantity <= price["MaxQuantity"]);

    return price[0]["Amount"];
  }

  return 0;
};

const getCurrentPrice = (product, currency, quantity) => {
  const price = product["Prices"]["Regular"]
    .filter((price) => price["Currency"] === currency)
    .filter((price) => quantity >= price["MinQuantity"])
    .filter((price) => quantity <= price["MaxQuantity"]);

  return price[0]["Amount"];
};

const getEMPrice = (product, currency, quantity) => {
  const price = product["Prices"]["Regular"]
    .filter((price) => price["Currency"] === currency)
    .filter((price) => quantity >= price["MinQuantity"])
    .filter((price) => quantity <= price["MaxQuantity"]);

  return price[0]["Amount"] * 0.6;
};

const pricing = (data) => {
  const code = data.countryCode;
  const country = data.country;
  const currency = CURRENCIES.includes(data.currency) ? data.currency : "USD";
  const paymentCurrencyElement = document.getElementById("payment-currency");
  paymentCurrencyElement.innerHTML = currency;

  if (EM_CURRENCIES.includes(currency)) {
    const pageHeaderEl = document.getElementsByClassName("page-header");
    pageHeaderEl[0].classList.add("mb-0");
    const emBanerEl = document.createElement("section")
    emBanerEl.classList.add("baner", "banner-red", "mb-5")
    emBanerEl.innerHTML = `
      <div class="container py-4">
        <h2 class="banner-primary-header">Parity Purchasing Power Discount</h2>
        <h3 class="banner-secondary-header">
          We want to create products that are affordable for everyone that's why we support Parity Purchasing Power
        </h3>
        <div class="banner-description">
          We noticed you're in <strong>${country}</strong> and eligible for the Parity Purchasing Power discount, so if you need it, use code <strong>EMKT</strong> to get <strong>40% off</strong> your subscription at checkout.
        </div>
      </div>`
    pageHeaderEl[0].after(emBanerEl)
  }

  fetch("/data/pricing.json")
    .then((res) => res.json())
    .then((data) => {
      const allProducts = data.Products;
      const productsOnPage = document.querySelectorAll("[data-product-name]");

      productsOnPage.forEach((product) => {
        const productName = product.dataset.productName;
        const productCode = product.dataset.productCode;

        if (productName === 'free') {
          const currentPriceElement = document.getElementsByClassName(
            `current-price-${productName}`
          );
          Array.from(currentPriceElement).forEach((el) => {
            el.innerHTML = formatCurrency(0, currency);
          });

          return
        }

        const productPricing = allProducts.filter(
          (element) => element["ProductCode"] === productCode
        )[0];
        const productCurrentPrice = formatCurrency(
          getCurrentPrice(productPricing, currency, 4),
          currency,
          true
        );
        const productCurrentPriceAnnualy = formatCurrency(
          getCurrentPrice(productPricing, currency, 4),
          currency,
          false
        );
        const productOldPrice = formatCurrency(
          getOldPrice(productPricing, currency, 4),
          currency,
          true
        );

        const currentPriceElement = document.getElementsByClassName(
          `current-price-${productName}`
        );
        const currentPriceAnnuallyElement = document.getElementsByClassName(
          `current-price-annually-${productName}`
        );
        const oldPriceElement = document.getElementsByClassName(
          `old-price-${productName}`
        );
        const buyButtonElement = document.getElementsByClassName(`buy-${productName}`);

        Array.from(buyButtonElement).forEach((el) => {
          const url = new URL(el.href)
          url.searchParams.set("LANG", userLang().split("-")[0])
          url.searchParams.set("CURRENCY", currency)
          el.href = url.toString();
        });


        if (productCurrentPrice) {
          Array.from(currentPriceElement).forEach((el) => {
            el.innerHTML = productCurrentPrice;
          });
        }

        if (currentPriceAnnuallyElement) {
          Array.from(currentPriceAnnuallyElement).forEach((el) => {
            el.innerHTML = productCurrentPriceAnnualy;
          });
        }
        
        if (getOldPrice(productPricing, currency, 4)) {

          Array.from(oldPriceElement).forEach((el) => {
            el.innerHTML = productOldPrice;
          });
        }
      });
    })
    .catch((err) => {
      throw err;
    });

  fetch("/data/payment-methods.json")
    .then((res) => res.json())
    .then((data) => {
      const paymentMethodsContainer =
        document.getElementById("payment-methods");
      const paymentMethods = data.find(
        (element) => element.countryCode === code
      ).methods;
      paymentMethods.forEach((method) => {
        const img = document.createElement("img");
        img.src = `/images/payment_methods/${method.img}`;
        img.alt = method.alt;
        img.style.outline = "2px solid #fff";
        img.style.outlineOffset = "-2px";

        paymentMethodsContainer.appendChild(img);
      });
    })
    .catch((err) => {
      throw err;
    });
};

if (document.getElementById("pricing-tables")) {
  fetch(
    "https://pro.ip-api.com/json/?key=EEKS6bLi6D91G1p&fields=status,message,country,countryCode,timezone,currency,query"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      pricing(data);
    })
    // .catch((err) => {
    //   fetch("https://api.coreui.io/geo/")
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       pricing(data);
    //     })
    //     .catch((err) => {
    //       throw err;
    //     });
    // });
}
