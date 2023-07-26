"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3410],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(34334),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),o=n(34334),i=n(72389),l=n(67392),u=n(7094),c=n(12466),s="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,n,i=e.lazy,f=e.block,m=e.defaultValue,d=e.values,b=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),S=w.tabGroupChoices,O=w.setTabGroupChoices,j=(0,a.useState)(k),x=j[0],E=j[1],N=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=S[b];null!=C&&C!==x&&g.some((function(e){return e.value===C}))&&E(C)}var D=function(e){var t=e.currentTarget,n=N.indexOf(t),r=g[n].value;r!==x&&(T(t),E(r),null!=b&&O(b,String(r)))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=N.indexOf(e.currentTarget)+1;n=null!=(r=N[a])?r:N[0];break;case"ArrowLeft":var o,i=N.indexOf(e.currentTarget)-1;n=null!=(o=N[i])?o:N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},v)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return N.push(e)},onKeyDown:z,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},29168:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(65488),l=n(85162),u=["components"],c={sidebar_position:3,title:"\u6279\u91cf\u63a7\u5236"},s=void 0,p={unversionedId:"team-work/configuration/batch-size",id:"team-work/configuration/batch-size",title:"\u6279\u91cf\u63a7\u5236",description:"SqlClient\u652f\u6301\u4e24\u4e2a\u914d\u7f6e\uff1aDefaultBatchSize\u548cDefaultListBatchSize\u3002\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u503c\u4e3a128\u548c16\u3002",source:"@site/docs/team-work/configuration/batch-size.mdx",sourceDirName:"team-work/configuration",slug:"/team-work/configuration/batch-size",permalink:"/jimmer/docs/team-work/configuration/batch-size",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/configuration/batch-size.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u6279\u91cf\u63a7\u5236"},sidebar:"tutorialSidebar",previous:{title:"Connection Manager",permalink:"/jimmer/docs/team-work/configuration/connection-manager"},next:{title:"SQL\u65e5\u5fd7",permalink:"/jimmer/docs/team-work/configuration/sql-log"}},f={},m=[{value:"\u4f7f\u7528Spring Boot Starter",id:"\u4f7f\u7528spring-boot-starter",level:2},{value:"\u4e0d\u4f7f\u7528Spring Boot Starter",id:"\u4e0d\u4f7f\u7528spring-boot-starter",level:2}],d={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SqlClient\u652f\u6301\u4e24\u4e2a\u914d\u7f6e\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultBatchSize"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultListBatchSize"),"\u3002\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u9ed8\u8ba4\u503c\u4e3a128\u548c16\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e24\u4e2a\u914d\u7f6e\u4e3a",(0,o.kt)("a",{parentName:"p",href:"../query/object-fetcher/"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u4e2d\u7684batchSize\u63d0\u4f9b\u9ed8\u8ba4\u503c\uff0c\n\u5176\u4f5c\u7528\u5728",(0,o.kt)("a",{parentName:"p",href:"../query/object-fetcher/"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u505a\u4e86\u8be6\u7ec6\u63cf\u8ff0\uff0c\u672c\u6587\u53ea\u4ea4\u4ee3\u914d\u7f6e\uff0c\u4e0d\u91cd\u590d\u9610\u8ff0\u5176\u4f5c\u7528\u3002"),(0,o.kt)("p",null,"\u6709\u4e24\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u8bbe\u7f6e\u8fd9\u4e24\u4e2a\u914d\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528Spring Boot Starter"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u4f7f\u7528Spring Boot Starter")),(0,o.kt)("h2",{id:"\u4f7f\u7528spring-boot-starter"},"\u4f7f\u7528Spring Boot Starter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jimmer:\n   default-batch-size: 256\n   default-list-batch-size: 32\n")),(0,o.kt)("h2",{id:"\u4e0d\u4f7f\u7528spring-boot-starter"},"\u4e0d\u4f7f\u7528Spring Boot Starter"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic JSqlClient sqlClient() {\n    return JSqlClient\n        .newBuilder()\n        .setConnectionManager(...)\n        .setDialect(new H2Dialect())\n        .setExecutor(...)\n        .addScalarProvider(...)\n        // highlight-next-line\n        .setDefaultBatchSize(256)\n        // highlight-next-line\n        .setDefaultListBatchSize(32)\n        .build();\n}\n"))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun sqlClient(): KSqlClient = \n    newKSqlClient {\n        setConnectionManager { ... }\n        setDialect(H2Dialect())\n        setExecutor { ... }\n        addScalarProvider { ... }\n        // highlight-next-line\n        setDefaultBatchSize(256)\n        // highlight-next-line\n        setDefaultListBatchSize(32)\n    }\n")))))}b.isMDXComponent=!0}}]);