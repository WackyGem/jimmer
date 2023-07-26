"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7195],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),m=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(t),k=i,d=c["".concat(u,".").concat(k)]||c[k]||s[k]||r;return t?a.createElement(d,l(l({ref:n},p),{},{components:t})):a.createElement(d,l({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(67294),i=t(34334),r="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return k}});var a=t(83117),i=t(67294),r=t(34334),l=t(72389),o=t(67392),u=t(7094),m=t(12466),p="tabList__CuJ",s="tabItem_LNqP";function c(e){var n,t,l=e.lazy,c=e.block,k=e.defaultValue,d=e.values,I=e.groupId,b=e.className,y=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=d?d:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.l)(N,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===k?k:null!=(n=null!=k?k:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:y[0].props.value;if(null!==T&&!N.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.U)(),M=g.tabGroupChoices,f=g.setTabGroupChoices,h=(0,i.useState)(T),Z=h[0],O=h[1],B=[],j=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=I){var D=M[I];null!=D&&D!==Z&&N.some((function(e){return e.value===D}))&&O(D)}var A=function(e){var n=e.currentTarget,t=B.indexOf(n),a=N[t].value;a!==Z&&(j(n),O(a),null!=I&&f(I,String(a)))},w=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,i=B.indexOf(e.currentTarget)+1;t=null!=(a=B[i])?a:B[0];break;case"ArrowLeft":var r,l=B.indexOf(e.currentTarget)-1;t=null!=(r=B[l])?r:B[B.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},b)},N.map((function(e){var n=e.value,t=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===n?0:-1,"aria-selected":Z===n,key:n,ref:function(e){return B.push(e)},onKeyDown:w,onFocus:A,onClick:A},l,{className:(0,r.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":Z===n})}),null!=t?t:n)}))),l?(0,i.cloneElement)(y.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==Z})}))))}function k(e){var n=(0,l.Z)();return i.createElement(c,(0,a.Z)({key:String(n)},e))}},86169:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return I},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return k}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),l=t(65488),o=t(85162),u=["components"],m={sidebar_position:4,title:"\u591a\u5bf9\u591a"},p=void 0,s={unversionedId:"team-work/mapping/base/association/many-to-many",id:"team-work/mapping/base/association/many-to-many",title:"\u591a\u5bf9\u591a",description:"\u672c\u901a\u8fc7\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528@org.babyfish.jimmer.sql.ManyToMany\u6ce8\u89e3\u53ef\u4ee5\u58f0\u660e\u591a\u5bf9\u591a\u5173\u8054\u5c5e\u6027",source:"@site/docs/team-work/mapping/base/association/many-to-many.mdx",sourceDirName:"team-work/mapping/base/association",slug:"/team-work/mapping/base/association/many-to-many",permalink:"/jimmer/docs/team-work/mapping/base/association/many-to-many",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/mapping/base/association/many-to-many.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u591a\u5bf9\u591a"},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u5bf9\u591a",permalink:"/jimmer/docs/team-work/mapping/base/association/one-to-many"},next:{title:"\u547d\u540d\u7b56\u7565",permalink:"/jimmer/docs/team-work/mapping/base/naming-strategy"}},c={},k=[{value:"\u4e3b\u52a8\u65b9",id:"\u4e3b\u52a8\u65b9",level:2},{value:"\u4ece\u52a8\u65b9",id:"\u4ece\u52a8\u65b9",level:2},{value:"\u5982\u679c\u60f3\u4e3a\u4e2d\u95f4\u8868\u52a0\u5165\u4e1a\u52a1\u5b57\u6bb5",id:"\u5982\u679c\u60f3\u4e3a\u4e2d\u95f4\u8868\u52a0\u5165\u4e1a\u52a1\u5b57\u6bb5",level:2}],d={toc:k};function I(e){var n=e.components,m=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,m,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u901a\u8fc7\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.ManyToMany"),"\u6ce8\u89e3\u53ef\u4ee5\u58f0\u660e\u591a\u5bf9\u591a\u5173\u8054\u5c5e\u6027"),(0,r.kt)("p",null,"\u591a\u5bf9\u591a\u53ef\u652f\u6301\u53cc\u5411\u5173\u8054\uff0c\u5bf9\u4e8e\u53cc\u5411\u5173\u8054\u800c\u8a00\uff0c\u5176\u4e2d\u4e00\u65b9\u5fc5\u987b\u4e3b\u52a8\u65b9\uff0c\u53e6\u5916\u4e00\u65b9\u4e3a\u4ece\u52a8\u65b9\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e3b\u52a8\u65b9(\u5fc5\u987b)\uff1a\u771f\u6b63\u7684\u6570\u636e\u5e93\u548c\u5173\u8054\u5c5e\u6027\u4e4b\u95f4\u6620\u5c04\uff0c\u5b9e\u73b0\u5355\u5411\u591a\u5bf9\u591a\u5173\u8054\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ece\u52a8\u65b9(\u53ef\u9009)\uff1a\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u4e00\u4e2a\u5355\u5411\u5173\u8054\uff0c\u53ef\u4ee5\u4e3a\u6b64\u914d\u7f6e\u4ece\u52a8\u65b9\uff0c\u4f5c\u4e3a\u4e3b\u52a8\u65b9\u7684\u955c\u50cf\uff0c\u5f62\u6210\u53cc\u5411\u5173\u8054\u3002"))),(0,r.kt)("p",null,"\u6211\u4eec\u5047\u8bbe\u5b58\u5728\u4e66\u7c4dBook\u548c\u4f5c\u8005Author\u4e24\u79cd\u5b9e\u4f53\u7c7b\u578b\uff0c\u5e76\u5728\u5b83\u4eec\u4e4b\u95f4\u5efa\u7acb\u53cc\u5411\u591a\u5bf9\u591a\u5173\u8054\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u548cJPA/Hibernate\u4e0d\u540c\uff0c\u4e3b\u52a8\u65b9\u548c\u4ece\u52a8\u65b9\u53ef\u4ee5\u968f\u610f\u6289\u62e9\uff0c\u4e8c\u8005\u90fd\u53ef\u4ee5\u7528\u4e8e\u4fdd\u5b58\u5173\u8054\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6587\u4f8b\u5b50\u6289\u62e9\u5982\u4e0b\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e3b\u52a8\u65b9(\u5fc5\u987b)\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ece\u52a8\u65b9(\u53ef\u9009)\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Author.books"))))),(0,r.kt)("h2",{id:"\u4e3b\u52a8\u65b9"},"\u4e3b\u52a8\u65b9"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @ManyToMany\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    @ManyToMany\n    val authors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")))),(0,r.kt)("p",null,"\u591a\u5bf9\u591a\u5173\u8054\u5fc5\u987b\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b9e\u73b0\uff0c\u5373\u4fbf\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u5e76\u672a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinTable"),"\u6ce8\u89e3\uff0c\u5176\u5b9e\u4e5f\u7b49\u540c\u4e8e\u4f7f\u7528\u4e86\u8be5\u6ce8\u89e3\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5e76\u6ca1\u6709\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinTable"),"\u6307\u5b9a\u4efb\u4f55\u5c5e\u6027\uff0c\u751a\u81f3\u8fde",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinTable"),"\u672c\u8eab\u4e5f\u88ab\u5ffd\u7565\uff08\u5c31\u50cf\u524d\u9762\u7684\u4ee3\u7801\u4e00\u6837\uff09\uff0cJimmer\u4f1a\u6839\u636e",(0,r.kt)("a",{parentName:"p",href:"../naming-strategy"},"\u547d\u540d\u7b56\u7565"),"\u63a8\u5bfc",(0,r.kt)("inlineCode",{parentName:"p"},"authors"),"\u5c5e\u6027\u5bf9\u5e94\u7684\u5217\u540d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u7684",(0,r.kt)("a",{parentName:"p",href:"../naming-strategy"},"\u547d\u540d\u7b56\u7565"),"\u672a\u88ab\u7528\u6237\u8986\u76d6\uff0c\u63a8\u5bfc\u51fa\u7684\u4e2d\u95f4\u8868\u4fe1\u606f\u4e3a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u8868\u8868\u540d: BOOK_AUTHOR_MAPPING"),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u8868\u6307\u5411\u5f53\u524d\u5b9e\u4f53\u7684\u5916\u952e\u7684\u5217\u540d: BOOK_ID"),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u8868\u6307\u5411\u5173\u8054\u5b9e\u4f53\u7684\u5916\u952e\u7684\u5217\u540d: AUTHOR_ID")),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c\u4e4b\u524d\u7684\u4ee3\u7801\u548c\u8fd9\u91cc\u7684\u4ee3\u7801\u7b49\u4ef7\uff1a"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    val authors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,r.kt)("p",null,"\u4e2d\u95f4\u8868",(0,r.kt)("inlineCode",{parentName:"p"},"BOOK_AUTHOR_MAPPING"),"\u5b9a\u4e49\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table BOOK_AUTHOR_MAPPING(\n    BOOK_ID bigint not null,\n    AUTHOR_ID bigint not null\n);\n\nalter table AUTHOR_MAPPING\n    add constraint PK_AUTHOR_MAPPING\n        primary(BOOK_ID, AUTHOR_ID);\n\n// \u5982\u679c\u6307\u5411\u5f53\u524d\u5bf9\u8c61\u7684\u5916\u952e\u662f\u771f\u7684\uff0c\u5efa\u7acb\u5916\u952e\u7ea6\u675f\nalter table BOOK_AUTHOR_MAPPING\n    add constraint FK_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(BOOK_ID)\n            references BOOK(ID);\n\n// \u5982\u679c\u6307\u5411\u5173\u8054\u5bf9\u8c61\u7684\u5916\u952e\u662f\u771f\u7684\uff0c\u5efa\u7acb\u5916\u952e\u7ea6\u675f\nalter table BOOK_AUTHOR_MAPPING\n    add constraint FK_BOOK_AUTHOR_MAPPING__AUTHOR\n        foreign key(AUTHOR_ID)\n            references AUTHOR(ID);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e2d\u95f4\u8868\u7684\u53ea\u6709\u4e24\u4e2a\u5916\u952e\uff0c\u800c\u4e14\u90fd\u975enull\u3002\u4e2d\u95f4\u8868\u9760\u63d2\u5165\u6570\u636e\u548c\u5220\u9664\u6570\u636e\u7ef4\u62a4\u5173\u8054\uff0c\u672c\u8eab\u4ece\u4e0d\u5b58\u50a8null\u6570\u636e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e2d\u95f4\u8868\u6ca1\u6709\u5bf9\u5e94\u7684ORM\u5b9e\u4f53\uff0c\u65e0\u9700\u72ec\u7acb\u4e3b\u952e\uff0c\u4e24\u4e2a\u5916\u952e\u8054\u5408\u4f5c\u4e3a\u4e3b\u952e\u5373\u53ef"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToMany"),"\u5173\u8054\u5c5e\u6027\u5fc5\u987b\u975enull\uff0c\u5982\u679c\u67d0\u79cd\u5bf9\u8c61\u5e76\u8981\u6c42\u6293\u53d6\u5176\u591a\u5bf9\u591a\u5173\u8054\u5c5e\u6027\uff0c\u90a3\u4e48\u5bf9\u4e8e\u6ca1\u6709\u5bf9\u5e94\u5173\u8054\u5bf9\u8c61\u7684\u5f53\u524d\u5bf9\u8c61\u800c\u8a00\uff0c\u8be5\u5c5e\u6027\u7684\u503c\u662f\u4e00\u4e2a\u957f\u5ea6\u4e3a0\u7684\u96c6\u5408\uff0c\u800c\u975enull")),(0,r.kt)("h2",{id:"\u4ece\u52a8\u65b9"},"\u4ece\u52a8\u65b9"),(0,r.kt)("p",null,"\u4ece\u52a8\u65b9\u7684\u914d\u7f6e\u975e\u5e38\u7b80\u5355\uff0c\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"Author.books"),"\u5c5e\u6027\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u5c5e\u6027\u7684\u955c\u50cf\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5de6\u4fa7\uff1a\u4e0a\u4e00\u8282\u4e2d\u8ba8\u8bba\u8fc7\u7684\u4e3b\u52a8\u65b9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53f3\u4fa7\uff1a\u672c\u8282\u8981\u4ecb\u7ecd\u4ece\u52a8\u65b9\u5173\u8054",(0,r.kt)("inlineCode",{parentName:"p"},"Author.books"),"\uff0c\u5b83\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u7684\u955c\u50cf"))),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},'@ManyToMany(mappedBy = "store")'),"\uff0c\u6307\u5f53\u524d\u5c5e\u6027",(0,r.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u7684\u955c\u50cf\u3002"),(0,r.kt)("div",{style:{display:"flex",alignItems:"start"}},(0,r.kt)("div",null,(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    val authors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))))),(0,r.kt)("div",null,(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mirror",src:t(79442).Z,width:"130",height:"239"}))),(0,r.kt)("div",null,(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'@Entity\npublic interface Author {\n\n    // `mappedBy`\u8868\u793a`Author.books`\n    // \u662f`Book.authors`\u7684\u955c\u50cf\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'@Entity\ninterface Author {\n\n    // `mappedBy`\u8868\u793a`Author.books`\n    // \u662f`Book.authors`\u7684\u955c\u50cf\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e00\u65e6\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToMany"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"mappedBy"),"\u5c5e\u6027\uff0c\u5c31\u4e0d\u5f97\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinTable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u548c\u4e3b\u52a8\u65b9\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToMany"),"\u5173\u8054\u5c5e\u6027\u4e00\u6837\uff0c\u4ece\u52a8\u65b9\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToMany"),"\u5173\u8054\u5fc5\u987b\u975enull\u3002\u539f\u56e0\u76f8\u540c")))),(0,r.kt)("h2",{id:"\u5982\u679c\u60f3\u4e3a\u4e2d\u95f4\u8868\u52a0\u5165\u4e1a\u52a1\u5b57\u6bb5"},"\u5982\u679c\u60f3\u4e3a\u4e2d\u95f4\u8868\u52a0\u5165\u4e1a\u52a1\u5b57\u6bb5"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u672c\u6587\u6240\u8ba8\u8bba\u7684\u591a\u5bf9\u591a\u5173\u8054\u800c\u8a00\uff0c\u9664\u4e86\u4e24\u4e2a\u5916\u952e\u5916\uff0c\u4e2d\u95f4\u8868\u4e0d\u5f97\u5b9a\u4e49\u5176\u4ed6\u4e1a\u52a1\u5b57\u6bb5\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u5728\u591a\u5bf9\u591a\u5173\u8054\u4e2d\u95f4\u8868\u4e2d\u5b9a\u4e49\u66f4\u591a\u7684\u5176\u4ed6\u4e1a\u52a1\u5b57\u6bb5\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"../../advanced/view/many-to-many-view"},"ManyToManyView")))}I.isMDXComponent=!0},79442:function(e,n){n.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iMTI5LjUiIGhlaWdodD0iMjM5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIj48ZGVmcyBpZD0iU3ZnanNEZWZzMTAwMiI+PC9kZWZzPjxnIGlkPSJTdmdqc0cxMDA4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTTY1IDI1TDY1IDExOS41TDY1IDExOS41TDY1IDIxNCIgc3Ryb2tlPSIjMzIzMjMyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgaWQ9IlN2Z2pzRzEwMTAiIHRyYW5zZm9ybT0ibWF0cml4KDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxLC0xLDYuMTIzMjMzOTk1NzM2NzY2ZS0xNywxMDUsMjcpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxMSIgZD0iTSAwIDBMIDE4NCAwTCAxNzQgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDEzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNDhweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwMTk4NzIxMDI5N2UtMTYsLTEsMSwtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwyNS41MDAwMDAwMDAwMDAwMTgsMjEzLjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAxNSIgZD0iTSAwIDBMIDE4NyAwTCAxNzcgMjBMIDEwIDIwTCAwIDBaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTYiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDE3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIxNTBweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSItMC42MjUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48L3RleHQ+PC9nPjwvZz48L3N2Zz4="}}]);