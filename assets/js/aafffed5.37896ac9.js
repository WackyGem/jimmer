"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5118],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(34334),i="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(83117),r=a(67294),i=a(34334),l=a(72389),o=a(67392),u=a(7094),p=a(12466),c="tabList__CuJ",m="tabItem_LNqP";function s(e){var t,a,l=e.lazy,s=e.block,d=e.defaultValue,f=e.values,k=e.groupId,b=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:N[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,u.U)(),w=h.tabGroupChoices,T=h.setTabGroupChoices,D=(0,r.useState)(y),O=D[0],j=D[1],S=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var E=w[k];null!=E&&E!==O&&v.some((function(e){return e.value===E}))&&j(E)}var q=function(e){var t=e.currentTarget,a=S.indexOf(t),n=v[a].value;n!==O&&(C(t),j(n),null!=k&&T(k,String(n)))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=S.indexOf(e.currentTarget)+1;a=null!=(n=S[r])?n:S[0];break;case"ArrowLeft":var i,l=S.indexOf(e.currentTarget)-1;a=null!=(i=S[l])?i:S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},b)},v.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return S.push(e)},onKeyDown:x,onFocus:q,onClick:q},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(N.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,l.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},29127:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=a(65488),o=a(85162),u=["components"],p={sidebar_position:1,title:"\u65b9\u8a00"},c=void 0,m={unversionedId:"team-work/configuration/dialect",id:"team-work/configuration/dialect",title:"\u65b9\u8a00",description:"\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff0c\u5bf9SQL\u7684\u652f\u6301\u5927\u76f8\u5f84\u5ead\uff0c\u56e0\u6b64Jimmer\u91c7\u7528\u65b9\u8a00\u914d\u7f6e\u6765\u9002\u914d\u4e0d\u540c\u7684\u6570\u636e\u5e93\u3002",source:"@site/docs/team-work/configuration/dialect.mdx",sourceDirName:"team-work/configuration",slug:"/team-work/configuration/dialect",permalink:"/jimmer/docs/team-work/configuration/dialect",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/configuration/dialect.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u65b9\u8a00"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u7bc7",permalink:"/jimmer/docs/team-work/configuration/"},next:{title:"Connection Manager",permalink:"/jimmer/docs/team-work/configuration/connection-manager"}},s={},d=[{value:"\u8bbe\u7f6e\u65b9\u8a00",id:"\u8bbe\u7f6e\u65b9\u8a00",level:2},{value:"\u65b9\u8a00\u5217\u8868",id:"\u65b9\u8a00\u5217\u8868",level:2}],f={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e0d\u540c\u7684\u6570\u636e\u5e93\uff0c\u5bf9SQL\u7684\u652f\u6301\u5927\u76f8\u5f84\u5ead\uff0c\u56e0\u6b64Jimmer\u91c7\u7528\u65b9\u8a00\u914d\u7f6e\u6765\u9002\u914d\u4e0d\u540c\u7684\u6570\u636e\u5e93\u3002"),(0,i.kt)("h2",{id:"\u8bbe\u7f6e\u65b9\u8a00"},"\u8bbe\u7f6e\u65b9\u8a00"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter\uff0c\u6709\u4e24\u79cd\u7528\u6cd5"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"jimmer:\n  dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63d0\u4f9b\u5168\u5c40\u7684\u65b9\u8a00Bean"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic Dialect dialect() {\n    return new MySqlDialect();\n}\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun dialect(): Dialect =\n    MySqlDialect()\n")))))),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u540c\u65f6\u91c7\u7528\u4ee5\u4e0a\u4e24\u79cd\u65b9\u6cd5 ",(0,i.kt)("em",{parentName:"p"},"(\u4e0d\u63a8\u8350)"),"\uff0c\u5219\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u4f18\u5148"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(new MySqlDialect())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setDialect(MySqlDialect())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))))),(0,i.kt)("h2",{id:"\u65b9\u8a00\u5217\u8868"},"\u65b9\u8a00\u5217\u8868"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.DefaultDialect"),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u662f\u672a\u6307\u5b9a\u65b9\u8a00\u914d\u7f6e\u65f6\uff0cJimmer\u6240\u91c7\u7528\u7684\u9ed8\u8ba4\u65b9\u8a00\uff0c\u56e0\u6b64\uff0c\u65e0\u9700\u663e\u5f0f\u6307\u5b9a\u3002"),(0,i.kt)("admonition",{parentName:"li",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u914d\u7f6e\u4ec5\u80fd\u7528\u4e8e\u5b66\u4e60\u6700\u521d\u9636\u6bb5\u7684\u7b80\u5355demo\uff0c\u7edd\u4e0d\u80fd\u7528\u4e8e\u5b9e\u9645\u9879\u76ee\u3002\u4ee5\u4e0b\u60c5\u51b5\u90fd\u4f1a\u5bfc\u81f4\u5f02\u5e38:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4ee3\u7801\u4e2d\u5bf9Jimmer\u7684\u64cd\u4f5c\u4f1a\u5bfc\u81f4\u751f\u6210\u4f9d\u8d56\u6027\u7279\u5b9a\u6570\u636e\u5e93\u4ea7\u54c1\u7684SQL\uff0c\u800c\u975e\u5b8c\u7f8e\u7684\u8de8\u6570\u636e\u5e93SQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5c06",(0,i.kt)("a",{parentName:"p",href:"../mutation/trigger"},"\u89e6\u53d1\u5668"),"\u7684\u7c7b\u578b\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"TRANSACTION_ONLY"),"\u5e76\u4f7f\u7528\u7f13\u5b58\u65f6\uff0cJimmer\u542f\u52a8\u65f6\u4f1a\u81ea\u52a8\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"JIMMER_TRANS_CACHE_OPERATOR"),"\u8868\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultDialect"),"\u5e76\u4e0d\u652f\u6301\u6b64\u64cd\u4f5c\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"../cache/consistency"},"\u7f13\u5b58\u4e00\u81f4\u6027")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.H2Dialect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.MySqlDialect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.PostgresDialect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.OracleDialect")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"org.babyfish.jimmer.sql.dialect.TiDBDialect"),(0,i.kt)("p",{parentName:"li"},"\u56e0\u4e3aTiDB\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u6570\u636e\u5e93\uff0c\u65e0\u6cd5\u652f\u6301\u5916\u952e\u7ea6\u675f\uff0c\u56e0\u6b64\uff0c\u771f\u5916\u952e\u4e0d\u88ab\u6b64\u65b9\u8a00\u652f\u6301\u3002\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"../mapping/base/foreignkey"},"\u771f\u5047\u5916\u952e")),(0,i.kt)("p",{parentName:"li"},"\u9664\u6b64\u4e4b\u5916\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"TiDBDialect"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlDialect"),"\u6ca1\u6709\u4efb\u4f55\u5dee\u5f02\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u81f3\u4e8e\u5176\u4ed6\u6570\u636e\u5e93\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u6269\u5c55\u65b9\u8a00\u3002\u4f46\u9700\u8981\u6570\u636e\u5e93\u652f\u6301\u591a\u5217",(0,i.kt)("inlineCode",{parentName:"p"},"in"),"\u8868\u8fbe\u5f0f\uff0c\u6bd4\u5982"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"where (a, b) in ((3, 4), (8, 13))\n")),(0,i.kt)("p",{parentName:"li"},"\u6216"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"where (a, b) in (select x, y from ...)\n")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u76ee\u524d\uff0c\u591a\u5217",(0,i.kt)("inlineCode",{parentName:"p"},"in"),"\u8868\u8fbe\u5f0f\u662fJimmer\u9ad8\u5ea6\u4f9d\u8d56\u7684\u7279\u6027\uff0c\u800cMicrosoft Sql Server\u6682\u4e0d\u652f\u6301\u6b64\u7279\u6027\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u76ee\u524d\u6682\u65f6\u4e0d\u652f\u6301Microsoft Sql Server\u3002")))))}k.isMDXComponent=!0}}]);