!function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=(p=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(p)))),x="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(x," */")),r=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[e].concat(r).concat([i]).join("\n")}var p,a,x;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var p=this[r][0];null!=p&&(i[p]=!0)}for(var a=0;a<t.length;a++){var x=[].concat(t[a]);o&&i[x[0]]||(e&&(x[2]?x[2]="".concat(e," and ").concat(x[2]):x[2]=e),n.push(x))}},n}},function(t,n,e){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),p=[];function a(t){for(var n=-1,e=0;e<p.length;e++)if(p[e].identifier===t){n=e;break}return n}function x(t,n){for(var e={},o=[],i=0;i<t.length;i++){var r=t[i],x=n.base?r[0]+n.base:r[0],l=e[x]||0,m="".concat(x," ").concat(l);e[x]=l+1;var s=a(m),c={css:r[1],media:r[2],sourceMap:r[3]};-1!==s?(p[s].references++,p[s].updater(c)):p.push({identifier:m,updater:f(c,n),references:1}),o.push(m)}return o}function l(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var p=r(t.insert||"head");if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(n)}return n}var m,s=(m=[],function(t,n){return m[t]=n,m.filter(Boolean).join("\n")});function c(t,n,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=s(n,i);else{var r=document.createTextNode(i),p=t.childNodes;p[n]&&t.removeChild(p[n]),p.length?t.insertBefore(r,p[n]):t.appendChild(r)}}function h(t,n,e){var o=e.css,i=e.media,r=e.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var g=null,u=0;function f(t,n){var e,o,i;if(n.singleton){var r=u++;e=g||(g=l(n)),o=c.bind(null,e,r,!1),i=c.bind(null,e,r,!0)}else e=l(n),o=h.bind(null,e,n),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else i()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var e=x(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<e.length;o++){var i=a(e[o]);p[i].references--}for(var r=x(t,n),l=0;l<e.length;l++){var m=a(e[l]);0===p[m].references&&(p[m].updater(),p.splice(m,1))}e=r}}}},function(t,n,e){"use strict";e(3),e(5),document.addEventListener("DOMContentLoaded",(function(t){console.log(fetch("/dist/metadata/catalog.json").then((function(t){return t.json()})))}))},function(t,n,e){var o=e(1),i=e(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);t.exports=i.locals||{}},function(t,n,e){"use strict";e.r(n);var o=e(0),i=e.n(o)()(!1);i.push([t.i,"body{padding:20px}pre,code{width:auto !important}footer{padding:20px 10px 10px 20px}.cc-license-icons span{padding:8px}.contact{float:right;bottom:0;padding:5px;margin-top:300px}.span--1{grid-column:span 1}.span--2{grid-column:span 2}.span--3{grid-column:span 3}.span--4{grid-column:span 4}",""]),n.default=i},function(t,n,e){var o=e(1),i=e(6);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);t.exports=i.locals||{}},function(t,n,e){"use strict";e.r(n);var o=e(0),i=e.n(o)()(!1);i.push([t.i,'@media(max-width: 299px){body{font-size:12px;line-height:19.416px}h1{font-size:50.829612384px;line-height:58.248px;margin-top:38.832px;margin-bottom:9.708px}h2{font-size:31.415088px;line-height:38.832px;margin-top:19.416px;margin-bottom:19.416px}h3{font-size:19.416px;line-height:19.416px;margin-top:19.416px;margin-bottom:19.416px}h4{font-size:12px;line-height:19.416px;margin-top:19.416px;margin-bottom:19.416px}p,ul,ol,pre,table,blockquote{margin-top:19.416px;margin-bottom:19.416px}}@media(min-width: 300px){body{font-size:14px;line-height:22.652px}h1{font-size:59.301214448px;line-height:67.956px;margin-top:45.304px;margin-bottom:11.326px}h2{font-size:36.650936px;line-height:45.304px;margin-top:22.652px;margin-bottom:22.652px}h3{font-size:22.652px;line-height:22.652px;margin-top:22.652px;margin-bottom:22.652px}h4{font-size:14px;line-height:22.652px;margin-top:22.652px;margin-bottom:22.652px}p,ul,ol,pre,table,blockquote{margin-top:22.652px;margin-bottom:22.652px}}@media(min-width: 600px){body{font-size:15px;line-height:24.27px}h1{font-size:63.53701548px;line-height:72.81px;margin-top:48.54px;margin-bottom:12.135px}h2{font-size:39.26886px;line-height:48.54px;margin-top:24.27px;margin-bottom:24.27px}h3{font-size:24.27px;line-height:24.27px;margin-top:24.27px;margin-bottom:24.27px}h4{font-size:15px;line-height:24.27px;margin-top:24.27px;margin-bottom:24.27px}p,ul,ol,pre,table,blockquote{margin-top:24.27px;margin-bottom:24.27px}}@media(min-width: 800px){body{font-size:16px;line-height:25.888px}h1{font-size:67.772816512px;line-height:77.664px;margin-top:51.776px;margin-bottom:12.944px}h2{font-size:41.886784px;line-height:51.776px;margin-top:25.888px;margin-bottom:25.888px}h3{font-size:25.888px;line-height:25.888px;margin-top:25.888px;margin-bottom:25.888px}h4{font-size:16px;line-height:25.888px;margin-top:25.888px;margin-bottom:25.888px}p,ul,ol,pre,table,blockquote{margin-top:25.888px;margin-bottom:25.888px}}@media(min-width: 1000px){body{font-size:19px;line-height:30.742px}h1{font-size:80.480219608px;line-height:92.226px;margin-top:61.484px;margin-bottom:15.371px}h2{font-size:49.740556px;line-height:61.484px;margin-top:30.742px;margin-bottom:30.742px}h3{font-size:30.742px;line-height:30.742px;margin-top:30.742px;margin-bottom:30.742px}h4{font-size:19px;line-height:30.742px;margin-top:30.742px;margin-bottom:30.742px}p,ul,ol,pre,table,blockquote{margin-top:30.742px;margin-bottom:30.742px}}@media(min-width: 1200px){body{font-size:21px;line-height:33.978px}h1{font-size:88.951821672px;line-height:101.934px;margin-top:67.956px;margin-bottom:16.989px}h2{font-size:54.976404px;line-height:67.956px;margin-top:33.978px;margin-bottom:33.978px}h3{font-size:33.978px;line-height:33.978px;margin-top:33.978px;margin-bottom:33.978px}h4{font-size:21px;line-height:33.978px;margin-top:33.978px;margin-bottom:33.978px}p,ul,ol,pre,table,blockquote{margin-top:33.978px;margin-bottom:33.978px}}@media(min-width: 1400px){body{font-size:23px;line-height:37.214px}h1{font-size:97.423423736px;line-height:111.642px;margin-top:74.428px;margin-bottom:18.607px}h2{font-size:60.212252px;line-height:74.428px;margin-top:37.214px;margin-bottom:37.214px}h3{font-size:37.214px;line-height:37.214px;margin-top:37.214px;margin-bottom:37.214px}h4{font-size:23px;line-height:37.214px;margin-top:37.214px;margin-bottom:37.214px}p,ul,ol,pre,table,blockquote{margin-top:37.214px;margin-bottom:37.214px}}@media(min-width: 1600px){body{font-size:25px;line-height:40.45px}h1{font-size:105.8950258px;line-height:121.35px;margin-top:80.9px;margin-bottom:20.225px}h2{font-size:65.4481px;line-height:80.9px;margin-top:40.45px;margin-bottom:40.45px}h3{font-size:40.45px;line-height:40.45px;margin-top:40.45px;margin-bottom:40.45px}h4{font-size:25px;line-height:40.45px;margin-top:40.45px;margin-bottom:40.45px}p,ul,ol,pre,table,blockquote{margin-top:40.45px;margin-bottom:40.45px}}body{font-family:"Roboto",sans-serif;color:#121223}code{background:#ccc;display:inline-block;width:100%}pre{margin:1em}',""]),n.default=i}]);