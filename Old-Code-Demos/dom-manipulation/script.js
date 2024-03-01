function navigateToB() {
    let contentRoot = document.getElementById("contentRoot")
    let old = contentRoot.firstChild;
    let paragraph = document.createElement("p")
    paragraph.innerHTML = `    <h1 id="h1" class="title">This is big text</h1>

<h3 id="h2" class="title">this is smaller heading</h3>
<h3>This is another H3!</h3>

<p style="color:chocolate">This is a paragraph</p>

<p id="paragraph1" class="text">
    this is a new paragraph <span>this is a span</span> this is the rest. 
    <div>div is a block element</div>
</p>

<ul>
    <li>Britta filters</li>
    <li>cat litter</li>
    <li>coffee</li>
    
</ul>

<ol>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ol>




<!-- <img id="image" class="image" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg" > -->
<br>
<a href="http://google.com">Click here to go to google.</a>


<hr>
<br>
<h2>Registration Form!</h2>
<form action="http://localhost:8080/users" method="post" target="_blank">
    <label>First Name: </label>
    <input id="firstName" type="text">
    <br>
    <label>Last Name: </label>
    <input id="lastName" type="text">
    <br>
    <label>Username: </label>
    <input id="username" type="text">
    <br>
    <label>Password: </label>
    <input id="password" type="password">

    <input type="submit">
</form>



<br><br><br>
<textarea rows="12" cols="120"></textarea>


<h4>Pick a favorite color!</h4>
<input type="radio" name="color" id="green">
<label style="color:green">green</label><br>
<input type="radio" name="color" id="red">
<label style="color:red">red</label><br>
<input type="radio" name="color" id="blue">
<label style="color:blue">blue</label><br>
<input type="radio" name="color" id="yellow">
<label style="color:yellow">yellow</label><br>


<h4>Choose your pizza toppings!</h4>
<input type="checkbox" name="pizzaToppings" id="pepperoni">
<label>pepperoni</label><br>
<input type="checkbox" name="pizzaToppings" id="sausage">
<label>sausage</label><br>
<input type="checkbox" name="pizzaToppings" id="anchovi">
<label>anchovi</label><br>


<h4>Drop down!</h4>
<label>Choose state!</label>
<select name="state" id="state">
    <option value="NY">New York</option>
    <option value="WV">West Virginia</option>
    <option value="CA">California</option>
    <option value="TX">Texas</option>
</select>`
contentRoot.replaceChild(paragraph, old)
history.pushState(null, null, "routeB");
}

function navigateToA() {
    let contentRoot = document.getElementById("contentRoot")
    let old = contentRoot.firstChild;
    let paragraph = document.createElement("p")
    paragraph.innerHTML = `<!doctype html>
    <html itemscope="" itemtype="http://schema.org/WebPage" lang="en">
    
    <head>
        <meta
            content="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for."
            name="description">
        <meta content="noodp" name="robots">
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
        <meta content="/logos/doodles/2023/seasonal-holidays-2023-6753651837110165-law.gif" itemprop="image">
        <meta content="Seasonal Holidays 2023" property="twitter:title">
        <meta content="Happy Holidays! #GoogleDoodle" property="twitter:description">
        <meta content="Happy Holidays! #GoogleDoodle" property="og:description">
        <meta content="summary_large_image" property="twitter:card">
        <meta content="@GoogleDoodles" property="twitter:site">
        <meta content="https://www.google.com/logos/doodles/2023/seasonal-holidays-2023-6753651837110165-2xa.gif"
            property="twitter:image">
        <meta content="https://www.google.com/logos/doodles/2023/seasonal-holidays-2023-6753651837110165-2xa.gif"
            property="og:image">
        <meta content="1000" property="og:image:width">
        <meta content="400" property="og:image:height">
        <meta content="https://www.google.com/logos/doodles/2023/seasonal-holidays-2023-6753651837110165-2xa.gif"
            property="og:url">
        <meta content="video.other" property="og:type">
        <title>Google</title>
        <script nonce="kCuazAJ10rY7Oq3ht4UDHw">
            (function(){var _g={kEI:'8kB7ZbPYL7vj5NoPldq5mAw',kEXPI:'0,1365468,206,4804,1132070,1197785,616,380089,16115,28684,22431,1361,12311,17588,4998,17075,38444,2872,2891,3926,7828,606,30668,30022,15324,781,1244,1,16916,2652,4,59617,2980,24073,6624,7593,1,42154,2,16395,342,21266,1758,5679,1021,31122,4567,6256,23421,1252,33064,2,2,1,23827,799,10161,23350,20507,7,1922,48457,3781,20199,20136,14,82,16514,3801,363,2049,30219,3030,15816,356,1448,7734,15103,2995,9436,11814,1632,8842,5604,3691,11617,14258,12350,5210139,2,296,1169,120,5992171,1209,2803214,3311,141,795,30347,12,122,2,2,2,2,2,7,67,4,37,145,7443914,5,16495898,397,4043709,14297,2375,39684,4,4199,3,1603,3,499,3,2121276,2583,23029353,8163,4636,2945,5464,3214,4813,6672,1966,11361,1661,4427,7460,3117,5878,4241,10365,2387,6389,1302,421,2,5885,5402,2037,1774,2,1296,2052,27,6,5,15,265,1390,4145,663,209,438,664,1690,77,95,1146,162,1068,2708,1481,241,690,1111,1,209,2064,885,194,4442,1995,642,2422,2,1183,1188,1252,107,853,153,2066,313,664,2163,1,6,2815,824,9,2,46,1416,1838,1544,1504,734,218,3,2059,90,166,39,272,43,2227,211,1129,3372,5,333,1822,91,1900,4,255,317,19,275,1,6,2057,4,116,2031,132,2,99,127,337,372,768,3,4,2,2,2,27,229,24,549,175,2,748,34,203,707,173,92,74,556,242,2,586,11,281,249,1551,2872,135,2297,290,9,310,145,1,1398,88,312,2080,112,666,78,17,1099,966,78,22,224,1,1,56,2,53,425,64,274,8,66,1,369,966,241,86,215,170,4,322,1,1,1,50,4,3,136,239,421,1460,1,356,762,402,531,1374,522,728,86,104,153,24,2,6,1,581,4,14,220,62,2963,1,247,1,376,297,1001,37,4,855,138,3,663,21313877,421028,728,218,4005,5,275,88,2,404',kBL:'qnU1',kOPI:89978449};(function(){var a;(null==(a=window.google)?0:a.stvsc)?google.kEI=_g.kEI:window.google=_g;}).call(this);})();(function(){google.sn='webhp';google.kHL='en';})();(function(){
    var h=this||self;function l(){return void 0!==window.google&&void 0!==window.google.kOPI&&0!==window.google.kOPI?window.google.kOPI:null};var m,n=[];function p(a){for(var b;a&&(!a.getAttribute||!(b=a.getAttribute("eid")));)a=a.parentNode;return b||m}function q(a){for(var b=null;a&&(!a.getAttribute||!(b=a.getAttribute("leid")));)a=a.parentNode;return b}function r(a){/^http:/i.test(a)&&"https:"===window.location.protocol&&(google.ml&&google.ml(Error("a"),!1,{src:a,glmm:1}),a="");return a}
    function t(a,b,c,d,k){var e="";-1===b.search("&ei=")&&(e="&ei="+p(d),-1===b.search("&lei=")&&(d=q(d))&&(e+="&lei="+d));d="";var g=-1===b.search("&cshid=")&&"slh"!==a,f=[];f.push(["zx",Date.now().toString()]);h._cshid&&g&&f.push(["cshid",h._cshid]);c=c();null!=c&&f.push(["opi",c.toString()]);for(c=0;c<f.length;c++){if(0===c||0<c)d+="&";d+=f[c][0]+"="+f[c][1]}return"/"+(k||"gen_204")+"?atyp=i&ct="+String(a)+"&cad="+(b+e+d)};m=google.kEI;google.getEI=p;google.getLEI=q;google.ml=function(){return null};google.log=function(a,b,c,d,k,e){e=void 0===e?l:e;c||(c=t(a,b,e,d,k));if(c=r(c)){a=new Image;var g=n.length;n[g]=a;a.onerror=a.onload=a.onabort=function(){delete n[g]};a.src=c}};google.logUrl=function(a,b){b=void 0===b?l:b;return t("",a,b)};}).call(this);(function(){google.y={};google.sy=[];google.x=function(a,b){if(a)var c=a.id;else{do c=Math.random();while(google.y[c])}google.y[c]=[a,b];return!1};google.sx=function(a){google.sy.push(a)};google.lm=[];google.plm=function(a){google.lm.push.apply(google.lm,a)};google.lq=[];google.load=function(a,b,c){google.lq.push([[a],b,c])};google.loadAll=function(a,b){google.lq.push([a,b])};google.bx=!1;google.lx=function(){};var d=[];google.fce=function(a,b,c,e){d.push([a,b,c,e])};google.qce=d;}).call(this);google.f={};(function(){
    document.documentElement.addEventListener("submit",function(b){var a;if(a=b.target){var c=a.getAttribute("data-submitfalse");a="1"===c||"q"===c&&!a.elements.q.value?!0:!1}else a=!1;a&&(b.preventDefault(),b.stopPropagation())},!0);document.documentElement.addEventListener("click",function(b){var a;a:{for(a=b.target;a&&a!==document.documentElement;a=a.parentElement)if("A"===a.tagName){a="1"===a.getAttribute("data-nohref");break a}a=!1}a&&b.preventDefault()},!0);}).call(this);
        </script>
        <style>
            #gbar,
            #guser {
                font-size: 13px;
                padding-top: 1px !important;
            }
    
            #gbar {
                height: 22px
            }
    
            #guser {
                padding-bottom: 7px !important;
                text-align: right
            }
    
            .gbh,
            .gbd {
                border-top: 1px solid #c9d7f1;
                font-size: 1px
            }
    
            .gbh {
                height: 0;
                position: absolute;
                top: 24px;
                width: 100%
            }
    
            @media all {
                .gb1 {
                    height: 22px;
                    margin-right: .5em;
                    vertical-align: top
                }
    
                #gbar {
                    float: left
                }
            }
    
            a.gb1,
            a.gb4 {
                text-decoration: underline !important
            }
    
            a.gb1,
            a.gb4 {
                color: #00c !important
            }
    
            .gbi .gb4 {
                color: #dd8e27 !important
            }
    
            .gbf .gb4 {
                color: #900 !important
            }
        </style>
        <style>
            body,
            td,
            a,
            p,
            .h {
                font-family: arial, sans-serif
            }
    
            body {
                margin: 0;
                overflow-y: scroll
            }
    
            #gog {
                padding: 3px 8px 0
            }
    
            td {
                line-height: .8em
            }
    
            .gac_m td {
                line-height: 17px
            }
    
            form {
                margin-bottom: 20px
            }
    
            .h {
                color: #1967d2
            }
    
            em {
                font-weight: bold;
                font-style: normal
            }
    
            .lst {
                height: 25px;
                width: 496px
            }
    
            .gsfi,
            .lst {
                font: 18px arial, sans-serif
            }
    
            .gsfs {
                font: 17px arial, sans-serif
            }
    
            .ds {
                display: inline-box;
                display: inline-block;
                margin: 3px 0 4px;
                margin-left: 4px
            }
    
            input {
                font-family: inherit
            }
    
            body {
                background: #fff;
                color: #000
            }
    
            a {
                color: #681da8;
                text-decoration: none
            }
    
            a:hover,
            a:active {
                text-decoration: underline
            }
    
            .fl a {
                color: #1967d2
            }
    
            a:visited {
                color: #681da8
            }
    
            .sblc {
                padding-top: 5px
            }
    
            .sblc a {
                display: block;
                margin: 2px 0;
                margin-left: 13px;
                font-size: 11px
            }
    
            .lsbb {
                background: #f8f9fa;
                border: solid 1px;
                border-color: #dadce0 #70757a #70757a #dadce0;
                height: 30px
            }
    
            .lsbb {
                display: block
            }
    
            #WqQANb a {
                display: inline-block;
                margin: 0 12px
            }
    
            .lsb {
                background: url(/images/nav_logo229.png) 0 -261px repeat-x;
                color: #000;
                border: none;
                cursor: pointer;
                height: 30px;
                margin: 0;
                outline: 0;
                font: 15px arial, sans-serif;
                vertical-align: top
            }
    
            .lsb:active {
                background: #dadce0
            }
    
            .lst:focus {
                outline: none
            }
        </style>
        <script nonce="kCuazAJ10rY7Oq3ht4UDHw">
            (function(){window.google.erd={jsr:1,bv:1919,de:true};
    var h=this||self;var k,l=null!=(k=h.mei)?k:1,n,p=null!=(n=h.sdo)?n:!0,q=0,r,t=google.erd,v=t.jsr;google.ml=function(a,b,d,m,e){e=void 0===e?2:e;b&&(r=a&&a.message);void 0===d&&(d={});d.cad="ple_"+google.ple+".aple_"+google.aple;if(google.dl)return google.dl(a,e,d),null;if(0>v){window.console&&console.error(a,d);if(-2===v)throw a;b=!1}else b=!a||!a.message||"Error loading script"===a.message||q>=l&&!m?!1:!0;if(!b)return null;q++;d=d||{};b=encodeURIComponent;var c="/gen_204?atyp=i&ei="+b(google.kEI);google.kEXPI&&(c+="&jexpid="+b(google.kEXPI));c+="&srcpg="+b(google.sn)+"&jsr="+b(t.jsr)+"&bver="+
    b(t.bv);var f=a.lineNumber;void 0!==f&&(c+="&line="+f);var g=a.fileName;g&&(0<g.indexOf("-extension:/")&&(e=3),c+="&script="+b(g),f&&g===window.location.href&&(f=document.documentElement.outerHTML.split("\n")[f],c+="&cad="+b(f?f.substring(0,300):"No script found.")));google.ple&&1===google.ple&&(e=2);c+="&jsel="+e;for(var u in d)c+="&",c+=b(u),c+="=",c+=b(d[u]);c=c+"&emsg="+b(a.name+": "+a.message);c=c+"&jsst="+b(a.stack||"N/A");12288<=c.length&&(c=c.substr(0,12288));a=c;m||google.log(0,"",a);return a};window.onerror=function(a,b,d,m,e){r!==a&&(a=e instanceof Error?e:Error(a),void 0===d||"lineNumber"in a||(a.lineNumber=d),void 0===b||"fileName"in a||(a.fileName=b),google.ml(a,!1,void 0,!1,"SyntaxError"===a.name||"SyntaxError"===a.message.substring(0,11)||-1!==a.message.indexOf("Script error")?3:0));r=null;p&&q>=l&&(window.onerror=null)};})();
        </script>
    </head>
    
    <body bgcolor="#fff">
        <script nonce="kCuazAJ10rY7Oq3ht4UDHw">
            (function(){var src='/images/nav_logo229.png';var iesg=false;document.body.onload = function(){window.n && window.n();if (document.images){new Image().src=src;}
    if (!iesg){document.f&&document.f.q.focus();document.gbqf&&document.gbqf.q.focus();}
    }
    })();
        </script>
        <div id="mngb">
            <div id=gbar>
                <nobr><b class=gb1>Search</b> <a class=gb1 href="https://www.google.com/imghp?hl=en&tab=wi">Images</a> <a
                        class=gb1 href="http://maps.google.com/maps?hl=en&tab=wl">Maps</a> <a class=gb1
                        href="https://play.google.com/?hl=en&tab=w8">Play</a> <a class=gb1
                        href="https://www.youtube.com/?tab=w1">YouTube</a> <a class=gb1
                        href="https://news.google.com/?tab=wn">News</a> <a class=gb1
                        href="https://mail.google.com/mail/?tab=wm">Gmail</a> <a class=gb1
                        href="https://drive.google.com/?tab=wo">Drive</a> <a class=gb1 style="text-decoration:none"
                        href="https://www.google.com/intl/en/about/products?tab=wh"><u>More</u> &raquo;</a></nobr>
            </div>
            <div id=guser width=100%>
                <nobr><span id=gbn class=gbi></span><span id=gbf class=gbf></span><span id=gbe></span><a
                        href="http://www.google.com/history/optout?hl=en" class=gb4>Web History</a> | <a
                        href="/preferences?hl=en" class=gb4>Settings</a> | <a target=_top id=gb_70
                        href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=http://www.google.com/&ec=GAZAAQ"
                        class=gb4>Sign in</a></nobr>
            </div>
            <div class=gbh style=left:0></div>
            <div class=gbh style=right:0></div>
        </div>
        <center><br clear="all" id="lgpd">
            <div id="lga">
                <img alt="Seasonal Holidays 2023" border="0" height="200" src="/logos/doodles/2023/seasonal-holidays-2023-6753651837110165-law.gif" title="Seasonal Holidays 2023" width="500" id="hplogo"><br></div>
                <form action="/search" name="f">
                    <table cellpadding="0" cellspacing="0">
                        <tr valign="top">
                            <td width="25%">&nbsp;</td>
                            <td align="center" nowrap="">
                                <input name="ie" value="ISO-8859-1" type="hidden"><input value="en" name="hl" type="hidden"><input name="source" type="hidden" value="hp"><input name="biw" type="hidden"><input name="bih" type="hidden">
                                <div class="ds" style="height:32px;margin:4px 0">
                                    <input class="lst" style="margin:0;padding:5px 8px 0 6px;vertical-align:top;color:#000" autocomplete="off" value="" title="Google Search" maxlength="2048" name="q" size="57"></div>
                                    <br style="line-height:0"><span class="ds"><span class="lsbb"><input class="lsb" value="Google Search" name="btnG" type="submit"></span></span><span class="ds"><span class="lsbb"><input class="lsb" id="tsuid_1" value="I'm Feeling Lucky" name="btnI" type="submit"><script nonce="kCuazAJ10rY7Oq3ht4UDHw">(function(){var id='tsuid_1';document.getElementById(id).onclick = function(){if (this.form.q.value){this.checked = 1;if (this.form.iflsig)this.form.iflsig.disabled = false;}
    else top.location='/doodles/';};})();</script><input value="AO6bgOgAAAAAZXtPAmNz2EV02qIa5fygL9c5fUFV6I4j" name="iflsig" type="hidden"></span></span>
                            </td>
                            <td class="fl sblc" align="left" nowrap="" width="25%"><a
                                    href="/advanced_search?hl=en&amp;authuser=0">Advanced search</a></td>
                        </tr>
                    </table><input id="gbv" name="gbv" type="hidden" value="1">
                    <script nonce="kCuazAJ10rY7Oq3ht4UDHw">
                        (function(){var a,b="1";if(document&&document.getElementById)if("undefined"!=typeof XMLHttpRequest)b="2";else if("undefined"!=typeof ActiveXObject){var c,d,e=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];for(c=0;d=e[c++];)try{new ActiveXObject(d),b="2"}catch(h){}}a=b;if("2"==a&&-1==location.search.indexOf("&gbv=2")){var f=google.gbvu,g=document.getElementById("gbv");g&&(g.value=a);f&&window.setTimeout(function(){location.href=f},0)};}).call(this);
                    </script>
                </form>
                <div id="gac_scont"></div>
                <div style="font-size:83%;min-height:3.5em"><br></div>
                    <span id="footer"><div style="font-size:10pt"><div style="margin:19px auto;text-align:center" id="WqQANb"><a href="/intl/en/ads/">Advertising</a><a href="/services/">Business Solutions</a><a href="/intl/en/about.html">About Google</a></div></div><p style="font-size:8pt;color:#70757a">&copy; 2023 - <a href="/intl/en/policies/privacy/">Privacy</a> - <a href="/intl/en/policies/terms/">Terms</a></p></span>
        </center>
        <script nonce="kCuazAJ10rY7Oq3ht4UDHw">
            (function(){window.google.cdo={height:757,width:1440};(function(){var a=window.innerWidth,b=window.innerHeight;if(!a||!b){var c=window.document,d="CSS1Compat"==c.compatMode?c.documentElement:c.body;a=d.clientWidth;b=d.clientHeight}
    if(a&&b&&(a!=google.cdo.width||b!=google.cdo.height)){var e=google,f=e.log,g="/client_204?&atyp=i&biw="+a+"&bih="+b+"&ei="+google.kEI,h="",k=[],l=void 0!==window.google&&void 0!==window.google.kOPI&&0!==window.google.kOPI?window.google.kOPI:null;null!=l&&k.push(["opi",l.toString()]);for(var m=0;m<k.length;m++){if(0===m||0<m)h+="&";h+=k[m][0]+"="+k[m][1]}f.call(e,"","",g+h)};}).call(this);})();
        </script>
        <script nonce="kCuazAJ10rY7Oq3ht4UDHw">
            (function(){google.xjs={ck:'xjs.hp.8_gqMOIIiJ8.L.X.O',combam:'AAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAA4AAACEAAAAAAAAAAAgABAdAQAwAIAXA',cs:'ACT90oHGMmd4hBKLL2bOeOZQdfykxHXWJw',cssam:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEAAAAAAAAAAAgABA',cssopt:false,csss:'ACT90oGooV970rDoj9kXLn6hjM9k8cqq7w',excm:[],sepam:false,sepcss:false};})();
        </script>`
        contentRoot.replaceChild(paragraph, old)
}