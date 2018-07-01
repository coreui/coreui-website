'use strict'

function addVat(vatRate, country) {

  $('.price').each(function(){
    var price = parseInt($(this).html());
    var vat = Math.round(price * (vatRate / 100) * 100) / 100;
    var priceWithVat = Math.round((price + vat) * 100) / 100;
    $(this).after('<span class="vat"> + VAT <button type="button" class="btn p-0 text-muted" data-container="body" data-toggle="popover" data-placement="bottom" data-html="true" data-content="<p>At this time, we have to charge and collect VAT on all transactions made in the EU.</p><p>However, if you have been charged VAT, but are a business with a valid VAT Number issued by any Member State of the EU, please buy the product, then wait for your email receipt to arrive.</p><p>On your email receipt is a button that says <b>GENERATE INVOICE</b>.</p><p>When you click this button, you\'ll be sent to an invoice field. There, you can enter your VAT registration number and automatically process a refund for the VAT you paid. This refund will take 2-3 days to arrive at your credit card or PayPal account.</p>"><i class="cui-question-mark"></i></button></span><br/>');
    $(this).parent().parent().append('<div class="text-muted mt-4"><small>Your card will be charged <strong>$' + priceWithVat + '</strong><br> including $' + vat + ' for <a class="text-muted" tabindex="0" role="button" data-toggle="popover" data-placement="top" data-html="true" data-content="<p>At this time, we have to charge and collect VAT on all transactions made in the EU.</p><p>However, if you have been charged VAT, but are a business with a valid VAT Number issued by any Member State of the EU, please buy the product, then wait for your email receipt to arrive.</p><p>On your email receipt is a button that says <b>GENERATE INVOICE</b>.</p><p>When you click this button, you\'ll be sent to an invoice field. There, you can enter your VAT registration number and automatically process a refund for the VAT you paid. This refund will take 2-3 days to arrive at your credit card or PayPal account.</p>"><u>VAT</u></a> in ' + country + '.</small></div>');
  });
  $('[data-toggle="popover"]').popover({
    trigger: 'focus'
  })
}

$(document).ready(function(){
  $.getJSON('https://pro.ip-api.com/json/?key=EEKS6bLi6D91G1p', function(data) {
    var countryCode = data.countryCode;
    $.getJSON('/rates.json', function(json) {
      if (json.rates[countryCode]) {
        var vatRate = json.rates[countryCode].standard_rate
        var country = json.rates[countryCode].country
        if (vatRate > 0) {
          addVat(vatRate, country);
        }
      }
    });
  });
});
