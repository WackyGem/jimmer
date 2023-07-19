"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9411],{96540:function(t,e,n){var r=n(66344);e.Z=void 0;var o=r(n(64938)),i=n(85893),a=(0,o.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=a},41733:function(t,e,n){var r=n(66344);e.Z=void 0;var o=r(n(64938)),i=n(85893),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=a},79172:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(83117),o=n(80102),i=n(67294);function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}var u=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r},c=n(30561),s=n(86523),f=n(39707),l=n(11938),p=n(85893);const d=["className","component"];var v=n(37078);const m=function(t={}){const{defaultTheme:e,defaultClassName:n="MuiBox-root",generateClassName:a,styleFunctionSx:v=s.Z}=t,m=(0,c.ZP)("div")(v);return i.forwardRef((function(t,i){const c=(0,l.Z)(e),s=(0,f.Z)(t),{className:v,component:h="div"}=s,y=(0,o.Z)(s,d);return(0,p.jsx)(m,(0,r.Z)({as:h,ref:i,className:u(v,a?a(n):n),theme:c},y))}))}({defaultTheme:(0,n(68239).Z)(),defaultClassName:"MuiBox-root",generateClassName:v.Z.generate});var h=m},86886:function(t,e,n){n.d(e,{ZP:function(){return Z}});var r=n(80102),o=n(83117),i=n(67294),a=n(93680),u=n(95408),c=n(39707),s=n(94780),f=n(11496),l=n(27623),p=n(2734);var d=i.createContext(),v=n(34867);function m(t){return(0,v.Z)("MuiGrid",t)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var y=(0,n(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((t=>`spacing-xs-${t}`)),...["column-reverse","column","row-reverse","row"].map((t=>`direction-xs-${t}`)),...["nowrap","wrap-reverse","wrap"].map((t=>`wrap-xs-${t}`)),...h.map((t=>`grid-xs-${t}`)),...h.map((t=>`grid-sm-${t}`)),...h.map((t=>`grid-md-${t}`)),...h.map((t=>`grid-lg-${t}`)),...h.map((t=>`grid-xl-${t}`))]),b=n(85893);const g=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function w(t){const e=parseFloat(t);return`${e}${String(t).replace(String(e),"")||"px"}`}const P=(0,f.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:r,direction:o,item:i,spacing:a,wrap:u,zeroMinWidth:c,breakpoints:s}=n;let f=[];r&&(f=function(t,e,n={}){if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[n[`spacing-xs-${String(t)}`]];const r=[];return e.forEach((e=>{const o=t[e];Number(o)>0&&r.push(n[`spacing-${e}-${String(o)}`])})),r}(a,s,e));const l=[];return s.forEach((t=>{const r=n[t];r&&l.push(e[`grid-${t}-${String(r)}`])})),[e.root,r&&e.container,i&&e.item,c&&e.zeroMinWidth,...f,"row"!==o&&e[`direction-xs-${String(o)}`],"wrap"!==u&&e[`wrap-xs-${String(u)}`],...l]}})((({ownerState:t})=>(0,o.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})),(function({theme:t,ownerState:e}){const n=(0,u.P$)({values:e.direction,breakpoints:t.breakpoints.values});return(0,u.k9)({theme:t},n,(t=>{const e={flexDirection:t};return 0===t.indexOf("column")&&(e[`& > .${y.item}`]={maxWidth:"none"}),e}))}),(function({theme:t,ownerState:e}){const{container:n,rowSpacing:r}=e;let o={};if(n&&0!==r){const e=(0,u.P$)({values:r,breakpoints:t.breakpoints.values});o=(0,u.k9)({theme:t},e,(e=>{const n=t.spacing(e);return"0px"!==n?{marginTop:`-${w(n)}`,[`& > .${y.item}`]:{paddingTop:w(n)}}:{}}))}return o}),(function({theme:t,ownerState:e}){const{container:n,columnSpacing:r}=e;let o={};if(n&&0!==r){const e=(0,u.P$)({values:r,breakpoints:t.breakpoints.values});o=(0,u.k9)({theme:t},e,(e=>{const n=t.spacing(e);return"0px"!==n?{width:`calc(100% + ${w(n)})`,marginLeft:`-${w(n)}`,[`& > .${y.item}`]:{paddingLeft:w(n)}}:{}}))}return o}),(function({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce(((r,i)=>{let a={};if(e[i]&&(n=e[i]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,u.P$)({values:e.columns,breakpoints:t.breakpoints.values}),s="object"==typeof c?c[i]:c;if(null==s)return r;const f=Math.round(n/s*1e8)/1e6+"%";let l={};if(e.container&&e.item&&0!==e.columnSpacing){const n=t.spacing(e.columnSpacing);if("0px"!==n){const t=`calc(${f} + ${w(n)})`;l={flexBasis:t,maxWidth:t}}}a=(0,o.Z)({flexBasis:f,flexGrow:0,maxWidth:f},l)}return 0===t.breakpoints.values[i]?Object.assign(r,a):r[t.breakpoints.up(i)]=a,r}),{})}));const x=t=>{const{classes:e,container:n,direction:r,item:o,spacing:i,wrap:a,zeroMinWidth:u,breakpoints:c}=t;let f=[];n&&(f=function(t,e){if(!t||t<=0)return[];if("string"==typeof t&&!Number.isNaN(Number(t))||"number"==typeof t)return[`spacing-xs-${String(t)}`];const n=[];return e.forEach((e=>{const r=t[e];if(Number(r)>0){const t=`spacing-${e}-${String(r)}`;n.push(t)}})),n}(i,c));const l=[];c.forEach((e=>{const n=t[e];n&&l.push(`grid-${e}-${String(n)}`)}));const p={root:["root",n&&"container",o&&"item",u&&"zeroMinWidth",...f,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...l]};return(0,s.Z)(p,m,e)},S=i.forwardRef((function(t,e){const n=(0,l.Z)({props:t,name:"MuiGrid"}),{breakpoints:u}=(0,p.Z)(),s=(0,c.Z)(n),{className:f,columns:v,columnSpacing:m,component:h="div",container:y=!1,direction:w="row",item:S=!1,rowSpacing:Z,spacing:O=0,wrap:$="wrap",zeroMinWidth:j=!1}=s,k=(0,r.Z)(s,g),M=Z||O,N=m||O,A=i.useContext(d),W=y?v||12:A,z={},F=(0,o.Z)({},k);u.keys.forEach((t=>{null!=k[t]&&(z[t]=k[t],delete F[t])}));const D=(0,o.Z)({},s,{columns:W,container:y,direction:w,item:S,rowSpacing:M,columnSpacing:N,wrap:$,zeroMinWidth:j,spacing:O},z,{breakpoints:u.keys}),R=x(D);return(0,b.jsx)(d.Provider,{value:W,children:(0,b.jsx)(P,(0,o.Z)({ownerState:D,className:(0,a.Z)(R.root,f),as:h,ref:e},F))})}));var Z=S},72882:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(83117),o=n(80102),i=n(67294),a=n(93680),u=n(94780),c=n(27623),s=n(11496),f=n(34867);function l(t){return(0,f.Z)("MuiTableContainer",t)}(0,n(1588).Z)("MuiTableContainer",["root"]);var p=n(85893);const d=["className","component"],v=(0,s.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,e)=>e.root})({width:"100%",overflowX:"auto"});var m=i.forwardRef((function(t,e){const n=(0,c.Z)({props:t,name:"MuiTableContainer"}),{className:i,component:s="div"}=n,f=(0,o.Z)(n,d),m=(0,r.Z)({},n,{component:s}),h=(t=>{const{classes:e}=t;return(0,u.Z)({root:["root"]},l,e)})(m);return(0,p.jsx)(v,(0,r.Z)({ref:e,as:s,className:(0,a.Z)(h.root,i),ownerState:m},f))}))},24661:function(t,e,n){n.d(e,{Z:function(){return b}});var r=n(83117),o=n(80102),i=n(67294),a=n(93680),u=n(94780),c=n(44063),s=n(27623),f=n(11496),l=n(34867);function p(t){return(0,l.Z)("MuiTableFooter",t)}(0,n(1588).Z)("MuiTableFooter",["root"]);var d=n(85893);const v=["className","component"],m=(0,f.ZP)("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"table-footer-group"}),h={variant:"footer"},y="tfoot";var b=i.forwardRef((function(t,e){const n=(0,s.Z)({props:t,name:"MuiTableFooter"}),{className:i,component:f=y}=n,l=(0,o.Z)(n,v),b=(0,r.Z)({},n,{component:f}),g=(t=>{const{classes:e}=t;return(0,u.Z)({root:["root"]},p,e)})(b);return(0,d.jsx)(c.Z.Provider,{value:h,children:(0,d.jsx)(m,(0,r.Z)({as:f,className:(0,a.Z)(g.root,i),ref:e,role:f===y?null:"rowgroup",ownerState:b},l))})}))},59457:function(t,e,n){function r(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[H]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===U}(t)||Array.isArray(t)||!!t[K]||!!t.constructor[K]||p(t)||d(t))}function a(t,e,n){void 0===n&&(n=!1),0===u(t)?(n?Object.keys:V)(t).forEach((function(r){n&&"symbol"==typeof r||e(r,t[r],t)})):t.forEach((function(n,r){return e(r,n,t)}))}function u(t){var e=t[H];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:p(t)?2:d(t)?3:0}function c(t,e){return 2===u(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function s(t,e){return 2===u(t)?t.get(e):t[e]}function f(t,e,n){var r=u(t);2===r?t.set(e,n):3===r?(t.delete(e),t.add(n)):t[e]=n}function l(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function p(t){return _&&t instanceof Map}function d(t){return G&&t instanceof Set}function v(t){return t.o||t.t}function m(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=L(t);delete e[H];for(var n=V(e),r=0;r<n.length;r++){var o=n[r],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function h(t,e){return void 0===e&&(e=!1),b(t)||o(t)||!i(t)||(u(t)>1&&(t.set=t.add=t.clear=t.delete=y),Object.freeze(t),e&&a(t,(function(t,e){return h(e,!0)}),!0)),t}function y(){r(2)}function b(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function g(t){var e=X[t];return e||r(18,t),e}function w(){return E}function P(t,e){e&&(g("Patches"),t.u=[],t.s=[],t.v=e)}function x(t){S(t),t.p.forEach(O),t.p=null}function S(t){t===E&&(E=t.l)}function Z(t){return E={p:[],l:E,h:t,m:!0,_:0}}function O(t){var e=t[H];0===e.i||1===e.i?e.j():e.O=!0}function $(t,e){e._=e.p.length;var n=e.p[0],o=void 0!==t&&t!==n;return e.h.g||g("ES5").S(e,t,o),o?(n[H].P&&(x(e),r(4)),i(t)&&(t=j(e,t),e.l||M(e,t)),e.u&&g("Patches").M(n[H].t,t,e.u,e.s)):t=j(e,n,[]),x(e),e.u&&e.v(e.u,e.s),t!==B?t:void 0}function j(t,e,n){if(b(e))return e;var r=e[H];if(!r)return a(e,(function(o,i){return k(t,r,e,o,i,n)}),!0),e;if(r.A!==t)return e;if(!r.P)return M(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=m(r.k):r.o;a(3===r.i?new Set(o):o,(function(e,i){return k(t,r,o,e,i,n)})),M(t,o,!1),n&&t.u&&g("Patches").R(r,n,t.u,t.s)}return r.o}function k(t,e,n,r,a,u){if(o(a)){var s=j(t,a,u&&e&&3!==e.i&&!c(e.D,r)?u.concat(r):void 0);if(f(n,r,s),!o(s))return;t.m=!1}if(i(a)&&!b(a)){if(!t.h.F&&t._<1)return;j(t,a),e&&e.A.l||M(t,a)}}function M(t,e,n){void 0===n&&(n=!1),t.h.F&&t.m&&h(e,n)}function N(t,e){var n=t[H];return(n?v(n):t)[e]}function A(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function W(t){t.P||(t.P=!0,t.l&&W(t.l))}function z(t){t.o||(t.o=m(t.t))}function F(t,e,n){var r=p(e)?g("MapSet").N(e,n):d(e)?g("MapSet").T(e,n):t.g?function(t,e){var n=Array.isArray(t),r={i:n?1:0,A:e?e.A:w(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=r,i=J;n&&(o=[r],i=q);var a=Proxy.revocable(o,i),u=a.revoke,c=a.proxy;return r.k=c,r.j=u,c}(e,n):g("ES5").J(e,n);return(n?n.A:w()).p.push(r),r}function D(t){return o(t)||r(22,t),function t(e){if(!i(e))return e;var n,r=e[H],o=u(e);if(r){if(!r.P&&(r.i<4||!g("ES5").K(r)))return r.t;r.I=!0,n=R(e,o),r.I=!1}else n=R(e,o);return a(n,(function(e,o){r&&s(r.t,e)===o||f(n,e,t(o))})),3===o?new Set(n):n}(t)}function R(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return m(t)}n.d(e,{x:function(){return nt}});var C,E,T="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),_="undefined"!=typeof Map,G="undefined"!=typeof Set,I="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=T?Symbol.for("immer-nothing"):((C={})["immer-nothing"]=!0,C),K=T?Symbol.for("immer-draftable"):"__$immer_draftable",H=T?Symbol.for("immer-state"):"__$immer_state",U=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),V="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,L=Object.getOwnPropertyDescriptors||function(t){var e={};return V(t).forEach((function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)})),e},X={},J={get:function(t,e){if(e===H)return t;var n=v(t);if(!c(n,e))return function(t,e,n){var r,o=A(e,n);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(t.k):void 0}(t,n,e);var r=n[e];return t.I||!i(r)?r:r===N(t.t,e)?(z(t),t.o[e]=F(t.A.h,r,t)):r},has:function(t,e){return e in v(t)},ownKeys:function(t){return Reflect.ownKeys(v(t))},set:function(t,e,n){var r=A(v(t),e);if(null==r?void 0:r.set)return r.set.call(t.k,n),!0;if(!t.P){var o=N(v(t),e),i=null==o?void 0:o[H];if(i&&i.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(l(n,o)&&(void 0!==n||c(t.t,e)))return!0;z(t),W(t)}return t.o[e]===n&&"number"!=typeof n&&(void 0!==n||e in t.o)||(t.o[e]=n,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==N(t.t,e)||e in t.t?(t.D[e]=!1,z(t),W(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=v(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:r.enumerable,value:n[e]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){r(12)}},q={};a(J,(function(t,e){q[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),q.deleteProperty=function(t,e){return q.set.call(this,t,e,void 0)},q.set=function(t,e,n){return J.set.call(this,t[0],e,n,t[0])};var Q=function(){function t(t){var e=this;this.g=I,this.F=!0,this.produce=function(t,n,o){if("function"==typeof t&&"function"!=typeof n){var a=n;n=t;var u=e;return function(t){var e=this;void 0===t&&(t=a);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return u.produce(t,(function(t){var r;return(r=n).call.apply(r,[e,t].concat(o))}))}}var c;if("function"!=typeof n&&r(6),void 0!==o&&"function"!=typeof o&&r(7),i(t)){var s=Z(e),f=F(e,t,void 0),l=!0;try{c=n(f),l=!1}finally{l?x(s):S(s)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return P(s,o),$(t,s)}),(function(t){throw x(s),t})):(P(s,o),$(c,s))}if(!t||"object"!=typeof t){if(void 0===(c=n(t))&&(c=t),c===B&&(c=void 0),e.F&&h(c,!0),o){var p=[],d=[];g("Patches").M(t,c,p,d),o(p,d)}return c}r(21,t)},this.produceWithPatches=function(t,n){if("function"==typeof t)return function(n){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.produceWithPatches(n,(function(e){return t.apply(void 0,[e].concat(o))}))};var r,o,i=e.produce(t,n,(function(t,e){r=t,o=e}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(t){return[t,r,o]})):[i,r,o]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||r(8),o(t)&&(t=D(t));var e=Z(this),n=F(this,t,void 0);return n[H].C=!0,S(e),n},e.finishDraft=function(t,e){var n=(t&&t[H]).A;return P(n,e),$(void 0,n)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!I&&r(20),this.g=t},e.applyPatches=function(t,e){var n;for(n=e.length-1;n>=0;n--){var r=e[n];if(0===r.path.length&&"replace"===r.op){t=r.value;break}}n>-1&&(e=e.slice(n+1));var i=g("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e)}))},t}(),Y=new Q,tt=Y.produce,et=(Y.produceWithPatches.bind(Y),Y.setAutoFreeze.bind(Y),Y.setUseProxies.bind(Y),Y.applyPatches.bind(Y),Y.createDraft.bind(Y),Y.finishDraft.bind(Y),n(67294));function nt(t){var e=(0,et.useState)((function(){return h("function"==typeof t?t():t,!0)})),n=e[1];return[e[0],(0,et.useCallback)((function(t){n("function"==typeof t?tt(t):h(t))}),[])]}}}]);