(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{201:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(15),a=n.n(r),c=n(1),s=n(214),o=n(83),d=n(38),l=n(33),u=n(16),j=n(57),h=n(51),m=n.n(h),f=n(84),b=n(85),w=n(86),O=n(93),x=n(94),g=n(39),v=n(87),p=n.n(v),y={0:"wi-day-sunny",1:"wi-day-sunny-overcast",2:"wi-day-cloudy",3:"wi-day-cloudy-high",4:"wi-day-cloudy-high",5:"wi-day-sunny-overcast",6:"wi-day-showers",7:"wi-day-rain-mix",8:"wi-day-snow",9:"wi-day-storm-showers",10:"wi-cloudy",11:"wi-rain",12:"wi-showers",13:"wi-rain",14:"wi-sleet",15:"wi-rain-mix",16:"wi-snow",17:"wi-snow",18:"wi-snow",19:"wi-thunderstorm",23:"wi-dust",24:"wi-fog",25:"wi-snow-wind",26:"wi-hail",27:"wi-hail",28:"wi-sprinkle",30:"wi-night-clear",31:"wi-night-alt-partly-cloudy",32:"wi-night-alt-cloudy",33:"wi-night-alt-cloudy-high",34:"wi-night-alt-cloudy-high",35:"wi-night-alt-partly-cloudy",36:"wi-night-alt-showers",37:"wi-night-alt-rain-mix",38:"wi-night-alt-snow",39:"wi-night-alt-thunderstorm",40:"wi-night-alt-snow-wind",41:"wi-tornado",42:"wi-tornado",43:"wi-strong-wind",44:"wi-smoke",45:"wi-dust",46:"wi-hail",47:"wi-thunderstorm",48:"wi-tornado"};function T(e){if(e in y)return"wi "+y[e]}var N=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(e){return Object(b.a)(this,n),t.call(this,e)}return n}(Object(x.a)(Error));function C(e,t,n){var i,r,a;if("string"===typeof t)r=t,a=[];else{if(0===t.length)return e;r=t[0],a=t.slice(1)}var c=null===(i=e.getElementsByTagName(r))||void 0===i?void 0:i[0];if(!c&&!n)throw new N("".concat(e.tagName," missing element ").concat(t));return a.length>0?C(c,a,n):c}function E(e,t){var n=e.getAttribute(t);if(!n)throw new N("".concat(e.tagName," missing attribute ").concat(t));return n}function D(e,t){var n=null===e||void 0===e?void 0:e.textContent;if(!n&&!t)throw new N("Element or content was missing");return n}function S(e,t){var n=D(e,t);if(!n&&t)return null;var i=Number(n);if(isNaN(i))throw new N("".concat(e.tagName," does not contain a number"));return i}function F(e){return u.DateTime.utc(S(C(e,"year")),S(C(e,"month")),S(C(e,"day")),S(C(e,"hour")),S(C(e,"minute")))}function I(e){var t=C(e,"abbreviatedForecast");return{title:E(C(e,"period"),"textForecastName"),icon:T(S(C(t,"iconCode"))),fullReport:D(C(e,"textSummary")),conditions:D(C(t,"textSummary")),temperature:S(C(e,["temperatures","temperature"])),windChill:null,humidex:null}}function _(e){var t=Array.from(e.getElementsByTagName("dateTime")).find((function(e){return"UTC"===e.getAttribute("zone")}));if(!t)throw new N("currentConditions missing UTC dateTime");return{time:F(t).toSeconds(),conditions:D(C(e,"condition")),temperature:S(C(e,"temperature")),icon:T(S(C(e,"iconCode"))),windChill:S(C(e,"windChill",!0),!0),humidex:S(C(e,"humidex",!0),!0)}}function R(e){return Array.from(e.getElementsByTagName("hourlyForecast")).map((function(e){var t=E(e,"dateTimeUTC");return{time:u.DateTime.fromFormat(t,"yyyyMMddHHmm",{zone:u.FixedOffsetZone.utcInstance}).toSeconds(),conditions:D(C(e,"condition")),temperature:S(C(e,"temperature")),icon:T(S(C(e,"iconCode"))),windChill:S(C(e,"windChill",!0),!0),humidex:S(C(e,"humidex",!0),!0),pop:(S(C(e,"lop",!0),!0)||0)/100}}))}function A(e){switch(e){case"low":return"low";case"medium":return"medium";case"high":return"high";case"urgent":return"urgent";default:return"medium"}}function L(e){var t,n,i=e.evaluate("/siteData/dateTime[@name='xmlCreation' and @zone='UTC']",e,void 0,XPathResult.FIRST_ORDERED_NODE_TYPE);if(!(i.singleNodeValue instanceof Element))throw new N("Missing creation time");return{time:F(i.singleNodeValue).toSeconds(),current:_(e.getElementsByTagName("currentConditions")[0]),forecasts:(n=e.getElementsByTagName("forecastGroup")[0],Array.from(n.getElementsByTagName("forecast")).map(I)),hourlyForecasts:R(e.getElementsByTagName("hourlyForecastGroup")[0]),warnings:(t=e.getElementsByTagName("warnings")[0],Array.from(t.getElementsByTagName("event")).map((function(e){return{description:E(e,"description"),type:E(e,"type"),priority:A(E(e,"priority"))}})))}}var M=Object(g.b)("weather/fetchWeather",Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://dashboard-proxy.jmreardon.com/api/weather/citypage_weather/xml/ON/s0000430_e.xml");case 2:return t=e.sent,n=(new DOMParser).parseFromString(t.data,"text/xml"),e.prev=4,e.abrupt("return",L(n));case 8:if(e.prev=8,e.t0=e.catch(4),!(e.t0 instanceof N)){e.next=12;break}return e.abrupt("return",e.t0.message);case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[4,8]])})))),B=Object(g.c)({name:"weather",initialState:{state:"fetched",data:null},reducers:{loadWeather:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isFetching:!0})}},extraReducers:function(e){e.addCase(M.pending,(function(e,t){e.state="fetching"})).addCase(M.fulfilled,(function(e,t){e.state="fetched","string"===typeof t.payload?e.state={error:t.payload}:(e.state="fetched",e.data=t.payload)})).addCase(M.rejected,(function(e,t){e.state={error:t.error.message||"Unexpected error"}}))}}),k=(B.actions.loadWeather,B),U=n(37),W=function(){return Object(U.b)()},P=U.c,G=n(9),X=s.m.create({className:"toaster",position:G.a.BOTTOM}),H=n(3);function z(){return Object(H.jsxs)(s.h,{children:[Object(H.jsx)(s.h.Group,{align:l.a.LEFT,children:Object(H.jsx)(s.h.Heading,{children:"JR's Dashboard"})}),Object(H.jsxs)(s.h.Group,{align:l.a.RIGHT,children:[Object(H.jsx)(Y,{}),Object(H.jsx)(V,{})]})]})}function J(e,t){return e(t?"As of "+u.DateTime.fromSeconds(t).toRelative():"")}function Y(){var e=W(),t=P((function(e){var t;return null===(t=e.forecast.data)||void 0===t?void 0:t.time})),n=Object(i.useState)(""),r=Object(d.a)(n,2),a=r[0],c=r[1],s=Object(i.useState)(u.DateTime.now().toUTC()),o=Object(d.a)(s,2),l=o[0],j=o[1];return Object(i.useEffect)((function(){var n=setInterval((function(){J(c,t),l.diffNow("minutes").minutes<-15&&(j(u.DateTime.now().toUTC()),e(M()))}),1e3);return function(){return clearInterval(n)}})),Object(i.useEffect)((function(){J(c,t)}),[c,t]),Object(H.jsx)("div",{children:a})}function V(){var e,t=W(),n=P((function(e){return e.forecast.state}));return Object(i.useEffect)((function(){if("object"===typeof n){var e=Object(H.jsxs)("div",{children:[Object(H.jsx)("b",{children:"Failed to Load Forecast"}),Object(H.jsx)("br",{}),n.error]});X.show({message:e,icon:"error",intent:"warning"})}}),[n]),e="string"===typeof n?Object(H.jsx)(s.g,{icon:"refresh"}):Object(H.jsx)(s.g,{icon:"outdated"}),Object(H.jsx)(s.a,{loading:"fetching"===n,onClick:function(){return t(M())},intent:"string"===typeof n?"success":"warning",children:e})}var Z=n(42),K=n(46),$=n(56);function q(){var e=P((function(e){var t;return null===(t=e.forecast.data)||void 0===t?void 0:t.current}));return Object(H.jsxs)(s.b,{children:[Object(H.jsxs)("div",{className:"report-line",children:[Object(H.jsxs)("div",{children:[Object(H.jsxs)(s.e,{children:["Current Weather",Object(H.jsx)("span",{className:[c.a.TEXT_MUTED,c.a.TEXT_SMALL,c.a.UI_TEXT].join(" "),children:e?Object(H.jsxs)(H.Fragment,{children:[" as of ",u.DateTime.fromSeconds(e.time).toLocal().toLocaleString(u.DateTime.TIME_24_SIMPLE)]}):Object(H.jsx)(H.Fragment,{children:" unavailable"})})]}),Object(H.jsx)("div",{className:"overflow-container",children:Object(H.jsx)(s.l,{ellipsize:!0,children:null===e||void 0===e?void 0:e.conditions})})]}),e?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("div",{className:"spacer"}),ne(e.temperature,e.humidex,e.windChill),Object(H.jsx)("div",{className:"weather-icon",children:Object(H.jsx)("i",{className:"wi-fw "+(e.icon||"wi wi-na")})})]}):Object(H.jsx)(H.Fragment,{})]}),Object(H.jsx)(ae,{})]})}function Q(){var e,t=P((function(e){var t;return null===(t=e.forecast.data)||void 0===t?void 0:t.forecasts})),n=null!==(e=null===t||void 0===t?void 0:t.map(ie))&&void 0!==e?e:Object(H.jsx)("div",{className:c.a.TEXT_MUTED,children:"unavailable"});return Object(H.jsxs)(s.b,{children:[Object(H.jsx)(s.e,{children:"Forecast"}),n]})}function ee(){var e=P((function(e){var t;return null===(t=e.forecast.data)||void 0===t?void 0:t.hourlyForecasts}));return Object(H.jsxs)(s.b,{children:[Object(H.jsx)(s.e,{children:"Hourly Forecast"}),Object(H.jsx)("div",{className:"hourly-forecasts",children:e?Object(H.jsx)("table",{cellSpacing:0,children:Object(H.jsx)("tbody",{children:e.map(re)})}):Object(H.jsx)("div",{className:c.a.TEXT_MUTED,children:"unavailable"})})]})}function te(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(H.jsxs)(H.Fragment,{children:[" ",P((function(e){var t,n;return null!==(t=null===(n=e.forecast.data)||void 0===n?void 0:n.warnings)&&void 0!==t?t:[]})).map((function(e){var t,i=e.type.length>0?e.type:"Warning";switch(e.priority){case"medium":t=c.a.INTENT_WARNING;break;case"high":case"urgent":t=c.a.INTENT_DANGER;break;default:t=c.a.INTENT_PRIMARY}return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(s.b,{onClick:function(){return r(!0)},interactive:!0,className:[c.a.CALLOUT,t].join(" "),children:[Object(H.jsx)(s.e,{children:i}),Object(H.jsx)(s.l,{children:e.description.length>55?e.description.slice(0,53)+"\u2026":e.description})]}),Object(H.jsx)(s.d,{title:i,usePortal:!0,isOpen:n,onClose:function(){return r(!1)},isCloseButtonShown:!0,children:Object(H.jsx)("div",{className:c.a.DRAWER_BODY,children:Object(H.jsx)("div",{className:c.a.DIALOG_BODY,children:e.description})})})]})}))]})}function ne(e,t,n){var i=t||n,r="".concat(e.toFixed(0),"\xb0C");if(i){var a=Object(H.jsxs)(H.Fragment,{children:["Actual: ",r,Object(H.jsx)("br",{}),t&&"Humidex: ".concat(t.toFixed(0),"\xb0C"),n&&"Windchill: ".concat(n.toFixed(0),"\xb0C")]});return Object(H.jsx)(Z.a,{content:a,position:"top",className:K.a.TOOLTIP2_INDICATOR,children:"".concat(i.toFixed(0),"\xb0C")})}return"".concat(e.toFixed(0),"\xb0C")}function ie(e){return Object(H.jsxs)("div",{className:["report-line","forecast",e.title.endsWith("night")?"night":"day"].join(" "),children:[Object(H.jsxs)("div",{children:[Object(H.jsx)(s.f,{children:e.title}),Object(H.jsx)(Z.a,{content:e.fullReport,position:"top",className:K.a.TOOLTIP2_INDICATOR,children:e.conditions.length>35?e.conditions.slice(0,33)+"\u2026":e.conditions})]}),Object(H.jsx)("div",{className:"spacer"}),Object(H.jsx)("div",{className:"temperature",children:ne(e.temperature,e.humidex,e.windChill)}),Object(H.jsx)("div",{className:"weather-icon",children:Object(H.jsx)("i",{className:"wi-fw "+(e.icon||"wi wi-na")})})]},e.title)}function re(e){var t=u.DateTime.fromSeconds(e.time,{zone:u.FixedOffsetZone.utcInstance}).toLocal(),n=t.day===u.DateTime.now().day?"today":"tomorrow";return Object(H.jsxs)("tr",{className:["report-line","forecast","hourly",n].join(" "),children:[Object(H.jsx)("td",{className:"time-title",children:Object(H.jsx)(s.f,{className:se(e),children:ce(t)})}),Object(H.jsx)("td",{className:"temperature",children:ne(e.temperature,e.humidex,e.windChill)}),Object(H.jsx)("td",{children:Object(H.jsx)("i",{className:"wi-fw "+(e.icon||"wi wi-na")})}),Object(H.jsx)("td",{children:e.pop>0?e.pop.toLocaleString(void 0,{style:"percent"}):""}),Object(H.jsx)("td",{children:e.conditions.length>20?Object(H.jsx)(Z.a,{content:e.conditions,position:"top",className:K.a.TOOLTIP2_INDICATOR,children:e.conditions.slice(0,18)+"\u2026"}):e.conditions})]},e.time)}function ae(){var e=new Date;return Object(H.jsxs)("div",{className:"report-line",children:[Object(H.jsx)(s.e,{children:"Sunrise/Sunset"}),Object(H.jsx)("div",{className:"spacer"}),Object(H.jsxs)("div",{children:[Object(H.jsx)("i",{className:"wi wi-sunrise"})," ",ce(u.DateTime.fromJSDate(Object($.getSunrise)(45.33,-75.58,e)))]}),Object(H.jsxs)("div",{children:[Object(H.jsx)("i",{className:"wi wi-sunset"})," ",ce(u.DateTime.fromJSDate(Object($.getSunset)(45.33,-75.58,e)))]})]})}function ce(e){return e.toLocal().toLocaleString(u.DateTime.TIME_24_SIMPLE)}function se(e){return e.pop>=.5?"warning":""}n(201);var oe=function(){var e=Object(o.useModeSelector)({dark:c.a.DARK,light:"",unset:""});return Object(H.jsxs)("div",{className:e,id:"layout-root",children:[Object(H.jsx)(z,{}),Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:"card-grid",children:[Object(H.jsx)(q,{}),Object(H.jsx)(te,{}),Object(H.jsx)(ee,{}),Object(H.jsx)(Q,{})]})}),Object(H.jsx)(s.c,{}),Object(H.jsx)("footer",{className:c.a.TEXT_MUTED,children:"Contains information licenced under the Data Server End-use Licence of Environment and Climate Change Canada."})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=Object(g.a)({reducer:{forecast:k.reducer}});n(202),n(203),n(204),n(205);de.dispatch(M()),setInterval((function(){return de.dispatch(M())}),36e5),a.a.render(Object(H.jsx)(i.StrictMode,{children:Object(H.jsx)(U.a,{store:de,children:Object(H.jsx)(oe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[206,1,2]]]);
//# sourceMappingURL=main.40d2addb.chunk.js.map