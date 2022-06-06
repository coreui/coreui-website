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

const popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-toggle="popover"]')
);
const popoverList = popoverTriggerList.map(
  (popoverTriggerEl) => new coreui.Popover(popoverTriggerEl)
);

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

const updatePriceBasedOnQuantity = (product, productPricing, currency) => {
  const selectElement = document.getElementById(`select-${product}`);
  const buyButtonElement = document.getElementById(`buy-${product}`);
  const contactUsElement = document.getElementById(`contact-us-${product}`);
  const currentPriceElement = document.getElementById(
    `current-price-${product}`
  );
  const oldPriceElement = document.getElementById(`old-price-${product}`);
  const priceTypeElement = document.getElementById(`price-type-${product}`);

  if (!selectElement) {
    return;
  }

  selectElement.addEventListener("change", (event) => {
    const value = event.target.value;
    const currentAmount = formatCurrency(
      getCurrentPrice(productPricing, currency, parseFloat(value)) *
        parseFloat(value),
      currency
    );

    const href = buyButtonElement.href;
    const quantity =
      href.indexOf("QTY=") !== -1
        ? getQueryParams("QTY", href)
        : getQueryParams("qty", href);

    // if (value > 1) {
    //   priceTypeElement.innerHTML = `${formatCurrency(
    //     getCurrentPrice(productPricing, currency, parseFloat(value)),
    //     currency
    //   )} per developer`;
    // } else {
    //   priceTypeElement.innerHTML = "per developer";
    // }

    if (value === "15+") {
      buyButtonElement.style.display = "none";
      contactUsElement.style.display = "inline-block";
      currentPriceElement.innerHTML = "Custom";
      oldPriceElement.innerHTML = "";
    } else {
      buyButtonElement.style.display = "inline-block";
      contactUsElement.style.display = "none";
      currentPriceElement.innerHTML = `${currentAmount}`;
      buyButtonElement.href =
        href.indexOf("QTY=") !== -1
          ? href.replace(`QTY=${quantity}`, `QTY=${value}`)
          : href.replace(`qty=${quantity}`, `qty=${value}`);
    }
  });
};

const pricing = (data) => {
  console.log(data.currency)
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

        const currentPriceElement = document.getElementById(
          `current-price-${productName}`
        );
        const oldPriceElement = document.getElementById(
          `old-price-${productName}`
        );
        const buyButtonElement = document.getElementById(`buy-${productName}`);

        buyButtonElement.href =
          buyButtonElement.href.indexOf("QTY=") !== -1
            ? `${buyButtonElement.href}&LANG=${
                userLang().split("-")[0]
              }&CURRENCY=${currency}`
            : `${buyButtonElement.href}&language=${
                userLang().split("-")[0]
              }&currency=${currency}`;

        if (productCurrentPrice) {
          currentPriceElement.innerHTML = productCurrentPrice;
          
          if (EM_CURRENCIES.includes(currency)) {
            currentPriceElement.classList.add("em-active")
            const emEl = document.createElement("div")
            emEl.classList.add("product-em-price", "text-angular")
            emEl.innerHTML = `${productEMPrice} <div class="small"><strong>Limited offer!</strong><br/>-40% using code <strong>EMKT</strong></div>`
            currentPriceElement.after(emEl)
          }
        }
        if (getOldPrice(productPricing, currency, 4)) {
          oldPriceElement.innerHTML = productOldPrice;
        }

        updatePriceBasedOnQuantity(productName, productPricing, currency);
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

if (document.getElementById("pricing-new")) {
  document.addEventListener(
    "click",
    function (event) {
      if (event.target.matches("#switch-to-template")) {
        event.target.classList.add("active");
        document.getElementById("switch-to-library").classList.remove("active");
        document.querySelectorAll(".offer-template").forEach((element) => {
          element.style.display = "initial";
        });
        document.querySelectorAll(".offer-library").forEach((element) => {
          element.style.display = "none";
        });
      }
      if (event.target.matches("#switch-to-library")) {
        event.target.classList.add("active");
        document
          .getElementById("switch-to-template")
          .classList.remove("active");
        document.querySelectorAll(".offer-template").forEach((element) => {
          element.style.display = "none";
        });
        document.querySelectorAll(".offer-library").forEach((element) => {
          element.style.display = "initial";
        });
      }
    },
    false
  );

  fetch(
    "https://pro.ip-api.com/json/?key=EEKS6bLi6D91G1p&fields=status,message,country,countryCode,timezone,currency,query"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      pricing(data);
    })
    .catch((err) => {
      fetch("https://api.coreui.io/geo/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          pricing(data);
        })
        .catch((err) => {
          throw err;
        });
    });
}
