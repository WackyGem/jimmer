"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9077],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,d=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(34334),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),p=n(7094),u=n(12466),m="tabList__CuJ",s="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,k=e.defaultValue,d=e.values,N=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var E=null===k?k:null!=(t=null!=k?k:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==E&&!g.some((function(e){return e.value===E})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,p.U)(),_=h.tabGroupChoices,T=h.setTabGroupChoices,y=(0,r.useState)(E),x=y[0],S=y[1],C=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var O=_[N];null!=O&&O!==x&&g.some((function(e){return e.value===O}))&&S(O)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==x&&(I(t),S(a),null!=N&&T(N,String(a)))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;n=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var l,i=C.indexOf(e.currentTarget)-1;n=null!=(l=C[i])?l:C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return C.push(e)},onKeyDown:q,onFocus:w,onClick:w},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function k(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},66557:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return k}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(65488),o=n(85162),p=["components"],u={sidebar_position:4,title:"SQL\u65e5\u5fd7"},m=void 0,s={unversionedId:"team-work/configuration/sql-log",id:"team-work/configuration/sql-log",title:"SQL\u65e5\u5fd7",description:"\u5bf9\u4e8eORM\u800c\u8a00\uff0c\u5728\u65e5\u5fd7\u4e2d\u6253\u5370\u751f\u6210\u7684SQL\u5f88\u91cd\u8981\u3002",source:"@site/docs/team-work/configuration/sql-log.mdx",sourceDirName:"team-work/configuration",slug:"/team-work/configuration/sql-log",permalink:"/jimmer/docs/team-work/configuration/sql-log",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/configuration/sql-log.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"SQL\u65e5\u5fd7"},sidebar:"tutorialSidebar",previous:{title:"\u6279\u91cf\u63a7\u5236",permalink:"/jimmer/docs/team-work/configuration/batch-size"},next:{title:"\u9ed8\u8ba4\u679a\u4e3e\u7b56\u7565",permalink:"/jimmer/docs/team-work/configuration/default-enum-strategy"}},c={},k=[{value:"\u5f00\u542fSQL\u65e5\u5fd7",id:"\u5f00\u542fsql\u65e5\u5fd7",level:2},{value:"\u683c\u5f0f\u5316SQL",id:"\u683c\u5f0f\u5316sql",level:2},{value:"\u5d4c\u5165\u5806\u6808\u4fe1\u606f",id:"\u5d4c\u5165\u5806\u6808\u4fe1\u606f",level:2}],d={toc:k};function N(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5bf9\u4e8eORM\u800c\u8a00\uff0c\u5728\u65e5\u5fd7\u4e2d\u6253\u5370\u751f\u6210\u7684SQL\u5f88\u91cd\u8981\u3002"),(0,l.kt)("h2",{id:"\u5f00\u542fsql\u65e5\u5fd7"},"\u5f00\u542fSQL\u65e5\u5fd7"),(0,l.kt)("p",null,"\u6709\u4e24\u4e2a\u65b9\u6cd5\u5f00\u542fSQL\u65e5\u5fd7\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528Spring Boot Starter\u65f6\uff0c\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u914d\u7f6e\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,l.kt)("em",{parentName:"p"},"(\u6216application.properties)")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"jimmer:\n    show-sql: true\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u5168\u5c40Bean"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic Executor executor() {\n    return Executor.log();\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun executor(): Executor =\n    Executor.log()\n")))))),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u540c\u65f6\u91c7\u7528\u4ee5\u4e0a\u4e24\u79cd\u65b9\u6cd5 ",(0,l.kt)("em",{parentName:"p"},"(\u4e0d\u63a8\u8350)"),"\uff0c\u5219\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u4f18\u5148\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5e95\u5c42API"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setExecutor(Executor.log())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))))),(0,l.kt)("p",null,"\u5b9e\u9645\u6253\u5370\u65e5\u5fd7\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"jimmer> sql: select tb_1_.ID, tb_1_.CREATED_TIME, \ntb_1_.MODIFIED_TIME, tb_1_.NAME, tb_1_.EDITION, \ntb_1_.PRICE, tb_1_.STORE_ID \nfrom BOOK tb_1_ \nwhere lower(tb_1_.NAME) like ? \norder by tb_1_.NAME asc, tb_1_.EDITION desc \nlimit ?, ?, \nvariables: [%graphql%, 0, 10], \npurpose: QUERY\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4ec5\u4ec5\u5f00\u542fSQL\u65e5\u5fd7\uff0c\u4e0a\u9762\u65e5\u5fd7\u4e0d\u4f1a\u6362\u884c\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u4e3a\u63d0\u9ad8\u672c\u6587\u6863\u7684\u53ef\u8bfb\u6027\uff0c\u4e0a\u8ff0\u65e5\u5fd7\u88ab\u4eba\u4e3a\u6362\u884c\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u60c5\u51b5\u3002")),(0,l.kt)("p",null,"\u65e5\u5fd7\u6709\u4e09\u4e2a\u90e8\u5206\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sql"),": \u672c\u6267\u884c\u7684SQL\u8bed\u53e5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"variables"),": \u548c",(0,l.kt)("inlineCode",{parentName:"p"},"sql"),"\u914d\u5957\u7684JDBC\u53c2\u6570\uff0c\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u957f\u5ea6\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"sql"),'\u4e2d"?"\u5b57\u7b26\u7684\u6570\u91cf\u76f8\u540c\u3002')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"purpose"),": SQL\u88ab\u6267\u884c\u7684\u539f\u56e0\uff0c\u662f\u4e00\u4e2a\u679a\u4e3e\u7c7b\u578b\uff0c\u6709\u4ee5\u4e0b\u53d6\u503c"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"QUERY"),": \u5f00\u53d1\u4eba\u5458\u76f4\u63a5\u6267\u884c\u7684\u67e5\u8be2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),": \u5f00\u53d1\u4eba\u5458\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"../mutation/update-statement"},"update\u8bed\u53e5"),"\u6267\u884c\u7684\u64cd\u4f5c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"DELETE"),": \u5f00\u53d1\u4eba\u5458\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"../mutation/delete-statement"},"delete\u8bed\u53e5"),"\u6267\u884c\u7684\u64cd\u4f5c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"LOAD"),": Jimmer\u81ea\u52a8\u6267\u884c\u7684\u67e5\u8be2\uff0c\u7528\u4e8e\u83b7\u53d6",(0,l.kt)("a",{parentName:"p",href:"../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u4e2d\u5173\u8054\u5c5e\u6027\u6216\u8ba1\u7b97\u5c5e\u6027\u7684\u503c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"EXPORT"),": \u7528\u6237\u5bf9\u5176\u4ed6\u5fae\u670d\u52a1\u53d1\u8d77\u67e5\u8be2\uff0c\u5176",(0,l.kt)("a",{parentName:"p",href:"../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u5305\u542b\u6307\u5411\u5f53\u524d\u670d\u52a1\u7684\u8fdc\u7a0b\u5173\u8054\uff0cJimmer\u81ea\u52a8\u5c06\u672c\u670d\u52a1\u7684\u6570\u636e\u66b4\u9732\u51fa\u53bb\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"MUTATE"),": \u5f00\u53d1\u4eba\u5458\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"../mutation/save-command"},"save\u6307\u4ee4"),"\u6307\u5b9a\u7684\u64cd\u4f5c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"EVICT"),": \u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5355\u51edJimmer\u89e6\u53d1\u5668\u7684\u4e8b\u4ef6\u4fe1\u606f\u65e0\u6cd5\u5224\u65ad\u54ea\u4e9b\u7f13\u5b58\u5e94\u8be5\u88ab\u6e05\u7406\uff0cJimmer\u4f1a\u81ea\u52a8\u6267\u884c\u4e00\u4e9b\u67e5\u8be2\u7528\u4e8e\u7cbe\u786e\u5224\u65ad\u54ea\u4e9b\u7f13\u5b58\u5e94\u8be5\u88ab\u6e05\u7406"))))),(0,l.kt)("h2",{id:"\u683c\u5f0f\u5316sql"},"\u683c\u5f0f\u5316SQL"),(0,l.kt)("p",null,"\u4e4b\u524d\u7684\u4f8b\u5b50\u4e2d\uff0cSQL\u65e5\u5fd7\u88ab\u6253\u5370\u4e3a\u4e00\u884c\uff0c",(0,l.kt)("em",{parentName:"p"},"(\u4e3a\u63d0\u9ad8\u672c\u6587\u6863\u7684\u53ef\u8bfb\u6027\uff0c\u4e0a\u4e2a\u4f8b\u5b50\u7684\u65e5\u5fd7\u88ab\u4eba\u4e3a\u6362\u884c\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u60c5\u51b5\u3002)"),"\uff0c\u53ef\u8bfb\u6027\u4e0d\u4f73\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u9700\u8981\u683c\u5f0f\u5316SQL\u3002\u6709\u4e24\u79cd\u5b9e\u73b0\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528Spring Boot Starter\u65f6"),(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,l.kt)("em",{parentName:"p"},"(\u6216application.properties)")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"jimmer:\n  show-sql: true\n  # highlight-next-line\n  pretty-sql: true\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5e95\u5c42API"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    // highlight-next-line\n    .setSqlFormatter(SqlFormatter.PRETTY)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setExecutor(Executor.log())\n    // highlight-next-line\n    setSqlFormatter(SqlFormatter.PRETTY)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))))),(0,l.kt)("p",null,"\u65e5\u5fd7\u6253\u5370\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Execute SQL===>\nPurpose: QUERY\nSQL: select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    lower(tb_1_.NAME) like ? /* %graphql% */ \u2776\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit ? /* 0 */ \u2777, ? /* 10 */ \u2778\nJDBC response status: success\nTime cost: 8ms\n<===Execute SQL\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SQL\u8bed\u53e5\u4f1a\u88ab\u81ea\u52a8\u683c\u5f0f\u5316\uff0c\u81ea\u52a8\u6362\u884c\uff0c\u81ea\u52a8\u7f29\u8fdb\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776\u2777\u2778 \u548c\u4e0a\u4e2a\u4f8b\u5b50\u4e0d\u540c\uff0c\u4e0d\u518d\u96c6\u4e2d\u6253\u5370\u6240\u6709JDBC\u53c2\u6570\uff0c\u800c\u662f\u5c06\u53c2\u6570\u4ee5\u6ce8\u91ca\u7684\u65b9\u5f0f\u690d\u5165\u539f\u59cbSQL\u4e2d\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f1a\u6253\u5370\u5176\u4ed6\u4fe1\u606f\uff0c\u6bd4\u5982SQL\u6267\u884c\u662f\u5426\u6210\u529f\u3001SQL\u6267\u884c\u603b\u8017\u65f6\u3002\u5bf9\u4e8einsert\u3001update\u3001delete\u64cd\u4f5c\uff0c\u8fd8\u4f1a\u6253\u5370\u5f71\u54cd\u884c\u6570\u3002"))),(0,l.kt)("h2",{id:"\u5d4c\u5165\u5806\u6808\u4fe1\u606f"},"\u5d4c\u5165\u5806\u6808\u4fe1\u606f"),(0,l.kt)("p",null,"\u9664\u4e86\u7f16\u5199\u4ee3\u7801\u5916\uff0c\u5f00\u53d1\u4eba\u5458\u5e38\u5e38\u9700\u8981\u6392\u9664\u95ee\u9898\u3002\u65e0\u8bba\u662f\u529f\u80fd\u9519\u8bef\u95ee\u9898\uff0c\u8fd8\u662f\u6027\u80fd\u95ee\u9898\uff0c\u90fd\u9700\u8981\u5f00\u53d1\u4eba\u5458\u6392\u67e5\u3002"),(0,l.kt)("p",null,"\u5982\u679cSQL\u65e5\u5fd7\u4ec5\u6253\u5370\u4ee5SQL\u4e3a\u6838\u5fc3\u7684JDBC\u4fe1\u606f\uff0c\u90a3\u4e48\u7528\u6237\u65e0\u6cd5\u5c06SQL\u65e5\u5fd7\u548c\u5e94\u7528\u4ee3\u7801\u5173\u8054\u8d77\u6765\uff0c\u8fd9\u4e0d\u5229\u4e8e\u7528\u6237\u6392\u67e5\u95ee\u9898\u3002"),(0,l.kt)("p",null,"Jimmer\u63d0\u4f9b\u4e86\u4e00\u4e2a\u914d\u7f6e\u9009\u9879\uff0c\u5982\u679c\u88ab\u6307\u5b9a\uff0c\u5f53jimmer\u5728\u6267\u884cSQL\u4e4b\u524d\uff0c\u5b83\u5c06\u68c0\u67e5\u5f53\u524d\u7ebf\u7a0b\u7684\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u8fd9\u4e9b\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\u5305\u542b\u592a\u591a\u4fe1\u606f\uff0c\u5305\u62ec\u4ee5jdk\u3001jdbc\u9a71\u52a8\u7a0b\u5e8f\u3001jimmer\u548cspring\u4e3a\u4ee3\u8868\u7684\u57fa\u7840\u67b6\u6784\u8c03\u7528\u5e27\uff0c\u800c\u5f00\u53d1\u4eba\u5458\u5173\u5fc3\u7684\u4e1a\u52a1\u76f8\u5173\u4fe1\u606f\u5c06\u88ab\u6df9\u6ca1\u5728\u4fe1\u606f\u7684\u6d77\u6d0b\u4e2d\u3002"),(0,l.kt)("p",null,"\u6b64\u914d\u7f6e\u7c7b\u578b\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.Collection<String>"),"\uff0c\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u6307\u5b9a\u591a\u4e2a\u5305\u6216\u7c7b\u524d\u7f00\uff0cjimmer\u5c06\u7528\u5b83\u4eec\u8fc7\u6ee4\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\uff0c\u5982\u679c\u67d0\u4e2a\u8c03\u7528\u5e27\u80fd\u901a\u8fc7\u8fc7\u6ee4\uff0cJimmer\u5c31\u4f1a\u8ba4\u4e3a\u5b83\u548c\u7528\u6237\u4e1a\u52a1\u76f8\u5173\uff0c\u4ece\u800c\u5728\u6267\u884c\u524d\u7684\u56de\u8c03\u53c2\u6570\u4e2d\u5305\u542b\u5b83\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8eSQL\u65e5\u5fd7\u6253\u5370\u800c\u8a00\uff0c\u80fd\u901a\u8fc7\u8fc7\u6ee4\u7684\u8c03\u7528\u5e27\u5c06\u4f1a\u51fa\u73b0\u5728\u6253\u5370\u7ed3\u679c\u4e2d\uff0c\u5e2e\u52a9\u7528\u6237\u6392\u67e5\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u5b9e\u73b0\u65b9\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528Spring Boot Starter\u65f6"),(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,l.kt)("em",{parentName:"p"},"(\u6216application.properties)")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"jimmer:\n  show-sql: true\n  pretty-sql: true\n  # highlight-next-line\n  executor-context-prefixes:\n    # highlight-next-line\n    - com.example.business\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5e95\u5c42API\u65f6"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    .setSqlFormatter(SqlFormatter.PRETTY)\n    // highlight-next-line\n    .setExecutorContextPrefixes(\n        Collections.singleton(\n            // highlight-next-line\n            "com.example.business"\n        )\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val sqlClient = newKSqlClient {\n    setExecutor(Executor.log())\n    setSqlFormatter(SqlFormatter.PRETTY)\n    // highlight-next-line\n    setExecutorContextPrefixes(\n        listOf(\n            // highlight-next-line\n            "com.example.business"\n        )\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n')))))),(0,l.kt)("p",null,"\u65e5\u5fd7\u6253\u5370\u7ed3\u679c\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Execute SQL===>\n--- Business related stack trace information --- \u2776\ncom.example.business.BookService.findBooks(BookService.java:55) \u2777\nPurpose: QUERY\nSQL: select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    lower(tb_1_.NAME) like ? /* %graphql% */\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit ? /* 0 */, ? /* 10 */\nJDBC response status: success\nTime cost: 9ms\n<===Execute SQL\n")),(0,l.kt)("p",null,"\u5728\u2776\u548c\u2777\u5904\uff0c\u6253\u5370\u4e86\u6267\u884cSQL\u64cd\u4f5c\u7684\u7ebf\u7a0b\u7684\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\u3002"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u5e76\u6ca1\u6709\u76f2\u76ee\u6253\u5370\u5927\u91cf\u7684\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\uff0c\u53ea\u6253\u5370\u4e86\u7528\u6237\u5173\u5fc3\u7684\u3002")))}N.isMDXComponent=!0}}]);