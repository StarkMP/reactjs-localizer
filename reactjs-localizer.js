!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define(["react"],r):"object"==typeof exports?exports["reactjs-localizer"]=r(require("react")):e["reactjs-localizer"]=r(e.React)}(this,(function(e){return(()=>{"use strict";var r={352:(e,r,t)=>{t.r(r),t.d(r,{Localizer:()=>i,useLocalizer:()=>f,LocaleProvider:()=>s});var n=t(698),o=t.n(n);function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var i=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t;return r=e,t=[{key:"mount",value:function(r){e.mounted||(e.locales=r,e.mounted=!0)}},{key:"localize",value:function(r,t){var n=e.locales[t];if(!n)throw new Error("Phrase ".concat(t," is not defined at locales"));return n[r]||t}}],null&&u(r.prototype,null),t&&u(r,t),e}();l(i,"locales",{}),l(i,"defaultLanguage","EN"),l(i,"mounted",!1);var c=(0,n.createContext)(),f=function(){return(0,n.useContext)(c)},s=function(e){var r,t,u=e.children,l=(r=(0,n.useState)(i.defaultLanguage),t=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return t}}(r,t)||function(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=l[0],s=l[1],d=(0,n.useCallback)((function(e){return i.localize(f,e)}),[f]);return o().createElement(c.Provider,{value:{language:f,localize:d,setLanguage:s}},u)}},698:r=>{r.exports=e}},t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={exports:{}};return r[e](o,o.exports,n),o.exports}return n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(352)})()}));