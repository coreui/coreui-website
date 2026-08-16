'use strict'

// Get all variables from url
function queryString() {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split('=');
    // If first entry with this name
    if (typeof query_string[pair[0]] === 'undefined') {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === 'string') {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
};

// Check Cookie
function checkCookie() {
  var username = getCookie('username');
  if (username != '') {
    // alert('Welcome again ' + username);
  } else {
    username = prompt('Please enter your name:', '');
    if (username != '' && username != null) {
      setCookie('username', username, 365);
    }
  }
}

// Get Cookie
function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

// Set Cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = 'expires='+ d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

// Set FirstVisit, LastVisit, Visits
function setVisits() {
  var firstVisit = getCookie('FirstVisit');
  var lastVisit = getCookie('LastVisit');
  var visits = getCookie('Visits');
  var date = new Date();
  var newDate = date.getTime();
  // date.toUTCString();

  if (firstVisit == '') {
    setCookie('FirstVisit', newDate, 365);
    setCookie('Visits', 1, 365);
  }

  var hours = ((newDate - lastVisit) / (1000 * 60 * 60)).toFixed(1);

  if (hours > 12) {
    visits = visits + 1;
    setCookie('Visits', visits, 365);
  }

  setCookie('LastVisit', newDate, 365);
}

// function setSource() {
//   var utmSource = queryString().utm_source;
//   var utmCampaing = queryString().utm_campaign;
//   var utmMedium = queryString().utm_medium;
//   var utmTerm = queryString().utm_term;
//   var utmContent = queryString().utm_content;
//
//   if (typeof utmSource !== 'undefined') {
//     setCookie('Source', utmSource, 365);
//   }
//   if (typeof utmCampaing !== 'undefined') {
//     setCookie('Campaing', utmCampaing, 365);
//   }
//   if (typeof utmMedium !== 'undefined') {
//     setCookie('Medium', utmMedium, 365);
//   }
//   if (typeof utmTerm !== 'undefined') {
//     setCookie('Term', utmTerm, 365);
//   }
//   if (typeof utmContent !== 'undefined') {
//     setCookie('Content', utmContent, 365);
//   }
// }

// function buyInit(product, license, price) {
//   var product = product;
//   var license = license;
//   var price = price.replace('$','');
//   var source = getCookie('Source');
//   var campaing = getCookie('Campaing');
//   var medium = getCookie('Medium');
//   var term = getCookie('Term');
//   var content = getCookie('Content');
//   var firstVisit = getCookie('FirstVisit');
//   var lastVisit = getCookie('LastVisit');
//   var visits = getCookie('Visits');
//   var millisecFromFirstVisit = lastVisit - firstVisit;
//
//   var first = new Date(parseInt(firstVisit));
//   var last = new Date(parseInt(lastVisit));
//
//   // console.log(first);
//   // console.log(last);
//
//   var days = (millisecFromFirstVisit / (24 * 1000 * 60 * 60 * 24)).toFixed(1);
//
//   ga('send', 'event', license, 'iwantthis', product, price);
//
//   $.getJSON('https://pro.ip-api.com/json/?key=EEKS6bLi6D91G1p', function(data) {
//     var country = data.country;
//     var city = data.city;
//     var ip = data.ip;
//
//     $.ajax({
//       url: 'https://genesisui.com/mail/notifications.php',
//       type: 'POST',
//       data: {
//         product: product,
//         license: license,
//         price: price,
//         country: country,
//         city: city,
//         ip: ip,
//         source: source,
//         campaing: campaing,
//         medium: medium,
//         term: term,
//         content: content,
//         first: first.toUTCString(),
//         last: last.toUTCString(),
//         visits: visits,
//         days: days
//       },
//       cache: false,
//       success: function() {
//         // Success message
//       },
//       error: function() {
//         // Fail message
//       }
//     });
//   });
// }

$(function () {
  setVisits();
  // setSource();
  // console.log(document.cookie);
});
