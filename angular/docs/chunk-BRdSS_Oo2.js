import{$t as Uv,An as aM,B as Gp,Br as kw,F as FS,Fi as v,Fr as kb,G as Ht,Ht as TS,K as Hy,Lr as kp,N as Ev,Nt as Rs,T as D_,Tr as jS,Ut as Td,Wn as ce,Wr as lN,_ as By,_t as Op,an as WS,d as BM,gi as qp,gn as Yv,ht as Ob,jn as aN,kt as RM,nt as KM,qn as cv,qr as lv,rt as Kv,st as Lo,tn as VS,tt as K$1,ui as pN,un as XS,ur as gd,y as CS,yn as ZM,zt as Sr}from"./chunk-D4QfcjgQ.js";import{b as vt$1,m as Tt$1}from"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{$n as jn,Cn as co,Ct as Sm,Er as ri,Kr as vr,Mr as ss,Nr as tO,Ui as nr,Xi as y,Yt as Xt,Zr as wn,b as Cr,cr as ls,en as Yo,er as jo,et as Na,f as Bi,jr as so,or as lm,sr as lo,ti as xg}from"./main-CRW2IFLY.js";import{t as ie$1}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";import{C as t,d as e,m as i,p as h,v as o,y as p}from"./chunk-DCYj8_ol.js";import{t as m}from"./chunk-BSCFwVWW.js";var Ke=(n,o)=>o.value;function qe(n,o){if(n&1&&(Rs(0,`c-multi-select-option`,3)(1,`div`,6),qp(),lv(2,`svg`,7),RM(3),gd()()),n&2){let l=o.$implicit,a=XS();cv(`value`,l.value),kw(2),cv(`cIcon`,a.flags[l.value]),kw(),Td(` `,l.label,` `)}}function Ye(n,o){if(n&1&&(Rs(0,`c-multi-select-option`,3),RM(1),gd()),n&2){let l=o.$implicit;cv(`value`,l),kw(),Td(` `,l,` `)}}var K=class n{constructor(){this.flags={de:o,es:t,gb:e,pl:i,us:h};this.cities=Ht([]);this.countries=[{value:`pl`,label:`Poland`,cities:[`Warszawa`,`Kraków`,`Łódź`,`Wrocław`,`Poznań`]},{value:`de`,label:`Germany`,cities:[`Berlin`,`Hamburg`,`Munich`,`Cologne`,`Frankfurt`]},{value:`us`,label:`United States`,cities:[`New York`,`Los Angeles`,`Chicago`,`Houston`,`Phoenix`]},{value:`es`,label:`Spain`,cities:[`Madrid`,`Barcelona`,`Valencia`,`Seville`,`Zaragoza`]},{value:`gb`,label:`United Kingdom`,cities:[`London`,`Birmingham`,`Manchester`,`Glasgow`,`Liverpool`]}]}handleCountryChange(o){let l=this.countries.find(a=>a.value===o)?.cities??[];this.cities.set(l)}handleCityChange(o){}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select19`]],decls:13,vars:2,consts:[[3,`md`],[`cLabel`,``,`for`,`country`],[`optionsStyle`,`text`,`selectionType`,`text`,`id`,`country`,3,`valueChange`],[3,`value`],[`cLabel`,``,`for`,`city`],[`optionsStyle`,`text`,`resetSelectionOnOptionsChange`,``,`selectionType`,`text`,`id`,`city`,3,`valueChange`],[1,`d-flex`],[`size`,`xl`,1,`me-3`,3,`cIcon`]],template:function(l,a){l&1&&(Rs(0,`c-row`)(1,`c-col`,0)(2,`label`,1),RM(3,`Select country`),gd(),Rs(4,`c-multi-select`,2),Ev(`valueChange`,function(z){return a.handleCountryChange(z)}),jS(5,qe,4,3,`c-multi-select-option`,3,Ke),gd()(),Rs(7,`c-col`,0)(8,`label`,4),RM(9,`Select city`),gd(),Rs(10,`c-multi-select`,5),Ev(`valueChange`,function(z){return a.handleCityChange(z)}),jS(11,Ye,2,2,`c-multi-select-option`,3,FS),gd()()()),l&2&&(kw(),cv(`md`,6),kw(4),VS(a.countries),kw(2),cv(`md`,6),kw(4),VS(a.cities()))},dependencies:[lm,ss,Na,ri,Yo,jo],encapsulation:2})}};var q=class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select16`]],decls:13,vars:0,consts:[[`multiple`,``,`clearSearchOnSelect`,``],[`selected`,``]],template:function(l,a){l&1&&(Rs(0,`c-multi-select`,0)(1,`c-multi-select-option`,1),RM(2,`Angular`),gd(),Rs(3,`c-multi-select-option`),RM(4,`Bootstrap`),gd(),Rs(5,`c-multi-select-option`),RM(6,`React.js`),gd(),Rs(7,`c-multi-select-option`),RM(8,`Vue.js`),gd(),Rs(9,`c-multi-select-option`),RM(10,`Svelte`),gd(),Rs(11,`c-multi-select-option`),RM(12,`Astro`),gd()())},dependencies:[Na,ri],encapsulation:2})}};var Y=class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select15`]],decls:9,vars:0,consts:[[`multiple`,``,`allowCreateOptions`,``],[`selected`,``]],template:function(l,a){l&1&&(Rs(0,`c-multi-select`,0)(1,`c-multi-select-option`,1),RM(2,`Angular`),gd(),Rs(3,`c-multi-select-option`),RM(4,`Bootstrap`),gd(),Rs(5,`c-multi-select-option`),RM(6,`React.js`),gd(),Rs(7,`c-multi-select-option`),RM(8,`Vue.js`),gd()())},dependencies:[Na,ri],encapsulation:2})}};var $=class n{constructor(){this.users=[{id:`1`,first_name:`Rowland`,last_name:`Jumont`,email:`rjumont0@dmoz.org`,country:`China`,ip_address:`248.90.215.202`,registered:`2019-04-27`},{id:`2`,first_name:`Melloney`,last_name:`Swindon`,email:`mswindon0@canalblog.com`,country:`Tunisia`,ip_address:`64.28.239.34`,registered:`2017-09-09`},{id:`3`,first_name:`Martica`,last_name:`Farfolomeev`,email:`mfarfolomeev1@bluehost.com`,country:`Philippines`,ip_address:`135.56.179.89`,registered:`2021-02-26`},{id:`4`,first_name:`Modestia`,last_name:`Batten`,email:`mbatten2@epa.gov`,country:`Philippines`,ip_address:`119.63.79.34`,registered:`2022-03-24`},{id:`5`,first_name:`Peyter`,last_name:`Andrusov`,email:`pandrusov3@a8.net`,country:`Sweden`,ip_address:`127.179.144.121`,registered:`2017-09-15`},{id:`6`,first_name:`Brandise`,last_name:`Lygoe`,email:`blygoe4@linkedin.com`,country:`Norway`,ip_address:`7.28.40.151`,registered:`2022-04-08`},{id:`7`,first_name:`Zitella`,last_name:`Renshall`,email:`zrenshall5@hugedomains.com`,country:`Brazil`,ip_address:`191.192.158.32`,registered:`2020-10-23`},{id:`8`,first_name:`Cynthy`,last_name:`Vaan`,email:`cvaan6@psu.edu`,country:`Indonesia`,ip_address:`80.142.100.40`,registered:`2017-05-08`},{id:`9`,first_name:`Nicky`,last_name:`Elgy`,email:`nelgy7@acquirethisname.com`,country:`China`,ip_address:`233.139.91.55`,registered:`2020-08-01`},{id:`10`,first_name:`Portie`,last_name:`Van der Brugge`,email:`pvanderbrugge8@google.cn`,country:`Netherlands`,ip_address:`77.3.161.172`,registered:`2020-11-25`},{id:`11`,first_name:`Melessa`,last_name:`Burgill`,email:`mburgill9@phpbb.com`,country:`China`,ip_address:`233.167.158.162`,registered:`2023-01-22`},{id:`12`,first_name:`Roman`,last_name:`Tomowicz`,email:`rtomowicza@nydailynews.com`,country:`United States`,ip_address:`85.13.181.7`,registered:`2021-06-23`},{id:`13`,first_name:`Velvet`,last_name:`Swafford`,email:`vswaffordb@sitemeter.com`,country:`Indonesia`,ip_address:`34.148.241.247`,registered:`2018-03-25`},{id:`14`,first_name:`Benoite`,last_name:`Langelaan`,email:`blangelaanc@sakura.ne.jp`,country:`Albania`,ip_address:`138.86.125.234`,registered:`2021-06-29`},{id:`15`,first_name:`Chantalle`,last_name:`Enriques`,email:`cenriquesd@smugmug.com`,country:`Brazil`,ip_address:`24.210.20.220`,registered:`2017-04-18`},{id:`16`,first_name:`Enid`,last_name:`Dulin`,email:`eduline@cocolog-nifty.com`,country:`China`,ip_address:`209.211.189.165`,registered:`2022-07-13`},{id:`17`,first_name:`Vasilis`,last_name:`Shew`,email:`vshewf@canalblog.com`,country:`Pakistan`,ip_address:`84.141.13.86`,registered:`2021-07-30`},{id:`18`,first_name:`Felice`,last_name:`Lawrence`,email:`flawrenceg@sogou.com`,country:`China`,ip_address:`212.53.202.73`,registered:`2019-03-11`},{id:`19`,first_name:`Tilly`,last_name:`Goodin`,email:`tgoodinh@ucla.edu`,country:`France`,ip_address:`155.213.172.112`,registered:`2021-05-13`},{id:`20`,first_name:`Linda`,last_name:`Lent`,email:`llenti@1und1.de`,country:`Brazil`,ip_address:`148.179.11.167`,registered:`2017-09-24`},{id:`21`,first_name:`Laina`,last_name:`Carbry`,email:`lcarbryj@wired.com`,country:`China`,ip_address:`193.84.239.208`,registered:`2017-05-14`},{id:`22`,first_name:`Tremayne`,last_name:`Wilcot`,email:`twilcotk@weebly.com`,country:`Indonesia`,ip_address:`177.192.189.51`,registered:`2019-05-01`},{id:`23`,first_name:`Lisha`,last_name:`Casacchia`,email:`lcasacchial@bloglovin.com`,country:`Iran`,ip_address:`140.229.23.132`,registered:`2018-05-11`},{id:`24`,first_name:`Christean`,last_name:`Donaghy`,email:`cdonaghym@bigcartel.com`,country:`Indonesia`,ip_address:`194.150.3.107`,registered:`2017-11-09`},{id:`25`,first_name:`Rabbi`,last_name:`Commings`,email:`rcommingsn@mlb.com`,country:`China`,ip_address:`170.102.59.120`,registered:`2017-09-14`},{id:`26`,first_name:`Lazar`,last_name:`Brightman`,email:`lbrightmano@samsung.com`,country:`China`,ip_address:`96.169.177.183`,registered:`2019-03-12`},{id:`27`,first_name:`Fara`,last_name:`Pixton`,email:`fpixtonp@miibeian.gov.cn`,country:`China`,ip_address:`125.192.244.33`,registered:`2020-07-02`},{id:`28`,first_name:`Frankie`,last_name:`Symmers`,email:`fsymmersq@archive.org`,country:`United Kingdom`,ip_address:`15.95.185.50`,registered:`2017-05-06`},{id:`29`,first_name:`Sullivan`,last_name:`Duchant`,email:`sduchantr@wikipedia.org`,country:`Thailand`,ip_address:`52.69.63.4`,registered:`2020-09-21`},{id:`30`,first_name:`Gale`,last_name:`Yggo`,email:`gyggos@amazon.com`,country:`Luxembourg`,ip_address:`10.147.136.158`,registered:`2017-03-01`},{id:`31`,first_name:`Daphne`,last_name:`Moscone`,email:`dmosconet@harvard.edu`,country:`Poland`,ip_address:`240.179.82.48`,registered:`2019-01-25`},{id:`32`,first_name:`Ainslie`,last_name:`Piperley`,email:`apiperleyu@guardian.co.uk`,country:`China`,ip_address:`212.140.73.147`,registered:`2018-08-16`},{id:`33`,first_name:`Esme`,last_name:`Trousdell`,email:`etrousdellv@woothemes.com`,country:`Mexico`,ip_address:`120.60.206.157`,registered:`2022-01-25`},{id:`34`,first_name:`Aurelia`,last_name:`Salway`,email:`asalwayw@sogou.com`,country:`China`,ip_address:`126.162.115.255`,registered:`2020-11-11`},{id:`35`,first_name:`Terry`,last_name:`McKern`,email:`tmckernx@vinaora.com`,country:`United States`,ip_address:`112.238.5.241`,registered:`2017-08-22`},{id:`36`,first_name:`Alphonse`,last_name:`Osgodby`,email:`aosgodbyy@hostgator.com`,country:`France`,ip_address:`190.137.124.53`,registered:`2019-10-20`},{id:`37`,first_name:`Boonie`,last_name:`Gytesham`,email:`bgyteshamz@ameblo.jp`,country:`Germany`,ip_address:`139.137.15.193`,registered:`2017-04-07`},{id:`38`,first_name:`Robinette`,last_name:`Denisyuk`,email:`rdenisyuk10@blog.com`,country:`Guatemala`,ip_address:`39.59.210.232`,registered:`2021-12-24`},{id:`39`,first_name:`Kerby`,last_name:`Walden`,email:`kwalden11@mtv.com`,country:`China`,ip_address:`52.147.135.77`,registered:`2019-09-04`},{id:`40`,first_name:`Goldie`,last_name:`MacMoyer`,email:`gmacmoyer12@flavors.me`,country:`Greece`,ip_address:`200.8.237.147`,registered:`2019-10-21`},{id:`41`,first_name:`Clemence`,last_name:`Tyrie`,email:`ctyrie13@goo.ne.jp`,country:`Sweden`,ip_address:`180.56.118.209`,registered:`2019-06-30`},{id:`42`,first_name:`Stormy`,last_name:`Grog`,email:`sgrog14@xinhuanet.com`,country:`Japan`,ip_address:`80.0.4.237`,registered:`2017-10-11`},{id:`43`,first_name:`Loutitia`,last_name:`Andreev`,email:`landreev15@myspace.com`,country:`Japan`,ip_address:`105.113.159.240`,registered:`2022-11-19`},{id:`44`,first_name:`Ashla`,last_name:`Farrer`,email:`afarrer16@slashdot.org`,country:`Philippines`,ip_address:`108.41.116.114`,registered:`2017-06-30`},{id:`45`,first_name:`Gaye`,last_name:`Gwilym`,email:`ggwilym17@ustream.tv`,country:`Peru`,ip_address:`108.147.41.3`,registered:`2017-11-02`},{id:`46`,first_name:`Harley`,last_name:`Vecard`,email:`hvecard18@weebly.com`,country:`Russia`,ip_address:`166.123.164.35`,registered:`2021-11-08`},{id:`47`,first_name:`Chadwick`,last_name:`Francke`,email:`cfrancke19@hp.com`,country:`Canada`,ip_address:`106.228.188.3`,registered:`2019-05-16`},{id:`48`,first_name:`Chrisse`,last_name:`Watkin`,email:`cwatkin1a@auda.org.au`,country:`Poland`,ip_address:`104.5.101.18`,registered:`2020-03-23`},{id:`49`,first_name:`Denyse`,last_name:`Freeman`,email:`dfreeman1b@constantcontact.com`,country:`China`,ip_address:`57.23.133.66`,registered:`2021-03-23`},{id:`50`,first_name:`Justine`,last_name:`Conibere`,email:`jconibere1c@elpais.com`,country:`Jamaica`,ip_address:`98.77.41.3`,registered:`2021-10-05`},{id:`51`,first_name:`Kalila`,last_name:`Mongenot`,email:`kmongenot1d@berkeley.edu`,country:`Panama`,ip_address:`110.15.203.86`,registered:`2020-07-31`},{id:`52`,first_name:`Claresta`,last_name:`Monahan`,email:`cmonahan1e@uol.com.br`,country:`Indonesia`,ip_address:`26.246.210.121`,registered:`2021-10-01`},{id:`53`,first_name:`Lindsey`,last_name:`Huchot`,email:`lhuchot1f@home.pl`,country:`Azerbaijan`,ip_address:`167.199.9.177`,registered:`2022-05-12`},{id:`54`,first_name:`Luciano`,last_name:`Ollerearnshaw`,email:`lollerearnshaw1g@thetimes.co.uk`,country:`Peru`,ip_address:`232.123.57.3`,registered:`2022-05-18`},{id:`55`,first_name:`Artie`,last_name:`Focke`,email:`afocke1h@google.com.au`,country:`Poland`,ip_address:`141.229.245.46`,registered:`2021-11-06`},{id:`56`,first_name:`Francyne`,last_name:`Gravestone`,email:`fgravestone1i@psu.edu`,country:`Indonesia`,ip_address:`60.151.142.197`,registered:`2017-07-27`},{id:`57`,first_name:`Kare`,last_name:`Mayling`,email:`kmayling1j@examiner.com`,country:`Indonesia`,ip_address:`179.31.176.197`,registered:`2018-11-14`},{id:`58`,first_name:`Tonya`,last_name:`Cressor`,email:`tcressor1k@xinhuanet.com`,country:`China`,ip_address:`215.203.39.111`,registered:`2018-06-16`},{id:`59`,first_name:`Cindee`,last_name:`Reddington`,email:`creddington1l@blogtalkradio.com`,country:`South Korea`,ip_address:`63.234.142.163`,registered:`2021-07-07`},{id:`60`,first_name:`Felice`,last_name:`Sneezum`,email:`fsneezum1m@uiuc.edu`,country:`Indonesia`,ip_address:`225.218.11.88`,registered:`2019-03-31`},{id:`61`,first_name:`Aluin`,last_name:`Braben`,email:`abraben1n@arstechnica.com`,country:`Japan`,ip_address:`138.199.112.47`,registered:`2017-05-30`},{id:`62`,first_name:`Gerome`,last_name:`Rowlinson`,email:`growlinson1o@ycombinator.com`,country:`Ireland`,ip_address:`205.131.176.187`,registered:`2020-12-05`},{id:`63`,first_name:`Ly`,last_name:`Roze`,email:`lroze1p@springer.com`,country:`Czech Republic`,ip_address:`53.186.166.82`,registered:`2017-08-22`},{id:`64`,first_name:`Fan`,last_name:`Bente`,email:`fbente1q@sitemeter.com`,country:`Bulgaria`,ip_address:`208.170.126.232`,registered:`2020-09-06`},{id:`65`,first_name:`Stephanus`,last_name:`Deverson`,email:`sdeverson1r@sciencedaily.com`,country:`Portugal`,ip_address:`79.162.137.0`,registered:`2019-12-23`},{id:`66`,first_name:`Julienne`,last_name:`Brydell`,email:`jbrydell1s@xing.com`,country:`Azerbaijan`,ip_address:`87.32.218.94`,registered:`2019-06-12`},{id:`67`,first_name:`Brit`,last_name:`Choules`,email:`bchoules1t@bloglovin.com`,country:`Portugal`,ip_address:`122.153.96.157`,registered:`2018-01-05`},{id:`68`,first_name:`Rawley`,last_name:`Tiebe`,email:`rtiebe1u@prweb.com`,country:`Jamaica`,ip_address:`46.39.61.102`,registered:`2019-08-22`},{id:`69`,first_name:`Morley`,last_name:`Mellmer`,email:`mmellmer1v@goo.ne.jp`,country:`Portugal`,ip_address:`76.235.54.184`,registered:`2019-07-14`},{id:`70`,first_name:`Reinaldos`,last_name:`Fernandes`,email:`rfernandes1w@usda.gov`,country:`Indonesia`,ip_address:`175.71.20.28`,registered:`2021-03-03`},{id:`71`,first_name:`Aron`,last_name:`Marsie`,email:`amarsie1x@soup.io`,country:`Philippines`,ip_address:`163.5.128.113`,registered:`2021-12-12`},{id:`72`,first_name:`Mignon`,last_name:`MacLeod`,email:`mmacleod1y@wsj.com`,country:`Peru`,ip_address:`73.76.76.203`,registered:`2018-12-28`},{id:`73`,first_name:`Jobina`,last_name:`Antonijevic`,email:`jantonijevic1z@senate.gov`,country:`Sweden`,ip_address:`235.102.55.226`,registered:`2021-08-17`},{id:`74`,first_name:`Fredric`,last_name:`Tuke`,email:`ftuke20@google.es`,country:`Angola`,ip_address:`224.210.197.236`,registered:`2019-11-06`},{id:`75`,first_name:`Ron`,last_name:`Cacacie`,email:`rcacacie21@ameblo.jp`,country:`Philippines`,ip_address:`219.250.115.66`,registered:`2020-06-01`},{id:`76`,first_name:`Natassia`,last_name:`Whisker`,email:`nwhisker22@woothemes.com`,country:`Brazil`,ip_address:`129.209.182.96`,registered:`2019-07-06`},{id:`77`,first_name:`Laurena`,last_name:`Yemm`,email:`lyemm23@latimes.com`,country:`Ukraine`,ip_address:`234.36.49.108`,registered:`2019-04-26`},{id:`78`,first_name:`Brett`,last_name:`Bundey`,email:`bbundey24@chicagotribune.com`,country:`China`,ip_address:`147.107.165.124`,registered:`2017-03-15`},{id:`79`,first_name:`Gwendolyn`,last_name:`Aleevy`,email:`galeevy25@thetimes.co.uk`,country:`Indonesia`,ip_address:`236.170.159.101`,registered:`2021-11-24`},{id:`80`,first_name:`Marice`,last_name:`Corston`,email:`mcorston26@comsenz.com`,country:`Guadeloupe`,ip_address:`137.95.107.239`,registered:`2022-10-06`},{id:`81`,first_name:`Porty`,last_name:`Pembry`,email:`ppembry27@mit.edu`,country:`China`,ip_address:`124.228.125.51`,registered:`2019-12-03`},{id:`82`,first_name:`Kenyon`,last_name:`Banker`,email:`kbanker28@zimbio.com`,country:`Russia`,ip_address:`45.23.186.203`,registered:`2019-08-12`},{id:`83`,first_name:`Friedrich`,last_name:`Phettis`,email:`fphettis29@tiny.cc`,country:`Comoros`,ip_address:`123.55.170.241`,registered:`2018-12-03`},{id:`84`,first_name:`Dennie`,last_name:`Rickwood`,email:`drickwood2a@businessweek.com`,country:`Vietnam`,ip_address:`195.208.216.82`,registered:`2020-05-07`},{id:`85`,first_name:`Stafford`,last_name:`Jendrich`,email:`sjendrich2b@pbs.org`,country:`China`,ip_address:`127.23.207.10`,registered:`2019-11-16`},{id:`86`,first_name:`Weston`,last_name:`Westcarr`,email:`wwestcarr2c@redcross.org`,country:`Peru`,ip_address:`244.140.106.99`,registered:`2018-01-08`},{id:`87`,first_name:`Karole`,last_name:`Cumberledge`,email:`kcumberledge2d@answers.com`,country:`Macedonia`,ip_address:`5.178.26.46`,registered:`2017-06-15`},{id:`88`,first_name:`Fanchon`,last_name:`Alenshev`,email:`falenshev2e@surveymonkey.com`,country:`Indonesia`,ip_address:`135.228.36.1`,registered:`2018-11-17`},{id:`89`,first_name:`Kele`,last_name:`Beech`,email:`kbeech2f@gov.uk`,country:`Russia`,ip_address:`157.92.244.151`,registered:`2020-10-19`},{id:`90`,first_name:`Crystal`,last_name:`Westgate`,email:`cwestgate2g@liveinternet.ru`,country:`Greece`,ip_address:`69.12.109.157`,registered:`2019-05-04`},{id:`91`,first_name:`Robinet`,last_name:`Pargent`,email:`rpargent2h@macromedia.com`,country:`Indonesia`,ip_address:`105.176.209.246`,registered:`2020-11-06`},{id:`92`,first_name:`Ritchie`,last_name:`Dealey`,email:`rdealey2i@time.com`,country:`Tanzania`,ip_address:`11.217.187.232`,registered:`2021-07-07`},{id:`93`,first_name:`Karyl`,last_name:`Bischop`,email:`kbischop2j@aol.com`,country:`Thailand`,ip_address:`220.178.23.247`,registered:`2020-03-31`},{id:`94`,first_name:`Lemmie`,last_name:`Tatterton`,email:`ltatterton2k@delicious.com`,country:`Indonesia`,ip_address:`252.191.234.163`,registered:`2022-04-13`},{id:`95`,first_name:`Ladonna`,last_name:`Deverille`,email:`ldeverille2l@netlog.com`,country:`Dominican Republic`,ip_address:`25.248.243.242`,registered:`2018-01-27`},{id:`96`,first_name:`Austin`,last_name:`Girk`,email:`agirk2m@opera.com`,country:`China`,ip_address:`180.82.151.113`,registered:`2020-05-24`},{id:`97`,first_name:`Letisha`,last_name:`Groveham`,email:`lgroveham2n@senate.gov`,country:`Sweden`,ip_address:`95.159.112.187`,registered:`2019-06-23`},{id:`98`,first_name:`Leonerd`,last_name:`Hollingby`,email:`lhollingby2o@ihg.com`,country:`Indonesia`,ip_address:`109.27.62.206`,registered:`2018-04-13`},{id:`99`,first_name:`Ally`,last_name:`Chadwin`,email:`achadwin2p@typepad.com`,country:`Lebanon`,ip_address:`168.77.72.236`,registered:`2022-07-15`}]}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵprov=K$1({token:n,factory:n.ɵfac})}};var Ze=(n,o)=>o.value;function Qe(n,o){if(n&1&&(Rs(0,`c-multi-select-option`,2),qp(),lv(1,`svg`,3),RM(2),gd()),n&2){let l=o.$implicit,a=XS();cv(`value`,l.value),kw(),cv(`cIcon`,a.icons.cilPaperclip),kw(),Td(` `,l.label,` `)}}var Z=class n{constructor(o){this.optionsService=o;this.icons={cilPaperclip:p};this.options$=new Sr([]);this.formGroup=new jn({sampleSelect:new Xt([`4`])});this.searchFn=(o,l)=>o.label?.toLowerCase().startsWith(l.trimStart().toLowerCase())??!0;this.options=o.users.map(l=>({value:l.id,label:l.last_name})),this.options$.next([...this.options])}static{this.ɵfac=function(l){return new(l||n)(Lo($))}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select12`]],features:[ZM([$])],decls:9,vars:7,consts:[[3,`formGroup`],[`formControlName`,`sampleSelect`,`multiple`,`true`,`visibleItems`,`8`,3,`search`],[3,`value`],[1,`me-1`,3,`cIcon`]],template:function(l,a){l&1&&(Rs(0,`form`,0)(1,`p`),RM(2),aN(3,`json`),gd(),lv(4,`hr`),Rs(5,`c-multi-select`,1),jS(6,Qe,3,3,`c-multi-select-option`,2,Ze),aN(8,`async`),gd(),Ob(),gd()),l&2&&(cv(`formGroup`,a.formGroup),kw(2),Td(`Form value: `,lN(3,3,a.formGroup.value)),kw(3),cv(`search`,a.searchFn),kb(),kw(),VS(lN(8,5,a.options$)))},dependencies:[Bi,tO,wn,vr,co,lo,Na,ri,Yo,vt$1,Tt$1],encapsulation:2})}};var Xe=()=>[];var et=(n,o)=>o.value;function tt(n,o){if(n&1&&(Rs(0,`c-multi-select-option`,2),qp(),lv(1,`svg`,3),RM(2),gd()),n&2){let l=o.$implicit,a=XS();cv(`value`,l.value),kw(),cv(`cIcon`,a.icons.cilPaperclip),kw(),Td(` `,l.label,` `)}}var Q=class n{constructor(o){this.optionsService=o;this.icons={cilPaperclip:p};this.filteredOptions$=new Sr([]);this.searchValue$=new ce;this.formGroup=new jn({sampleSelect:new Xt([`4`])});this.options=o.users.map(l=>({value:l.id,label:l.last_name})),this.filteredOptions$.next([...this.options]),this.searchValue$.subscribe(l=>{let a=this.options.filter(C=>C.label.toLowerCase().startsWith(l.trimStart().toLowerCase()));this.filteredOptions$.next([...a])})}static{this.ɵfac=function(l){return new(l||n)(Lo($))}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select11`]],features:[ZM([$])],decls:10,vars:10,consts:[[3,`formGroup`],[`formControlName`,`sampleSelect`,`multiple`,`true`,`search`,`external`,`visibleItems`,`8`,3,`searchValueChange`,`options`],[3,`value`],[1,`me-1`,3,`cIcon`]],template:function(l,a){l&1&&(Rs(0,`form`,0)(1,`p`),RM(2),aN(3,`json`),gd(),lv(4,`hr`),Rs(5,`c-multi-select`,1),aN(6,`async`),Ev(`searchValueChange`,function(z){return a.searchValue$.next(z)}),jS(7,tt,3,3,`c-multi-select-option`,2,et),aN(9,`async`),gd(),Ob(),gd()),l&2&&(cv(`formGroup`,a.formGroup),kw(2),Td(`Form value: `,lN(3,3,a.formGroup.value)),kw(3),cv(`options`,lN(6,5,a.filteredOptions$)??KM(9,Xe)),kb(),kw(2),VS(lN(9,7,a.filteredOptions$)))},dependencies:[Bi,tO,wn,vr,co,lo,Na,ri,Yo,vt$1,Tt$1],encapsulation:2})}};var X=class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select10`]],decls:9,vars:0,consts:[[`multiple`,``,`disabled`,``],[`selected`,``]],template:function(l,a){l&1&&(Rs(0,`c-multi-select`,0)(1,`c-multi-select-option`,1),RM(2,`Angular`),gd(),Rs(3,`c-multi-select-option`),RM(4,`Bootstrap`),gd(),Rs(5,`c-multi-select-option`,1),RM(6,`React.js`),gd(),Rs(7,`c-multi-select-option`),RM(8,`Vue.js`),gd()())},dependencies:[Na,ri],encapsulation:2})}};var ee=class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select09`]],decls:9,vars:0,consts:[[`selectionType`,`text`],[`disabled`,``]],template:function(l,a){l&1&&(Rs(0,`c-multi-select`,0)(1,`c-multi-select-option`),RM(2,`Angular`),gd(),Rs(3,`c-multi-select-option`,1),RM(4,`Bootstrap`),gd(),Rs(5,`c-multi-select-option`),RM(6,`React.js`),gd(),Rs(7,`c-multi-select-option`),RM(8,`Vue.js`),gd()())},dependencies:[Na,ri],encapsulation:2})}};var te=class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select08`]],decls:29,vars:0,consts:[[`multiple`,``,`size`,`lg`],[`selected`,``],[`multiple`,``],[`multiple`,``,`size`,`sm`]],template:function(l,a){l&1&&(Rs(0,`c-multi-select`,0)(1,`c-multi-select-option`,1),RM(2,`Angular`),gd(),Rs(3,`c-multi-select-option`),RM(4,`Bootstrap`),gd(),Rs(5,`c-multi-select-option`),RM(6,`React.js`),gd(),Rs(7,`c-multi-select-option`),RM(8,`Vue.js`),gd()(),lv(9,`br`),Rs(10,`c-multi-select`,2)(11,`c-multi-select-option`,1),RM(12,`Angular`),gd(),Rs(13,`c-multi-select-option`),RM(14,`Bootstrap`),gd(),Rs(15,`c-multi-select-option`),RM(16,`React.js`),gd(),Rs(17,`c-multi-select-option`),RM(18,`Vue.js`),gd()(),lv(19,`br`),Rs(20,`c-multi-select`,3)(21,`c-multi-select-option`,1),RM(22,`Angular`),gd(),Rs(23,`c-multi-select-option`),RM(24,`Bootstrap`),gd(),Rs(25,`c-multi-select-option`),RM(26,`React.js`),gd(),Rs(27,`c-multi-select-option`),RM(28,`Vue.js`),gd()())},dependencies:[Na,ri],encapsulation:2})}};var ie=class n{constructor(){this.value=Ht([])}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select07`]],decls:18,vars:9,consts:[[`form`,`ngForm`],[`multiple`,``,`name`,`multiSelect`,3,`ngModelChange`,`ngModel`],[3,`selected`],[`value`,`react`,3,`selected`],[`value`,`vue`]],template:function(l,a){if(l&1){let C=WS();Rs(0,`form`,null,0)(2,`c-multi-select`,1),Kv(`ngModelChange`,function(se){return Op(C),BM(a.value,se)||(a.value=se),kp(se)}),Rs(3,`c-multi-select-option`,2),RM(4,`Angular`),gd(),Rs(5,`c-multi-select-option`),RM(6,`Bootstrap`),gd(),Rs(7,`c-multi-select-option`,3),RM(8,`React.js`),gd(),Rs(9,`c-multi-select-option`,4),RM(10,`Vue.js`),gd()(),Ob(),gd(),lv(11,`br`),Rs(12,`p`),RM(13),aN(14,`json`),gd(),Rs(15,`p`),RM(16),aN(17,`json`),gd()}if(l&2){let C=aM(1);kw(2),Yv(`ngModel`,a.value),kb(),kw(),cv(`selected`,!0),kw(4),cv(`selected`,!0),kw(6),Td(` Form value: `,lN(14,5,C.value)),kw(3),Td(` value: `,lN(17,7,a.value()))}},dependencies:[Bi,tO,wn,vr,Cr,so,xg,Na,ri,Tt$1],encapsulation:2})}};var ne=class n{constructor(){this.formGroup=new jn({multiSelect:new Xt([`Angular`,`Bootstrap`])})}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select06`]],decls:14,vars:4,consts:[[3,`formGroup`],[`formControlName`,`multiSelect`,`multiple`,``]],template:function(l,a){l&1&&(Rs(0,`form`,0)(1,`c-multi-select`,1)(2,`c-multi-select-option`),RM(3,`Angular`),gd(),Rs(4,`c-multi-select-option`),RM(5,`Bootstrap`),gd(),Rs(6,`c-multi-select-option`),RM(7,`React.js`),gd(),Rs(8,`c-multi-select-option`),RM(9,`Vue.js`),gd()(),Ob(),gd(),lv(10,`br`),Rs(11,`p`),RM(12),aN(13,`json`),gd()),l&2&&(cv(`formGroup`,a.formGroup),kw(),kb(),kw(11),Td(` Form value: `,lN(13,2,a.formGroup.value)))},dependencies:[Bi,tO,wn,vr,co,lo,Na,ri,Tt$1],encapsulation:2})}};var le=class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select05`]],decls:9,vars:0,consts:[[`multiple`,``,`selectionType`,`text`],[`selected`,``]],template:function(l,a){l&1&&(Rs(0,`c-multi-select`,0)(1,`c-multi-select-option`,1),RM(2,`Angular`),gd(),Rs(3,`c-multi-select-option`),RM(4,`Bootstrap`),gd(),Rs(5,`c-multi-select-option`),RM(6,`React.js`),gd(),Rs(7,`c-multi-select-option`),RM(8,`Vue.js`),gd()())},dependencies:[Na,ri],encapsulation:2})}};var oe=class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select04`]],decls:9,vars:0,consts:[[`multiple`,``,`selectionType`,`tags`],[`selected`,``]],template:function(l,a){l&1&&(Rs(0,`c-multi-select`,0)(1,`c-multi-select-option`,1),RM(2,`Angular`),gd(),Rs(3,`c-multi-select-option`),RM(4,`Bootstrap`),gd(),Rs(5,`c-multi-select-option`),RM(6,`React.js`),gd(),Rs(7,`c-multi-select-option`),RM(8,`Vue.js`),gd()())},dependencies:[Na,ri],encapsulation:2})}};var re=class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select03`]],decls:9,vars:0,consts:[[`multiple`,``,`selectionType`,`counter`],[`selected`,``]],template:function(l,a){l&1&&(Rs(0,`c-multi-select`,0)(1,`c-multi-select-option`,1),RM(2,`Angular`),gd(),Rs(3,`c-multi-select-option`),RM(4,`Bootstrap`),gd(),Rs(5,`c-multi-select-option`),RM(6,`React.js`),gd(),Rs(7,`c-multi-select-option`),RM(8,`Vue.js`),gd()())},dependencies:[Na,ri],encapsulation:2})}};var Ue=(n,o)=>o.value;function it(n,o){if(n&1&&(Rs(0,`c-multi-select-option`,1),RM(1),gd()),n&2){let l=o.$implicit;cv(`value`,l.value)(`selected`,l.selected??!1)(`disabled`,l.disabled),kw(),Td(` `,l.value,` `)}}function nt(n,o){if(n&1&&(Rs(0,`c-multi-select-option`,3),RM(1),gd()),n&2){let l=o.$implicit;cv(`value`,l.value)(`selected`,l.selected??!1),kw(),Td(` `,l.label,` `)}}var ae=class n{constructor(){this.frontend=[{value:`Angular`,selected:!0},{value:`Bootstrap`,disabled:!0},{value:`React.js`},{value:`Vue.js`}];this.backend=[{value:`b1`,label:`Django`},{value:`b2`,label:`Laravel`,selected:!0},{value:`b3`,label:`Node.js`}]}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select02`]],decls:6,vars:0,consts:[[`multiple`,``],[3,`value`,`selected`,`disabled`],[`label`,`Backend`],[3,`value`,`selected`]],template:function(l,a){l&1&&(Rs(0,`c-multi-select`,0),jS(1,it,2,4,`c-multi-select-option`,1,Ue),Rs(3,`c-multi-select-optgroup`,2),jS(4,nt,2,3,`c-multi-select-option`,3,Ue),gd()()),l&2&&(kw(),VS(a.frontend),kw(3),VS(a.backend))},dependencies:[Na,ri,Sm],encapsulation:2})}};var me=class n{static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select01`]],decls:18,vars:0,consts:[[`multiple`,``],[`selected`,``]],template:function(l,a){l&1&&(Rs(0,`c-multi-select`,0)(1,`c-multi-select-option`,1),RM(2,`Angular`),gd(),Rs(3,`c-multi-select-option`),RM(4,`Bootstrap`),gd(),Rs(5,`c-multi-select-option`,1),RM(6,`React.js`),gd(),Rs(7,`c-multi-select-option`),RM(8,`Vue.js`),gd(),Rs(9,`c-multi-select-optgroup`)(10,`c-multi-select-optgroup-label`),RM(11,`Backend`),gd(),Rs(12,`c-multi-select-option`),RM(13,`Django`),gd(),Rs(14,`c-multi-select-option`),RM(15,`Laravel`),gd(),Rs(16,`c-multi-select-option`),RM(17,`Node.js`),gd()()())},dependencies:[Na,ri,Sm,ls],encapsulation:2})}};var Je=`\`\`\`typescript
import { MultiSelectModule, SharedModule } from '@coreui/angular';

@NgModule({
    imports: [
      MultiSelectModule,
      SharedModule
    ]
})
export class AppModule(){}
\`\`\`
`;var ot=()=>[import(`./chunk-Bxog5yAS.js`).then(n=>n.MultiSelect13Component)];var rt=()=>[import(`./chunk-DafzGYuJ.js`).then(n=>n.MultiSelect14Component)];var at=()=>[`forms/multi-select/examples/multi-select01.component.html`,`forms/multi-select/examples/multi-select01.component.ts`];var mt=()=>[`forms/multi-select/examples/multi-select02.component.html`,`forms/multi-select/examples/multi-select02.component.ts`];var st=()=>[`forms/multi-select/examples/multi-select15.component.html`,`forms/multi-select/examples/multi-select15.component.ts`];var ct=()=>[`forms/multi-select/examples/multi-select16.component.html`,`forms/multi-select/examples/multi-select16.component.ts`];var pt=()=>[`forms/multi-select/examples/multi-select03.component.html`];var dt=()=>[`forms/multi-select/examples/multi-select04.component.html`];var ut=()=>[`forms/multi-select/examples/multi-select05.component.html`];var ft=()=>[`forms/multi-select/examples/multi-select09.component.html`];var gt=()=>[`forms/multi-select/examples/multi-select19.component.html`,`forms/multi-select/examples/multi-select19.component.ts`];var _t=()=>[`forms/multi-select/examples/multi-select10.component.html`];var yt=()=>[`forms/multi-select/examples/multi-select08.component.html`];var xt=()=>[`forms/multi-select/examples/multi-select11.component.html`,`forms/multi-select/examples/multi-select11.component.ts`,`forms/multi-select/examples/options.service.ts`];var ht=()=>[`forms/multi-select/examples/multi-select12.component.html`,`forms/multi-select/examples/multi-select12.component.ts`];var bt=()=>[`forms/multi-select/examples/multi-select13.component.html`,`forms/multi-select/examples/multi-select13.component.ts`,`forms/multi-select/examples/optionsRemote.service.ts`];var St=()=>[`forms/multi-select/examples/multi-select14.component.html`,`forms/multi-select/examples/multi-select14.component.ts`,`forms/multi-select/examples/optionsRemote.service.ts`];var vt=()=>[`forms/multi-select/examples/multi-select06.component.html`,`forms/multi-select/examples/multi-select06.component.ts`];var $t=()=>[`forms/multi-select/examples/multi-select07.component.html`,`forms/multi-select/examples/multi-select07.component.ts`];function Ct(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select01`),gd())}function wt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select02`),gd())}function Mt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select15`),gd())}function Et(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select16`),gd())}function Dt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select03`),gd())}function kt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select04`),gd())}function Tt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select05`),gd())}function It(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select09`),gd())}function Ft(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select19`),gd())}function zt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select10`),gd())}function Nt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select08`),gd())}function Pt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select11`),gd())}function jt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select12`),gd())}function Ot(n,o){n&1&&lv(0,`docs-multi-select13`)}function Rt(n,o){n&1&&(Rs(0,`div`,13),By(1,Ot,1,0),TS(2,1,ot),CS(),gd())}function Bt(n,o){n&1&&lv(0,`docs-multi-select14`)}function At(n,o){n&1&&(Rs(0,`div`,13),By(1,Bt,1,0),TS(2,1,rt),CS(),gd())}function Gt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select06`),gd())}function Vt(n,o){n&1&&(Rs(0,`div`,13),lv(1,`docs-multi-select07`),gd())}var He=class n{constructor(){this.usage=Je;this.headService=v(y);this.name=`Multi Select`;this.title=`Angular Multi Select Component`;this.description="Customize the native `select` with a powerful CoreUI **Multi-Select** component that changes initial element appearance and brings some new functionalities."}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description,pro:!0})}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=D_({type:n,selectors:[[`docs-multi-select-docs`]],decls:166,vars:41,consts:[[`docsExample`,``],[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`pro`,``,`stackblitz`,``,`componentName`,`MultiSelect01Component`,3,`files`,`name`],[3,`files`],[1,`docs-callout`,`docs-callout-info`],[`markdown`,``,1,`highlight`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 0 16 16`,`fill`,`#000`],[`d`,`M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 0 512 512`,`fill`,`#000`],[`d`,`M256.045 416.136.717 160.807l29.579-29.579 225.749 225.748 225.749-225.748 29.579 29.579-255.328 255.329z`],[1,`api-table`],[1,`badge`,`bg-primary`,`badge-sm`],[1,`docs-example`,`p-3`]],template:function(l,a){l&1&&(lv(0,`docs-banner-pro`),Rs(1,`h1`,1),RM(2),gd(),Rs(3,`markdown`,2),RM(4),gd(),lv(5,`docs-ads-carbon-loader`),Rs(6,`markdown`),RM(7,`
  ## Examples
`),gd(),Rs(8,`docs-example`,3),Hy(9,Ct,2,0,`ng-template`,null,0,pN),gd(),Rs(11,`docs-example`,4),Hy(12,wt,2,0,`ng-template`,null,0,pN),gd(),Rs(14,`markdown`),RM(15,`
  ## Modes

  ### Allow create options

  The \`allowCreateOptions\` property allows users to create new options in addition to selecting pre-existing ones from a
  list.

  When this property is set to true, the user can type in a new option in the search input field of the multiselect
  component. If the option does not exist in the list, it will be created and added to the list of available options.
  This can be useful when the list of available options is not comprehensive or when the user needs to add and select an
  option that is not already available.
`),gd(),Rs(16,`div`,5)(17,`p`),RM(18,` It's worth noting that this feature may not always be relevant, depending on the specific use case of the multiselect component. In some cases, it may be preferable to restrict the user to selecting only pre-existing options, while in other cases, allowing for the creation of new options may be essential. It's important to consider the specific requirements of your application when deciding whether to enable this feature. `),gd()(),Rs(19,`docs-example`,4),Hy(20,Mt,2,0,`ng-template`,null,0,pN),gd(),Rs(22,`markdown`),RM(23,"\n  ### Clear search on select\n\n  The `clearSearchOnSelect` property is a Boolean attribute that can be used with the MultiSelect component in the CoreUI Angular library.\n\n  When `clearSearchOnSelect` is set to `true`, the search input field in the MultiSelect component will be cleared as soon as the user selects an option from the dropdown list. This means that the search query will be reset and the user will be able to start a new search immediately.\n\n  By default, `clearSearchOnSelect` is set to `false`, which means that the search input field will retain the user's search query even after an option has been selected. This can be useful in situations where the user needs to select multiple options from the dropdown list that match the same search query.\n\n  To use the `clearSearchOnSelect` property with the MultiSelect component in the CoreUI Angular library, you simply need to set it to `true` or `false` as appropriate in your code.\n\n  In the following example, the `clearSearchOnSelect` property is set to `true`. The search input field will be cleared as soon as the user selects an option from the dropdown list.\n"),gd(),Rs(24,`docs-example`,4),Hy(25,Et,2,0,`ng-template`,null,0,pN),gd(),Rs(27,`markdown`),RM(28,`
  ## Selection types

  ### Counter
`),gd(),Rs(29,`docs-example`,4),Hy(30,Dt,2,0,`ng-template`,null,0,pN),gd(),Rs(32,`markdown`),RM(33,`
  ### Tags
`),gd(),Rs(34,`docs-example`,4),Hy(35,kt,2,0,`ng-template`,null,0,pN),gd(),Rs(37,`markdown`),RM(38,`
  ### Text
`),gd(),Rs(39,`docs-example`,4),Hy(40,Tt,2,0,`ng-template`,null,0,pN),gd(),Rs(42,`markdown`),RM(43,`
  ## Single selection

  Set the \`multiple\` boolean property to \`false\` and allow select only one element.
`),gd(),Rs(44,`docs-example`,4),Hy(45,It,2,0,`ng-template`,null,0,pN),gd(),Rs(47,`markdown`),RM(48,`
  ## Coordinated selection

  The selection of Angular select components can be coordinated by dynamically updating city options based on the selected country. To ensure synchronized selections, use the \`resetSelectionOnOptionsChange\` prop on the city select component to reset the selected city whenever the country changes.
`),gd(),Rs(49,`docs-example`,4),Hy(50,Ft,2,0,`ng-template`,null,0,pN),gd(),Rs(52,`markdown`),RM(53,`
  ## Disabled

  Add the \`disabled\` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.
`),gd(),Rs(54,`docs-example`,4),Hy(55,zt,2,0,`ng-template`,null,0,pN),gd(),Rs(57,`markdown`),RM(58,`
  ## Sizing

  You may also choose from small and large multi selects to match our similarly sized text inputs.
`),gd(),Rs(59,`docs-example`,4),Hy(60,Nt,2,0,`ng-template`,null,0,pN),gd(),Rs(62,`markdown`),RM(63,`
  ## External search

  Use \`(searchValueChange)\` to handle external search.

`),gd(),Rs(64,`docs-example`,4),Hy(65,Pt,2,0,`ng-template`,null,0,pN),gd(),Rs(67,`markdown`),RM(68,`
  ## Custom search

  Pass \`SearchFn\` callback to the \`search\` prop for search customization.

`),gd(),Rs(69,`docs-example`,4),Hy(70,jt,2,0,`ng-template`,null,0,pN),gd(),Rs(72,`markdown`),RM(73,`
  ## Virtual scroller

  Display large selection lists in a performant way by only rendering the options in view.

`),gd(),Rs(74,`docs-example`,4),Hy(75,Rt,4,0,`ng-template`,null,0,pN),gd(),Rs(77,`markdown`),RM(78),gd(),Rs(79,`docs-example`,4),Hy(80,At,4,0,`ng-template`,null,0,pN),gd(),Rs(82,`markdown`),RM(83,`
  ## Forms

  CoreUI MultiSelect component works with native html form method as is.

  Angular handles user input through reactive and template-driven forms.
  CoreUI MultiSelect supports both approaches.

  If no \`value\` prop is included for \`c-multi-select-option\`, the value defaults to the text contained inside the
  element.

  ### Reactive
`),gd(),Rs(84,`docs-example`,4),Hy(85,Gt,2,0,`ng-template`,null,0,pN),gd(),Rs(87,`markdown`),RM(88,`
  ### Template-driven
`),gd(),Rs(89,`docs-example`,4),Hy(90,Vt,2,0,`ng-template`,null,0,pN),gd(),Rs(92,`markdown`),RM(93,`

  ## Customizing

  ### CSS variables
  Angular multi selects use local CSS variables on \`.form-multi-select\` for enhanced real-time customization. Values for
  the CSS variables are set via Sass, so Sass customization is still supported, too.
`),gd(),Rs(94,`pre`,6),RM(95,`  \`\`\`scss
  --#{$prefix}form-multi-select-zindex: #{$form-multi-select-zindex};
  --#{$prefix}form-multi-select-font-family: #{$form-multi-select-font-family};
  --#{$prefix}form-multi-select-font-size: #{$form-multi-select-font-size};
  --#{$prefix}form-multi-select-font-weight: #{$form-multi-select-font-weight};
  --#{$prefix}form-multi-select-line-height: #{$form-multi-select-line-height};
  --#{$prefix}form-multi-select-color: #{$form-multi-select-color};
  --#{$prefix}form-multi-select-bg: #{$form-multi-select-bg};
  --#{$prefix}form-multi-select-box-shadow: #{$form-multi-select-box-shadow};
  --#{$prefix}form-multi-select-border-width: #{$form-multi-select-border-width};
  --#{$prefix}form-multi-select-border-color: #{$form-multi-select-border-color};
  --#{$prefix}form-multi-select-border-radius: #{$form-multi-select-border-radius};
  --#{$prefix}form-multi-select-disabled-color: #{$form-multi-select-disabled-color};
  --#{$prefix}form-multi-select-disabled-bg: #{$form-multi-select-disabled-bg};
  --#{$prefix}form-multi-select-disabled-border-color: #{$form-multi-select-disabled-border-color};
  --#{$prefix}form-multi-select-focus-color: #{$form-multi-select-focus-color};
  --#{$prefix}form-multi-select-focus-bg: #{$form-multi-select-focus-bg};
  --#{$prefix}form-multi-select-focus-border-color: #{$form-multi-select-focus-border-color};
  --#{$prefix}form-multi-select-focus-box-shadow: #{$form-multi-select-focus-box-shadow};
  --#{$prefix}form-multi-select-placeholder-color: #{$form-multi-select-placeholder-color};
  --#{$prefix}form-multi-select-selection-padding-y: #{$form-multi-select-selection-padding-y};
  --#{$prefix}form-multi-select-selection-padding-x: #{$form-multi-select-selection-padding-x};
  --#{$prefix}form-multi-select-cleaner-width: #{$form-multi-select-cleaner-width};
  --#{$prefix}form-multi-select-cleaner-height: #{$form-multi-select-cleaner-height};
  --#{$prefix}form-multi-select-cleaner-padding-y: #{$form-multi-select-cleaner-padding-y};
  --#{$prefix}form-multi-select-cleaner-padding-x: #{$form-multi-select-cleaner-padding-x};
  --#{$prefix}form-multi-select-cleaner-icon: #{escape-svg($form-multi-select-cleaner-icon)};
  --#{$prefix}form-multi-select-cleaner-icon-color: #{$form-multi-select-cleaner-icon-color};
  --#{$prefix}form-multi-select-cleaner-icon-hover-color: #{$form-multi-select-cleaner-icon-hover-color};
  --#{$prefix}form-multi-select-cleaner-icon-size: #{$form-multi-select-cleaner-icon-size};
  --#{$prefix}form-multi-select-indicator-width: #{$form-multi-select-indicator-width};
  --#{$prefix}form-multi-select-indicator-height: #{$form-multi-select-indicator-height};
  --#{$prefix}form-multi-select-indicator-padding-y: #{$form-multi-select-indicator-padding-y};
  --#{$prefix}form-multi-select-indicator-padding-x: #{$form-multi-select-indicator-padding-x};
  --#{$prefix}form-multi-select-indicator-icon: #{escape-svg($form-multi-select-indicator-icon)};
  --#{$prefix}form-multi-select-indicator-icon-color: #{$form-multi-select-indicator-icon-color};
  --#{$prefix}form-multi-select-indicator-icon-hover-color: #{$form-multi-select-indicator-icon-hover-color};
  --#{$prefix}form-multi-select-indicator-icon-size: #{$form-multi-select-indicator-icon-size};
  --#{$prefix}form-multi-select-select-all-padding-y: #{$form-multi-select-select-all-padding-y};
  --#{$prefix}form-multi-select-select-all-padding-x: #{$form-multi-select-select-all-padding-x};
  --#{$prefix}form-multi-select-select-all-color: #{$form-multi-select-select-all-color};
  --#{$prefix}form-multi-select-select-all-bg: #{$form-multi-select-select-all-bg};
  --#{$prefix}form-multi-select-select-all-border-width: #{$form-multi-select-select-all-border-width};
  --#{$prefix}form-multi-select-select-all-border-color: #{$form-multi-select-select-all-border-color};
  --#{$prefix}form-multi-select-select-all-hover-color: #{$form-multi-select-select-all-hover-color};
  --#{$prefix}form-multi-select-select-all-hover-bg: #{$form-multi-select-select-all-hover-bg};
  --#{$prefix}form-multi-select-dropdown-min-width: #{$form-multi-select-dropdown-min-width};
  --#{$prefix}form-multi-select-dropdown-bg: #{$form-multi-select-dropdown-bg};
  --#{$prefix}form-multi-select-dropdown-border-width: #{$form-multi-select-dropdown-border-width};
  --#{$prefix}form-multi-select-dropdown-border-color: #{$form-multi-select-dropdown-border-color};
  --#{$prefix}form-multi-select-dropdown-border-radius: #{$form-multi-select-dropdown-border-radius};
  --#{$prefix}form-multi-select-dropdown-box-shadow: #{$form-multi-select-dropdown-box-shadow};
  --#{$prefix}form-multi-select-options-padding-y: #{$form-multi-select-options-padding-y};
  --#{$prefix}form-multi-select-options-padding-x: #{$form-multi-select-options-padding-x};
  --#{$prefix}form-multi-select-options-font-size: #{$form-multi-select-options-font-size};
  --#{$prefix}form-multi-select-options-font-weight: #{$form-multi-select-options-font-weight};
  --#{$prefix}form-multi-select-options-color: #{$form-multi-select-options-color};
  --#{$prefix}form-multi-select-optgroup-label-padding-y: #{$form-multi-select-optgroup-label-padding-y};
  --#{$prefix}form-multi-select-optgroup-label-padding-x: #{$form-multi-select-optgroup-label-padding-x};
  --#{$prefix}form-multi-select-optgroup-label-font-size: #{$form-multi-select-optgroup-label-font-size};
  --#{$prefix}form-multi-select-optgroup-label-font-weight: #{$form-multi-select-optgroup-label-font-weight};
  --#{$prefix}form-multi-select-optgroup-label-color: #{$form-multi-select-optgroup-label-color};
  --#{$prefix}form-multi-select-optgroup-label-text-transform: #{$form-multi-select-optgroup-label-text-transform};
  --#{$prefix}form-multi-select-option-padding-y: #{$form-multi-select-option-padding-y};
  --#{$prefix}form-multi-select-option-padding-x: #{$form-multi-select-option-padding-x};
  --#{$prefix}form-multi-select-option-margin-y: #{$form-multi-select-option-margin-y};
  --#{$prefix}form-multi-select-option-margin-x: #{$form-multi-select-option-margin-x};
  --#{$prefix}form-multi-select-option-border-width: #{$form-multi-select-option-border-width};
  --#{$prefix}form-multi-select-option-border-color: #{$form-multi-select-option-border-color};
  --#{$prefix}form-multi-select-option-border-radius: #{$form-multi-select-option-border-radius};
  --#{$prefix}form-multi-select-option-box-shadow: #{$form-multi-select-option-box-shadow};
  --#{$prefix}form-multi-select-option-hover-color: #{$form-multi-select-option-hover-color};
  --#{$prefix}form-multi-select-option-hover-bg: #{$form-multi-select-option-hover-bg};
  --#{$prefix}form-multi-select-option-focus-box-shadow: #{$form-multi-select-option-focus-box-shadow};
  --#{$prefix}form-multi-select-option-disabled-color: #{$form-multi-select-option-disabled-color};
  --#{$prefix}form-multi-select-option-indicator-width: #{$form-multi-select-option-indicator-width};
  --#{$prefix}form-multi-select-option-indicator-bg: #{$form-multi-select-option-indicator-bg};
  --#{$prefix}form-multi-select-option-indicator-border: #{$form-multi-select-option-indicator-border};
  --#{$prefix}form-multi-select-option-indicator-border-radius: #{$form-multi-select-option-indicator-border-radius};
  --#{$prefix}form-multi-select-option-selected-bg: #{$form-multi-select-option-selected-bg};
  --#{$prefix}form-multi-select-option-selected-indicator-bg: #{$form-multi-select-option-selected-indicator-bg};
  --#{$prefix}form-multi-select-option-selected-indicator-bg-image: #{escape-svg($form-multi-select-option-selected-indicator-bg-image)};
  --#{$prefix}form-multi-select-option-selected-indicator-border-color: #{$form-multi-select-option-selected-indicator-border-color};
  --#{$prefix}form-multi-select-tag-padding-y: #{$form-multi-select-tag-padding-y};
  --#{$prefix}form-multi-select-tag-padding-x: #{$form-multi-select-tag-padding-x};
  --#{$prefix}form-multi-select-tag-bg: #{$form-multi-select-tag-bg};
  --#{$prefix}form-multi-select-tag-border-width: #{$form-multi-select-tag-border-width};
  --#{$prefix}form-multi-select-tag-border-color: #{$form-multi-select-tag-border-color};
  --#{$prefix}form-multi-select-tag-border-radius: #{$form-multi-select-tag-border-radius};
  --#{$prefix}form-multi-select-tag-delete-width: #{$form-multi-select-tag-delete-width};
  --#{$prefix}form-multi-select-tag-delete-height: #{$form-multi-select-tag-delete-height};
  --#{$prefix}form-multi-select-tag-delete-icon: #{escape-svg($form-multi-select-tag-delete-icon)};
  --#{$prefix}form-multi-select-tag-delete-icon-color: #{$form-multi-select-tag-delete-icon-color};
  --#{$prefix}form-multi-select-tag-delete-icon-hover-color: #{$form-multi-select-tag-delete-icon-hover-color};
  --#{$prefix}form-multi-select-tag-delete-icon-size: #{$form-multi-select-tag-delete-icon-size};
  --#{$prefix}form-multi-select-selection-tags-gap: #{$form-multi-select-selection-tags-gap};
  --#{$prefix}form-multi-select-selection-tags-padding-y: #{$form-multi-select-selection-tags-padding-y};
  --#{$prefix}form-multi-select-selection-tags-padding-x: #{$form-multi-select-selection-tags-padding-x};
  \`\`\`
`),gd(),Rs(96,`markdown`),RM(97,`
  #### How to use CSS variables
`),gd(),Rs(98,`pre`,6),RM(99),gd(),Rs(100,`markdown`),RM(101,`
  ### SASS variables
`),gd(),Rs(102,`pre`,6),RM(103,`  \`\`\`scss
  $form-multi-select-zindex:                    1000;
  $form-multi-select-font-family:               $input-font-family;
  $form-multi-select-font-size:                 $input-font-size;
  $form-multi-select-font-weight:               $input-font-weight;
  $form-multi-select-line-height:               $input-line-height;
  $form-multi-select-color:                     $input-color;
  $form-multi-select-bg:                        $input-bg;
  $form-multi-select-box-shadow:                $box-shadow-inset;

  $form-multi-select-border-width:              $input-border-width;
  $form-multi-select-border-color:              $input-border-color;
  $form-multi-select-border-radius:             $input-border-radius;
  $form-multi-select-border-radius-sm:          $input-border-radius-sm;
  $form-multi-select-border-radius-lg:          $input-border-radius-lg;

  $form-multi-select-disabled-color:            $input-disabled-color;
  $form-multi-select-disabled-bg:               $input-disabled-bg;
  $form-multi-select-disabled-border-color:     $input-disabled-border-color;

  $form-multi-select-focus-color:               $input-focus-color;
  $form-multi-select-focus-bg:                  $input-focus-bg;
  $form-multi-select-focus-border-color:        $input-focus-border-color;
  $form-multi-select-focus-box-shadow:          $input-btn-focus-box-shadow;

  $form-multi-select-invalid-border-color:      var(--#{$prefix}form-invalid-border-color);
  $form-multi-select-valid-border-color:        var(--#{$prefix}form-valid-border-color);

  $form-multi-select-placeholder-color:         var(--#{$prefix}secondary-color);

  $form-multi-select-selection-padding-y:       $input-padding-y;
  $form-multi-select-selection-padding-x:       $input-padding-x;
  $form-multi-select-selection-tags-gap:        .25rem;
  $form-multi-select-selection-tags-padding-y:  .25rem;
  $form-multi-select-selection-tags-padding-x:  .25rem;

  $form-multi-select-tag-bg:                    var(--#{$prefix}secondary-bg);
  $form-multi-select-tag-border-width:          var(--#{$prefix}border-width);
  $form-multi-select-tag-border-color:          var(--#{$prefix}border-color);
  $form-multi-select-tag-border-radius:         .25rem;
  $form-multi-select-tag-border-radius-sm:      .125rem;
  $form-multi-select-tag-border-radius-lg:      .375rem;
  $form-multi-select-tag-padding-y:             .0625rem;
  $form-multi-select-tag-padding-x:             .5rem;

  $form-multi-select-tag-delete-width:             .75rem;
  $form-multi-select-tag-delete-height:            .75rem;
  $form-multi-select-tag-delete-icon:              url("data:image/svg+xml,`),qp(),Rs(104,`svg`,7),lv(105,`path`,8),gd(),RM(106,`");
  $form-multi-select-tag-delete-icon-color:        var(--#{$prefix}secondary-color);
  $form-multi-select-tag-delete-icon-hover-color:  var(--#{$prefix}body-color);
  $form-multi-select-tag-delete-icon-size:         .5rem;

  $form-multi-select-cleaner-width:             1.5rem;
  $form-multi-select-cleaner-height:            1.5rem;
  $form-multi-select-cleaner-padding-x:         0;
  $form-multi-select-cleaner-padding-y:         0;
  $form-multi-select-cleaner-icon:              url("data:image/svg+xml,`),Rs(107,`svg`,7),lv(108,`path`,8),gd(),RM(109,`");
  $form-multi-select-cleaner-icon-color:        var(--#{$prefix}tertiary-color);
  $form-multi-select-cleaner-icon-hover-color:  var(--#{$prefix}body-color);
  $form-multi-select-cleaner-icon-size:         .625rem;

  $form-multi-select-indicator-width:             1.5rem;
  $form-multi-select-indicator-height:            1.5rem;
  $form-multi-select-indicator-padding-x:         0;
  $form-multi-select-indicator-padding-y:         0;
  $form-multi-select-indicator-icon:              url("data:image/svg+xml,`),Rs(110,`svg`,9),lv(111,`path`,10),gd(),RM(112,`");
  $form-multi-select-indicator-icon-color:        var(--#{$prefix}tertiary-color);
  $form-multi-select-indicator-icon-hover-color:  var(--#{$prefix}body-color);
  $form-multi-select-indicator-icon-size:         .75rem;

  $form-multi-select-dropdown-min-width:        100%;
  $form-multi-select-dropdown-bg:               var(--#{$prefix}body-bg);
  $form-multi-select-dropdown-border-color:     var(--#{$prefix}border-color);
  $form-multi-select-dropdown-border-width:     var(--#{$prefix}border-width);
  $form-multi-select-dropdown-border-radius:    var(--#{$prefix}border-radius);
  $form-multi-select-dropdown-box-shadow:       var(--#{$prefix}box-shadow);

  $form-multi-select-select-all-padding-y:      .5rem;
  $form-multi-select-select-all-padding-x:      .75rem;
  $form-multi-select-select-all-color:          var(--#{$prefix}body-secondary-color);
  $form-multi-select-select-all-bg:             transparent;
  $form-multi-select-select-all-hover-color:    var(--#{$prefix}body-color);
  $form-multi-select-select-all-hover-bg:       transparent;
  $form-multi-select-select-all-border-width:   $input-border-width;
  $form-multi-select-select-all-border-color:   $input-border-color;

  $form-multi-select-options-padding-y:         .5rem;
  $form-multi-select-options-padding-x:         .75rem;
  $form-multi-select-options-font-size:         $font-size-base;
  $form-multi-select-options-font-weight:       $font-weight-normal;
  $form-multi-select-options-color:             var(--#{$prefix}body-color);

  $form-multi-select-optgroup-label-padding-y:       .5rem;
  $form-multi-select-optgroup-label-padding-x:       .625rem;
  $form-multi-select-optgroup-label-font-size:       80%;
  $form-multi-select-optgroup-label-font-weight:     $font-weight-bold;
  $form-multi-select-optgroup-label-color:           var(--#{$prefix}tertiary-color);
  $form-multi-select-optgroup-label-text-transform:  uppercase;

  $form-multi-select-option-padding-y:               .5rem;
  $form-multi-select-option-padding-x:               1.25rem;
  $form-multi-select-option-margin-y:                1px;
  $form-multi-select-option-margin-x:                0;
  $form-multi-select-option-border-width:            $input-border-width;
  $form-multi-select-option-border-color:            transparent;
  $form-multi-select-option-border-radius:           var(--#{$prefix}border-radius);
  $form-multi-select-option-box-shadow:              $box-shadow-inset;

  $form-multi-select-option-hover-color:             var(--#{$prefix}body-color);
  $form-multi-select-option-hover-bg:                var(--#{$prefix}tertiary-bg);

  $form-multi-select-option-focus-box-shadow:        $input-btn-focus-box-shadow;

  $form-multi-select-option-indicator-width:          1em;
  $form-multi-select-option-indicator-bg:             $form-check-input-bg;
  $form-multi-select-option-indicator-border:         $form-check-input-border;
  $form-multi-select-option-indicator-border-radius:  .25em;

  $form-multi-select-option-selected-bg:                      var(--#{$prefix}secondary-bg);
  $form-multi-select-option-selected-indicator-bg:            $form-check-input-checked-bg-color;
  $form-multi-select-option-selected-indicator-bg-image:      $form-check-input-checked-bg-image;
  $form-multi-select-option-selected-indicator-border-color:  $form-multi-select-option-selected-indicator-bg;

  $form-multi-select-option-disabled-color:        var(--#{$prefix}secondary-color);

  $form-multi-select-font-size-lg:                 $input-font-size-lg;
  $form-multi-select-selection-padding-y-lg:       $input-padding-y-lg;
  $form-multi-select-selection-padding-x-lg:       $input-padding-x-lg;
  $form-multi-select-selection-tags-gap-lg:        .25rem;
  $form-multi-select-selection-tags-padding-y-lg:  .25rem;
  $form-multi-select-selection-tags-padding-x-lg:  .25rem;
  $form-multi-select-tag-padding-y-lg:             .175rem;
  $form-multi-select-tag-padding-x-lg:             .5rem;

  $form-multi-select-font-size-sm:                 $input-font-size-sm;
  $form-multi-select-selection-padding-y-sm:       $input-padding-y-sm;
  $form-multi-select-selection-padding-x-sm:       $input-padding-x-sm;
  $form-multi-select-selection-tags-gap-sm:        .125rem;
  $form-multi-select-selection-tags-padding-y-sm:  .0625rem;
  $form-multi-select-selection-tags-padding-x-sm:  .125rem;
  $form-multi-select-tag-padding-y-sm:             .075rem;
  $form-multi-select-tag-padding-x-sm:             .5rem;
  \`\`\`
`),gd(),Gp(),Rs(113,`markdown`),RM(114,`
  ---

  ## API reference

  ### MultiSelect Module

`),gd(),Rs(115,`div`,6),RM(116),gd(),Rs(117,`markdown`),RM(118,`
  ---

  ### c-multi-select
  _component_

  ##### Inputs
  `),Rs(119,`div`,11),RM(120,`

    | name | description | type | default |
    | ---- | ----------- | ---- | ------- |
    | \`allowCreateOptions\``),lv(121,`br`),RM(122,` `),Rs(123,`span`,12),RM(124,`4.5.15+`),gd(),RM(125," | Allow users to create options if they are not in the list of options | `boolean` | _false_ |\n    | `cleaner` | Enables selection cleaner element "),lv(126,`br`),RM(127," `'active'` makes cleaner always active - since "),Rs(128,`span`,12),RM(129,`4.7.4+`),gd(),RM(130," | `boolean \\| 'active'` |_true_|\n    | `clearSearchOnSelect`"),lv(131,`br`),Rs(132,`span`,12),RM(133,`4.5.15+`),gd(),RM(134,"| Clear current search on selecting an item | `boolean` |_false_|\n    | `disabled` | Disables multi-select component | `boolean` |_false_|\n    | `loading`"),lv(135,`br`),RM(136,` `),Rs(137,`span`,12),RM(138,`4.5.5+`),gd(),RM(139," | When set, the options list will have a loading style: loading spinner and reduced opacity. | `boolean` |_false_|\n    | `multiple` | Specifies that multiple options can be selected at once | `boolean` |_false_|\n    | `optionsMaxHeight` | Sets maxHeight of options list | `number` \\| `string` |_auto_|\n    | `optionsStyle` | Sets option style | `checkbox` \\| `text` |_checkbox_|\n    | `placeholder` | Specifies a short hint that is visible in the search input | `string` |_Select..._|\n    | `resetSelectionOnOptionsChange` "),lv(140,`br`),RM(141,` `),Rs(142,`span`,12),RM(143,`5.5.11+`),gd(),RM(144),lv(145,`br`),Rs(146,`span`,12),RM(147,`4.4.12+`),gd(),RM(148," | Enable virtual scroller for options list | `boolean` |_false_|\n    | `options` | List of option elements for virtualScroller | `IOption` |_[]_|\n\n\n  "),gd(),RM(149,`

  `),RM(150,`
  `),RM(151,`


  ##### Outputs
  `),Rs(152,`div`,11),RM(153,"\n\n    | name | description | type |\n    | ---- | ----------- | ---- |\n    | `valueChange` | Event emitted on `value` change | `string \\| number \\| (string \\| number)[]` |\n    | `visibleChange` | Event emitted on `visible` change | `boolean` |\n    | `searchValueChange` | Event emitted on `searchValue` change | `string` |\n\n  "),gd(),RM(154,`

  ---

  ### c-multi-select-option
  _component_

  ##### Inputs
  `),Rs(155,`div`,11),RM(156,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `disabled` | Disables option element | `boolean` |_false_|\n    | `id` | Html id attribute for option | `string` |_autogenerated_|\n    | `label` | Option label | `string` |_undefined_|\n    | `optionsStyle` | Option style | `checkbox` \\| `text` |_checkbox_|\n    | `role` | Role for option element | `string` |_option_|\n    | `selected` | Selects option element | `boolean` |_false_|\n    | `value` | Option value "),lv(157,`br`),RM(158," `number` type allowed since "),Rs(159,`span`,12),RM(160,`4.7.5+`),gd(),RM(161,`| \`string \\| number\` |_undefined_|

  `),gd(),RM(162,`

  ---

  ### c-multi-select-optgroup
  _component_

  ##### Inputs
  `),Rs(163,`div`,11),RM(164,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `disabled` | Disables all options in optgroup | `boolean` |_false_|\n    | `label` | Options group label | `string` |_undefined_|\n\n  "),gd(),RM(165,`

`),gd()),l&2&&(kw(2),Uv(a.title),kw(2),Uv(a.description),kw(4),cv(`files`,KM(24,at))(`name`,a.title),kw(3),cv(`files`,KM(25,mt)),kw(8),cv(`files`,KM(26,st)),kw(5),cv(`files`,KM(27,ct)),kw(5),cv(`files`,KM(28,pt)),kw(5),cv(`files`,KM(29,dt)),kw(5),cv(`files`,KM(30,ut)),kw(5),cv(`files`,KM(31,ft)),kw(5),cv(`files`,KM(32,gt)),kw(5),cv(`files`,KM(33,_t)),kw(5),cv(`files`,KM(34,yt)),kw(5),cv(`files`,KM(35,xt)),kw(5),cv(`files`,KM(36,ht)),kw(5),cv(`files`,KM(37,bt)),kw(4),Td(`
  **Virtual scroller with ng-template and external search.**

  You can pass an ng-template with \`cTemplateId="multiSelectOptionTemplate"\` as a c-multi-select content.

  To use \`multiSelectOptionTemplate\` template you have to:
  - \`import `,`{`,`SharedModule} from '@coreui/angular'\`;
  - pass it as a string to \`[cTemplateId]\` directive

`),kw(),cv(`files`,KM(38,St)),kw(5),cv(`files`,KM(39,vt)),kw(5),cv(`files`,KM(40,$t)),kw(10),Td("  ```ts\n  const vars = ",`{`,`
  '--my-css-var': 10,
  '--my-another-css-var': "red"
  }
  \`\`\`

  \`\`\`html
  <div [ngStyle]="vars"></div>
  \`\`\`
`),kw(17),Td(` `,a.usage,`
`),kw(28),Td(" | Resets the selection whenever options are modified | `boolean` |_false_|\n    | `search` | Enables search input element | `boolean \\| 'external' \\| SearchFn` |_true_|\n    | `searchValue` | Search value | `string` |_''_|\n    | `searchNoResultsLabel` | Sets the label for no results when filtering | `string` |_no items_|\n    | `selectAll` | Enables select all button | `boolean` |_true_|\n    | `selectAllLabel` | Sets the select all button label | `string` |_Select all options_|\n    | `selectionType` | Sets the selection style | `counter` \\| `tags` \\| `text` |_tags_|\n    | `selectionTypeCounterText` | Sets the counter selection label | `string` |_item(s) selected_|\n    | `selectionTypeCounterTextPluralMap` | Counter selection label plural map for `I18nPluralPipe` | `",`{`," '=1': 'item selected', 'other': 'items selected' }`|\n    | `size` | Size the component | `sm \\| lg` |_undefined_|\n    | `valid` | Set input validation visual feedback. | `boolean` | _undefined_ |\n    | `visible` | Toggle the visibility of multi select dropdown | `boolean` |_false_|\n    | `visibleItems` | Visible options count, overwrites `optionsMaxHeight` | `number` |_10_|\n    | `virtualScroller`"))},dependencies:[nr,f,ie$1,me,ae,re,oe,le,ne,ie,te,ee,X,Q,Z,Y,q,K,m],encapsulation:2})}};export{He as MultiSelectDocsComponent};