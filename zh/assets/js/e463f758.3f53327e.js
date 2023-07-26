"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4446],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,d=c["".concat(m,".").concat(k)]||c[k]||s[k]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),r=n(34334),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(83117),r=n(67294),i=n(34334),l=n(72389),o=n(67392),m=n(7094),p=n(12466),u="tabList__CuJ",s="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,k=e.defaultValue,d=e.values,h=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===k?k:null!=(t=null!=k?k:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,m.U)(),j=y.tabGroupChoices,C=y.setTabGroupChoices,x=(0,r.useState)(f),T=x[0],S=x[1],E=[],B=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=j[h];null!=O&&O!==T&&g.some((function(e){return e.value===O}))&&S(O)}var w=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==T&&(B(t),S(a),null!=h&&C(h,String(a)))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var i,l=E.indexOf(e.currentTarget)-1;n=null!=(i=E[l])?i:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},b)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:M,onFocus:w,onClick:w},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function k(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},7311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return k}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=n(65488),o=n(85162),m=["components"],p={sidebar_position:4,title:"Spring Cloud\u548c\u8fdc\u7a0b\u5173\u8054"},u=void 0,s={unversionedId:"team-work/spring/spring-cloud",id:"team-work/spring/spring-cloud",title:"Spring Cloud\u548c\u8fdc\u7a0b\u5173\u8054",description:"\u8fdc\u7a0b\u5173\u8054\u662fJimmer\u5bf9\u5fae\u670d\u52a1\u67b6\u6784\u7684\u9996\u6b21\u601d\u8003\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/spring/spring-cloud.mdx",sourceDirName:"team-work/spring",slug:"/team-work/spring/spring-cloud",permalink:"/jimmer/zh/docs/team-work/spring/spring-cloud",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/spring/spring-cloud.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Spring Cloud\u548c\u8fdc\u7a0b\u5173\u8054"},sidebar:"tutorialSidebar",previous:{title:"\u751f\u6210\u524d\u7aef\u5f02\u5e38",permalink:"/jimmer/zh/docs/team-work/spring/client/error"},next:{title:"\u9644\u5f55",permalink:"/jimmer/zh/docs/team-work/spring/appendix"}},c={},k=[{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",level:2},{value:"\u5b9e\u4f53\u5b9a\u4e49",id:"\u5b9e\u4f53\u5b9a\u4e49",level:2},{value:"\u6ce8\u518c\u4e2d\u5fc3",id:"\u6ce8\u518c\u4e2d\u5fc3",level:2},{value:"\u5b9e\u73b0\u5404\u670d\u52a1",id:"\u5b9e\u73b0\u5404\u670d\u52a1",level:2},{value:"\u8ba9Jimmer\u652f\u6301\u5fae\u670d\u52a1",id:"\u8ba9jimmer\u652f\u6301\u5fae\u670d\u52a1",level:3},{value:"\u5b9e\u73b0\u4e1a\u52a1\u7684\u67e5\u8be2",id:"\u5b9e\u73b0\u4e1a\u52a1\u7684\u67e5\u8be2",level:3},{value:"\u8fd0\u884c\u6548\u679c",id:"\u8fd0\u884c\u6548\u679c",level:3}],d={toc:k};function h(e){var t=e.components,p=(0,r.Z)(e,m);return(0,i.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fdc\u7a0b\u5173\u8054\u662fJimmer\u5bf9\u5fae\u670d\u52a1\u67b6\u6784\u7684\u9996\u6b21\u601d\u8003\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u5782\u76f4\u5207\u5206\uff0c\u5b9e\u4f53\u7c7b\u578b\u53ef\u4ee5\u88ab\u5212\u5206\u5230\u4e0d\u540c\u7684\u5fae\u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u88ab\u5212\u5206\u5230\u4e0d\u540c\u7684\u6570\u636e\u5e93\u4e2d\u3002\u96b6\u5c5e\u4e8e\u4e0d\u540c\u7684\u5fae\u670d\u52a1\u5b9e\u4f53\u7c7b\u578b\u4e4b\u95f4\u5173\u8054 ",(0,i.kt)("em",{parentName:"p"},"(\u5305\u62ec\u4e00\u5bf9\u4e00\u3001\u591a\u5bf9\u4e00\u3001\u4e00\u5bf9\u591a\u548c\u591a\u5bf9\u591a)")," \u5c31\u662f\u8fdc\u7a0b\u5173\u8054\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Jimmer\u81ea\u52a8\u5b9e\u73b0\u8fdc\u7a0b\u5173\u8054\u6570\u636e\u7684\u81ea\u52a8\u67e5\u8be2\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u5373\uff0c\u5982\u679c",(0,i.kt)("a",{parentName:"p",href:"../query/object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u4e2d\u5305\u542b\u4efb\u610f\u6df1\u5ea6\u7684\u8fdc\u7a0b\u5173\u8054\u5c5e\u6027\uff0c\u5c31\u4f1a\u8de8\u8d8a\u591a\u4e2a\u5fae\u670d\u52a1\u67e5\u8be2\u6570\u636e\u7684\u4e0d\u540c\u90e8\u5206\uff0c\u6700\u540e\u5c06\u4e0d\u540c\u90e8\u5206\u7684\u67e5\u8be2\u7ed3\u679c\u5408\u5e76\u6210\u5bf9\u8c61\u6293\u53d6\u5668\u6240\u671f\u671b\u7684\u6570\u636e\u7ed3\u6784\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u8fd4\u56de\u3002\u65e0\u9700\u5f00\u53d1\u4eba\u5458\u81ea\u5df1\u5b9e\u73b0\u8fdc\u7a0b\u67e5\u8be2\u548c\u6570\u636e\u62fc\u63a5\u3002")),(0,i.kt)("h2",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),(0,i.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u5404\u5b9e\u4f53\u5982\u6b64\u5212\u5206"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cloud.jpg",src:n(22).Z,width:"1448",height:"436"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"BOOK_AUTHOR_MAPPING"),"\u4f5c\u4e3a\u591a\u5bf9\u591a\u5173\u8054\u4e2d\u95f4\u8868\uff0c\u65e2\u53ef\u4ee5\u5212\u5206\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"book-service"),"\u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u5212\u5206\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"author-service"),"\u670d\u52a1\u3002\u672c\u4f8b\u5c06\u4e4b\u5212\u5206\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"book-service"),"\u670d\u52a1\uff0c\u539f\u56e0\u4f1a\u5728\u540e\u95ee\u9610\u8ff0\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b9e\u7ebf\u7bad\u5934\u8868\u793a\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u4e2d\u7684\u5916\u952e\u5f15\u7528\uff0c\u771f\u4f2a\u53ef\u4ee5\u7531\u5f00\u53d1\u4eba\u5458\u81ea\u7531\u9009\u62e9\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u865a\u7ebf\u7bad\u5934\u8868\u793a\u8de8\u8d8a\u6570\u636e\u5e93\u8fb9\u754c\u7684\u5916\u952e\u5f15\u7528\uff0c\u53ea\u80fd\u662f\u4f2a\u5916\u952e\u3002")))),(0,i.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u8ba8\u8bba\uff0c\u4e09\u4e2a\u670d\u52a1\u7684\u6570\u636e\u5e93\u521d\u59cb\u5316\u811a\u672c\u5982\u4e0b"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u8bed\u8a00"),(0,i.kt)("th",null,"\u4f8b\u5b50"),(0,i.kt)("th",null,"\u670d\u52a1(\u5b50\u9879\u76ee)"),(0,i.kt)("th",null,"\u6570\u636e\u5e93\u521d\u59cb\u5316SQL"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"3"},"Java"),(0,i.kt)("td",{rowspan:"3"},(0,i.kt)("a",{href:"https://github.com/babyfish-ct/jimmer/blob/main/example/java/jimmer-cloud"},"example/java/jimmer-cloud")),(0,i.kt)("td",null,"store-service"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/babyfish-ct/jimmer/blob/main/example/java/jimmer-cloud/store-service/src/main/resources/store.sql"},"jimmer-cloud/store-service/src/main/resources/store.sql"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"book-service"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/babyfish-ct/jimmer/blob/main/example/java/jimmer-cloud/book-service/src/main/resources/book.sql"},"jimmer-cloud/book-service/src/main/resources/book.sql"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"author-service"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/babyfish-ct/jimmer/blob/main/example/java/jimmer-cloud/author-service/src/main/resources/author.sql"},"jimmer-cloud/author-service/src/main/resources/author.sql"))),(0,i.kt)("tr",null,(0,i.kt)("td",{rowspan:"3"},"Kotlin"),(0,i.kt)("td",{rowspan:"3"},(0,i.kt)("a",{href:"https://github.com/babyfish-ct/jimmer/blob/main/example/kotlin/jimmer-cloud-kt"},"example/kotlin/jimmer-cloud-kt")),(0,i.kt)("td",null,"store-service"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/babyfish-ct/jimmer/blob/main/example/kotlin/jimmer-cloud-kt/store-service/src/main/resources/store.sql"},"jimmer-cloud-kt/store-service/src/main/resources/store.sql"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"book-service"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/babyfish-ct/jimmer/blob/main/example/kotlin/jimmer-cloud-kt/book-service/src/main/resources/book.sql"},"jimmer-cloud-kt/book-service/src/main/resources/book.sql"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"author-service"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://github.com/babyfish-ct/jimmer/blob/main/example/kotlin/jimmer-cloud-kt/author-service/src/main/resources/author.sql"},"jimmer-cloud-kt/author-service/src/main/resources/author.sql"))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u9644\u5e26\u7684\u4f8b\u5b50",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/blob/main/example/java/jimmer-cloud"},"example/java/jimmer-cloud"),"\n\u6216",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/blob/main/example/kotlin/jimmer-cloud-kt"},"example/kotlin/jimmer-cloud-kt"),"\n\u4f7f\u7528H2\uff0c\u5404\u670d\u52a1\u542f\u52a8\u540e\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u5404\u81ea\u7684\u6570\u636e\u5e93\u3002")),(0,i.kt)("h2",{id:"\u5b9e\u4f53\u5b9a\u4e49"},"\u5b9e\u4f53\u5b9a\u4e49"),(0,i.kt)("p",null,"\u5728\u4e00\u4e2a\u72ec\u7acb\u7684\u5b50\u9879\u76ee\u4e2d ",(0,i.kt)("em",{parentName:"p"},"(\u9644\u5e26\u4f8b\u5b50\u4e3a\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/java/jimmer-cloud/model"},"example/java/jimmer-cloud/model"),"\u6216\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/kotlin/jimmer-cloud-kt/model"},"example/kotin/jimmer-cloud-kt/model"),"\n)"),"\uff0c\u5b9a\u4e49\u6240\u6709\u5b9e\u4f53\u7c7b\u578b\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u5b9e\u4f53\u7c7b\u578b\u6784\u6210\u4e86\u5168\u5c40\u6a21\u578b\uff0c\u5b9e\u4f53\u7c7b\u578b\u96b6\u5c5e\u4e8e\u4e0d\u540c\u7684\u5fae\u670d\u52a1\u3002\u96b6\u5c5e\u4e8e\u4e0d\u540c\u5fae\u670d\u52a1\u4e2d\u7684\u5b9e\u4f53\u4e4b\u95f4\u6784\u6210\u4e86\u8fdc\u7a0b\u5173\u8054\uff0c\u5176\u5b9e\u53ef\u4ee5\u7406\u89e3\u6210\u5b9a\u4e49\u5728\u4e0d\u540c\u5fae\u670d\u52a1\u4e4b\u95f4\u7684\u5b9e\u4f53\u5f7c\u6b64\u4ea4\u4e92\u5951\u7ea6\u3002"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.java"',title:'"BookStore.java"'},'// highlight-next-line\n@Entity(microServiceName = "store-service")\npublic interface BookStore {\n\n    // highlight-next-line\n    @OneToMany(mappedBy = "store")\n    List<Book> books();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStore.kt"',title:'"BookStore.kt"'},'// highlight-next-line\n@Entity(microServiceName = "store-service")\ninterface BookStore {\n\n    // highlight-next-line\n    @OneToMany(mappedBy = "store")\n    val books: List<Book>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'// highlight-next-line\n@Entity(microServiceName = "book-service")\npublic interface Book {\n\n    @Nullable\n    // highlight-next-line\n    @ManyToOne\n    BookStore store();\n\n    // highlight-next-line\n    @ManyToMany\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'// highlight-next-line\n@Entity(microServiceName = "book-service")\ninterface Book {\n\n    // highlight-next-line\n    @ManyToOne\n    val store: BookStore?\n\n    // highlight-next-line\n    @ManyToMany\n    val authors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'// highlight-next-line\n@Entity(microServiceName = "author-service")\npublic interface Book {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'// highlight-next-line\n@Entity(microServiceName = "author-service")\ninterface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u7c7b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@Entity"),"\u6ce8\u89e3\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"microServiceName"),"\u88ab\u6307\u5b9a\uff0c\u8fd9\u6837\uff0c\u8bf4\u660e\u6bcf\u4e2a\u5b9e\u4f53\u5c5e\u4e8e\u90a3\u4e2a\u5fae\u670d\u52a1\uff0c\u5373\u5c5e\u4e8e\u90a3\u4e2a\u6570\u636e\u5e93\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5728\u672c\u4f8b\u4e2d\uff0c\u5b9e\u4f53\u7c7b\u578b",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Book"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"Author"),"\u5206\u522b\u96b6\u5c5e\u4e8e\u4e3a\u670d\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"store-service"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"book-service"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"author-service"),"\u3002"),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u7684\u5fae\u670d\u52a1\uff0c\u5c31\u662f\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u6bcf\u4e2a\u670d\u52a1\u7684\u540d\u79f0\uff0c\u5bf9\u4e8espring-cloud\u800c\u8a00\uff0c\u5c31\u662f\u5168\u5c40\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"sping.application.name"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u96b6\u5c5e\u4e8e\u4e0d\u540c\u5fae\u670d\u52a1\u4e2d\u7684\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u8054\uff0c\u5c31\u662f\u8fdc\u7a0b\u5173\u8054\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u96b6\u5c5e\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"store-service"),"\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"Book"),"\u96b6\u5c5e\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"book-service"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"Author.books"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Book"),"\u96b6\u5c5e\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"book-service"),"\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"Author"),"\u96b6\u5c5e\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"author-service"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u591a\u5bf9\u4e00\u5173\u8054",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5fc5\u987b\u53ef",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u56e0\u4e3a\u8fdc\u7a0b\u5173\u8054\u8868\u793a\u5176\u5916\u952e\u5fc5\u7136\u5f15\u7528\u53e6\u5916\u4e00\u4e2a\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u8bf4\u5fc5\u7136\u4e3a\u4f2a\u5916\u952e\u3002\u800cJimmer\u4e2d\u4f2a\u5916\u952e\u6240\u5bf9\u5e94\u7684\u5b57\u6bb5\u5fc5\u987b\u53ef",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,i.kt)("p",{parentName:"li"},"\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"../mapping/base/foreignkey"},"\u771f\u5047\u5916\u952e"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u4e66\u7c4d\u548c\u4f5c\u8005\u4e4b\u95f4\u7684\u53cc\u5411\u591a\u5bf9\u591a\u5173\u8054\u800c\u8a00\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u662f\u4e3b\u52a8\u65b9\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"Author.books"),"\u662f\u4ece\u52a8\u65b9 ",(0,i.kt)("em",{parentName:"p"},"(",(0,i.kt)("inlineCode",{parentName:"em"},"@ManyToMany"),"\u7684",(0,i.kt)("inlineCode",{parentName:"em"},"mappedBy"),"\u88ab\u914d\u7f6e)"),"\u3002"),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Jimmer\u89c4\u5b9a\u8fdc\u7a0b\u5173\u8054\u7684\u4e2d\u95f4\u8868\u5fc5\u987b\u96b6\u5c5e\u4e8e\u4e3b\u52a8\u65b9\u5b9e\u4f53\u6240\u5c5e\u7684\u5fae\u670d\u52a1\u3002")),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u56de\u7b54\u4e86\u524d\u6587\u7559\u4e0b\u7684\u95ee\u9898\uff0c\u4e3a\u4f55\u5728\u672c\u4f8b\u4e2d\u4e2d\u95f4\u8868",(0,i.kt)("inlineCode",{parentName:"p"},"BOOK_AUTOHOR_MAPPING"),"\u5b9a\u4e49\u5728\u5fae\u670d\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"book-service"),"\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u800c\u4e0d\u5b9a\u4e49\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"author-service"),"\u7684\u6570\u636e\u5e93\u4e2d\u3002"))),(0,i.kt)("h2",{id:"\u6ce8\u518c\u4e2d\u5fc3"},"\u6ce8\u518c\u4e2d\u5fc3"),(0,i.kt)("p",null,"\u5fae\u670d\u52a1\u5e94\u7528\u9700\u8981\u4e00\u4e2a\u6ce8\u518c\u4e2d\u5fc3\uff0c\u8fd9\u662f\u5fae\u670d\u52a1\u67b6\u6784\u7684\u57fa\u672c\u7279\u5f81\uff0c\u672c\u6587\u65e0\u9700\u505a\u4efb\u4f55\u9610\u8ff0\u3002"),(0,i.kt)("p",null,"\u9644\u5e26\u4f8b\u5b50\u4e2d\uff0c\u4e3a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/blob/main/example/java/jimmer-cloud/registry-center"},"example/java/jimmer-cloud/registry-center"),"\n\u6216",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/blob/main/example/kotlin/jimmer-cloud-kt/registry-center"},"example/kotlin/jimmer-cloud-kt/registry-center")),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u5404\u670d\u52a1"},"\u5b9e\u73b0\u5404\u670d\u52a1"),(0,i.kt)("p",null,"\u7531\u4e8e\u5fae\u670d\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"store-service"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"book-service"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"author-service"),"\u7684\u5b9e\u73b0\u65b9\u5f0f\u9ad8\u5ea6\u96f7\u540c\uff0c\u6240\u4ee5\u672c\u6587\u6863\u4ec5\u8bb2\u89e3\u5982\u4f55\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"store-service"),"\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u867d\u7136\u672c\u6587\u53ea\u8bb2\u89e3",(0,i.kt)("inlineCode",{parentName:"p"},"store-service"),"\uff0c\u4f46\u8981\u8fd0\u884c\u8d77\u6765\u4f53\u9a8c\u8fdc\u7a0b\u5173\u8054\u7684\u6548\u679c\uff0c\u9700\u8981\u628a\u4e09\u4e2a\u670d\u52a1\u90fd\u5b9e\u73b0\u5b8c\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u5b8c\u6574\u7684\u4ee3\u7801\u53ef\u53c2\u89c1\u9644\u5e26\u7684\u4f8b\u5b50",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/blob/main/example/java/jimmer-cloud"},"example/java/jimmer-cloud"),"\n\u6216",(0,i.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/blob/main/example/kotlin/jimmer-cloud-kt"},"example/kotlin/jimmer-cloud-kt"),"\u3002")),(0,i.kt)("h3",{id:"\u8ba9jimmer\u652f\u6301\u5fae\u670d\u52a1"},"\u8ba9Jimmer\u652f\u6301\u5fae\u670d\u52a1"),(0,i.kt)("p",null,"\u4efb\u4f55\u4e00\u4e2a\u5fae\u670d\u52a1\uff0c\u90fd\u5fc5\u987b\u8ba9Jimmer\u652f\u6301\u5fae\u670d\u52a1\u3002\u6709\u4e24\u79cd\u505a\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528Spring Boot Starter"),(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539spring\u914d\u7f6e\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,i.kt)("em",{parentName:"p"},"(\u6216",(0,i.kt)("inlineCode",{parentName:"em"},"application.properties"),")")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"spring:\n    application:\n    # highlight-next-line\n        name: store-service\n\njimmer:\n# highlight-next-line\n    micro-service-name: ${spring.application.name}\n...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n\neureka:\n    client:\n        serviceUrl:\n        defaultZone: http://localhost:7000/eureka/\n")),(0,i.kt)("p",{parentName:"li"},'\u8fd9\u91cc\uff0c"store-service"\u65e2\u4f5c\u4e3a\u5f53\u524d\u670d\u52a1\u5728spring-clound\u6ce8\u518c\u4e2d\u5fc3\u7684\u540d\u79f0\uff0c\u53c8\u4f5c\u4e3aJimmer\u7684\u5fae\u670d\u52a1\u914d\u7f6e\u3002')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5e95\u5c42API\u65f6"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setMicroServiceName("...")\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val sqlClient = newKSqlClient {\n    setMicroServiceName("...")\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n')))))),(0,i.kt)("p",null,"\u4e00\u65e6\u914d\u7f6e\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"jimmer.micro-service-name"),", Jimmer\u5c31\u660e\u767d\u4e86\u54ea\u4e9b\u5b9e\u4f53\u7c7b\u578b\u96b6\u5c5e\u4e8e\u5f53\u524d\u670d\u52a1 ",(0,i.kt)("em",{parentName:"p"},"(\u8fd9\u91cc\u662f",(0,i.kt)("inlineCode",{parentName:"em"},"BookStore"),")"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528Jimmer\u7684ORM API\u64cd\u4f5c\u5f53\u524d\u5fae\u670d\u52a1\u7684\u5b9e\u4f53\u7c7b\u578b\uff0c\u5c06\u4f1a\u6b63\u786e\u6267\u884c\uff0c\u5982\u540c\u4e4b\u524d\u6240\u6709\u6587\u6863\u6240\u8bb2\u90a3\u6837\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528Jimmer\u7684ORM API\u64cd\u4f5c\u5176\u4ed6\u5fae\u670d\u52a1\u7684\u5b9e\u4f53\u7c7b\u578b\uff0c\u5c06\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u53ea\u8981\u6bcf\u4e2a\u670d\u52a1\u90fd\u4fdd\u8bc1",(0,i.kt)("inlineCode",{parentName:"p"},"spring.application.name"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"jimmer.micro-service-name"),"\u76f8\u540c\uff0cJimmer\u5c31\u4f1a\u81ea\u52a8\u5b9e\u73b0\u8fdc\u7a0b\u5173\u8054\u6570\u636e\u7684\u81ea\u52a8\u67e5\u8be2\uff0c\u65e0\u9700\u5f00\u53d1\u4eba\u5458\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\u3002")),(0,i.kt)("h3",{id:"\u5b9e\u73b0\u4e1a\u52a1\u7684\u67e5\u8be2"},"\u5b9e\u73b0\u4e1a\u52a1\u7684\u67e5\u8be2"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStoreService.java"',title:'"BookStoreService.java"'},'@GetMapping("/store/{id}/detail")\npublic @FetchBy("COMPLEX_FETCHER") BookStore findStoreDetail(\n        @PathVariable("id") long id\n) {\n    return storeRepository.findNullable(id, COMPLEX_FETCHER);\n}\n\npublic static final Fetcher<BookStore> COMPLEX_FETCHER =\n    BookStoreFetcher.$ \u2776\n        .allScalarFields()\n        .books( \u2777\n            BookFetcher.$\n                .allScalarFields()\n                .authors( \u2778\n                    AuthorFetcher.$\n                        .allScalarFields()\n                )\n        );\n'))),(0,i.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStoreService.kt"',title:'"BookStoreService.kt"'},'@GetMapping("/store/{id}/detail")\nfun findStoreDetail(\n    @PathVariable("id") id: Long\n): @FetchBy("COMPLEX_FETCHER") BookStore? =\n    storeRepository.findNullable(id, COMPLEX_FETCHER)\n\ncompanion object {\n\n    val COMPLEX_FETCHER = \n        newFetcher(BookStore::class).by { \u2776\n            allScalarFields()\n            books { \u2777\n                allScalarFields()\n                authors { \u2778\n                    allScalarFields()\n                }\n            }\n        }\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 \u805a\u5408\u6839\u67e5\u8be2\uff0c\u4ece\u5f53\u524d\u670d\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"store-service"),"\u6240\u5c5e\u6570\u636e\u5e93\u4e2d\u76f4\u63a5\u67e5\u8be2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 \u901a\u8fc7\u8fdc\u7a0b\u5173\u8054\u5c5e\u6027",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\u67e5\u8be2\u5173\u8054\u5bf9\u8c61"),(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7HTTP\u534f\u8bae\u8bbf\u95ee\u8fdc\u7a0b\u5fae\u670d\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"book-service"),"\u95f4\u63a5\u83b7\u53d6\u6570\u636e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2778 \u901a\u8fc7\u8fdc\u7a0b\u5173\u8054\u5c5e\u6027",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u67e5\u8be2\u5173\u8054\u5bf9\u8c61"),(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7HTTP\u534f\u8bae\u8bbf\u95ee\u8fdc\u7a0b\u5fae\u670d\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"author-service"),"\u95f4\u63a5\u83b7\u53d6\u6570\u636e"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u7528\u6237\u53ea\u9700\u8981\u5b9e\u73b0\u805a\u5408\u6839\u5bf9\u8c61\u7684\u67e5\u8be2\uff0c\u5173\u8054\u5c5e\u6027 ",(0,i.kt)("em",{parentName:"p"},"(\u5305\u62ec\u8fdc\u7a0b\u5173\u8054)")," \u7684\u67e5\u8be2\u7531Jimmer\u5168\u81ea\u52a8\u5316\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u5373\u4f7f\u4e0d\u4e3a\u53e6\u5916\u4e24\u4e2a\u5fae\u670d\u52a1",(0,i.kt)("inlineCode",{parentName:"p"},"book-service"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"author-service"),"\u7f16\u5199\u4efb\u4f55Java/Kotlin\u4ee3\u7801\uff0c\u53ea\u8981\u4fee\u6539\u5b83\u4eec\u7684\u914d\u7f6e\u6587\u4ef6\u652f\u6301\u4e86\u5fae\u670d\u52a1\uff0c\u672c\u670d\u52a1\u7684\u6b64\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u6b63\u786e\u8fd0\u884c\u3002")),(0,i.kt)("h3",{id:"\u8fd0\u884c\u6548\u679c"},"\u8fd0\u884c\u6548\u679c"),(0,i.kt)("p",null,"\u5047\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"store-service"),"\u5728\u672c\u673a\u88ab\u542f\u52a8\u4e14\u7aef\u53e3\u4e3a7001\uff0c\u8bbf\u95ee",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:7001/store/1/detail"),"\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"O\'REILLY",\n    "website":null,\n    // highlight-next-line\n    "books":[\n        {\n            "id":1,\n            "name":"Learning GraphQL",\n            "edition":1,\n            "price":50,\n            // highlight-next-line\n            "authors":[\n                {\n                    "id":1,\n                    "firstName":"Eve",\n                    "lastName":"Procello",\n                    "gender":"FEMALE"\n                },\n                {\n                    "id":2,\n                    "firstName":"Alex",\n                    "lastName":"Banks",\n                    "gender":"MALE"\n                }\n            ]\n        },\n        {\n            "id":2,\n            ...\u7565...\n        },\n        {\n            "id":3,\n            ...\u7565...\n        },\n        {\n            "id":4,\n            "name":"Effective TypeScript",\n            "edition":1,\n            "price":73,\n            // highlight-next-line\n            "authors":[\n                {\n                    "id":3,\n                    "firstName":"Dan",\n                    "lastName":"Vanderkam",\n                    "gender":"MALE"\n                }\n            ]\n        },\n        {\n            "id":5,\n            ...\u7565...\n        },\n        {\n            "id":6,\n            ...\u7565...\n        },\n        {\n            "id":7,\n            "name":"Programming TypeScript",\n            "edition":1,\n            "price":47.5,\n            // highlight-next-line\n            "authors":[\n                {\n                    "id":4,\n                    "firstName":"Boris",\n                    "lastName":"Cherny",\n                    "gender":"MALE"\n                }\n            ]\n        },\n        {\n            "id":8,\n            ...\u7565...\n        },\n        {\n            "id":9,\n            ...\u7565...\n        }\n    ]\n}\n')))}h.isMDXComponent=!0},22:function(e,t,n){t.Z=n.p+"assets/images/cloud-264fa807174035f57e76c08516fb33d5.jpg"}}]);