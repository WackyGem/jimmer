"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const i={sidebar_position:11,title:"Global Filters"},o=void 0,l={unversionedId:"query/global-filter/index",id:"query/global-filter/index",title:"Global Filters",description:"Global filters are used to automatically add filtering conditions for an entity type. Most queries for the entity type will automatically have related where conditions added.",source:"@site/docs/query/global-filter/index.md",sourceDirName:"query/global-filter",slug:"/query/global-filter/",permalink:"/jimmer/docs/query/global-filter/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/global-filter/index.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Global Filters"},sidebar:"tutorialSidebar",previous:{title:"Subqueries",permalink:"/jimmer/docs/query/sub-query"},next:{title:"Custom Filters",permalink:"/jimmer/docs/query/global-filter/user-filter"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Global filters are used to automatically add filtering conditions for an entity type. Most queries for the entity type will automatically have related ",(0,n.kt)("inlineCode",{parentName:"p"},"where")," conditions added."),(0,n.kt)("p",null,"This feature has the following application scenarios:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Multi-perspective data. Querying data requires query conditions related to user identity, even if all query parameters except user identity are the same, different users will see different data."),(0,n.kt)("p",{parentName:"li"},"Multi-perspective data has a typical case: multi-tenancy. This document uses multi-tenancy as an example to explain custom global filters defined by users.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Logical deletion"),(0,n.kt)("p",{parentName:"li"},"Logical deletion is a built-in global filter in Jimmer and does not require user definition."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For users with Hibernate background knowledge, global filters are similar to ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/static/org.hibernate/hibernate-core/5.4.13.Final/org/hibernate/annotations/Where.html"},"org.hibernate.annotations.Where"),", ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/static/org.hibernate/hibernate-core/5.4.13.Final/org/hibernate/annotations/Filter.html"},"org.hibernate.annotations.Filter")," and ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/static/org.hibernate/hibernate-core/5.4.13.Final/org/hibernate/annotations/FilterDef.html"},"org.hibernate.annotations.FilterDef"),". "),(0,n.kt)("p",{parentName:"admonition"},"The difference is that Jimmer's global filters have flexible registration methods and are very easy to be managed by IOC frameworks (such as Spring)."),(0,n.kt)("p",{parentName:"admonition"},"Thus, global filters can directly obtain parameters from the IOC framework, such as user identity information, so developers do not need to pass parameters to filters before queries.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After repeated consideration, currently global filters only affect the main table of the top-level query, and have no effect on tables obtained from join operations and tables in subqueries."),(0,n.kt)("p",{parentName:"li"},"This has no impact on ",(0,n.kt)("a",{parentName:"p",href:"../object-fetcher"},"object fetchers")," because ",(0,n.kt)("a",{parentName:"p",href:"../object-fetcher"},"object fetchers")," are not table Join operations.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Jimmer provides some simple APIs to query entities (or collections of entities) by id (or collection of ids). These APIs are exceptional and are not affected by global filters.")))))}u.isMDXComponent=!0}}]);