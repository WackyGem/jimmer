"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),p=n(7094),c=n(12466);const s="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:k,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,p.U)(),[C,S]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=k){const e=N[k];null!=e&&e!==C&&v.some((t=>t.value===e))&&S(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==C&&(T(t),S(a),null!=k&&y(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},32102:(e,t,n)=>{n.d(t,{s:()=>g});var a=n(83117),r=n(67294),l=n(42293),i=n(50657),o=n(6514),p=n(54776),c=n(10155),s=n(15861),u=n(93946),m=n(9137),d=n(61274),k=n(50594);const g=(0,r.memo)((e=>{let{open:t,fullScreen:n=!1,title:a,onClose:p,children:g}=e;const[v,h]=(0,r.useState)(n),f=(0,r.useCallback)((()=>{h((e=>!e))}),[]);return r.createElement(i.Z,{open:t,onClose:p,fullScreen:v,TransitionComponent:b,maxWidth:"md"},r.createElement(l.Z,{sx:{position:"relative"}},r.createElement(c.Z,null,r.createElement(s.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),r.createElement(u.Z,{onClick:f,style:{color:"white"}},v?r.createElement(d.Z,null):r.createElement(m.Z,null)),r.createElement(u.Z,{"aria-label":"close",onClick:p,style:{color:"white"}},r.createElement(k.Z,null)))),r.createElement(o.Z,null,g))})),b=r.forwardRef((function(e,t){return r.createElement(p.Z,(0,a.Z)({direction:"up",ref:t},e))}))},39511:(e,t,n)=>{n.d(t,{b:()=>i});var a=n(67294),r=n(83321),l=n(32102);const i=(0,a.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:i=t,children:o}=e;const[p,c]=(0,a.useState)(!1),s=(0,a.useCallback)((e=>{c(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),u=(0,a.useCallback)((()=>{c(!1)}),[]);return a.createElement(a.Fragment,null,a.createElement(r.Z,{"data-is-view-more-button":"true",onClick:s,variant:"outlined",size:"small"},t),a.createElement(l.s,{open:p,onClose:u,title:i,fullScreen:n},o))}))},15626:(e,t,n)=>{n.d(t,{ZP:()=>p});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={toc:[]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jimmer\u4e2d\u4e00\u5207\u53ef\u6267\u884c\u7684\u8bed\u53e5\u548c\u6307\u4ee4\u90fd\u652f\u6301\u4e24\u79cd\u6267\u884c\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u7528\u6237\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u6267\u884c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7531Jimmer\u81ea\u52a8\u51b3\u5b9a\u57fa\u4e8e\u67d0\u4e2aJDBC\u8fde\u63a5\u6267\u884c"))),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"Executable"),"(Java)\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"KExecutable"),"(kotlin)\u63a5\u53e3\u4e3a\u4f8b"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Executable.java"',title:'"Executable.java"'},"package org.babyfish.jimmer.sql.ast;\n\nimport java.sql.Connection;\n\npublic interface Executable<R> {\n\n    R execute();\n\n    R execute(Connection con);\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="KExecutable.kt"',title:'"KExecutable.kt"'},"package org.babyfish.jimmer.sql.kt\n\nimport java.sql.Connection\n\ninterface KExecutable<R> {\n    fun execute(con: Connection? = null): R\n}\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"execute(Connection)"),"\uff1a\u5728\u7528\u6237\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u4e0a\u6267\u884c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u67e5\u8be2\u4e3a\u4f8b\uff1a"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute(con);\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute(con)\n")))),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u800c\u8a00\uff0c\u65e0\u9700\u5bf9SqlClient\u505a\u51fa\u7279\u522b\u914d\u7f6e\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"execute()"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"execute(null)"),"\uff1a\u7531Jimmer\u81ea\u4e3b\u51b3\u5b9a\u5728\u67d0\u4e2aJDBC\u8fde\u63a5\u4e0a\u6267\u884c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4ee5\u67e5\u8be2\u4e3a\u4f8b\uff1a"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute()    \n")))),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u800c\u8a00\uff0c\u5fc5\u987b\u4e3aSqlClient\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\u3002\u5426\u5219\u5c06\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6beb\u65e0\u7591\u95ee\uff0c\u7b2c2\u79cd\u65b9\u5f0f\u66f4\u7b26\u5408\u4e1a\u52a1\u7cfb\u7edf\u5f00\u53d1\u8981\u6c42\uff0c\u63a8\u8350\u4f7f\u7528\u3002\u6240\u4ee5\u5f3a\u70c8\u5efa\u8bae\u4e3aSqlClient\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\u3002")))))}p.isMDXComponent=!0},64350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162),o=n(39511),p=n(15626);const c={sidebar_position:1,title:"\u6574\u5408Spring\u4e8b\u52a1"},s=void 0,u={unversionedId:"spring/transaction",id:"spring/transaction",title:"\u6574\u5408Spring\u4e8b\u52a1",description:"\u6574\u5408Spring\u4e8b\u52a1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/spring/transaction.mdx",sourceDirName:"spring",slug:"/spring/transaction",permalink:"/jimmer/zh/docs/spring/transaction",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/spring/transaction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u6574\u5408Spring\u4e8b\u52a1"},sidebar:"tutorialSidebar",previous:{title:"Spring\u7bc7",permalink:"/jimmer/zh/docs/spring/"},next:{title:"Spring Data\u98ce\u683c",permalink:"/jimmer/zh/docs/spring/repository/"}},m={},d=[{value:"\u6574\u5408Spring\u4e8b\u52a1",id:"\u6574\u5408spring\u4e8b\u52a1",level:2},{value:"\u4f7f\u7528Spring Boot starter",id:"\u4f7f\u7528spring-boot-starter",level:3},{value:"\u4e0d\u4f7f\u7528Spring Boot Starter",id:"\u4e0d\u4f7f\u7528spring-boot-starter",level:3},{value:"\u548cJdbcTemplate\u534f\u540c",id:"\u548cjdbctemplate\u534f\u540c",level:2}],k={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6574\u5408spring\u4e8b\u52a1"},"\u6574\u5408Spring\u4e8b\u52a1"),(0,r.kt)("p",null,"Jimmer\u4e2d\u6240\u6709\u6570\u636e\u5e93\u64cd\u4f5cAPI\u90fd\u6709\u4e24\u79cd\u6267\u884c\u65b9\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u4e0a\u6267\u884c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65e0\u9700\u6307\u5b9aJDBC\u8fde\u63a5\u5373\u53ef\u6267\u884c\uff0c\u4f46\u9700\u8981\u4e3aJimmer\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\uff0c\u6559\u4f1aJimmer\u5982\u4f55\u79df\u501f\u548c\u5f52\u8fd8\u8fde\u63a5\u3002"))),(0,r.kt)("p",null,"\u8bf7\u53c2\u8003",(0,r.kt)(o.b,{buttonText:"\u8fd9\u91cc",title:"\u4e24\u79cd\u6267\u884c\u65b9\u6cd5",mdxType:"ViewMore"},(0,r.kt)(p.ZP,{mdxType:"Execute"})),"\u4ee5\u4e86\u89e3\u66f4\u591a\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\uff0cJimmer\u672c\u8eab\u5e76\u672a\u63d0\u4f9b\u8fde\u63a5/\u4e8b\u52a1\u7ba1\u7406\u80fd\u529b\uff0c\u8fd9\u79cd\u7ba1\u7406\u80fd\u529b\u5b8c\u5168\u4f9d\u8d56\u7528\u6237\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\u7684\u5b9a\u5236\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\u5c31\u662f\u5c06Jimmer\u548c\u4efb\u4f55IOC\u6846\u67b6 ",(0,r.kt)("em",{parentName:"p"},"(\u5f53\u7136\uff0c\u5305\u62ecSpring)")," \u7684\u8fde\u63a5/\u4e8b\u52a1\u7ba1\u7406\u80fd\u529b\u6574\u5408\u5728\u4e00\u8d77\u7684\u5173\u952e\u70b9\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528spring-boot-starter"},"\u4f7f\u7528Spring Boot starter"),(0,r.kt)("p",null,"\u5982\u679c\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter\uff0c\u5219\u4e0d\u7528\u505a\u4efb\u4f55\u5de5\u4f5c\uff0cJimmer\u4f1a\u81ea\u52a8\u63a5\u5165Spring\u7684\u4e8b\u52a1\u7ba1\u7406\u673a\u5236\u3002"),(0,r.kt)("h3",{id:"\u4e0d\u4f7f\u7528spring-boot-starter"},"\u4e0d\u4f7f\u7528Spring Boot Starter"),(0,r.kt)("p",null,"\u5982\u679c\u4ec5\u4f7f\u7528Spring\uff0c\u5e76\u672a\u4f7f\u7528Jimmer\u63d0\u4f9b\u7684Spring Boot Starter\u3002\u90a3\u4e48\u9700\u8981\u81ea\u5df1\u7f16\u7801\u5c06Jimmer\u63a5\u5165Spring\u7684\u4e8b\u52a1\u7ba1\u7406\u673a\u5236\u3002"),(0,r.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u9700\u8981\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"JSqlClient/KSqlClient"),"\uff0c\u5e76\u8bbe\u7f6e\u5176",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionManager"),"\u4e2d\uff0c\u5229\u7528Spring\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"org.springframework.jdbc.datasource.DataSourceUtils"),"\u6253\u5f00\u548c\u5173\u95ed\u8fde\u63a5\u3002"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Bean\npublic JSqlClient sqlClient(DataSource dataSource) {\n    return JSqlClient.newBuilder()\n        // highlight-next-line\n        .setConnectionManager(\n            new ConnectionManager() {\n                @Override\n                public <R> R execute(\n                    Function<Connection, R> block\n                ) {\n                    Connection con = DataSourceUtils\n                        // highlight-next-line\n                        .getConnection(dataSource);\n                    try {\n                        return block.apply(con);\n                    } finally {\n                        DataSourceUtils\n                            // highlight-next-line\n                            .releaseConnection(con, dataSource);\n                    }\n                }\n            }\n        )\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Bean\nfun sqlClient(dataSource: DataSource): KSqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        setConnectionManager {\n            val con = DataSourceUtils\n                // highlight-next-line\n                .getConnection(dataSource)\n            try {\n                proceed(con)\n            } finally {\n                DataSourceUtils\n                    // highlight-next-line\n                    .releaseConnection(con, dataSource)\n            }\n        }\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u4f7f\u7528\u666e\u901a\u7684\u65b9\u6cd5\u4ece\u8fde\u63a5\u6c60\u501f\u7528 ",(0,r.kt)("em",{parentName:"p"},"(dataSource.getConnection)")," \u548c\u5f52\u8fd8 ",(0,r.kt)("em",{parentName:"p"},"(con.close)")," \u8fde\u63a5\uff0c\n\u4e00\u5b9a\u8981\u4f7f\u7528Spring\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"org.springframework.jdbc.datasource.DataSourceUtils"),"\uff0c\u56e0\u4e3a\u8fd9\u53ef\u4ee5\u548cSpring\u7684\u4e8b\u52a1\u7ba1\u7406\u673a\u5236\u76f8\u7ed3\u5408\u3002")),(0,r.kt)("h2",{id:"\u548cjdbctemplate\u534f\u540c"},"\u548cJdbcTemplate\u534f\u540c"),(0,r.kt)("p",null,"Jimmer\u91c7\u7528\u6781\u7b80\u8bbe\u8ba1\uff0c\u5176API\u603b\u5165\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"JSqlClient/KSqlClient"),"\u5bf9\u5916\u66b4\u9732\u7684API\u4e00\u5f8b\u91c7\u7528\u65e0\u72b6\u6001\u8bbe\u8ba1\u3002"),(0,r.kt)("p",null,"\u5f88\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6846\u67b6\u5bf9JDBC\u8fde\u63a5\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u6709\u72b6\u6001\u5305\u88c5\uff0c\u6bd4\u5982"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JPA\u7684",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html"},"EntityManager")),(0,r.kt)("li",{parentName:"ul"},"Hibernate\u7684",(0,r.kt)("a",{parentName:"li",href:"https://docs.jboss.org/hibernate/orm/6.2/javadocs/org/hibernate/Session.html"},"Session")),(0,r.kt)("li",{parentName:"ul"},"MyBatis\u7684",(0,r.kt)("a",{parentName:"li",href:"https://javadoc.io/doc/org.mybatis/mybatis/latest/org/apache/ibatis/session/SqlSession.html"},"SqlSession"),"\u3002")),(0,r.kt)("p",null,"\u5e76\u4e14\u5bf9\u6570\u636e\u5e93\u4e8b\u52a1\u4e5f\u6709\u6709\u72b6\u6001\u5c01\u88c5\uff0c\u6bd4\u5982"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JPA\u7684",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html#getTransaction--"},"EntityManager.getTransaction")),(0,r.kt)("li",{parentName:"ul"},"Hibernate\u7684",(0,r.kt)("a",{parentName:"li",href:"https://docs.jboss.org/hibernate/orm/6.2/javadocs/org/hibernate/SharedSessionContract.html#getTransaction()"},"Session.getTransaction")),(0,r.kt)("li",{parentName:"ul"},"MyBatis\u7684",(0,r.kt)("a",{parentName:"li",href:"https://javadoc.io/doc/org.mybatis/mybatis/latest/org/apache/ibatis/session/SqlSession.html#commit()"},"SqlSession.commit"))),(0,r.kt)("p",null,"Jimmer\u6ca1\u6709\u7c7b\u4f3c\u7684\u62bd\u8c61\uff0c\u5176API\u603b\u5165\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"JSqlClient/KSqlClient"),"\u5bf9\u5916\u66b4\u9732\u7684API\u4e00\u5f8b\u91c7\u7528\u65e0\u72b6\u6001\u8bbe\u8ba1\uff0cJDBC\u8fde\u63a5\u662fJimmer\u552f\u4e00\u7684\u5e95\u5c42\u4f9d\u8d56\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4fc3\u6210\u4e86\u4e00\u4e2a\u91cd\u8981\u7684\u7279\u6027\uff1aJimmer\u7684\u4e8b\u52a1\u7ba1\u7406\u548cJdbcTemplate\u7684\u4e8b\u52a1\u7ba1\u7406\u5b8c\u5168\u76f8\u540c\u3002")),(0,r.kt)("p",null,"Jimmer\u65e0\u9700\u63d0\u4f9b\u4efb\u4f55\u7c7b\u4f3c\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"createNativeQuery"),"\u7684API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u548cORM\u5173\u7cfb\u4e0d\u5927\u7684\u62a5\u8868\u67e5\u8be2\uff0c\u7528\u6237\u671f\u671b\u4e66\u5199\u5b8c\u6574\u7684Native SQL\uff0c\u90a3\u4e48\u76f4\u63a5\u4f7f\u7528Spring\u7684JdbcTemplate\u5373\u53ef\uff0c\u8fd9\u662f\u56e0\u4e3aJimmer\u7684\u4e8b\u52a1\u7ba1\u7406\u548cJdbcTemplate\u7684\u4e8b\u52a1\u7ba1\u7406\u5b8c\u5168\u76f8\u540c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8eJimmer\u7684ORM\u98ce\u683c\u67e5\u8be2\uff0c\u5728\u5f3a\u7c7b\u578bSQL DSL\u4e2d\u6df7\u5165",(0,r.kt)("a",{parentName:"p",href:"../query/native-sql"},"Native SQL"),"\u8868\u8fbe\u5f0f\u5373\u53ef"))))}g.isMDXComponent=!0}}]);