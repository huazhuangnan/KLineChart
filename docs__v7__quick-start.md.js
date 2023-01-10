(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{"6T1g":function(n,e,t){"use strict";var a=t("kM82"),r=t.n(a),i=t("3Mpw"),o=t("dEAq");t("qHiR"),t("rVZW");function c(){return c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},c.apply(this,arguments)}function l(n,e){return h(n)||d(n,e)||m(n,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(n,e){if(n){if("string"===typeof n)return u(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(n,e):void 0}}function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function d(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var a,r,i=[],o=!0,c=!1;try{for(t=t.call(n);!(o=(a=t.next()).done);o=!0)if(i.push(a.value),e&&i.length===e)break}catch(l){c=!0,r=l}finally{try{o||null==t["return"]||t["return"]()}finally{if(c)throw r}}return i}}function h(n){if(Array.isArray(n))return n}var p={acss:"css",axml:"xml"};e["a"]=function(n){var e=n.code,t=n.lang,a=n.showCopy,s=void 0===a||a,m=Object(o["useCopy"])(),u=l(m,2),d=u[0],h=u[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(i["a"],c({},i["b"],{code:e,language:p[t]||t,theme:void 0}),(function(n){var t=n.className,a=n.style,i=n.tokens,o=n.getLineProps,c=n.getTokenProps;return r.a.createElement("pre",{className:t,style:a},s&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:function(){return d(e)}}),i.map((function(n,e){return r.a.createElement("div",o({line:n,key:e}),n.map((function(n,e){return r.a.createElement("span",c({token:n,key:e}))})))})))})))}},fi5S:function(n,e,t){"use strict";t.r(e);var a=t("kM82"),r=t.n(a),i=t("dEAq"),o=t("6T1g"),c=r.a.memo((n=>{n.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"quick-start"},r.a.createElement(i["AnchorLink"],{to:"#quick-start","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Quick start"),r.a.createElement("h2",{id:"installation"},r.a.createElement(i["AnchorLink"],{to:"#installation","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Installation"),r.a.createElement("h3",{id:"use-npm"},r.a.createElement(i["AnchorLink"],{to:"#use-npm","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Use npm"),r.a.createElement(o["a"],{code:"npm install klinecharts --save",lang:"bash"}),r.a.createElement("h3",{id:"use-yarn"},r.a.createElement(i["AnchorLink"],{to:"#use-yarn","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Use yarn"),r.a.createElement(o["a"],{code:"yarn add klinecharts",lang:"bash"}),r.a.createElement("h2",{id:"introduction"},r.a.createElement(i["AnchorLink"],{to:"#introduction","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Introduction"),r.a.createElement(o["a"],{code:"// Full introduction, including all built-in technical indicators and drawing marks\nimport { init } from 'klinecharts';\n\n// Introduce some functions, excluding built-in drawing markers\nimport { init } from 'klinecharts/index.blank';\n\n// Introduce basic functions, excluding built-in technical indicators and drawing marks\nimport { init } from 'klinecharts/index.simple';\n\n// Use one of the above three methods as needed",lang:"javascript"}),r.a.createElement("h2",{id:"create-the-first-chart"},r.a.createElement(i["AnchorLink"],{to:"#create-the-first-chart","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Create the first chart"),r.a.createElement(o["a"],{code:"import { init } from 'klinecharts';\n\n// Initialize the chart\nconst chart = init(`${domId}`);\n\n// add data to the chart\nchart.applyNewData([\n  {\n    close: 4976.16,\n    high: 4977.99,\n    low: 4970.12,\n    open: 4972.89,\n    timestamp: 1587660000000,\n    volume: 204,\n  },\n  {\n    close: 4977.33,\n    high: 4979.94,\n    low: 4971.34,\n    open: 4973.2,\n    timestamp: 1587660060000,\n    volume: 194,\n  },\n  {\n    close: 4977.93,\n    high: 4977.93,\n    low: 4974.2,\n    open: 4976.53,\n    timestamp: 1587660120000,\n    volume: 197,\n  },\n  {\n    close: 4966.77,\n    high: 4968.53,\n    low: 4962.2,\n    open: 4963.88,\n    timestamp: 1587660180000,\n    volume: 28,\n  },\n  {\n    close: 4961.56,\n    high: 4972.61,\n    low: 4961.28,\n    open: 4961.28,\n    timestamp: 1587660240000,\n    volume: 184,\n  },\n  {\n    close: 4964.19,\n    high: 4964.74,\n    low: 4961.42,\n    open: 4961.64,\n    timestamp: 1587660300000,\n    volume: 191,\n  },\n  {\n    close: 4968.93,\n    high: 4972.7,\n    low: 4964.55,\n    open: 4966.96,\n    timestamp: 1587660360000,\n    volume: 105,\n  },\n  {\n    close: 4979.31,\n    high: 4979.61,\n    low: 4973.99,\n    open: 4977.06,\n    timestamp: 1587660420000,\n    volume: 35,\n  },\n  {\n    close: 4977.02,\n    high: 4981.66,\n    low: 4975.14,\n    open: 4981.66,\n    timestamp: 1587660480000,\n    volume: 135,\n  },\n  {\n    close: 4985.09,\n    high: 4988.62,\n    low: 4980.3,\n    open: 4986.72,\n    timestamp: 1587660540000,\n    volume: 76,\n  },\n]);",lang:"javascript"})))}));e["default"]=n=>{var e=r.a.useContext(i["context"]),t=e.demos;return r.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&i["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),r.a.createElement(c,{demos:t})}},rVZW:function(n,e,t){}}]);