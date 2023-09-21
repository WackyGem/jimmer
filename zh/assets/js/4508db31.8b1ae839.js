"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8380],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>c});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},u=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(t),c=l,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||i;return t?n.createElement(k,r(r({ref:a},u),{},{components:t})):n.createElement(k,r({ref:a},u))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294),l=t(34334);const i="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(83117),l=t(67294),i=t(34334),r=t(72389),o=t(67392),p=t(7094),m=t(12466);const u="tabList__CuJ",s="tabItem_LNqP";function d(e){var a;const{lazy:t,block:r,defaultValue:d,values:c,groupId:k,className:N}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??b.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),v=(0,o.l)(g,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)??b[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,p.U)(),[O,C]=(0,l.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:D}=(0,m.o5)();if(null!=k){const e=h[k];null!=e&&e!==O&&g.some((a=>a.value===e))&&C(e)}const E=e=>{const a=e.currentTarget,t=T.indexOf(a),n=g[t].value;n!==O&&(D(a),C(n),null!=k&&y(k,String(n)))},R=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},N)},g.map((e=>{let{value:a,label:t,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:e=>T.push(e),onKeyDown:R,onFocus:E,onClick:E},r,{className:(0,i.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":O===a})}),t??a)}))),t?(0,l.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==O})))))}function c(e){const a=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(a)},e))}},9156:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var n=t(83117),l=(t(67294),t(3905)),i=t(65488),r=t(85162);const o={sidebar_position:8,title:"\u6570\u636e\u5e93\u9a8c\u8bc1"},p=void 0,m={unversionedId:"configuration/database-validation",id:"configuration/database-validation",title:"\u6570\u636e\u5e93\u9a8c\u8bc1",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/configuration/database-validation.mdx",sourceDirName:"configuration",slug:"/configuration/database-validation",permalink:"/jimmer/zh/docs/configuration/database-validation",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/configuration/database-validation.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u6570\u636e\u5e93\u9a8c\u8bc1"},sidebar:"tutorialSidebar",previous:{title:"\u89e6\u53d1\u5668\u7c7b\u578b",permalink:"/jimmer/zh/docs/configuration/trigger-type"},next:{title:"\u5fae\u670d\u52a1",permalink:"/jimmer/zh/docs/configuration/micro-service"}},u={},s=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u5f00\u542f\u9a8c\u8bc1",id:"\u5f00\u542f\u9a8c\u8bc1",level:2},{value:"\u89e3\u51b3\u8868\u51b2\u7a81",id:"\u89e3\u51b3\u8868\u51b2\u7a81",level:2},{value:"\u6682\u65f6\u5ffd\u7565\u5c40\u90e8\u9a8c\u8bc1",id:"\u6682\u65f6\u5ffd\u7565\u5c40\u90e8\u9a8c\u8bc1",level:2}],d={toc:s};function c(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u8bda\u7136\uff0cJimmer\u7684\u5f3a\u7c7b\u578bSQL DSL\u80fd\u5728\u7f16\u8bd1\u65f6\u5c3d\u53ef\u80fd\u66b4\u9732\u95ee\u9898\uff0c\u5927\u90e8\u5206\u9519\u8bef\u80fd\u591f\u5728\u6d4b\u8bd5\u4e4b\u524d\u5c31\u88ab\u675c\u7edd\u3002\u4f46\uff0c\u8fd9\u662f\u4e0d\u591f\u7684\u3002"),(0,l.kt)("p",null,"\u5f3a\u7c7b\u578bSQL DSL\u4ec5\u4ec5\u80fd\u63d0\u9ad8",(0,l.kt)("inlineCode",{parentName:"p"},"\u5b9e\u4f53\u6a21\u578b->\u4e1a\u52a1\u4ee3\u7801"),"\u73af\u8282\u7684\u53ef\u9760\u6027\uff0c\u4f46\u65e0\u6cd5\u4fdd\u8bc1",(0,l.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u7ed3\u6784->\u5b9e\u4f53\u6a21\u578b"),"\u73af\u8282\u7684\u53ef\u9760\u6027\u3002"),(0,l.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u884d\u751f\u95ee\u9898\uff0c\u5982\u679c\u5f00\u53d1\u4eba\u5458\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u5f97\u5230\u53ef\u9760\u7684\u5e94\u7528\uff0c\u90a3\u4e48\uff0c\u5982\u4f55\u4fdd\u8bc1\u5e94\u7528\u88ab\u79fb\u690d\u5230\u751f\u4ea7\u73af\u5883\u4e2d\u540e\u4ecd\u7136\u53ef\u9760\uff1f"),(0,l.kt)("p",null,"\u6570\u636e\u5e93\u9a8c\u8bc1\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u529f\u80fd\uff0c\u5b83\u7528\u4e8e\u9a8c\u8bc1\u6570\u636e\u5e93\u7ed3\u6784\u548c\u5b9e\u4f53\u6a21\u578b\u5b9a\u4e49\u4e4b\u95f4\u7684\u4e00\u81f4\u6027\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1\u89c4\u5219")),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9a8c\u8bc1\u8868\u540d\u3001\u5217\u540d\u3001\u5e8f\u5217\u540d\u662f\u5426\u548c\u5b9e\u4f53\u6a21\u578b\u4e2d\u7684\u5b9a\u4e49\u4e00\u81f4\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9a8c\u8bc1\u5217\u7684nullity\u662f\u5426\u548c\u5b9e\u4f53\u6a21\u578b\u4e2d\u5c5e\u6027\u7684\u5b9a\u4e49\u4e00\u81f4\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5c5e\u6027\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"@OneToOne(inputNotNull = true)"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"@ManyToOne(inputNotNull = true)"),"\u4fee\u9970\uff0c\u5219\u65e0\u89c6\u5c5e\u6027\u672c\u8eab\u7684nullity\uff0c\u8ba4\u4e3a\u6570\u636e\u4e2d\u5bf9\u5e94\u7684\u5916\u952e\u4e0d\u80fd\u4e3anull\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u5b9e\u4f53\u6a21\u578b\u4e2d\u5404\u5b9e\u4f53\u7684id\u5c5e\u6027\uff0c\u9a8c\u8bc1\u6570\u636e\u5e93\u662f\u5426\u6709\u5b58\u5728\u5b8c\u5168\u5339\u914d\u7684\u7684\u4e3b\u952e\u7ea6\u675f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u5b9e\u4f53\u6a21\u578b\u4e2d\u5b9a\u4e49\u7684\u771f\u5916\u952e ",(0,l.kt)("em",{parentName:"p"},"(\u53c2\u89c1",(0,l.kt)("a",{parentName:"em",href:"../mapping/base/foreignkey"},"\u771f\u5047\u5916\u952e"),")")," \u800c\u8a00\uff0c\u9a8c\u8bc1\u6570\u636e\u5e93\u4e2d\u662f\u5426\u5b58\u5728\u5b8c\u5168\u5339\u914d\u7684\u7684\u5916\u952e\u7ea6\u675f\u3002")))),(0,l.kt)("h2",{id:"\u5f00\u542f\u9a8c\u8bc1"},"\u5f00\u542f\u9a8c\u8bc1"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u6cd5\u5f00\u59cb\u9a8c\u8bc1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528Spring Boot Starter"),(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,l.kt)("em",{parentName:"p"},"(\u6216application.properties)")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"jimmer:\n  database-validation-mode: ERROR\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5e95\u5c42API"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DatabaseValidationMode"),"\u662f\u679a\u4e3e\u7c7b\u578b\uff0c\u6709\u4e09\u4e2a\u53d6\u503c:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"NONE"),": \u4e0d\u9a8c\u8bc1\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u8fd9\u662f\u9ed8\u8ba4\u884c\u4e3a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"WARNNING"),": \u9a8c\u8bc1\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u5982\u679c\u6570\u636e\u5e93\u7ed3\u6784\u548c\u5b9e\u4f53\u6a21\u578b\u5b9a\u4e49\u4e0d\u4e00\u81f4\uff0c\u4e0d\u963b\u6b62\u7a0b\u5e8f\u8fd0\u884c\uff0c\u53ea\u662f\u5728\u65e5\u5fd7\u4e2d\u6253\u5370\u544a\u8b66\u4fe1\u606f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ERROR"),": \u9a8c\u8bc1\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u5982\u679c\u6570\u636e\u5e93\u7ed3\u6784\u548c\u5b9e\u4f53\u6a21\u578b\u5b9a\u4e49\u4e0d\u4e00\u81f4\uff0c\u629b\u51fa\u5f02\u5e38\uff0c\u963b\u6b62\u7a0b\u5e8f\u8fd0\u884c\u3002"))),(0,l.kt)("h2",{id:"\u89e3\u51b3\u8868\u51b2\u7a81"},"\u89e3\u51b3\u8868\u51b2\u7a81"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u7c7b\u578b\u5fc5\u7136\u5bf9\u5e94\u4e8e\u6570\u636e\u5e93\u7684\u67d0\u5f20\u8868\uff0c\u65e0\u8bba\u662f\u7531\u5f00\u53d1\u4eba\u5458\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"@Table"),"\u663e\u5f0f\u914d\u7f6e\u8868\u540d\u8fd8\u662f\u7531",(0,l.kt)("a",{parentName:"p",href:"../mapping/base/naming-strategy"},"\u547d\u540d\u7b56\u7565"),"\u81ea\u52a8\u51b3\u5b9a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\u5fc5\u7136\u5bf9\u5e94\u4e8e\u6570\u636e\u5e93\u7684\u67d0\u5f20\u8868\uff0c\u65e0\u8bba\u662f\u7531\u5f00\u53d1\u4eba\u5458\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"@JoinTable"),"\u663e\u5f0f\u914d\u7f6e\u8868\u540d\u8fd8\u662f\u7531",(0,l.kt)("a",{parentName:"p",href:"../mapping/base/naming-strategy"},"\u547d\u540d\u7b56\u7565"),"\u81ea\u52a8\u51b3\u5b9a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u81ea\u52a8\u589e\u957f\u7b56\u7565\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"SEQUENCE"),"\u7684ID\u5fc5\u7136\u5bf9\u5e94\u4e8e\u6570\u636e\u5e93\u7684\u67d0\u4e2a\u5e8f\u5217\uff0c\u65e0\u8bba\u662f\u7531\u5f00\u53d1\u4eba\u5458\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"@GeneratedValue"),"\u663e\u5f0f\u914d\u7f6e\u5e8f\u5217\u540d\u8fd8\u662f\u7531",(0,l.kt)("a",{parentName:"p",href:"../mapping/base/naming-strategy"},"\u547d\u540d\u7b56\u7565"),"\u81ea\u52a8\u51b3\u5b9a"))),(0,l.kt)("p",null,"\u7a0b\u5e8f\u542f\u52a8\u65f6\uff0cJimmer\u9700\u8981\u67e5\u8be2\u6570\u636e\u5e93\u4ee5\u9a8c\u8bc1\u8fd9\u4e9b\u8868\u6216\u5e8f\u5217\u662f\u5426\u5b58\u5728\u3002\u4ee5\u53ca\uff0c\u5982\u679c\u5b58\u5728\uff0c\u5176\u5185\u90e8\u7ed3\u6784\u662f\u5426\u6b63\u786e ",(0,l.kt)("em",{parentName:"p"},"(\u9488\u5bf9\u8868)"),"\u3002"),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u7531\u4e8e\u6570\u636e\u5e93\u670d\u52a1\u5f80\u5f80\u652f\u6301\u591a\u4e2a\u5b50\u5e93\uff0c\u5b50\u5e93\u4e4b\u95f4\u8fd8\u53ef\u4ee5\u5f7c\u6b64\u6388\u6743\uff0c\u6240\u4ee5JDBC\u8fde\u63a5\u53ef\u80fd\u5728\u4e0d\u540c\u7684\u6570\u636e\u5e93\u7528\u6237\u770b\u5230\u540c\u540d\u7684\u8868\uff0c\u6bd4\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"db1.BOOK"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"db2.BOOK"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"db3.BOOK"),"\u3002\u8fd9\u53eb\u8868\u51b2\u7a81\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\uff0cJimmer\u53ef\u4ee5\u4f18\u5148\u4eceJDBC\u8fde\u63a5\u7684\u5143\u6570\u636e\u4e2d\u63d0\u53d6\u6570\u636e\u5e93\u540d\u79f0\uff0c\u6bd4\u5982\uff0c\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:3306/db1"),'\u4e2d\u53ef\u4ee5\u63d0\u53d6\u5230"db1"\uff0c\u4f18\u5148\u5728\u81ea\u52a8\u63d0\u53d6\u5230\u7684\u5b50\u5e93\u4e2d\u67e5\u627e\u8868\u4fe1\u606f\u7528\u4e8e\u9a8c\u8bc1\u3002\n\u7136\u800c\uff0c\u8be5\u65b9\u6cd5\u5e76\u4e0d\u603b\u662f\u6709\u6548\uff0c\u53ea\u8981\u5f53\u524d\u5b50\u5e93\u4e2d\u65e0\u6cd5\u67e5\u627e\u5230\u6307\u5b9a\u7684\u8868\uff0c\u5c31\u4f1a\u5230\u5176\u4ed6\u5b50\u5e93\u4e2d\u67e5\u627e\uff0c\u8fd9\u5c31\u53ef\u80fd\u5bfc\u81f4\u8868\u51b2\u7a81\u95ee\u9898\u3002'),(0,l.kt)("p",null,"\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u4ee5\u4e0b\u4e24\u79cd\u65b9\u6cd5\u53ef\u4f9b\u9009\u62e9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u660e\u786e\u6307\u5b9a\u4e25\u683c\u7684\u8868\u540d\u6216\u5e8f\u5217\u540d\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},'@Table(name = "BOOK")'),"\u4fee\u6539\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},'@Table(name = "db1.BOOK")'),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},'@JoinTable(name = "BOOK_AUTHOR_MAPPING")'),"\u4fee\u6539\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},'@JoinTable(name = "db1.BOOK_AUTHOR_MAPPING")'),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},'@GeneratedValue(sequenceName = "BOOK_ID_SEQ")'),"\u4fee\u6539\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},'@GeneratedValue(sequenceName = "db1.BOOK_ID_SEQ")'),"\u3002")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u660e\u786e\u6307\u5b9a\u88ab\u7528\u4e8e\u9a8c\u8bc1\u7684\u5b50\u5e93\u540d\uff0c\u8fd9\u53c8\u53ef\u5206\u4e3a\u4e24\u79cd\u65b9\u6cd5\uff1a"),(0,l.kt)("p",{parentName:"li"},"\u6709\u4e24\u79cd\u65b9\u6cd5\u5f00\u59cb\u9a8c\u8bc1"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528Spring Boot Starter"),(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,l.kt)("em",{parentName:"p"},"(\u6216application.properties)")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"jimmer:\n  database-validation: \n    mode: ERROR\n    # highlight-next-line\n    catalog: db1\n")),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.database-validation-mode"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.database-validation.mode"),"\u7b49\u4ef7"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5e95\u5c42API"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    // highlight-next-line\n    .setDatabaseValidationCatalog("db1")\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val sqlClient = newKSqlClient {\n    setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    // highlight-next-line\n    setDatabaseValidationCatalog("db1")\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n')))))))),(0,l.kt)("p",null,"\u540c\u7406\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9aschema\uff0c\u4f8b\u5982"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76f4\u63a5\u914d\u7f6e\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},'@Table(name = "mydatabase.myschema.BOOK")'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SpringBoot\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6587\u4ef6\u914d\u7f6e"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"jimmer:\n      database-validation: \n        mode: ERROR\n        catalog: mydatabase\n        # highlight-next-line\n        schema: myschema\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5e95\u5c42API\u914d\u7f6e"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    .setDatabaseValidationCatalog("mydatabase")\n    // highlight-next-line\n    setDatabaseValidationSchema("myschema")\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val sqlClient = newKSqlClient {\n    setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    setDatabaseValidationCatalog("mydatabase")\n    // highlight-next-line\n    setDatabaseValidationSchema("myschema")\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n')))))),(0,l.kt)("h2",{id:"\u6682\u65f6\u5ffd\u7565\u5c40\u90e8\u9a8c\u8bc1"},"\u6682\u65f6\u5ffd\u7565\u5c40\u90e8\u9a8c\u8bc1"),(0,l.kt)("p",null,"\u6709\u7684\u65f6\u5019\uff0c\u5f00\u53d1\u4eba\u5458\u6b63\u5728\u5f00\u53d1\u4e00\u4e2a\u65b0\u529f\u80fd\uff0c\u5b83\u8fd8\u6ca1\u6709\u5b8c\u6210\u56fa\u65e0\u6cd5\u9a8c\u8bc1\u3002\u5f00\u53d1\u4eba\u5458\u81ea\u7136\u4e0d\u4f1a\u53bb\u8fd0\u884c\u8fd8\u672a\u5b8c\u6210\u7684\u529f\u80fd\uff0c\u671f\u671b\u672a\u5b8c\u6210\u7684\u90e8\u5206\u4e0d\u8981\u6570\u636e\u5e93\u7ed3\u6784\u9a8c\u8bc1\u3002"),(0,l.kt)("p",null,"\u5bf9\u6b64\uff0cJimmer\u63d0\u4f9b\u6ce8\u89e3",(0,l.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.DatabaseValidationIgnore"),"\uff0c\u8be5\u6ce8\u89e3\u6709\u4ee5\u4e0b\u4e24\u79cd\u7528\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u9970\u5b9e\u4f53\u63a5\u53e3\uff0c\u8868\u793a\u6574\u4e2a\u5b9e\u4f53\u4e0d\u7528\u9a8c\u8bc1\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u9970\u5b9e\u4f53\u5c5e\u6027\uff0c\u8868\u793a\u7279\u5b9a\u5c5e\u6027\u4e0d\u7528\u9a8c\u8bc1\u3002"))))}c.isMDXComponent=!0}}]);