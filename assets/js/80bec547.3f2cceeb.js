"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9971],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),k=l,s=d["".concat(u,".").concat(k)]||d[k]||c[k]||r;return a?n.createElement(s,i(i({ref:t},m),{},{components:a})):n.createElement(s,i({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),l=a(34334),r="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(83117),l=a(67294),r=a(34334),i=a(72389),o=a(67392),u=a(7094),p=a(12466),m="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,k=e.defaultValue,s=e.values,v=e.groupId,g=e.className,N=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=s?s:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===k?k:null!=(t=null!=k?k:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:N[0].props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),T=y.tabGroupChoices,E=y.setTabGroupChoices,B=(0,l.useState)(h),D=B[0],j=B[1],x=[],I=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var w=T[v];null!=w&&w!==D&&b.some((function(e){return e.value===w}))&&j(w)}var L=function(e){var t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==D&&(I(t),j(n),null!=v&&E(v,String(n)))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=x.indexOf(e.currentTarget)+1;a=null!=(n=x[l])?n:x[0];break;case"ArrowLeft":var r,i=x.indexOf(e.currentTarget)-1;a=null!=(r=x[i])?r:x[x.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return x.push(e)},onKeyDown:Z,onFocus:L,onClick:L},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":D===t})}),null!=a?a:t)}))),i?(0,l.cloneElement)(N.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function k(e){var t=(0,i.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},85832:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return k}});var n=a(83117),l=a(80102),r=(a(67294),a(3905)),i=a(65488),o=a(85162),u=["components"],p={sidebar_position:3,title:"\u903b\u8f91\u5220\u9664"},m=void 0,c={unversionedId:"team-work/mapping/advanced/logical-deleted",id:"team-work/mapping/advanced/logical-deleted",title:"\u903b\u8f91\u5220\u9664",description:"\u903b\u8f91\u5220\u9664\u4e5f\u79f0\u8f6f\u5220\u9664\uff0c\u8868\u793a\u5e76\u4e0d\u771f\u6b63\u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664\u6570\u636e\uff0c\u800c\u662f\u901a\u8fc7\u9690\u85cf\u6570\u636e\u6765\u8fbe\u5230\u6570\u636e\u88ab\u5220\u9664\u7684\u5047\u8c61\u3002\u8fd9\u53ef\u4ee5\u4e3a\u8bef\u64cd\u4f5c\u7559\u4e0b\u4e00\u6b21\u6062\u590d\u7684\u673a\u4f1a\u3002",source:"@site/docs/team-work/mapping/advanced/logical-deleted.mdx",sourceDirName:"team-work/mapping/advanced",slug:"/team-work/mapping/advanced/logical-deleted",permalink:"/jimmer/docs/team-work/mapping/advanced/logical-deleted",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/mapping/advanced/logical-deleted.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u903b\u8f91\u5220\u9664"},sidebar:"tutorialSidebar",previous:{title:"MappedSuperclass",permalink:"/jimmer/docs/team-work/mapping/advanced/mapped-super-class"},next:{title:"\u89c6\u56fe\u5c5e\u6027",permalink:"/jimmer/docs/team-work/mapping/advanced/view/"}},d={},k=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"boolean\u7c7b\u578b",id:"boolean\u7c7b\u578b",level:3},{value:"int\u7c7b\u578b",id:"int\u7c7b\u578b",level:3},{value:"\u679a\u4e3e\u7c7b\u578b",id:"\u679a\u4e3e\u7c7b\u578b",level:3},{value:"\u65e5\u671f",id:"\u65e5\u671f",level:3},{value:"\u591a\u89c6\u89d2\u7f13\u5b58\u652f\u6301",id:"\u591a\u89c6\u89d2\u7f13\u5b58\u652f\u6301",level:2}],s={toc:k};function v(e){var t=e.components,a=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u903b\u8f91\u5220\u9664\u4e5f\u79f0\u8f6f\u5220\u9664\uff0c\u8868\u793a\u5e76\u4e0d\u771f\u6b63\u4ece\u6570\u636e\u5e93\u4e2d\u5220\u9664\u6570\u636e\uff0c\u800c\u662f\u901a\u8fc7\u9690\u85cf\u6570\u636e\u6765\u8fbe\u5230\u6570\u636e\u88ab\u5220\u9664\u7684\u5047\u8c61\u3002\u8fd9\u53ef\u4ee5\u4e3a\u8bef\u64cd\u4f5c\u7559\u4e0b\u4e00\u6b21\u6062\u590d\u7684\u673a\u4f1a\u3002"),(0,r.kt)("p",null,"\u60f3\u8ba9\u5b9e\u4f53\u652f\u6301\u903b\u8f91\u5220\u9664\uff0c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u88ab",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.LogicalDeleted"),"\u7684\u6807\u5fd7\u5c5e\u6027\uff0c\u4ee5\u8868\u793a\u8be5\u6570\u636e\u662f\u6b63\u5e38\u7684\u8fd8\u662f\u5df2\u7ecf\u88ab\u5220\u9664\u3002"),(0,r.kt)("p",null,"\u4e00\u65e6\u4e3a\u5b9e\u4f53\u914d\u7f6e\u4e86\u903b\u8f91\u5220\u9664\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u8c03\u7528API\u5220\u9664\u67d0\u4e2a\u5b9e\u4f53\u5bf9\u8c61\u65f6\uff0cJimmer\u5e76\u4e0d\u4f1a\u7528SQL\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),"\u8bed\u53e5\u771f\u6b63\u5220\u9664\u6570\u636e\uff0c\u800c\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"update"),"\u8bed\u53e5\u628a\u8be5\u5b9e\u4f53\u7684\u903b\u8f91\u5220\u9664\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u201c\u5df2\u7ecf\u88ab\u5220\u9664\u201c"),(0,r.kt)("p",{parentName:"li"},"\u5176\u4ed6\u60c5\u51b5\uff1a\u5373\u4fbf\u5b9e\u4f53\u5177\u5907\u903b\u8f91\u5220\u9664\u5c5e\u6027\uff0cJimmer\u4e5f\u63d0\u4f9bAPI\u8ba9\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u989d\u5916\u7684\u53c2\u6570\u5f3a\u884c\u771f\u6b63\u5220\u9664\u5bf9\u8c61\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u9488\u5bf9\u5b9e\u4f53\u7684SQL\u67e5\u8be2\u90fd\u4f1a\u88ab\u81ea\u52a8\u52a0\u4e0a",(0,r.kt)("inlineCode",{parentName:"p"},"where \u8f6f\u5220\u9664\u6807\u5fd7 <> \u5df2\u7ecf\u88ab\u5220\u9664"),"\u7684\u6761\u4ef6\uff0c\u4ece\u800c\u8425\u9020\u51fa\u67d0\u4e9b\u6570\u636e\u5df2\u7ecf\u88ab\u5220\u9664\u7684\u5047\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5176\u4ed6\u60c5\u51b5\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jimmer\u63d0\u4f9b\u4e86\u4e00\u4e9b\u4fbf\u6377\u6027API\uff0c\u65e0\u9700\u7528\u6237\u521b\u5efa\u67e5\u8be2\uff0c\u63d0\u4f9b\u6839\u636eid ",(0,r.kt)("em",{parentName:"p"},"(\u6216id\u96c6\u5408)")," \u67e5\u8be2\u5b9e\u4f53",(0,r.kt)("em",{parentName:"p"},"(\u6216id\u96c6\u5408)")," \u7684\u80fd\u529b\u3002\u8fd9\u4e00\u7c07API\u8f83\u4e3a\u7279\u6b8a\uff0c\u65e0\u89c6\u8f6f\u5220\u9664\u89c4\u5219\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jimmer\u53ef\u4ee5\u5ffd\u7565\u903b\u8f91\u5220\u9664\u8fc7\u6ee4\u89c4\u5219 ",(0,r.kt)("em",{parentName:"p"},"(\u4e0d\u6dfb\u52a0\u8fc7\u6ee4\u6761\u4ef6)"),"\uff1b\u751a\u81f3\u53cd\u8f6c\u903b\u8f91\u5220\u9664\u8fc7\u6ee4\u89c4\u5219 ",(0,r.kt)("em",{parentName:"p"},"(\u6dfb\u52a0\u76f8\u53cd\u7684\u8fc7\u6ee4\u6761\u4ef6\uff0c\u4e13\u67e5\u5df2\u7ecf\u88ab\u5220\u9664\u7684\u6570\u636e)")))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u903b\u8f91\u5220\u9664\u662f\u4e00\u4e2a\u76f8\u5bf9\u56fa\u5b9a\u7684\u529f\u80fd\uff0c\u5728\u81ea\u52a8\u52a0\u5165\u67e5\u8be2\u8fc7\u6ee4\u6761\u4ef6\u8fd9\u65b9\u9762\uff0c\u66f4\u901a\u7528\u7684\u7684\u529f\u80fd\u662f",(0,r.kt)("a",{parentName:"p",href:"../../query/global-filter"},"\u5168\u5c40\u8fc7\u6ee4\u5668"),"\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4e8b\u5b9e\u4e0a\uff0c\u903b\u8f91\u5220\u9664\u672c\u8eab\u4e5f\u662f",(0,r.kt)("a",{parentName:"p",href:"../../query/global-filter"},"\u5168\u5c40\u8fc7\u6ee4\u5668"),"\uff0c\u662fJimmer\u5185\u7f6e\u63d0\u4f9b\u7684\uff0c\u65e0\u9700\u5f00\u53d1\u4eba\u5458\u5b9e\u73b0\u3002")),(0,r.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,r.kt)("p",null,"\u903b\u8f91\u5220\u9664\u6807\u5fd7\u5c5e\u6027\u53ef\u4ee5\u662f\u5982\u4e0b\u7c7b\u578b\u4e4b\u4e00"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"boolean\uff1a\u5fc5\u987b\u975enull"),(0,r.kt)("li",{parentName:"ul"},"int\uff1a\u5fc5\u987b\u975enull"),(0,r.kt)("li",{parentName:"ul"},"\u679a\u4e3e\uff1a\u5fc5\u987b\u975enull"),(0,r.kt)("li",{parentName:"ul"},"\u65e5\u671f\uff1a\u5fc5\u987b\u53efnull")),(0,r.kt)("h3",{id:"boolean\u7c7b\u578b"},"boolean\u7c7b\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528true\u8868\u793a\u88ab\u5220\u9664"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    boolean isDeleted();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    val isDeleted: Boolean\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528false\u8868\u793a\u88ab\u5220\u9664"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("false")\n    boolean isEnabled();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("false")\n    val isEnabled: Boolean\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))))),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"@LogicalDeleted"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\u53c2\u6570\uff0c\u5176\u5b9e\uff0c\u8be5\u6ce8\u89e3\u8fd8\u6709\u53e6\u5916\u4e00\u4e2a\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"restoredValue")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"value"),": \u5bf9\u8c61\u5904\u4e8e\u88ab\u5220\u9664\u72b6\u6001\u65f6\uff0c\u8be5\u5b57\u6bb5\u7684\u53d6\u503c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"restoredValue"),": \u5bf9\u8c61\u5904\u4e8e\u672a\u88ab\u5220\u9664\u72b6\u6001\u65f6\uff0c\u8be5\u5b57\u6bb5\u7684\u53d6\u503c"))),(0,r.kt)("p",null,"\u5f88\u660e\u663e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"restoredValue"),"\u4e0d\u80fd\u76f8\u7b49\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53\u6b64\u5c5e\u6027\u53ea\u6709\u4e24\u79cd\u53d6\u503c\u53ef\u80fd\u65f6 ",(0,r.kt)("em",{parentName:"p"},"(boolean\u6216\u53ea\u6709\u4e24\u4e2a\u9009\u9879\u7684\u679a\u4e3e\u7c7b\u578b)"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"restoredValue"),"\u53ef\u4ee5\u7701\u7565")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u4e0a\u9762\u4ee3\u7801\u4e2d\u793a\u8303\u7684\u6ce8\u89e3\uff0c\u5176\u5b9e\u662f\u7701\u7565\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"restoredValue"),"\u53c2\u6570\u7684\u5199\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'@LogicalDeleted("true")'),"\u5176\u5b9e\u662f",(0,r.kt)("inlineCode",{parentName:"p"},'@LogicalDeleted(value = "true", restoredValue = "false")'),"\u7684\u7b80\u5199")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'@LogicalDeleted("false")'),"\u5176\u5b9e\u662f",(0,r.kt)("inlineCode",{parentName:"p"},'@LogicalDeleted(value = "false", restoredValue = "true")'),"\u7684\u7b80\u5199"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u88ab\u7701\u7565\uff0c\u8fd8\u662f\u88ab\u5f00\u53d1\u4eba\u5458\u660e\u786e\u6307\u5b9a\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"restoredValue"),"\u53c2\u6570\u6709\u4e24\u4e2a\u4f5c\u7528"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u8c61\u9996\u6b21\u88ab\u4fdd\u5b58\u65f6\uff0c\u8be5\u5c5e\u6027\u7684\u9ed8\u8ba4\u503c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5904\u4e8e\u5df2\u5220\u9664\u72b6\u6001\u7684\u7684\u6570\u636e\u88ab\u518d\u6b21\u4fdd\u5b58\u65f6\uff0c\u5176\u72b6\u6001\u9700\u8981\u6062\u590d\u6210\u6b63\u5e38\u72b6\u6001\uff0c\u6b64\u65f6\uff0c\u8be5\u5c5e\u6027\u88ab\u81ea\u52a8\u590d\u4f4d\u7684\u503c")))),(0,r.kt)("h3",{id:"int\u7c7b\u578b"},"int\u7c7b\u578b"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted(value = "1", restoredValue = "0")\n    int state();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted(value = "1", restoredValue = "0")\n    val state: Int\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,r.kt)("h3",{id:"\u679a\u4e3e\u7c7b\u578b"},"\u679a\u4e3e\u7c7b\u578b"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5b9a\u4e49\u679a\u4e3e\u7c7b\u578b\uff0c\u8868\u793a\u6570\u636e\u7684\u72b6\u6001"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookState.java"',title:'"BookState.java"'},"public enum BookState {\n    INTIALIZED,\n    FROZEN,\n    PUBLISHED,\n    DELETED\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookState.kt"',title:'"BookState.kt"'},"enum class BookState {\n    INTIALIZED,\n    FROZEN,\n    PUBLISHED,\n    DELETED\n}\n")))),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted(\n        value = "DELETED", \n        restoredValue = "INTIALIZED"\n    )\n    BookState state();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted(\n        value = "DELETED", \n        restoredValue = "INTIALIZED"\n    )\n    val state: BookState\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u679a\u4e3e\u53ea\u6709\u4e24\u4e2a\u9009\u9879\uff0c\u53ef\u4ee5\u7701\u7565",(0,r.kt)("inlineCode",{parentName:"p"},"restoredValue"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u81f3\u4e8eJimmer\u4fdd\u5b58\u679a\u4e3e\u5c5e\u6027\u7684\u76f8\u5173\u914d\u7f6e\uff0c\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"./enum"},"Enum\u6620\u5c04"))),(0,r.kt)("h3",{id:"\u65e5\u671f"},"\u65e5\u671f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528\u975enull\u8868\u793a\u5df2\u5220\u9664\uff0cnull\u8868\u793a\u672a\u5220\u9664"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted(value = "now", restoredValue = "null")\n    @Nullable\n    LocalDateTime deletedTime();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted(value = "now", restoredValue = "null")\n    val deletedTime: LocalDateTime?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528null\u8868\u793a\u5df2\u5220\u9664\uff0c\u975enull\u8868\u793a\u672a\u5220\u9664"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted(value = "null", restoredValue = "now")\n    @Nullable\n    LocalDateTime createdTime();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted(value = "null", restoredValue = "now")\n    val createdTime: LocalDateTime?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))))),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"now"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"@LogicalDeleted"),"\u89c4\u5b9a\u7684\u7279\u6b8a\u53d6\u503c\uff0c\u8868\u793a\u5f53\u524d\u65f6\u95f4\u3002"),(0,r.kt)("h2",{id:"\u591a\u89c6\u89d2\u7f13\u5b58\u652f\u6301"},"\u591a\u89c6\u89d2\u7f13\u5b58\u652f\u6301"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u903b\u8f91\u5220\u9664\u672c\u8eab\u662f\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u529f\u80fd\uff0c\u5982\u679c\u4ec5\u4ec5\u5728SQL\u64cd\u4f5c\u7684\u5c42\u9762\u4f7f\u7528\u5b83\uff0c\u5b83\u5c31\u4ec5\u4ec5\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u67e5\u8be2\u6761\u4ef6\u6dfb\u52a0\u529f\u80fd\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u5982\u679c\u548cJimmer\u7684\u7f13\u5b58\u80fd\u529b\u4e00\u8d77\u4f7f\u7528\uff0c\u7531\u4e8e\u903b\u8f91\u5220\u9664\u672c\u8eab\u662f\u4e00\u79cd\u5185\u7f6e\u7684",(0,r.kt)("a",{parentName:"p",href:"../../query/global-filter"},"\u5168\u5c40\u8fc7\u6ee4\u5668"),"\uff0c\u8fd9\u4f1a\u6d89\u53ca\u5230",(0,r.kt)("a",{parentName:"p",href:"../../cache/multiview-cache"},"\u591a\u89c6\u89d2\u7f13\u5b58"),"\u95ee\u9898\uff0c\u8fd9\u70b9\u9700\u8981\u5f00\u53d1\u4eba\u5458\u77e5\u6089\u3002")),(0,r.kt)("p",null,"\u672c\u6587\u4e0d\u4f1a\u8ba8\u8bba",(0,r.kt)("a",{parentName:"p",href:"../../cache/multiview-cache"},"\u591a\u89c6\u89d2\u7f13\u5b58"),"\u4f01\u56fe\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898\u4ee5\u53ca\u5982\u4f55\u89e3\u51b3\u95ee\u9898\uff0c\u8fd9\u90e8\u5206\u5185\u5bb9\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"../../cache/multiview-cache"},"\u591a\u89c6\u89d2\u7f13\u5b58"),"\u76f8\u5173\u6587\u6863\u3002\u672c\u6587\u7b80\u5355\u4ecb\u7ecd\u5982\u4f55\u4e3a\u903b\u8f91\u5220\u9664\u5c5e\u6027\u5f00\u542f\u591a\u89c6\u89d2\u7f13\u5b58"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @LogicalDeleted(\n        value = "true",\n        // highlight-next-line\n        useMultiViewCache = true\n    )\n    boolean isDeleted();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @LogicalDeleted(\n        value = "true",\n        // highlight-next-line\n        useMultiViewCache = true\n    )\n    val isDeleted: Boolean\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))))}v.isMDXComponent=!0}}]);