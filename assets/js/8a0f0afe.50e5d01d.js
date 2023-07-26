"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1422],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),k=l,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||o;return n?a.createElement(c,r(r({ref:t},s),{},{components:n})):a.createElement(c,r({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),l=n(34334),o="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(83117),l=n(67294),o=n(34334),r=n(72389),i=n(67392),p=n(7094),u=n(12466),s="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,r=e.lazy,m=e.block,k=e.defaultValue,c=e.values,f=e.groupId,N=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(t=null!=k?k:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,p.U)(),O=C.tabGroupChoices,h=C.setTabGroupChoices,A=(0,l.useState)(y),T=A[0],B=A[1],w=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=O[f];null!=D&&D!==T&&v.some((function(e){return e.value===D}))&&B(D)}var S=function(e){var t=e.currentTarget,n=w.indexOf(t),a=v[n].value;a!==T&&(I(t),B(a),null!=f&&h(f,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,l=w.indexOf(e.currentTarget)+1;n=null!=(a=w[l])?a:w[0];break;case"ArrowLeft":var o,r=w.indexOf(e.currentTarget)-1;n=null!=(o=w[r])?o:w[w.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},N)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:S,onClick:S},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function k(e){var t=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},48865:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return k}});var a=n(83117),l=n(80102),o=(n(67294),n(3905)),r=n(65488),i=n(85162),p=["components"],u={sidebar_position:4,title:"\u5220\u9664\u6307\u4ee4"},s=void 0,d={unversionedId:"team-work/mutation/delete-command",id:"team-work/mutation/delete-command",title:"\u5220\u9664\u6307\u4ee4",description:"\u672c\u6587\u8ba8\u8bba\u524d\u63d0",source:"@site/docs/team-work/mutation/delete-command.mdx",sourceDirName:"team-work/mutation",slug:"/team-work/mutation/delete-command",permalink:"/jimmer/docs/team-work/mutation/delete-command",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/mutation/delete-command.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5220\u9664\u6307\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"Input DTO",permalink:"/jimmer/docs/team-work/mutation/save-command/input-dto"},next:{title:"\u76f4\u63a5\u4fee\u6539\u4e2d\u95f4\u8868",permalink:"/jimmer/docs/team-work/mutation/associations"}},m={},k=[{value:"\u672c\u6587\u8ba8\u8bba\u524d\u63d0",id:"\u672c\u6587\u8ba8\u8bba\u524d\u63d0",level:2},{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u903b\u8f91\u5220\u9664",id:"\u903b\u8f91\u5220\u9664",level:2},{value:"\u7269\u7406\u5220\u9664",id:"\u7269\u7406\u5220\u9664",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u8131\u52fe\u64cd\u4f5c",id:"\u8131\u52fe\u64cd\u4f5c",level:3}],c={toc:k};function f(e){var t=e.components,n=(0,l.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u672c\u6587\u8ba8\u8bba\u524d\u63d0"},"\u672c\u6587\u8ba8\u8bba\u524d\u63d0"),(0,o.kt)("p",null,"Jimmer\u652f\u6301",(0,o.kt)("a",{parentName:"p",href:"./trigger"},"\u89e6\u53d1\u5668"),"\uff0c\u5176\u4e2d\u5206\u4e3aBinLog\u89e6\u53d1\u5668\u548cTransaction\u89e6\u53d1\u5668\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528Transaction\u89e6\u53d1\u5668\uff0c\u5c06\u4f1a\u5bfc\u81f4Jimmer\u4fee\u6539\u64cd\u4f5c\u751f\u6210\u66f4\u591a\u66f4\u5b8c\u6574\u7684\u67e5\u8be2\u8bed\u53e5\u4ee5\u6a21\u62df\u89e6\u53d1\u5668\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u6240\u8ba8\u8bba\u4e86\u82e5\u5e72\u573a\u666f\u548c\u5b83\u4eec\u5404\u81ea\u751f\u6210\u7684SQL\uff0c\u90fd\u4ee5\u672a\u4f7f\u7528Transaction\u89e6\u53d1\u5668\u4f5c\u4e3a\u524d\u63d0\u3002"),(0,o.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,o.kt)("p",null,"\u5220\u9664\u6307\u4ee4\uff0c\u5373\u6309id\u6216id\u96c6\u5408\u5220\u9664\u5bf9\u8c61\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"API\u7c7b\u522b"),(0,o.kt)("th",null,"\u8bed\u8a00"),(0,o.kt)("th",null,"\u6309id\u5220\u9664"),(0,o.kt)("th",null,"\u6309id\u96c6\u5408\u5220\u9664"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"2"},"\u5e95\u5c42API"),(0,o.kt)("td",null,"Java"),(0,o.kt)("td",null,"\u5b8c\u6574API",(0,o.kt)("ul",null,(0,o.kt)("li",null,"JSqlClient.getEntities().delete"),(0,o.kt)("li",null,"JSqlClient.getEntities().deleteCommand")),"\u5feb\u6377API",(0,o.kt)("ul",null,(0,o.kt)("li",null,"JSqlClient.deleteById"))),(0,o.kt)("td",null,"\u5b8c\u6574API",(0,o.kt)("ul",null,(0,o.kt)("li",null,"JSqlClient.getEntities().batchDelete"),(0,o.kt)("li",null,"JSqlClient.getEntities().batchDeleteCommand")),"\u5feb\u6377API",(0,o.kt)("ul",null,(0,o.kt)("li",null,"JSqlClient.deleteByIds")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Kotlin"),(0,o.kt)("td",null,"\u5b8c\u6574API",(0,o.kt)("ul",null,(0,o.kt)("li",null,"KSqlClient.entities.delete")),"\u5feb\u6377API",(0,o.kt)("ul",null,(0,o.kt)("li",null,"KSqlClient.deleteById"))),(0,o.kt)("td",null,"\u5b8c\u6574API",(0,o.kt)("ul",null,(0,o.kt)("li",null,"KSqlClient.entities.batchDelete")),"\u5feb\u6377API",(0,o.kt)("ul",null,(0,o.kt)("li",null,"KSqlClient.deleteByIds")))),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"2"},"Spring Data API"),(0,o.kt)("td",null,"Java"),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"JRepository.deleteById"))),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"JRepository.deleteByIds"),(0,o.kt)("li",null,"JRepository.deleteAllById")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Kotlin"),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"KRepository.deleteById"))),(0,o.kt)("td",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"KRepository.deleteByIds"),(0,o.kt)("li",null,"KRepository.deleteAllById")))))),(0,o.kt)("p",null,"\u5fc5\u8981\u8bf4\u660e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728Java\u5e95\u5c42API\u4e2d\uff0c\u5177\u5907\u4e24\u4e2a\u65b9\u6cd5\u4ee5Command\u7ed3\u5c3e\u7684\u65b9\u6cd5: ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteCommand"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"batchDeleteCommand"),"\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u521b\u5efa\u6307\u4ee4\u4f46\u4e0d\u7acb\u5373\u6267\u884c\uff0c\u7528\u6237\u5bf9\u6307\u4ee4\u505a\u51fa\u66f4\u591a\u914d\u7f6e\u540e\uff0c\u5728\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"execute"),"\u6267\u884c\u3002"),(0,o.kt)("p",{parentName:"li"},"\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"deleteCommand"),"\u4e3a\u4f8b"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"DeleteResult result = sqlClient\n    .getEntities()\n    .deleteCommand(BookStore.class, 1L) \u2776\n    .setDissociateAction(BookProps.STORE, DissociateAction.SET_NULL) \u2777\n    .execute(); \u2778\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u2776 \u521b\u5efa\u6307\u4ee4\uff0c\u4f46\u4e0d\u6267\u884c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u2777 \u914d\u7f6e\u6307\u4ee4\uff0c\u53ef\u4ee5\u7528\u94fe\u5f0fAPI\u8fdb\u884c\u591a\u4e2a\u914d\u7f6e ",(0,o.kt)("em",{parentName:"p"},"(\u8fd9\u91cc\u4ec5\u4ec5\u793a\u8303\u4e86\u4e00\u4e2a\u914d\u7f6e)")),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u7684\u4f5c\u7528\u4f1a\u5728\u540e\u6587\u9610\u8ff0\uff0c\u8bfb\u8005\u53ef\u4ee5\u5148\u5ffd\u7565\u5b83"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u2778\u6700\u7ec8\u6267\u884c"))),(0,o.kt)("p",{parentName:"li"},"kotlin\u4e0d\u9700\u8981\u5982\u6b64\u8bbe\u8ba1\uff0c\u56e0\u4e3a\u5176delete\u65b9\u6cd5\u652f\u6301\u4e00\u4e2a\u53ef\u9009\u7684Lambda\u53c2\u6570\u7528\u4e8e\u914d\u7f6e\uff0c\u76f4\u63a5\u6267\u884c\u5e76\u9644\u5e26\u4e0a\u5fc5\u8981\u914d\u7f6e\u5373\u53ef\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore.class, 1L) {\n        setDissociateAction(Book::store, DissociateAction.SET_NULL)\n    }\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5728Spring Data API\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u627e\u5230\u4e24\u4e2a\u529f\u80fd\u76f8\u540c\u4f46\u540d\u79f0\u4e0d\u540c\u7684\u65b9\u6cd5\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"deleteByIds"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"deleteAllById"),"\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"deleteByIds"),"\uff1a \u548cJimmer\u5e95\u5c42\u5feb\u6377API\u98ce\u683c\u4e00\u81f4\u7684\u65b9\u6cd5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"deleteAllById"),"\uff1a\u7ee7\u627f",(0,o.kt)("inlineCode",{parentName:"p"},"org.springframework.data.repository.CrudRepository"),"\u540e\u5fc5\u9700\u62e5\u6709\u65b9\u6cd5\uff0c\u53ef\u4ee5\u7406\u89e3\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"deleteByIds"),"\u7684\u522b\u540d\u3002")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5220\u9664\u6307\u4ee4\u652f\u6301\u4e24\u79cd\u64cd\u4f5c"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u903b\u8f91\u5220\u9664\uff1a\u5e76\u975e\u771f\u6b63\u5220\u9664\u6570\u636e\uff0c\u4ec5\u628a\u5bf9\u8c61\u7684\u903b\u8f91\u5220\u9664\u5b57\u6bb5\u6807\u8bb0\u6210\u201c\u5df2\u7ecf\u5220\u9664\u201d\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u7269\u7406\u5220\u9664\uff1a\u771f\u6b63\u5220\u9664\u6570\u636e\u3002"))),(0,o.kt)("p",{parentName:"li"},"\u4e0a\u8ff0\u6240\u6709API\uff0c\u90fd\u901a\u8fc7Java\u65b9\u6cd5\u91cd\u8f7d\u6216Kotlin\u9ed8\u8ba4\u53c2\u6570\u652f\u6301\u4e00\u4e2a\u53ef\u9009\u7684\u53c2\u6570\uff0c\u5176\u7c7b\u578b\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"DeleteMode"),"\uff0c\u8be5\u53c2\u6570\u7c7b\u578b\u4e3a\u679a\u4e3e\uff0c\u5177\u6709\u4e09\u4e2a\u53d6\u503c"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"AUTO"),": \u4e0d\u660e\u786e\u6307\u5b9a\u5f53\u524d\u64cd\u4f5c\u662f\u903b\u8f91\u5220\u9664\u8fd8\u662f\u7269\u7406\u5220\u9664"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u88ab\u5220\u9664\u7684\u5b9e\u4f53\u7c7b\u578b\u5177\u5907",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted"},"\u903b\u8f91\u5220\u9664\u5b57\u6bb5"),"\uff0c\u5219\u6267\u884c\u903b\u8f91\u5220\u9664")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u6267\u884c\u7269\u7406\u5220\u9664")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"LOGICAL"),": \u660e\u786e\u6307\u5b9a\u5f53\u524d\u64cd\u4f5c\u662f\u903b\u8f91\u5220\u9664"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u88ab\u5220\u9664\u7684\u5b9e\u4f53\u7c7b\u578b\u5177\u5907",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted"},"\u903b\u8f91\u5220\u9664\u5b57\u6bb5"),"\uff0c\u5219\u6267\u884c\u903b\u8f91\u5220\u9664")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u629b\u51fa\u5f02\u5e38\uff0c\u8bf4\u660e\u5f53\u524d\u5b9e\u4f53\u4e0d\u652f\u6301\u903b\u8f91\u5220\u9664")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"PHYSICAL"),": \u660e\u786e\u6307\u5b9a\u5f53\u524d\u64cd\u4f5c\u662f\u7269\u7406\u5220\u9664"),(0,o.kt)("p",{parentName:"li"},"\u65e0\u8bba\u88ab\u5220\u9664\u7684\u5b9e\u4f53\u7c7b\u578b\u662f\u5426\u5177\u5907",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted"},"\u903b\u8f91\u5220\u9664\u5b57\u6bb5"),"\uff0c\u90fd\u6267\u884c\u7269\u7406\u5220\u9664"))))),(0,o.kt)("h2",{id:"\u903b\u8f91\u5220\u9664"},"\u903b\u8f91\u5220\u9664"),(0,o.kt)("p",null,"\u5047\u8bbe\u5b9e\u4f53\u5177\u5907",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted"},"\u903b\u8f91\u5220\u9664\u5b57\u6bb5"),"\uff0c\u4f8b\u5982"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    boolean isDeleted();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    val isDeleted: Boolean\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,o.kt)("p",null,"\u90a3\u4e48\u4ee5\u4e0b\u4e09\u79cd\u884c\u4e3a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sqlClient.deleteById(Book.class, 1L)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sqlClient.deleteById(Book.class, 1L, DeleteMode.AUTO)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sqlClient.deleteById(Book.class, 1L, DeleteMode.LOGICAL)"))),(0,o.kt)("p",null,"\u7684\u529f\u80fd\u4e00\u6837\uff0c\u90fd\u8868\u793a\u903b\u8f91\u5220\u9664\uff0c\u751f\u6210\u7684sql\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK \nset DELETED = ? /* true */\nwhere ID in(?/* 1L*/)\n")),(0,o.kt)("h2",{id:"\u7269\u7406\u5220\u9664"},"\u7269\u7406\u5220\u9664"),(0,o.kt)("p",null,"\u5982\u679c\u5b9e\u4f53\u4e0d\u5177\u5907",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted"},"\u903b\u8f91\u5220\u9664\u5b57\u6bb5"),"\uff0c\u6216\u5220\u9664\u6a21\u5f0f\u88ab\u62a2\u884c\u6307\u5b9a\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"DeleteMode.PHYSICAL"),"\uff0c\u5219\u6267\u884c\u7269\u7406\u5220\u9664\u3002"),(0,o.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'DeleteResult result = sqlClient\n    .getEntities()\n    .batchDelete(Book.class, Arrays.asList(1L, 2L, 3L, 4L));\n\nSystem.out.println(\n    \n    "Affected row count: " + \n    result.getTotalAffectedRowCount() +\n\n    "\\nAffected row count of table \'BOOK\': " +\n    result.getAffectedRowCount(AffectedTable.of(Book.class)) +\n    \n    "\\nAffected row count of middle table \'BOOK_AUTHOR_MAPPING\': " +\n    result.getAffectedRowCount(AffectedTable.of(BookProps.AUTHORS))\n);\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val result = sqlClient\n    .entities\n    .batchDelete(Book::class, listOf(1L, 2L, 3L, 4L))\nprintln(\n    """Affected row count: \n        |${result.totalAffectedRowCount}\n        |Affected row count of table \'BOOK\': \n        |${result.affectedRowCount(Book::class)}\n        |Affected row count of middle table \'BOOK_AUTHOR_MAPPING\': \n        |${result.affectedRowCount(Book::authors)}\n    """.trimMargin()\n)\n')))),(0,o.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING \nwhere BOOK_ID in(?, ?, ?, ?)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK \nwhere ID in(?, ?, ?, ?)\n")))),(0,o.kt)("h3",{id:"\u8131\u52fe\u64cd\u4f5c"},"\u8131\u52fe\u64cd\u4f5c"),(0,o.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u8bba\u8ff0\u53ef\u4ee5\u770b\u5230\uff0cdelete\u6307\u4ee4\u6709\u53ef\u80fd\u5bfc\u81f4\u591a\u5bf9\u591a\u5173\u8054\u4e2d\u95f4\u8868\u7684\u6570\u636e\u7684\u88ab\u5220\u9664\uff0c\u8fd9\u662f\u6bd4\u8f83\u7b80\u5355\u7684\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u76f4\u63a5\u57fa\u4e8e\u5916\u952e\u7684\u4e00\u5bf9\u4e00\u6216\u4e00\u5bf9\u591a\u5173\u8054\u800c\u8a00\uff0c\u9700\u8981\u5904\u7406\u7684\u60c5\u51b5\u66f4\u590d\u6742\u4e00\u4e9b\u3002"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'DeleteResult result = sqlClient\n    .getEntities()\n    .delete(BookStore.class, 1L);\n\nSystem.out.println(\n\n    "Affected row count: " +\n            result.getTotalAffectedRowCount() +\n\n            "\\nAffected row count of table \'BOOK_STORE\': " +\n            result.getAffectedRowCount(AffectedTable.of(BookStore.class)) +\n\n            "\\nAffected row count of table \'BOOK\': " +\n            result.getAffectedRowCount(AffectedTable.of(Book.class)) +\n\n            "\\nAffected row count of middle table \'BOOK_AUTHOR_MAPPING\': " +\n            result.getAffectedRowCount(AffectedTable.of(BookProps.AUTHORS))\n);\n'))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L)\nprintln(\n    \"\"\"Affected row count: \n        |${result.totalAffectedRowCount}\n        |Affected row count of table 'BOOK_STORE': \n        |${result.affectedRowCount(BookStore::class)}\n        |Affected row count of table 'BOOK': \n        |${result.affectedRowCount(Book::class)}\n        |Affected row count of middle table 'BOOK_AUTHOR_MAPPING': \n        |${result.affectedRowCount(Book::authors)}\n    \"\"\".trimMargin()\n)\n")))),(0,o.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u5220\u9664\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u5bf9\u8c61\u5b58\u5728\u4e00\u5bf9\u591a\u5173\u8054",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\uff0c\u5982\u679c\u88ab\u5220\u9664\u7684\u5bf9\u8c61\u5728\u6570\u636e\u5e93\u4e2d\u5df2\u7ecf\u5b58\u5728\u4e00\u4e9b\u5173\u8054\u5bf9\u8c61\uff0cJimmer\u5c06\u629b\u5f03\u8fd9\u4e9b\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u4e00\u5bf9\u591a\u5173\u8054",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\u4e0d\u662f\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u6620\u5c04\uff0c\u800c\u662f\u57fa\u4e8e\u5916\u952e\u6620\u5c04\u3002Jimmer\u5c06\u5982\u4f55\u629b\u5f03\u8fd9\u4e9b",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u5462\uff1f"),(0,o.kt)("p",null,"\u548cJPA\u4e0d\u540c\uff0cJimmer\u4e0d\u5141\u8bb8\u76f4\u63a5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"@OneToOne"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"@OneToMany"),"\u8fdb\u884c\u5173\u8054\u6620\u5c04\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"@OneToOne"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"@OneToMany"),"\u5fc5\u987b\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"mappedBy"),"\u5c5e\u6027\u3002\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"../mapping/base/association/one-to-many"},"@OneToMany"),"\u4ee5\u4e86\u89e3\u66f4\u591a\u3002"),(0,o.kt)("p",null,"\u8fd9\u8868\u793a\uff0c\u901a\u8fc7\u4e00\u5bf9\u591a\u5173\u8054",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\u4e00\u5b9a\u80fd\u627e\u5230\u4e0e\u4e4b\u5bf9\u5e94\u7684\u591a\u5bf9\u4e00\u5173\u8054",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0cJimmer\u4f1a\u53c2\u8003\u591a\u5bf9\u4e00\u5173\u8054\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u4e0a\u7684",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u6ce8\u89e3\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u6240\u5bf9\u5e94\u7684\u5916\u952e\u88ab",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u6ce8\u89e3\u914d\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"SET_NULL"),"\uff0c\u5219\uff0c\u6267\u884c\u5982\u4e0bSQL"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK set STORE_ID = null where STORE_ID in(?)\n")),(0,o.kt)("p",{parentName:"li"},"\u5176\u4e2d\u53c2\u6570\u4e3a\u88ab\u5220\u9664\u5bf9\u8c61\u7684id\u3002\u8fd9\u6837\uff0c\u8fd9\u4e9b\u88ab\u629b\u5f03\u5bf9\u8c61\u7684\u5916\u952e\u5c31\u88ab\u8bbe\u7f6e\u4e3anull\u4e86\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u5219\u5148\u6267\u884c"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select ID from BOOK where STORE_ID in(?)\n")),(0,o.kt)("p",{parentName:"li"},"\u5176\u4e2d\u53c2\u6570\u4e3a\u88ab\u5220\u9664\u5bf9\u8c61\u7684id\u3002\u8fd9\u6837\uff0c\u5c31\u5f97\u5230\u8fd9\u4e9b\u88ab\u629b\u5f03\u5bf9\u8c61\u7684id\u4e86\u3002"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u67e5\u8be2\u6ca1\u6709\u8fd4\u56de\u4efb\u4f55\u6570\u636e\uff0c\u5c31\u5ffd\u7565\u540e\u7eed\u6b65\u9aa4\u3002")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u6240\u5bf9\u5e94\u7684\u5916\u952e\u88ab",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u6ce8\u89e3\u914d\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE"),"\uff0c\n\u8fd0\u7528\u65b0\u7684delete\u6307\u4ee4\u5220\u9664\u8fd9\u4e9b\u88ab\u629b\u5f03\u5bf9\u8c61\uff0c\u5176\u5b9e\u8fd9\u5c31\u662fdelete\u6307\u4ee4\u7684\u81ea\u52a8\u9012\u5f52\u6267\u884c\u80fd\u529b\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u629b\u51fa\u5f02\u5e38\u3002"))))),(0,o.kt)("p",null,"\u4e0a\u9762\u6240\u8ba8\u8bba\u7684\u8fd9\u4e9b\u60c5\u51b5\uff0c\u90fd\u9700\u8981\u5f00\u53d1\u4eba\u5458\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5c5e\u6027\u4e0a\u4f7f\u7528\u6ce8\u89e3",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u3002"),(0,o.kt)("p",null,"\u7136\u800c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u4e0d\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u6ce8\u89e3\uff0c\u800c\u52a8\u6001\u5730\u4e3adelete\u6307\u4ee4\u6307\u5b9adissociateAction\u914d\u7f6e\u3002"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"DeleteResult result = sqlClient\n    .getEntities()\n    .deleteCommand(BookStore.class, 1L)\n    .configure(it ->\n            it\n                // highlight-next-line\n                .setDissociateAction(\n                    BookProps.STORE,\n                    DissociateAction.SET_NULL\n                )\n    )\n    .execute();\n"))),(0,o.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L) {\n        // highlight-next-line\n        setDissociateAction(\n            Book::store, \n            DissociateAction.SET_NULL\n        )\n    }\n")))),(0,o.kt)("p",null,"\u8fd9\u91cc\uff0c\u52a8\u6001\u5730\u8c03\u7528\u6307\u4ee4\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"setDissociateAction"),"\u65b9\u6cd5\uff0c\u76f8\u6bd4\u4e8e\u9759\u6001\u5730\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5c5e\u6027\u4e0a\u4f7f\u7528\u6ce8\u89e3",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u5e76\u6307\u5b9a\u7ea7\u8054\u5220\u9664\uff0c\u6548\u679c\u5b8c\u5168\u4e00\u6837\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c",(0,o.kt)("inlineCode",{parentName:"p"},"setDissociateAction"),"\u65b9\u6cd5\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"DissociateAction.SET_NULL"),"\uff0c\u5219\u88ab\u8bbe\u7f6e\u5173\u8054\u5c5e\u6027\u5fc5\u987b\u53ef\u7a7a\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u65e2\u52a8\u6001\u5730\u4e3asave\u6307\u4ee4\u914d\u7f6e\u4e86\u5220\u9664\u89c4\u5219\uff0c\u53c8\u9759\u6001\u5730\u5728\u5b9e\u4f53\u63a5\u53e3\u4e2d\u901a\u8fc7\u6ce8\u89e3",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u914d\u7f6e\u4e86\u5220\u9664\u89c4\u5219\uff0c\u5219\u52a8\u6001\u914d\u7f6e\u4f18\u5148\u3002")))))}f.isMDXComponent=!0}}]);