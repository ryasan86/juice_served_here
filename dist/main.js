!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1)},function(n,e,t){var r=t(2);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(6)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){e=n.exports=t(3)(!1);var r=t(4)(t(5));e.push([n.i,".navbar > .nav-list, .navbar .horizontal-logo, .navbar .box-hover {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*============ Global Styles ============*/\nhtml {\n  box-sizing: border-box;\n  font-size: 10px; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\nbody {\n  padding: 0;\n  margin: 0;\n  line-height: 2;\n  font-family: sans-serif;\n  font-size: 1.2em; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\nbutton {\n  cursor: pointer; }\n\n/*============ Pencil Ad ============*/\n.pencil-ad {\n  background: #231f20;\n  color: white;\n  padding: 10px 0;\n  text-align: center; }\n  .pencil-ad b {\n    text-decoration: underline; }\n\n/*============ Navigation Bar ============*/\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 1px 1px 1px lightgray; }\n  @media (max-width: 1100px) {\n    .navbar {\n      display: grid;\n      grid-template-areas: 'logo left login'\r '. right box'; } }\n  .navbar > .login {\n    grid-area: login;\n    display: flex;\n    align-items: center;\n    padding: 2rem 3rem; }\n  .navbar > .nav-list {\n    display: flex;\n    padding: 0;\n    margin: 0;\n    list-style-type: none; }\n    .navbar > .nav-list.left {\n      grid-area: left; }\n    .navbar > .nav-list.right {\n      grid-area: right; }\n    .navbar > .nav-list > .nav-item {\n      padding: 2rem 2rem; }\n      .navbar > .nav-list > .nav-item > .nav-link.active {\n        color: #f95951; }\n  .navbar .horizontal-logo {\n    grid-area: logo;\n    padding: 0 2rem; }\n  .navbar .box-hover {\n    grid-area: box;\n    padding: 2rem 3rem;\n    cursor: pointer; }\n\n/*============ Home ============*/\nheader {\n  width: 100vw;\n  height: 80vh;\n  background: url("+r+") no-repeat center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center; }\n  header > .header-text {\n    margin-top: 10%;\n    width: 80%;\n    color: #231f20; }\n    @media screen and (max-width: 676px) {\n      header > .header-text {\n        margin-top: 40%;\n        width: 95%;\n        text-align: center; } }\n    header > .header-text > h1 {\n      margin-bottom: 10px;\n      font-family: League Spartan, sans-serif;\n      font-size: 45px; }\n      @media screen and (max-width: 601px) {\n        header > .header-text > h1 {\n          font-size: 30px; } }\n      @media screen and (max-width: 460px) {\n        header > .header-text > h1 {\n          font-size: 28px; } }\n    header > .header-text > p {\n      margin-bottom: 20px;\n      font-family: 'Open Sans', Helvetica, sans-serif;\n      font-size: 18px; }\n      @media screen and (max-width: 601px) {\n        header > .header-text > p {\n          font-size: 15px;\n          width: 85%;\n          display: block;\n          margin: auto;\n          margin-bottom: 20px; } }\n    header > .header-text > button {\n      border: 2px solid #f95951;\n      color: white;\n      font-family: 'Roboto', Segoe UI, calibri, Helvetica, serif;\n      padding: 10px;\n      font-size: 18px;\n      width: 160px;\n      cursor: pointer;\n      background-color: #f95951;\n      transition: all 0.2s ease-in-out; }\n      header > .header-text > button:hover {\n        background-color: white;\n        color: #f95951; }\n      @media screen and (max-width: 601px) {\n        header > .header-text > button {\n          font-size: 16px;\n          width: 140px; } }\n",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){n.exports=t.p+"assets/images/hero-bg.png"},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),l=null,c=0,f=[],u=t(7);function d(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function h(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),f.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,t);t.insertBefore(e,o)}}function v(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=f.indexOf(n);e>=0&&f.splice(e,1)}function b(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return m(e,n.attrs),h(n,e),e}function m(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function g(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=c++;t=l||(l=b(e)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(e,n.attrs),h(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){v(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){v(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return d(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&d(p(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,y=(x=[],function(n,e){return x[n]=e,x.filter(Boolean).join("\n")});function w(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);