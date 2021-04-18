(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{202:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(14),a=n.n(r),c=n(1),o=n(215),s=n(83),d=n(56),l=n(33),u=n(16),j=n(57),m=n(49),h=n.n(m),f=n(84),b=n(85),w=n(86),O=n(93),x=n(94),v=n(38),g=n(87),p=n.n(g),y={0:"wi-day-sunny",1:"wi-day-sunny-overcast",2:"wi-day-cloudy",3:"wi-day-cloudy-high",4:"wi-day-cloudy-high",6:"wi-day-showers",7:"wi-day-rain-mix",8:"wi-day-snow",9:"wi-day-storm-showers",10:"wi-cloudy",11:"wi-rain",12:"wi-showers",13:"wi-rain",14:"wi-sleet",15:"wi-rain-mix",16:"wi-snow",17:"wi-snow",18:"wi-snow",19:"wi-thunderstorm",23:"wi-dust",24:"wi-fog",25:"wi-snow-wind",26:"wi-hail",27:"wi-hail",28:"wi-sprinkle",30:"wi-night-clear",31:"wi-night-alt-partly-cloudy",32:"wi-night-alt-cloudy",33:"wi-night-alt-cloudy-high",34:"wi-night-alt-cloudy-high",36:"wi-night-alt-showers",37:"wi-night-alt-rain-mix",38:"wi-night-alt-snow",39:"wi-night-alt-thunderstorm",40:"wi-night-alt-snow-wind",41:"wi-tornado",42:"wi-tornado",43:"wi-strong-wind",44:"wi-smoke",45:"wi-dust",46:"wi-hail",47:"wi-thunderstorm",48:"wi-tornado"};function T(e){if(e in y)return"wi "+y[e]}var N=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(e){return Object(b.a)(this,n),t.call(this,e)}return n}(Object(x.a)(Error));function C(e,t,n){var i,r,a;if("string"===typeof t)r=t,a=[];else{if(0===t.length)return e;r=t[0],a=t.slice(1)}var c=null===(i=e.getElementsByTagName(r))||void 0===i?void 0:i[0];if(!c&&!n)throw new N("".concat(e.tagName," missing element ").concat(t));return a.length>0?C(c,a,n):c}function E(e,t){var n=e.getAttribute(t);if(!n)throw new N("".concat(e.tagName," missing attribute ").concat(t));return n}function D(e,t){var n=null===e||void 0===e?void 0:e.textContent;if(!n&&!t)throw new N("Element or content was missing");return n}function S(e,t){var n=D(e,t);if(!n&&t)return null;var i=Number(n);if(isNaN(i))throw new N("".concat(e.tagName," does not contain a number"));return i}function F(e){return u.DateTime.utc(S(C(e,"year")),S(C(e,"month")),S(C(e,"day")),S(C(e,"hour")),S(C(e,"minute")))}function I(e){var t=C(e,"abbreviatedForecast");return{title:E(C(e,"period"),"textForecastName"),icon:T(S(C(t,"iconCode"))),fullReport:D(C(e,"textSummary")),conditions:D(C(t,"textSummary")),temperature:S(C(e,["temperatures","temperature"])),windChill:null,humidex:null}}function _(e){var t=Array.from(e.getElementsByTagName("dateTime")).find((function(e){return"UTC"===e.getAttribute("zone")}));if(!t)throw new N("currentConditions missing UTC dateTime");return{time:F(t).toSeconds(),conditions:D(C(e,"condition")),temperature:S(C(e,"temperature")),icon:T(S(C(e,"iconCode"))),windChill:S(C(e,"windChill",!0),!0),humidex:S(C(e,"humidex",!0),!0)}}function M(e){return Array.from(e.getElementsByTagName("hourlyForecast")).map((function(e){var t=E(e,"dateTimeUTC");return{time:u.DateTime.fromFormat(t,"yyyyMMddHHmm",{zone:u.FixedOffsetZone.utcInstance}).toSeconds(),conditions:D(C(e,"condition")),temperature:S(C(e,"temperature")),icon:T(S(C(e,"iconCode"))),windChill:S(C(e,"windChill",!0),!0),humidex:S(C(e,"humidex",!0),!0),pop:(S(C(e,"lop",!0),!0)||0)/100}}))}function L(e){var t,n=e.evaluate("/siteData/dateTime[@name='xmlCreation' and @zone='UTC']",e,void 0,XPathResult.FIRST_ORDERED_NODE_TYPE);if(!(n.singleNodeValue instanceof Element))throw new N("Missing creation time");return{time:F(n.singleNodeValue).toSeconds(),current:_(e.getElementsByTagName("currentConditions")[0]),forecasts:(t=e.getElementsByTagName("forecastGroup")[0],Array.from(t.getElementsByTagName("forecast")).map(I)),hourlyForecasts:M(e.getElementsByTagName("hourlyForecastGroup")[0])}}var R=Object(v.b)("weather/fetchWeather",Object(f.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://dashboard-proxy.jmreardon.com/api/weather/citypage_weather/xml/ON/s0000430_e.xml");case 2:return t=e.sent,n=(new DOMParser).parseFromString(t.data,"text/xml"),e.prev=4,e.abrupt("return",L(n));case 8:if(e.prev=8,e.t0=e.catch(4),!(e.t0 instanceof N)){e.next=12;break}return e.abrupt("return",e.t0.message);case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[4,8]])})))),U=Object(v.c)({name:"weather",initialState:{state:"fetched",data:null},reducers:{loadWeather:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{isFetching:!0})}},extraReducers:function(e){e.addCase(R.pending,(function(e,t){e.state="fetching"})).addCase(R.fulfilled,(function(e,t){e.state="fetched","string"===typeof t.payload?e.state={error:t.payload}:(e.state="fetched",e.data=t.payload)})).addCase(R.rejected,(function(e,t){e.state={error:t.error.message||"Unexpected error"}}))}}),k=(U.actions.loadWeather,U),A=n(37),B=function(){return Object(A.b)()},X=A.c,P=n(12),W=o.l.create({className:"recipe-toaster",position:P.a.BOTTOM}),z=n(3);function G(){return Object(z.jsxs)(o.g,{children:[Object(z.jsx)(o.g.Group,{align:l.a.LEFT,children:Object(z.jsx)(o.g.Heading,{children:"JR's Dashboard"})}),Object(z.jsxs)(o.g.Group,{align:l.a.RIGHT,children:[Object(z.jsx)(J,{}),Object(z.jsx)(V,{})]})]})}function H(e,t){return e(t?"As of "+u.DateTime.fromSeconds(t).toRelative():"")}function J(){var e=B(),t=X((function(e){var t;return null===(t=e.forecast.data)||void 0===t?void 0:t.time})),n=Object(i.useState)(""),r=Object(d.a)(n,2),a=r[0],c=r[1],o=Object(i.useState)(u.DateTime.now().toUTC()),s=Object(d.a)(o,2),l=s[0],j=s[1];return Object(i.useEffect)((function(){var n=setInterval((function(){H(c,t),l.diffNow("minutes").minutes<-15&&(j(u.DateTime.now().toUTC()),e(R()))}),1e3);return function(){return clearInterval(n)}})),Object(i.useEffect)((function(){H(c,t)}),[c,t]),Object(z.jsx)("div",{children:a})}function V(){var e,t=B(),n=X((function(e){return e.forecast.state}));return Object(i.useEffect)((function(){if("object"===typeof n){var e=Object(z.jsxs)("div",{children:[Object(z.jsx)("b",{children:"Failed to Load Forecast"}),Object(z.jsx)("br",{}),n.error]});W.show({message:e,icon:"error",intent:"warning"})}}),[n]),e="string"===typeof n?Object(z.jsx)(o.f,{icon:"refresh"}):Object(z.jsx)(o.f,{icon:"outdated"}),Object(z.jsx)(o.a,{loading:"fetching"===n,onClick:function(){return t(R())},intent:"string"===typeof n?"success":"warning",children:e})}var Z=n(41),K=n(55),Y=n(54);function $(){var e=X((function(e){var t;return null===(t=e.forecast.data)||void 0===t?void 0:t.current}));return Object(z.jsxs)(o.b,{children:[Object(z.jsxs)("div",{className:"report-line",children:[Object(z.jsxs)("div",{children:[Object(z.jsxs)(o.d,{children:["Current Weather",Object(z.jsx)("span",{className:[c.a.TEXT_MUTED,c.a.TEXT_SMALL,c.a.UI_TEXT].join(" "),children:e?Object(z.jsxs)(z.Fragment,{children:[" as of ",u.DateTime.fromSeconds(e.time).toLocal().toLocaleString(u.DateTime.TIME_24_SIMPLE)]}):Object(z.jsx)(z.Fragment,{children:" unavailable"})})]}),Object(z.jsx)("div",{className:"overflow-container",children:Object(z.jsx)(o.k,{ellipsize:!0,children:null===e||void 0===e?void 0:e.conditions})})]}),e?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("div",{className:"spacer"}),ee(e.temperature,e.humidex,e.windChill),Object(z.jsx)("div",{className:"weather-icon",children:Object(z.jsx)("i",{className:"wi-fw "+(e.icon||"wi wi-na")})})]}):Object(z.jsx)(z.Fragment,{})]}),Object(z.jsx)(ie,{})]})}function q(){var e,t=X((function(e){var t;return null===(t=e.forecast.data)||void 0===t?void 0:t.forecasts})),n=null!==(e=null===t||void 0===t?void 0:t.map(te))&&void 0!==e?e:Object(z.jsx)("div",{className:c.a.TEXT_MUTED,children:"unavailable"});return Object(z.jsxs)(o.b,{children:[Object(z.jsx)(o.d,{children:"Forecast"}),Object(z.jsx)("table",{children:Object(z.jsx)("tbody",{children:n})})]})}function Q(){var e,t=X((function(e){var t;return null===(t=e.forecast.data)||void 0===t?void 0:t.hourlyForecasts})),n=null!==(e=null===t||void 0===t?void 0:t.map(ne))&&void 0!==e?e:Object(z.jsx)("div",{className:c.a.TEXT_MUTED,children:"unavailable"});return Object(z.jsxs)(o.b,{children:[Object(z.jsx)(o.d,{children:"Hourly Forecast"}),Object(z.jsx)("div",{className:"hourly-forecasts",children:n})]})}function ee(e,t,n){var i=t||n;return i?Object(z.jsxs)("div",{className:"temperature",children:["".concat(i.toFixed(0),"\xb0C")," ",Object(z.jsx)("span",{className:c.a.TEXT_MUTED,children:"(".concat(e.toFixed(0),"\xb0C)")})]}):Object(z.jsx)("div",{className:"temperature",children:"".concat(e.toFixed(0),"\xb0C")})}function te(e){return Object(z.jsxs)("div",{className:["report-line","forecast",e.title.endsWith("night")?"night":"day"].join(" "),children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(o.e,{children:e.title}),Object(z.jsx)(Z.a,{content:e.fullReport,position:"top",className:K.a.TOOLTIP2_INDICATOR,children:Object(z.jsx)(o.k,{ellipsize:!0,children:e.conditions})})]}),Object(z.jsx)("div",{className:"spacer"}),ee(e.temperature,e.humidex,e.windChill),Object(z.jsx)("div",{className:"weather-icon",children:Object(z.jsx)("i",{className:"wi-fw "+(e.icon||"wi wi-na")})})]},e.title)}function ne(e){var t=u.DateTime.fromSeconds(e.time,{zone:u.FixedOffsetZone.utcInstance}).toLocal(),n=t.day===u.DateTime.now().day?"today":"tomorrow";return Object(z.jsxs)("tr",{className:["report-line","forecast","hourly",n].join(" "),children:[Object(z.jsx)("td",{className:"time-title",children:Object(z.jsx)(o.e,{className:ae(e),children:re(t)})}),Object(z.jsxs)("td",{className:"temperature",children:["".concat((e.humidex||e.windChill||e.temperature).toFixed(0),"\xb0C"),e.humidex||e.windChill?Object(z.jsx)("span",{className:"temperature",children:"".concat(e.temperature.toFixed(0),"\xb0C")}):Object(z.jsx)(z.Fragment,{})]}),Object(z.jsx)("td",{children:Object(z.jsx)("i",{className:"wi-fw "+(e.icon||"wi wi-na")})}),Object(z.jsx)("td",{children:e.pop>0?e.pop.toLocaleString(void 0,{style:"percent"}):""}),Object(z.jsx)("td",{children:e.conditions.length>23?Object(z.jsx)(Z.a,{content:e.conditions,position:"top",className:K.a.TOOLTIP2_INDICATOR,children:e.conditions.slice(0,20)+"\u2026"}):e.conditions})]},e.time)}function ie(){var e=new Date;return Object(z.jsxs)("div",{className:"report-line",children:[Object(z.jsx)(o.d,{children:"Sunrise/Sunset"}),Object(z.jsx)("div",{className:"spacer"}),Object(z.jsxs)("div",{children:[Object(z.jsx)("i",{className:"wi wi-sunrise"})," ",re(u.DateTime.fromJSDate(Object(Y.getSunrise)(45.33,-75.58,e)))]}),Object(z.jsxs)("div",{children:[Object(z.jsx)("i",{className:"wi wi-sunset"})," ",re(u.DateTime.fromJSDate(Object(Y.getSunset)(45.33,-75.58,e)))]})]})}function re(e){return e.toLocal().toLocaleString(u.DateTime.TIME_24_SIMPLE)}function ae(e){return e.pop>=.5?"warning":""}n(202);var ce=function(){var e=Object(s.useModeSelector)({dark:c.a.DARK,light:"",unset:""});return Object(z.jsxs)("div",{className:e,id:"layout-root",children:[Object(z.jsx)(G,{}),Object(z.jsx)("div",{children:Object(z.jsxs)("div",{className:"card-grid",children:[Object(z.jsx)($,{}),Object(z.jsx)(Q,{}),Object(z.jsx)(q,{})]})}),Object(z.jsx)(o.c,{}),Object(z.jsx)("footer",{className:c.a.TEXT_MUTED,children:"Contains information licenced under the Data Server End-use Licence of Environment and Climate Change Canada."})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object(v.a)({reducer:{forecast:k.reducer}});n(203),n(204),n(205),n(206);oe.dispatch(R()),setInterval((function(){return oe.dispatch(R())}),36e5),a.a.render(Object(z.jsx)(i.StrictMode,{children:Object(z.jsx)(A.a,{store:oe,children:Object(z.jsx)(ce,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[207,1,2]]]);
//# sourceMappingURL=main.410d2782.chunk.js.map