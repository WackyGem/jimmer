"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3107],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=s(n),f=a,d=l["".concat(p,".").concat(f)]||l[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},66413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={sidebar_position:3,title:"\u5173\u8054\u6620\u5c04"},p=void 0,s={unversionedId:"team-work/mapping/base/association/index",id:"team-work/mapping/base/association/index",title:"\u5173\u8054\u6620\u5c04",description:"\u5728\u8fd9\u91cc\uff0c\u4f60\u4f1a\u4e86\u89e3\u5230ORM\u6700\u91cd\u8981\u7684\u80fd\u529b\uff1a\u5b9e\u4f53\u5173\u7cfb\u5173\u7cfb\u6620\u5c04\u3002\u4f60\u4f1a\u4e86\u89e3\u5230\u8fd9\u4e9b\u6ce8\u89e3\uff1a",source:"@site/docs/team-work/mapping/base/association/index.md",sourceDirName:"team-work/mapping/base/association",slug:"/team-work/mapping/base/association/",permalink:"/jimmer/docs/team-work/mapping/base/association/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/mapping/base/association/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5173\u8054\u6620\u5c04"},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u5355\u6620\u5c04",permalink:"/jimmer/docs/team-work/mapping/base/basic"},next:{title:"\u4e00\u5bf9\u4e00",permalink:"/jimmer/docs/team-work/mapping/base/association/one-to-one"}},m={},u=[],l={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u4f60\u4f1a\u4e86\u89e3\u5230ORM\u6700\u91cd\u8981\u7684\u80fd\u529b\uff1a\u5b9e\u4f53\u5173\u7cfb\u5173\u7cfb\u6620\u5c04\u3002\u4f60\u4f1a\u4e86\u89e3\u5230\u8fd9\u4e9b\u6ce8\u89e3\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.OneToOne"),(0,o.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.ManyToOne"),(0,o.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.OneToMany"),(0,o.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.ManyToMany"),(0,o.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.JoinColumn"),(0,o.kt)("li",{parentName:"ul"},"org.babyfish.jimmer.sql.JoinTable")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u5173\u8054\u800c\u8a00\uff0c\u5b9e\u4f53\u7c7b\u578b\u4e2d\u7684\u57fa\u7840\u5c5e\u6027\u7684\u7c7b\u578b\u5e94\u8be5\u662f\u5173\u8054\u5bf9\u8c61\uff0c\u800c\u975e\u5173\u8054Id\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60f3\u5b9a\u4e49\u5173\u8054Id\u5c5e\u6027\uff0c\u8bf7"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5148\u6309\u672c\u76ee\u5f55\u7684\u6587\u6863\u5b8c\u6210\u5173\u8054\u6620\u5c04")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u518d\u6309\u7167",(0,o.kt)("a",{parentName:"p",href:"../../advanced/view/id-view"},"IdView"),"\u6587\u6863\u6dfb\u52a0\u5173\u8054Id\u5c5e\u6027")))))}f.isMDXComponent=!0}}]);