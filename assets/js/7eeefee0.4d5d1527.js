"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2292],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=m(t),s=r,g=d["".concat(o,".").concat(s)]||d[s]||c[s]||l;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),r=t(34334),l="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(83117),r=t(67294),l=t(34334),i=t(72389),u=t(67392),o=t(7094),m=t(12466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t,i=e.lazy,d=e.block,s=e.defaultValue,g=e.values,k=e.groupId,v=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,u.l)(f,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var E=null===s?s:null!=(n=null!=s?s:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:y[0].props.value;if(null!==E&&!f.some((function(e){return e.value===E})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.U)(),N=h.tabGroupChoices,T=h.setTabGroupChoices,x=(0,r.useState)(E),j=x[0],I=x[1],O=[],w=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var A=N[k];null!=A&&A!==j&&f.some((function(e){return e.value===A}))&&I(A)}var L=function(e){var n=e.currentTarget,t=O.indexOf(n),a=f[t].value;a!==j&&(w(n),I(a),null!=k&&T(k,String(a)))},M=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;t=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var l,i=O.indexOf(e.currentTarget)-1;t=null!=(l=O[i])?l:O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},f.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return O.push(e)},onKeyDown:M,onFocus:L,onClick:L},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function s(e){var n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},13934:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return s}});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),i=t(65488),u=t(85162),o=["components"],m={sidebar_position:6,title:"Enum\u6620\u5c04"},p=void 0,c={unversionedId:"team-work/mapping/advanced/enum",id:"team-work/mapping/advanced/enum",title:"Enum\u6620\u5c04",description:"Jimmer\u5904\u7406\u679a\u4e3e\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a",source:"@site/docs/team-work/mapping/advanced/enum.mdx",sourceDirName:"team-work/mapping/advanced",slug:"/team-work/mapping/advanced/enum",permalink:"/jimmer/docs/team-work/mapping/advanced/enum",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/mapping/advanced/enum.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Enum\u6620\u5c04"},sidebar:"tutorialSidebar",previous:{title:"\u590d\u6742\u8ba1\u7b97",permalink:"/jimmer/docs/team-work/mapping/advanced/calculated/transient"},next:{title:"JSON\u6620\u5c04",permalink:"/jimmer/docs/team-work/mapping/advanced/json"}},d={},s=[{value:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32",id:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32",level:2},{value:"\u6620\u5c04\u4e3a\u6574\u6570",id:"\u6620\u5c04\u4e3a\u6574\u6570",level:2},{value:"\u4e0d\u660e\u786e\u4f7f\u7528@EnumType",id:"\u4e0d\u660e\u786e\u4f7f\u7528enumtype",level:2}],g={toc:s};function k(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Jimmer\u5904\u7406\u679a\u4e3e\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32\uff1a\u53ef\u89c2\u5bdf\u6027\u4f18\u5148\u7684\u9009\u62e9\uff0c\u4e5f\u662f\u9ed8\u8ba4\u7684\u9009\u9879\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6620\u5c04\u4e3a\u6574\u6570\uff1a\u6027\u80fd\u4f18\u5148\u7684\u9009\u62e9\u3002"))),(0,l.kt)("p",null,"Jimmer\u63d0\u4f9b\u4e86\u4e24\u4e2a\u7528\u4e8e\u679a\u4e3e\u7684\u6ce8\u89e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.EnumType"),": \u4fee\u9970\u679a\u4e3e\u7c7b\u578b\uff0c\u53ef\u9009"),(0,l.kt)("p",{parentName:"li"},"\u6307\u5b9a\u6620\u5c04\u65b9\u5f0f\uff0c\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32\uff0c\u8fd8\u662f\u6309\u4f4d\u7f6e\u6620\u5c04\u4e3a\u6574\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.EnumItem"),": \u4fee\u9970\u679a\u4e3e\u9879\uff0c\u53ef\u9009"),(0,l.kt)("p",{parentName:"li"},"\u8986\u76d6\u67d0\u4e2a\u679a\u4e3e\u9879\u88ab\u6620\u5c04\u540e\u7684\u5b57\u7b26\u4e32\u503c\u6216\u6574\u6570\u503c"))),(0,l.kt)("h2",{id:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32"},"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.NAME)\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"))),(0,l.kt)(u.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.NAME)\nenum class Gender {\n    MALE,\n    FEMALE\n}\n")))),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@EnumType"),'\u7684\u53c2\u6570\u88ab\u6307\u5b9a\u4e3a"NAME", \u8868\u793a\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e24\u4e2a\u679a\u4e3e\u9879\u6620\u5c04\u540e\u7684\u5b57\u7b26\u4e32\u548c\u5b83\u4eec\u7684\u540d\u5b57\u76f8\u540c\uff0c\u5373"MALE"\u548c"FEMALE"\u3002'),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u671f\u671b\u540e\u7684\u5b57\u7b26\u4e32\u548c\u679a\u4e3e\u9879\u540d\u79f0\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@EnumItem"),"\u4fee\u9970\u679a\u4e3e\u9879\u3002"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},'@EnumType(EnumType.Strategy.NAME)\npublic enum Gender {\n\n    // highlight-next-line\n    @EnumItem(name = "M")\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(name = "F")\n    FEMALE\n}\n'))),(0,l.kt)(u.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},'@EnumType(EnumType.Strategy.NAME)\nenum class Gender {\n\n    // highlight-next-line\n    @EnumItem(name = "M")\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(name = "F")\n    FEMALE\n}\n')))),(0,l.kt)("h2",{id:"\u6620\u5c04\u4e3a\u6574\u6570"},"\u6620\u5c04\u4e3a\u6574\u6570"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.ORDINAL)\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"))),(0,l.kt)(u.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},"// highlight-next-line\n@EnumType(EnumType.Strategy.ORDINAL)\nenum class Gender {\n    MALE,\n    FEMALE\n}\n")))),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@EnumType"),'\u7684\u53c2\u6570\u88ab\u6307\u5b9a\u4e3a"ORDINAL", \u8868\u793a\u6620\u5c04\u4e3a\u6574\u6570\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e24\u4e2a\u679a\u4e3e\u9879\u6620\u5c04\u540e\u7684\u5b57\u7b26\u4e32\u548c\u5b83\u4eec\u7684',(0,l.kt)("inlineCode",{parentName:"p"},"ordinal"),"\u76f8\u540c\uff0c\u53730\u548c1\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u671f\u671b\u540e\u7684\u5b57\u7b26\u4e32\u548c\u679a\u4e3e\u9879\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"ordinal"),"\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@EnumItem"),"\u4fee\u9970\u679a\u4e3e\u9879\u3002"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Gender.java"',title:'"Gender.java"'},"@EnumType(EnumType.Strategy.ORDINAL)\npublic enum Gender {\n\n    // highlight-next-line\n    @EnumItem(ordinal = 100)\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(ordinal = 200)\n    FEMALE\n}\n"))),(0,l.kt)(u.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Gender.kt"',title:'"Gender.kt"'},"@EnumType(EnumType.Strategy.ORDINAL)\nenum class Gender {\n\n    // highlight-next-line\n    @EnumItem(ordinal = 100)\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(ordinal = 200)\n    FEMALE\n}\n")))),(0,l.kt)("h2",{id:"\u4e0d\u660e\u786e\u4f7f\u7528enumtype"},"\u4e0d\u660e\u786e\u4f7f\u7528@EnumType"),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4e0d\u4e3a\u679a\u4e3e\u7c7b\u578b\u6307\u5b9a@EnumType\u6ce8\u89e3\uff0c\u5373\uff0c\u4e0d\u660e\u786e\u8bf4\u660e\u67d0\u4e2a\u679a\u4e3e\u7c7b\u578b\u5e94\u8be5\u6620\u5c04\u6210\u5b57\u7b26\u4e32\u8fd8\u662f\u6574\u6570\u3002"),(0,l.kt)("p",null,"\u6b64\u65f6\uff0cJimmer\u4f1a\u53c2\u8003\u9ed8\u8ba4\u7684\u5168\u90e8\u914d\u7f6e\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},'\u6b64\u5168\u5c40\u914d\u7f6e\u9ed8\u8ba4\u4e3a"NAME"\uff0c\u5982\u679c\u4f60\u9700\u8981"ORDINAL"\uff0c\u8bf7\u8986\u76d6\u5168\u90e8\u914d\u7f6e\u3002')),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c55\u793a\u5982\u4f55\u8986\u76d6\u5168\u90e8\u914d\u7f6e\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528SpringBoot\u65f6"),(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u79cd\u6dfb\u52a0\u914d\u7f6e\u9879",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.default-enum-strategy"),'\uff0c\u5c06\u5176\u6307\u5b9a\u4e3a"ORIDNAL"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u4f7f\u7528SpringBoot\u65f6"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDefaultEnumStrategy(EnumType.Strategy.ORDINAL)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,l.kt)(u.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setDefaultEnumStrategy(EnumType.Strategy.ORDINAL)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))))))}k.isMDXComponent=!0}}]);