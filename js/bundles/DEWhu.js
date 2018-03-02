var pageComponent=webpackJsonppageComponent([26],{156:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=o(r),u=n(1),p=o(u);n(2),n(3),n(4),n(5),n(6),n(7),n(8);var c=n(157),d=o(c),f=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(s.default);p.default.register(f,d.default),t.default=f},157:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.DEWhu=void 0;var r,s=n(0),u=o(s),p=n(1),c=o(p);goog.loadModule(function(e){function t(e,t,o){var r=function(){l("h3",null,null,"id","description"),i("Description"),a("h3"),l("p");var t=e.page.description;"function"==typeof t?t():null!=t&&i(t),a("p"),l("p"),i("Badges have circular borders and are only used to specify a number."),a("p"),l("p"),l("img",null,null,"srcset","../../../images/Badges@2x.png 2x","src","../../../images/Badges.png","alt","defualt size default color badge"),a("img"),a("p"),l("h3",null,null,"id","usage"),i("Usage"),a("h3"),l("ul"),l("li"),i("Badges can be of different types as it can be seen in the previous image. Apply them properly depending on the context. You won't always need a badge to identify a number, in those cases plain text is an option to take into account."),a("li"),l("li"),i("Badges are used only for integers."),a("li"),l("li"),i("Badges can not be close or link to another a page. They are only used as informative text."),a("li"),l("li"),i("Badges are not thought to always indicate the exact number of elements. In that case please use plain text. Badges work for exact numbers up to 999. From there we use K from Thousands (5K for 5.231) , M for Millions (2M for 2.100.523)."),a("li"),l("li"),i("Red background color badge is only dedicated to:"),l("ul"),l("li"),i("Notifications: always placed nearby a user profile or a Product menu option."),a("li"),l("li"),i("Errors: in tables and/or lists."),a("li"),a("ul"),a("li"),l("li"),i("In case you need a pattern where to write non-numeric values, labels is the pattern to use."),a("li"),a("ul"),l("h3",null,null,"id","dos-and-donts"),i("Do's and Don'ts"),a("h3"),l("p"),i("Badges can be use near text but a minimum distance of 8px must be always kept."),a("p"),l("div",null,null,"class","row"),l("div",null,null,"class","dodont col-lg"),l("img",null,null,"class","do","src","../../../images/BadgeDoDistance.png","alt","badge distance to an element is 8 pixels"),a("img"),l("p",null,null,"class","do"),i("Do"),a("p"),a("div"),l("div",null,null,"class","dodont col-lg"),l("img",null,null,"class","dont","src","../../../images/BadgeDontDistance.png","alt","don't place a badge closer than 8 pixels to any element in horizontal"),a("img"),l("p",null,null,"class","dont"),i("Don't"),a("p"),a("div"),a("div"),l("h3",null,null,"id","attributes"),i("Attributes"),a("h3"),l("ul"),l("li"),i("Height: 16px (total 20px)"),a("li"),l("li"),i("Border: 2px"),a("li"),l("li"),i("Font-size: 12"),a("li"),a("ul"),l("input",null,null,"type","hidden","value",e.page.title),a("input"),l("input",null,null,"type","hidden","value",e.site.title),a("input")};s(n.$$assignDefaults({content:r},e),null,o)}goog.module("DEWhu.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),l=o.elementOpen,a=o.elementClose,i=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),s=(o.attr,c.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="DEWhu.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=r=e,e});var d=function(e){function t(){return l(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);c.default.register(d,r),t.DEWhu=d,t.templates=r,t.default=r}},[156]);