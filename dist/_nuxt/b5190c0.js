(window.webpackJsonp=window.webpackJsonp||[]).push([[39,12],{697:function(e,t,n){"use strict";n(7),n(8),n(15),n(16);var r=n(1),o=(n(4),n(25),n(10),n(28),n(66),n(402),n(38),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(414),n(415),n(43),n(36),n(9),n(82),n(401),n(2)),c=n(68),l=n(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=["sm","md","lg","xl"],y=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),j=O.reduce((function(e,t){return e["offset"+Object(l.x)(t)]={type:[String,Number],default:null},e}),{}),h=O.reduce((function(e,t){return e["order"+Object(l.x)(t)]={type:[String,Number],default:null},e}),{}),v={col:Object.keys(y),offset:Object.keys(j),order:Object.keys(h)};function w(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var m=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in n)l+=String(n[f]);var d=m.get(l);return d||function(){var e,t;for(t in d=[],v)v[t].forEach((function(e){var r=n[e],o=w(t,e,r);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!n.cols},Object(r.a)(e,"col-".concat(n.cols),n.cols),Object(r.a)(e,"offset-".concat(n.offset),n.offset),Object(r.a)(e,"order-".concat(n.order),n.order),Object(r.a)(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),m.set(l,d)}(),e(n.tag,Object(c.a)(data,{class:d}),o)}})},698:function(e,t,n){"use strict";n(7),n(8),n(15),n(16);var r=n(1),o=(n(4),n(36),n(62),n(30),n(10),n(28),n(66),n(402),n(38),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(414),n(415),n(43),n(9),n(401),n(2)),c=n(68),l=n(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=["sm","md","lg","xl"],y=["start","end","center"];function j(e,t){return O.reduce((function(n,r){return n[e+Object(l.x)(r)]=t(),n}),{})}var h=function(e){return[].concat(y,["baseline","stretch"]).includes(e)},v=j("align",(function(){return{type:String,default:null,validator:h}})),w=function(e){return[].concat(y,["space-between","space-around"]).includes(e)},m=j("justify",(function(){return{type:String,default:null,validator:w}})),S=function(e){return[].concat(y,["space-between","space-around","stretch"]).includes(e)},P=j("alignContent",(function(){return{type:String,default:null,validator:S}})),D={align:Object.keys(v),justify:Object.keys(m),alignContent:Object.keys(P)},M={align:"align",justify:"justify",alignContent:"align-content"};function _(e,t,n){var r=M[e];if(null!=n){if(t){var o=t.replace(e,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;t.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},v),{},{justify:{type:String,default:null,validator:w}},m),{},{alignContent:{type:String,default:null,validator:S}},P),render:function(e,t){var n=t.props,data=t.data,o=t.children,l="";for(var f in n)l+=String(n[f]);var d=k.get(l);return d||function(){var e,t;for(t in d=[],D)D[t].forEach((function(e){var r=n[e],o=_(t,e,r);o&&d.push(o)}));d.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(e,"align-".concat(n.align),n.align),Object(r.a)(e,"justify-".concat(n.justify),n.justify),Object(r.a)(e,"align-content-".concat(n.alignContent),n.alignContent),e)),k.set(l,d)}(),e(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},734:function(e,t,n){"use strict";t.fromDate=function(e){return e.getTime()/864e5+2440587.5},t.toDate=function(e){return new Date(864e5*(e-2440587.5))}},818:function(e,t,n){"use strict";const r=n(734),o=282.596403,c=.016718,l=.0549,f=29.53058868;function d(e){return Math.PI/180*e}function O(e){return Math.sin(d(e))}function y(e){return Math.cos(d(e))}function j(e,t){const n=(e- -22089456e5)/864e5/36525;return 2415020.75933+f*t+(1178e-7-155e-9*n)*n*n+33e-5*O(166.56+(132.87-.009173*n)*n)}function h(e,t){const n=1/1236.85*(e+=.25*(t&=3));let o=2415020.75933+f*e+(1178e-7-155e-9*n)*n*n+33e-5*O(166.56+(132.87-.009173*n)*n);const c=359.2242+29.10535608*e-(333e-7-347e-8*n)*n*n,l=306.0253+385.81691806*e+(.0107306+1236e-8*n)*n*n,d=21.2964+390.67050646*e-(.0016528-239e-8*n)*n*n;switch(t){case 0:case 2:o+=(.1734-393e-6*n)*O(c)+.0021*O(2*c)-.4068*O(l)+.0161*O(2*l)-4e-4*O(3*l)+.0104*O(2*d)-.0051*O(c+l)-.0074*O(c-l)+4e-4*O(2*d+c)-4e-4*O(2*d-c)-6e-4*O(2*d+l)+.001*O(2*d-l)+5e-4*O(c+2*l);break;case 1:case 3:o+=(.1721-4e-4*n)*O(c)+.0021*O(2*c)-.628*O(l)+.0089*O(2*l)-4e-4*O(3*l)+.0079*O(2*d)-.0119*O(c+l)-.0047*O(c-l)+3e-4*O(2*d+c)-4e-4*O(2*d-c)-6e-4*O(2*d+l)+.0021*O(2*d-l)+3e-4*O(c+2*l)+4e-4*O(c-2*l)-3e-4*O(2*c+l);o+=(t<2?1:-1)*(.0028-4e-4*y(c)+3e-4*y(l))}return r.toDate(o)}t.PHASE_NEW=0,t.PHASE_FIRST=1,t.PHASE_FULL=2,t.PHASE_LAST=3,t.phase=function(e){e||(e=new Date);const t=(e=r.fromDate(e))-2444238.5,n=360/365.2422*t-3.7628629999999816,j=2*(h=Math.atan(Math.sqrt(1.016718/.983282)*Math.tan(.5*function(e,t){let n=e=d(e);for(;;){const r=n-t*Math.sin(n)-e;if(n-=r/(1-t*Math.cos(n)),Math.abs(r)<=1e-6)break}return n}(n,c))),180/Math.PI*h);var h;const v=o+j,w=(1+c*y(j))/.999720508476,m=64.975464+13.1763966*t,S=m-.1114041*t-349.383063,P=1.2739*O(2*(m-v)-S),D=.1858*O(n),M=S+P-D-.37*O(n),_=6.2886*O(M),k=m+P+_-D+.214*O(2*M),E=(a=k-v+.6583*O(2*(k-v)))-360*Math.floor(a/360);var a;const C=383242.41154199/(1+l*y(M+_));return{phase:1/360*E,illuminated:.5*(1-y(E)),age:f/360*E,distance:C,angular_diameter:199158.1581/C,sun_distance:149585e3/w,sun_angular_diameter:.533128*w}},t.phase_hunt=function(e){e||(e=new Date);let t=new Date(e.getTime()-3888e6),n=Math.floor(12.3685*(t.getFullYear()+1/12*t.getMonth()-1900)),o=j(t.getTime(),n);e=r.fromDate(e),t=o+f;let c=n+1,l=j(t,c);for(;o>e||e>=l;)t+=f,n++,c++,o=l,l=j(t,c);return{new_date:h(n,0),q1_date:h(n,1),full_date:h(n,2),q3_date:h(n,3),nextnew_date:h(c,0)}},t.phase_range=function(e,t,n){let r;e=e.getTime(),t=t.getTime();{const t=new Date(e-3888e6);r=Math.floor(12.3685*(t.getFullYear()+1/12*t.getMonth()-1900))}let o=h(r,n);for(;o.getTime()<e;)r++,o=h(r,n);const c=[];for(;o.getTime()<=t;)c.push(o),r++,o=h(r,n);return c}}}]);