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

const formatCurrency = (amount, currency) => {
  return new Intl.NumberFormat(userLang, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
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
  const currency = CURRENCIES.includes(data.currency) ? data.currency : "USD";
  const paymentCurrencyElement = document.getElementById("payment-currency");
  paymentCurrencyElement.innerHTML = currency;

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
          currency
        );
        const productEMPrice = formatCurrency(
          getEMPrice(productPricing, currency, 4),
          currency
        );
        const productOldPrice = formatCurrency(
          getOldPrice(productPricing, currency, 4),
          currency
        );

        const currentPriceElement = document.getElementsByClassName(
          `current-price-${productName}`
        );
        const oldPriceElement = document.getElementsByClassName(
          `old-price-${productName}`
        );
        // const buyButtonElement = document.getElementsByClassName(`buy-${productName}`);
        const buyButtonElement = document.getElementsByClassName(`buy-${productName}`);

        Array.from(buyButtonElement).forEach((el) => {
          el.href =
            el.href.indexOf("QTY=") !== -1
              ? `${el.href}&LANG=${
                  userLang().split("-")[0]
                }&CURRENCY=${currency}`
              : `${el.href}&language=${
                  userLang().split("-")[0]
                }&currency=${currency}`;
        });

        // buyButtonElement.href =
        //   buyButtonElement.href.indexOf("QTY=") !== -1
        //     ? `${buyButtonElement.href}&LANG=${
        //         userLang().split("-")[0]
        //       }&CURRENCY=${currency}`
        //     : `${buyButtonElement.href}&language=${
        //         userLang().split("-")[0]
        //       }&currency=${currency}`;

        if (productCurrentPrice) {
          // currentPriceElement.innerHTML = productCurrentPrice;

          Array.from(currentPriceElement).forEach((el) => {
            el.innerHTML = productCurrentPrice;

            if (EM_CURRENCIES.includes(currency)) {
              if (el.classList.contains("em-active")) {
                return
              }

              el.classList.add("em-active")
              const emEl = document.createElement("div")
              emEl.classList.add("product-em-price", "text-angular")
              emEl.innerHTML = `${productEMPrice} <div class="small"><strong>Limited offer!</strong><br/>-40% using code <strong>EMKT</strong></div>`
              el.after(emEl)
            }
          });
        }
        
        if (getOldPrice(productPricing, currency, 4)) {
          // oldPriceElement.innerHTML = productOldPrice;

          Array.from(oldPriceElement).forEach((el) => {
            el.innerHTML = productOldPrice;
          });
        }

        // updatePriceBasedOnQuantity(productName, productPricing, currency);
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
