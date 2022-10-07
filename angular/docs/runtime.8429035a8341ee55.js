(()=>{"use strict";var e,v={},m={};function a(e){var d=m[e];if(void 0!==d)return d.exports;var r=m[e]={exports:{}};return v[e].call(r.exports,r,r.exports,a),r.exports}a.m=v,e=[],a.O=(d,r,c,n)=>{if(!r){var t=1/0;for(f=0;f<e.length;f++){for(var[r,c,n]=e[f],u=!0,b=0;b<r.length;b++)(!1&n||t>=n)&&Object.keys(a.O).every(p=>a.O[p](r[b]))?r.splice(b--,1):(u=!1,n<t&&(t=n));if(u){e.splice(f--,1);var i=c();void 0!==i&&(d=i)}}return d}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[r,c,n]},a.n=e=>{var d=e&&e.__esModule?()=>e.default:()=>e;return a.d(d,{a:d}),d},a.d=(e,d)=>{for(var r in d)a.o(d,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:d[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((d,r)=>(a.f[r](e,d),d),[])),a.u=e=>(592===e?"common":e)+"."+{11:"d5ef46aa478797de",20:"9d1907d3468cf599",48:"b192bf46d70a3552",59:"2712b26fbed48f0a",69:"4aeaf42a9b509b4c",103:"6fc41dc367cb9137",118:"b2c43f654b16deb7",137:"333fe41aea4495c0",155:"9ad890b6f50628a5",167:"171cae2a3d5b2908",230:"4a8895f1d1ad58f2",248:"64de9e3b22497c9f",257:"140037a6a08c5299",289:"56c3e408aef98c9b",306:"88f366416bc4779c",314:"018e06eb943b2d66",340:"50ec539713d3d0d7",348:"08fc9d68d960736f",409:"0705e330a4d8a220",410:"252ba41084ae3e55",439:"3b6fea87747ae402",449:"9fb17da92dcf35fe",481:"bcadddcac443bc2c",497:"5baba22fc99ef9ea",498:"76e21d762dcc8bc2",509:"ae5c3dc44e300065",572:"5dcead4c8c944c44",575:"5af1e4f554920674",585:"37c9041f9d52c4d2",591:"e1d4dc4d92926b19",592:"1d2ae2dc1048a6d7",598:"d542c584e39f6547",622:"4239b844fc985bc2",631:"6121930c91a78856",632:"d03d91e52f91d3d4",691:"a1aa940bb8386dbf",734:"00f003aa814afaab",756:"012e7a4244129ad6",816:"6c3e5b3a07bf8b8f",871:"bf8e0387f828a848",902:"e92283795ef20366",910:"85b7483a728cde78",911:"482ebb84365e403f",976:"6d56158fedfc2cc7",982:"1235e02e3f9c5d99",990:"58b57f86d8bc0145"}[e]+".js",a.miniCssF=e=>{},a.o=(e,d)=>Object.prototype.hasOwnProperty.call(e,d),(()=>{var e={},d="docs:";a.l=(r,c,n,f)=>{if(e[r])e[r].push(c);else{var t,u;if(void 0!==n)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var o=b[i];if(o.getAttribute("src")==r||o.getAttribute("data-webpack")==d+n){t=o;break}}t||(u=!0,(t=document.createElement("script")).type="module",t.charset="utf-8",t.timeout=120,a.nc&&t.setAttribute("nonce",a.nc),t.setAttribute("data-webpack",d+n),t.src=a.tu(r)),e[r]=[c];var l=(g,p)=>{t.onerror=t.onload=null,clearTimeout(s);var _=e[r];if(delete e[r],t.parentNode&&t.parentNode.removeChild(t),_&&_.forEach(h=>h(p)),g)return g(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),u&&document.head.appendChild(t)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="/angular/docs/",(()=>{var e={666:0};a.f.j=(c,n)=>{var f=a.o(e,c)?e[c]:void 0;if(0!==f)if(f)n.push(f[2]);else if(666!=c){var t=new Promise((o,l)=>f=e[c]=[o,l]);n.push(f[2]=t);var u=a.p+a.u(c),b=new Error;a.l(u,o=>{if(a.o(e,c)&&(0!==(f=e[c])&&(e[c]=void 0),f)){var l=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;b.message="Loading chunk "+c+" failed.\n("+l+": "+s+")",b.name="ChunkLoadError",b.type=l,b.request=s,f[1](b)}},"chunk-"+c,c)}else e[c]=0},a.O.j=c=>0===e[c];var d=(c,n)=>{var b,i,[f,t,u]=n,o=0;if(f.some(s=>0!==e[s])){for(b in t)a.o(t,b)&&(a.m[b]=t[b]);if(u)var l=u(a)}for(c&&c(n);o<f.length;o++)a.o(e,i=f[o])&&e[i]&&e[i][0](),e[i]=0;return a.O(l)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(d.bind(null,0)),r.push=d.bind(null,r.push.bind(r))})()})();