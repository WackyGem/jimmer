"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=m(n),g=l,d=k["".concat(p,".").concat(g)]||k[g]||u[g]||r;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(34334);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(83117),l=n(67294),r=n(34334),i=n(72389),o=n(67392),p=n(7094),m=n(12466);const s="tabList__CuJ",u="tabItem_LNqP";function k(e){var t;const{lazy:n,block:i,defaultValue:k,values:g,groupId:d,className:c}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=g??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),_=(0,o.l)(N,((e,t)=>e.value===t.value));if(_.length>0)throw new Error(`Docusaurus error: Duplicate values "${_.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===k?k:k??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:h}=(0,p.U)(),[v,I]=(0,l.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,m.o5)();if(null!=d){const e=f[d];null!=e&&e!==v&&N.some((t=>t.value===e))&&I(e)}const S=e=>{const t=e.currentTarget,n=C.indexOf(t),a=N[n].value;a!==v&&(E(t),I(a),null!=d&&h(d,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},c)},N.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:T,onFocus:S,onClick:S},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,l.cloneElement)(b.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function g(e){const t=(0,i.Z)();return l.createElement(k,(0,a.Z)({key:String(t)},e))}},15167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var a=n(83117),l=(n(67294),n(3905)),r=n(65488),i=n(85162);const o={sidebar_position:1,title:"\u7528\u6cd5"},p=void 0,m={unversionedId:"query/paging/usage",id:"query/paging/usage",title:"\u7528\u6cd5",description:"Jimmer\u5206\u9875\u7684\u7279\u8272",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/paging/usage.mdx",sourceDirName:"query/paging",slug:"/query/paging/usage",permalink:"/jimmer/zh/docs/query/paging/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/query/paging/usage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u7528\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"\u667a\u80fd\u5206\u9875",permalink:"/jimmer/zh/docs/query/paging/"},next:{title:"\u8868\u8fde\u63a5\u4f18\u5316",permalink:"/jimmer/zh/docs/query/paging/unncessary-join"}},s={},u=[{value:"Jimmer\u5206\u9875\u7684\u7279\u8272",id:"jimmer\u5206\u9875\u7684\u7279\u8272",level:2},{value:"\u914d\u5408SpringBoot\u4f7f\u7528\u65f6",id:"\u914d\u5408springboot\u4f7f\u7528\u65f6",level:2},{value:"\u4e0d\u914d\u5408SpringBoot\u4f7f\u7528\u65f6",id:"\u4e0d\u914d\u5408springboot\u4f7f\u7528\u65f6",level:2},{value:"\u5b9a\u4e49\u81ea\u5df1\u7684Page\u7c7b",id:"\u5b9a\u4e49\u81ea\u5df1\u7684page\u7c7b",level:3},{value:"\u5b9e\u73b0\u4e1a\u52a1\u4ee3\u7801",id:"\u5b9e\u73b0\u4e1a\u52a1\u4ee3\u7801",level:3},{value:"\u5185\u90e8\u673a\u5236",id:"\u5185\u90e8\u673a\u5236",level:2},{value:"\u65b9\u8a00",id:"\u65b9\u8a00",level:2},{value:"\u9ed8\u8ba4\u884c\u4e3a",id:"\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"MySqlDialect",id:"mysqldialect",level:3},{value:"OracleDialect",id:"oracledialect",level:3},{value:"\u548c\u5bf9\u8c61\u6293\u53d6\u5668\u914d\u5408",id:"\u548c\u5bf9\u8c61\u6293\u53d6\u5668\u914d\u5408",level:2}],k={toc:u};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"jimmer\u5206\u9875\u7684\u7279\u8272"},"Jimmer\u5206\u9875\u7684\u7279\u8272"),(0,l.kt)("p",null,"\u5206\u9875\u67e5\u8be2\u662fJimmer\u4e00\u4e2a\u5f88\u6709\u7279\u8272\u7684\u529f\u80fd\uff0c\u80fd\u5927\u5e45\u63d0\u5347\u5f00\u53d1\u6548\u7387\u3002"),(0,l.kt)("p",null,"\u5206\u9875\u9700\u8981\u6267\u884c\u4e24\u6761SQL\u67e5\u8be2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u603b\u884c\u6570\uff0c\u5176\u7ed3\u679c\u53ef\u4ee5\u8ba1\u7b97\u4e00\u5171\u6709\u591a\u5c11\u9875\uff0c\u7528\u6237\u7684\u9875\u7801\u662f\u5426\u8d8a\u754c\u3002"),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u4fbf\u4e8e\u8ba8\u8bba\uff0cJimmer\u79f0\u8fd9\u6761SQL\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"count-query")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u5f53\u524d\u9875\u5185\u7684\u6240\u6709\u6570\u636e\uff0c\u8fd4\u56de\u7684\u6570\u636e\u6761\u6570\u4e0d\u8d85\u8fc7\u9875\u9762\u5927\u5c0f\uff0c\u5e76\u8df3\u8fc7\u4e4b\u524d\u9875\u7684\u6240\u6709\u6570\u636e\u3002"),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u4fbf\u4e8e\u8ba8\u8bba\uff0cJimmer\u79f0\u8fd9\u6761SQL\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"data-query"))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Jimer\u5206\u9875\u7684\u7279\u8272\uff1a\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u7f16\u5199",(0,l.kt)("inlineCode",{parentName:"p"},"data-query"),"\uff0c\u6846\u67b6\u81ea\u52a8\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"count-query"),"\u3002"),(0,l.kt)("p",{parentName:"admonition"},"Jimmer\u4e0d\u4f46\u53ef\u4ee5\u81ea\u52a8\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"count-query"),"\uff0c\u8fd8\u53ef\u4ee5\u505a\u5230\u4f18\u5316",(0,l.kt)("inlineCode",{parentName:"p"},"count-query"),"\u3002\u8fd9\u4e2a\u4f18\u5316\u4f1a\u5728",(0,l.kt)("a",{parentName:"p",href:"./unncessary-join"},"\u4e0b\u4e00\u7bc7\u6587\u7ae0"),"\u4e2d\u8ba8\u8bba\u3002")),(0,l.kt)("h2",{id:"\u914d\u5408springboot\u4f7f\u7528\u65f6"},"\u914d\u5408SpringBoot\u4f7f\u7528\u65f6"),(0,l.kt)("p",null,"\u914d\u5408SpringBoot\u4f7f\u7528\u65f6\uff0c\u5f00\u53d1\u4eba\u5458\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"JRepository/KRepository"),"\u6d3e\u751f\u81ea\u5b9a\u4e49\u7684Repository\u63a5\u53e3\uff0c\u4e3a\u81ea\u5b9a\u4e49\u63a5\u53e3\u6dfb\u52a0\u67e5\u8be2\u65b9\u6cd5\u6709\u4e24\u79cd\u9009\u62e9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6309\u7167\u4e00\u5b9a\u7684\u7ea6\u5b9a\u58f0\u660e\u62bd\u8c61\u65b9\u6cd5\uff0c\u4ea4\u7531Jimmer\u81ea\u52a8\u5b9e\u73b0"),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u79cd\u7528\u6cd5\u8fc7\u4e8e\u7b80\u5355\uff0c\u9690\u85cf\u4e86\u6240\u6709\u7ec6\u8282\uff0c\u4e0d\u9002\u5728\u6b64\u8bb2\u8ff0\u5206\u9875\u67e5\u8be2\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"../../spring/repository/abstract"},"Spring\u7bc7/SpringData\u98ce\u683c/\u62bd\u8c61\u65b9\u6cd5"),"\u4ee5\u4e86\u89e3\u5982\u4f55\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u5b9e\u73b0\u5206\u9875\u67e5\u8be2"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76f4\u63a5\u5728\u81ea\u5b9a\u4e49\u63a5\u53e3\u4e2d\u5b9a\u4e49default\u65b9\u6cd5\uff0c\u81ea\u5df1\u5b9e\u73b0\u67e5\u8be2\u903b\u8f91"))),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\npublic interface BookRepository<Book, Long> extends JRepository<Book, Long> {\n\n    BookTable table = BookTable.$;\n\n    default Page<Book> findBooks(\n        Pageable pageable,\n        @Nullable String name,\n        @Nullable String storeName\n    ) {\n        return pager(pageable).excute( \u2776\n            sql()\n                .createQuery(table)\n                .whereIf(\n                    name != null && !name.isEmpty(),\n                    table.name().eq(name)\n                )\n                .whereIf(\n                    storeName != null && !storeName.isEmpty(),\n                    table.store().name().eq(storeName)\n                )\n                .orderBy(SpringOrders.toOrders(table, pageable.getSort())) \u2777\n                .select(table)\n                \u2778\n        );\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"import org.springframework.data.domain.Page\nimport org.springframework.data.domain.Pageable\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\ninterface BookRepository<Book, Long> : KRepository<Book, Long> {\n\n    fun findBooks(\n        pageable: Pageable,\n        name: String? = null,\n        storeName: String? = null\n    ): Page<Book> =\n        sql\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name eq it)\n                }\n                storeName?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.store.name eq it)\n                }\n                orderBy(pageable.sort) \u2460\n                select(table)\n            }\n            .fetchPage( \u2461\n                pageable.pageNumber, \n                pageable.pageSize\n            )\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776\u6216\u2461 "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776 Java: "),(0,l.kt)("p",{parentName:"li"},"\u8c03\u7528\u8d85\u63a5\u53e3\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"pager"),"\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u8f85\u52a9\u5bf9\u8c61\uff0c\u5e76\u8c03\u7528\u8be5\u5bf9\u8c61\u7684\u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"execute"),"\u5b9e\u73b0\u5206\u9875\u67e5\u8be2\u3002"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"execute"),"\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u672a\u6267\u884c\u7684\u67e5\u8be2\uff0c\u8be5\u67e5\u8be2\u4f5c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"data-query"),"\u7684\u6a21\u677f\uff1a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2461 Kotlin:"),(0,l.kt)("p",{parentName:"li"},"Kotlin API\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"KConfigurableRootQuery<*, E>"),"\u7c7b\u578b\u6269\u5c55\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"fetchPage"),"\u51fd\u6570\uff0c\u8c03\u7528\u4e4b\u5b9e\u73b0\u5206\u9875\u67e5\u8be2\u3002")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2777\u6216\u2460 \u7531\u4e8eSpring Data\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Pageabe"),"\u5305\u542b\u4e86\u52a8\u6001\u6392\u5e8f\uff0c\u6240\u4ee5\u9700\u8981\u5e94\u7528\u52a8\u6001\u6392\u5e8f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2778 ",(0,l.kt)("inlineCode",{parentName:"p"},"select"),"\u4e4b\u540e\u5e76\u6ca1\u6709\u8c03\u7528\u67e5\u8be2\u672c\u8eab\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"execute"),"\uff0c\u8bf4\u660e\u8fd9\u662f\u4e00\u4e2a\u672a\u6267\u884c\u7684\u67e5\u8be2\u3002"))),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u6267\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Page<Boo> page = bookRepository.findBooks(\n    PageRequest.of(\n        1, \n        5, \n        SortUtils.toSort("name asc, edition desc")\n    ),\n    null,\n    null\n)\n')),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"SpringData\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"Pageabe"),"\u7684\u9875\u7801\u4ece0\u5f00\u59cb\uff0c\u800c\u975e\u4ece1\u5f00\u59cb\uff0c\u6240\u4ee5\uff0c\u8fd9\u91cc\u67e5\u8be2\u7684\u662f\u7b2c\u4e8c\u9875")),(0,l.kt)("p",null,"\u4f1a\u751f\u6210\u4e24\u6761SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"count-query"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    count(tb_1_.ID)\nfrom BOOK tb_1_\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"data-query ",(0,l.kt)("em",{parentName:"p"},"\uff08\u5047\u8bbe\u6570\u636e\u5e93\u662fH2\uff09")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit ? /* 5 */ offset ? /* 5 */\n")))),(0,l.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u53ef\u4ee5\u8ba9\u6211\u4eec\u660e\u767dJimmer\u5206\u9875\u529f\u80fd\uff0c\u4f46\u662f\uff0cJimmer\u7684Spring API\u9690\u85cf\u4e86\u4e00\u4e9b\u7ec6\u8282\u3002\u56e0\u6b64\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u7ed5\u5f00Spring Boot\uff0c\u4ece\u66f4\u5e95\u5c42\u7684\u89d2\u5ea6\u66f4\u6e05\u6670\u5730\u9610\u8ff0\u3002"),(0,l.kt)("h2",{id:"\u4e0d\u914d\u5408springboot\u4f7f\u7528\u65f6"},"\u4e0d\u914d\u5408SpringBoot\u4f7f\u7528\u65f6"),(0,l.kt)("h3",{id:"\u5b9a\u4e49\u81ea\u5df1\u7684page\u7c7b"},"\u5b9a\u4e49\u81ea\u5df1\u7684Page\u7c7b"),(0,l.kt)("p",null,"\u5728\u4e0d\u4f7f\u7528SpringBoot\u65f6\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u4e00\u70b9\u901a\u7528\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u65e2\u7136\u4e0d\u4f7f\u7528SpringBoot\uff0c\u90a3\u4e48\u81ea\u7136\u65e0\u6cd5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"org.springframework.data.domain.Page"),"\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u6839\u636e\u9879\u76ee\u8981\u6c42\uff0c\u5b9a\u4e49\u81ea\u5df1\u7684\u53ef\u91cd\u7528\u7c7b",(0,l.kt)("inlineCode",{parentName:"p"},"Page"),"\uff0c\u5982\u4e0b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Page.java"',title:'"Page.java"'},"@lombok.Data\npublic class Page<E> {\n    private final int totalRowCount;\n    private final int totalPage;\n    private final List<E> entities;\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Page.kt"',title:'"Page.kt"'},"data class Page<E>(\n    val totalRowCount: Int,\n    val totalPage: Int,\n    val entities: List<E>\n)\n")))),(0,l.kt)("h3",{id:"\u5b9e\u73b0\u4e1a\u52a1\u4ee3\u7801"},"\u5b9e\u73b0\u4e1a\u52a1\u4ee3\u7801"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Page.java"',title:'"Page.java"'},"public Page<Book> findBooks(\n    int pageIndex,\n    int pageSize,\n    @Nullable String name,\n    @Nullable String storeName\n) {\n    // highlight-next-line\n    return PagingQueries.execute(\n        sqlClient\n            .createQuery(table)\n            .whereIf(\n                name != null && !name.isEmpty(),\n                table.name().eq(name)\n            )\n            .whereIf(\n                storeName != null && !storeName.isEmpty(),\n                table.store().name().eq(storeName)\n            )\n            .orderBy(table.name().asc(), table.edition().desc)\n            .select(table),\n        pageIndex,\n        pageSize,\n        (entities, totalCount, queryImplementor) ->\n            // highlight-next-line\n            new Page<>(\n                    totalCount,\n                    (totalCount + pageSize - 1) / pageSize,\n                    entities,\n            )\n    );\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(\n    pageIndex: Int,\n    pageSize: Int,\n    name: String? = null,\n    storeName: String? = null\n): Page<Book> =\n    sql\n        .createQuery(Book::class) {\n            name?.takeIf { it.isNotEmpty() }?.let {\n                where(table.name eq it)\n            }\n            storeName?.takeIf { it.isNotEmpty() }?.let {\n                where(table.store.name eq it)\n            }\n            orderBy(table.name.asc(), table.edition.desc())\n            select(table)\n        }\n        // highlight-next-line\n        .fetchPage(\n            pageIndex,\n            pageSize\n        ) { entities, totalCount, _ ->\n            // highlight-next-line\n            Page(\n                totalCount,\n                (totalCount + pageSize - 1) / pageSize,\n                entities,\n            )\n        }\n")))),(0,l.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u548c\u524d\u9762\u8ba8\u8bba\u8fc7\u7684\u90a3\u4e2a\u7ed9\u4e88SpringBoot\u7684\u4f8b\u5b50\u76f8\u540c\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,l.kt)("h2",{id:"\u5185\u90e8\u673a\u5236"},"\u5185\u90e8\u673a\u5236"),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86Java\u548cKotlin\u7684\u8bed\u8a00\u5dee\u5f02\uff0c\u4ee5\u53ca\u662f\u5426\u4f7f\u7528SpringBoot\u7684\u5404\u79cd\u60c5\u51b5\u3002\u8fd9\u4e9b\u60c5\u51b5\u4e0b\u7684\u5206\u9875\u67e5\u8be2\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528SpringBoot"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e0d\u4f7f\u7528SpringBoot"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Java"),(0,l.kt)("td",{parentName:"tr",align:null},"pager(",(0,l.kt)("inlineCode",{parentName:"td"},"page-args"),").execute(",(0,l.kt)("inlineCode",{parentName:"td"},"query"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"PagingQueries.execute(",(0,l.kt)("inlineCode",{parentName:"td"},"query"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"page-args"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"page-creator"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kotlin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"query"),".fetchPage(",(0,l.kt)("inlineCode",{parentName:"td"},"page-args"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"query"),".fetchPage(",(0,l.kt)("inlineCode",{parentName:"td"},"page-args"),") { ",(0,l.kt)("inlineCode",{parentName:"td"},"page-creator")," }")))),(0,l.kt)("p",null,"\u8fd9\u4e9b\u884c\u4e3a\u7684\u5e95\u5c42\u903b\u8f91\u662f\u4e00\u6837\u7684\uff0c\u4ec5\u4ee5Java\u4e3a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = BookTable.$;\n\nConfigurableRootQuery<Book> query = \u2776\n    sqlClient\n        .createQuery(table)\n        .whereIf(\n            name != null && !name.isEmpty(),\n            table.name().eq(name)\n        )\n        .whereIf(\n            storeName != null && !storeName.isEmpty(),\n            table.store().name().eq(storeName)\n        )\n        .orderBy(table.name().asc(), table.edition().desc)\n\nint totalCount = query.count(); \u2777\nint totalPage = (totalCount + pageSize - 1) / pageSize;\nif (pageIndex >= totalPage) {\n    return new Page<Book>(totalCount, totalPage, Collections.emtptyList());\n}\nList<Book> entities = query\n    .limit(pageSize, pageIndex * pageSize) \u2778\n    .execute(); \u2779\nreturn new Page( \u277a\n    totalCount,\n    totalPage,\n    entities\n)\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u7b80\u5316\u8ba8\u8bba\uff0c\u8fd9\u6bb5\u4f2a\u7801\u5e76\u672a\u8003\u8651",(0,l.kt)("a",{parentName:"p",href:"./reverse-sorting"},"\u53cd\u6392\u5e8f\u4f18\u5316"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776 \u521b\u5efa\u67e5\u8be2\uff0c\u4f46\u5e76\u4e0d\u6267\u884c\u3002\u6211\u53ef\u4ee5\u79f0\u5176\u4e3a\u6837\u677f\u67e5\u8be2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2777 \u5728\u4e0d\u4fee\u6539\u539f\u6837\u677f\u67e5\u8be2\u7684\u57fa\u7840\u4e0a\uff0c\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"count-query"),"\uff0c\u518d\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"count-query"),"\u5f97\u5230\u5206\u9875\u524d\u6240\u6709\u6570\u636e\u7684\u884c\u6570"),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"count"),"\u65b9\u6cd5\u662f\u5feb\u6377API\uff0c\u5176\u5e95\u5c42\u903b\u8f91\u4e3a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public interface ConfigurableRootQuery<T extends Table<?>, R> extends ... {\n\n    default int count() {\n        return count(null);\n    }\n\n    default int count(Connection con) {\n        return reselect((q, t) -> q.select(t.count()))\n            .withoutSortingAndPaging()\n            .execute(con)\n            .get(0)\n            .intValue();\n    }\n}\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"reselect((q, t) -> q.select(t.count()))"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"count-query"),"\u5e76\u4e0d\u67e5\u8be2\u6570\u636e\uff0c\u800c\u662f\u67e5\u8be2COUNT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"withoutSortingAndPaging()"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"count-query"),"\u65e0\u9700\u6392\u5e8f\u5b50\u53e5",(0,l.kt)("inlineCode",{parentName:"p"},"order by"),"\u548c\u5206\u9875\u5b50\u53e5 ",(0,l.kt)("em",{parentName:"p"},"(\u6bd4\u5982H2\u7684",(0,l.kt)("inlineCode",{parentName:"em"},"limit ? offset ?"),")")))),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Jimmer\u4e0d\u4f46\u80fd\u81ea\u52a8\u751f\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"count-query"),"\uff0c\u8fd8\u80fd\u81ea\u52a8\u4f18\u5316",(0,l.kt)("inlineCode",{parentName:"p"},"count-query"),"\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"./unncessary-join"},"\u8868\u8fde\u63a5\u4f18\u5316")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2778 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit(limit, offset)"),": \u5728\u4e0d\u4fee\u6539\u539f\u6837\u677f\u67e5\u8be2\u7684\u57fa\u7840\u4e0a\uff0c\u751f\u6210\u771f\u6b63\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"data-query"),"\uff0c\u5e26\u4e0a\u5206\u9875\u9650\u5236\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2779 \u6267\u884c\u2778\u751f\u6210\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"data-query"),"\uff0c\u5f97\u5230\u4e00\u9875\u5185\u7684\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u277a \u5c06\u2777\u548c\u2779\u53d6\u5f97\u7684\u6570\u636e\u7ec4\u5408\u6210page\u5bf9\u8c61\u5e76\u8fd4\u56de"))),(0,l.kt)("h2",{id:"\u65b9\u8a00"},"\u65b9\u8a00"),(0,l.kt)("p",null,"\u672c\u8282\u8ba8\u8bba\u4e0d\u540c\u6570\u636e\u5e93\u4e0b\u5e26\u5206\u9875\u8303\u56f4\u9650\u5236\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"data-query"),"\u7684SQL\u5b9e\u73b0"),(0,l.kt)("p",null,"\u8003\u8651\u5982\u4e0b\u5355\u9875\u5185\u6570\u636e\u67e5\u8be2"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = query\n    // highlight-next-line\n    .limit(/*limit*/ 10, /*offset*/ 90)\n    .execute();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = query\n    // highlight-next-line\n    .limit(limit = 10, offset = 90)\n    .execute()\n")))),(0,l.kt)("p",null,"\u8fd9\u91cc",(0,l.kt)("inlineCode",{parentName:"p"},"limit(limit, offset)"),"\u8bbe\u7f6e\u5206\u9875\u533a\u95f4\u3002"),(0,l.kt)("p",null,"\u4e0d\u540c\u7684\u6570\u636e\u5e93\u5bf9\u5206\u9875\u67e5\u8be2\u7684\u652f\u6301\u5927\u76f8\u5f84\u5ead\u3002\u6240\u4ee5\uff0c\u5728\u521b\u5efaSqlClient\u65f6\u9700\u8981\u6307\u5b9a\u65b9\u8a00"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SpingBoot\u7684\u914d\u7f6e\u65b9\u6cd5"),(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\uff0c\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.dialect"),"\uff0c\u503c\u4e3aJimmer\u63d0\u4f9b\u7684\u65b9\u8a00\u7c7b\u7684\u7c7b\u540d:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:'language-title="application.yml"'},"jimmer:\n    dialect: org.babyfish.jimmer.sql.dialect.H2Dialect\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u975eSpringBoot\u7684\u914d\u7f6e\u65b9\u6cd5"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDialect(new H2Dialect())\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n    .build();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setDialect(H2Dialect())\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")))))),(0,l.kt)("p",null,"\u4e0d\u540c\u7684\u65b9\u8a00\uff0c\u4f1a\u7528\u4e0d\u540c\u7684SQL\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"p"},"limit"),"\u67e5\u8be2"),(0,l.kt)("h3",{id:"\u9ed8\u8ba4\u884c\u4e3a"},"\u9ed8\u8ba4\u884c\u4e3a"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u884c\u4e3a\u5305\u542b\u542bDefaultDialect\u3001H2Dialect\u548cPostgresDialect")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \nleft join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere tb_1_.PRICE between ? and ? \norder by tb_2_.NAME asc, tb_1_.NAME asc \n/* highlight-next-line */\nlimit ? offset ?\n")),(0,l.kt)("h3",{id:"mysqldialect"},"MySqlDialect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \nleft join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere tb_1_.PRICE between ? and ? \norder by tb_2_.NAME asc, tb_1_.NAME asc \n/* highlight-next-line */\nlimit ?, ?\n")),(0,l.kt)("h3",{id:"oracledialect"},"OracleDialect"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f53offset\u4e0d\u4e3a0\u65f6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select * from (\n    select core__.*, rownum rn__ \n    from (\n        select \n            tb_1_.ID, \n            tb_1_.NAME, \n            tb_1_.EDITION, \n            tb_1_.PRICE, \n            tb_1_.STORE_ID\n        from BOOK as tb_1_ \n        left join BOOK_STORE as tb_2_ \n            on tb_1_.STORE_ID = tb_2_.ID \n        where tb_1_.PRICE between ? and ? \n        order by tb_2_.NAME asc, tb_1_.NAME asc \n    ) core__ where rownum <= ? \u2776\n) limited__ where rn__ > ? \u2777\n")),(0,l.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u2776"),"\u5904\u53d8\u91cf\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"limit + offset"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u2777"),"\u5904\u53d8\u91cf\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"offset"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f53offset\u4e3a0\u65f6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select core__.* from (\n    select \n        tb_1_.ID, \n        tb_1_.NAME, \n        tb_1_.EDITION, \n        tb_1_.PRICE, \n        tb_1_.STORE_ID\n    from BOOK as tb_1_ \n    left join BOOK_STORE as tb_2_ \n        on tb_1_.STORE_ID = tb_2_.ID \n    where tb_1_.PRICE between ? and ? \n    order by tb_2_.NAME asc, tb_1_.NAME asc \n) core__ where rownum <= ? \u2776\n")),(0,l.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c\u2776\u5904\u53d8\u91cf\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"limit")))),(0,l.kt)("h2",{id:"\u548c\u5bf9\u8c61\u6293\u53d6\u5668\u914d\u5408"},"\u548c\u5bf9\u8c61\u6293\u53d6\u5668\u914d\u5408"),(0,l.kt)("p",null,"\u5bf9\u8c61\u6293\u53d6\u5668\u4e2d\u5b9a\u4e49\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u5f62\u72b6\uff0c\u8ba9\u88ab\u67e5\u8be2\u5bf9\u8c61\u53ef\u4ee5\u9644\u5e26\u66f4\u591a\u5173\u8054\u5bf9\u8c61\u3002\u6b64\u529f\u80fd\u53ef\u4ee5\u548c\u5206\u9875\u4e00\u8d77\u4f7f\u7528\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Jimmer\u5728\u5206\u9875\u67e5\u8be2\u5b8c\u6210\u540e\u542f\u52a8\u5bf9\u5176\u4ed6\u5173\u8054\u5ea6\u5bf9\u8c61\u7684\u67e5\u8be2\uff0c\u53ea\u9488\u5bf9\u5355\u9875\u4e4b\u5185\u7684\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,"\u4ee5SpringBoot\u6a21\u5f0f\u4e3a\u4f8b\uff0c\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u4fee\u6539\u4e4b\u524d\u8ba8\u8bba\u8fc7\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"BookRepository"),"\uff0c\u8ba9\u5176\u652f\u6301\u5bf9\u8c61\u6293\u53d6\u5668"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\npublic interface BookRepository<Book, Long> extends JRepository<Book, Long> {\n\n    BookTable table = BookTable.$;\n\n    default Page<Book> findBooks(\n        Pageable pageable,\n        // highlight-next-line\n        @Nullable Fetch<Book> fetcher,\n        @Nullable String name,\n        @Nullable String storeName\n    ) {\n        // highlight-next-line\n        return pager(pageable).excute(\n            sql()\n                .createQuery(table)\n                .whereIf(\n                    name != null && !name.isEmpty(),\n                    table.name().eq(name)\n                )\n                .whereIf(\n                    storeName != null && !storeName.isEmpty(),\n                    table.store().name().eq(storeName)\n                )\n                .orderBy(SpringOrders.toOrders(table, pageable.getSort()))\n                .select(\n                    // highlight-next-line\n                    table.fetch(fetcher)\n                )\n        );\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"import org.springframework.data.domain.Page\nimport org.springframework.data.domain.Pageable\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\ninterface BookRepository<Book, Long> : KRepository<Book, Long> {\n\n    fun findBooks(\n        pageable: Pageable,\n        // highlight-next-line\n        fetcher: Fetcher<Book>? = null,\n        name: String? = null,\n        storeName: String? = null\n    ): Page<Book> =\n        sql\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name eq it)\n                }\n                storeName?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.store.name eq it)\n                }\n                orderBy(pageable.sort)\n                select(\n                    // highlight-next-line\n                    table.fetch(fetcher)\n                )\n            }\n            // highlight-next-line\n            .fetchPage(\n                pageable.pageNumber,\n                pageable.pageSize\n            )\n}\n")))),(0,l.kt)("p",null,"\u5982\u679c\u6309\u5982\u4e0b\u4ee3\u7801\u8c03\u7528\u5b83"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Page.java"',title:'"Page.java"'},'Page<Book> page = bookRepository.findBooks(\n    PageRequest.of(\n        1,\n        5,\n        SortUtils.toSort("name asc, edition desc")\n    ),\n    BookFetcher.$\n        .allScalarFields()\n        .store(\n            BookStoreFetcher.$\n                .allScalarFields()\n        )\n        .authors(\n            AuthorFetcher.$\n                .allScalarFields()\n        ),\n    null,\n    null\n);\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Page.kt"',title:'"Page.kt"'},'val page = bookRepository.findBooks(\n    PageRequest.of(\n        1,\n        5,\n        SortUtils.toSort("name asc, edition desc")\n    ),\n    newFetcher(Book::class).by {\n        allScalarFields()\n        store {\n            allScalarFields()\n        }\n        authors {\n            allScalarFields()\n        }\n    }\n)\n')))),(0,l.kt)("p",null,"\u4f1a\u751f\u6210\u5982\u4e0b4\u6761SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"count-query"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    count(tb_1_.ID)\nfrom BOOK tb_1_\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"data-query ",(0,l.kt)("em",{parentName:"p"},"\uff08\u5047\u8bbe\u6570\u636e\u5e93\u662fH2\uff09")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit ? /* 5 */, ? /* 5 */\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e3a\u5206\u9875\u540e\u76845\u4e2a\u5bf9\u8c61\u67e5\u8be2\u591a\u5bf9\u4e00\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME\nfrom BOOK_STORE tb_1_\nwhere\n    tb_1_.ID in (\n        ? /* 2 */, ? /* 1 */\n    )\n")),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u867d\u7136\u5206\u9875\u540e\u7684\u5bf9\u8c61\u67095\u4e2a\uff0c\u4f46\u662f\u5b83\u4eec\u7684\u5916\u952e",(0,l.kt)("inlineCode",{parentName:"p"},"STORE_ID"),"\u53ea\u6709\u4e24\u4e2a\u53d6\u503c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e3a\u5206\u9875\u540e\u76845\u4e2a\u5bf9\u8c61\u67e5\u8be2\u591a\u5bf9\u591a\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_2_.BOOK_ID,\n    tb_1_.ID,\n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME\nfrom AUTHOR tb_1_\ninner join BOOK_AUTHOR_MAPPING tb_2_\n    on tb_1_.ID = tb_2_.AUTHOR_ID\nwhere\n    tb_2_.BOOK_ID in (\n        ? /* 10 */, ? /* 3 */, ? /* 2 */, \n        ? /* 1 */, ? /* 9 */\n    )\n")))))}g.isMDXComponent=!0}}]);