!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],r):"object"==typeof exports?exports.webpackNumbers=r(require("lodash")):e.webpackNumbers=r(e._)}(this,function(e){return function(e){function r(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var n={};return r.m=e,r.c=n,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,n){"use strict";function o(e){return c.a.reduce(f.a,function(r,n){return n.num===e?n.word:r},"")}function t(e){return c.a.reduce(f.a,function(r,n){return n.word===e&&e.toLowerCase()?n.num:r},-1)}Object.defineProperty(r,"__esModule",{value:!0}),r.numToWord=o,r.wordToNum=t;var u=n(1),c=n.n(u),i=n(2),f=n.n(i)},function(r,n){r.exports=e},function(e,r){e.exports=[{num:1,word:"One"},{num:2,word:"Two"},{num:3,word:"Three"},{num:4,word:"Four"},{num:5,word:"Five"},{num:0,word:"Zero"}]}])});