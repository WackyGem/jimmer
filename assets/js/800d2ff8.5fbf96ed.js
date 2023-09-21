"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,y=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(83117),i=(n(67294),n(3905));const r={sidebar_position:1,title:"Nullity"},o=void 0,l={unversionedId:"mapping/base/nullity",id:"mapping/base/nullity",title:"Nullity",description:"Jimmer handles the issue of whether entity object properties can be null in a very strict way. Even for Java developers, it requires thinking about whether each property can be null in the same way as Kotlin developers.",source:"@site/docs/mapping/base/nullity.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/nullity",permalink:"/jimmer/docs/mapping/base/nullity",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mapping/base/nullity.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Nullity"},sidebar:"tutorialSidebar",previous:{title:"Base mapping",permalink:"/jimmer/docs/mapping/base/"},next:{title:"Simple Mapping",permalink:"/jimmer/docs/mapping/base/basic"}},p={},s=[{value:"Define nullity of properties",id:"define-nullity-of-properties",level:2},{value:"Kotlin",id:"kotlin",level:3},{value:"Java",id:"java",level:3},{value:"Precautions",id:"precautions",level:2},{value:"inputNotNull",id:"inputnotnull",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Jimmer handles the issue of whether entity object properties can be null in a very strict way. Even for Java developers, it requires thinking about whether each property can be null in the same way as Kotlin developers.  "),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Explicitly stating whether each property of the entity object allows null is very important for Jimmer and affects many features.")),(0,i.kt)("h2",{id:"define-nullity-of-properties"},"Define nullity of properties"),(0,i.kt)("h3",{id:"kotlin"},"Kotlin"),(0,i.kt)("p",null,"Kotlin supports null safety. Declaring entity properties as ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," for non-null and ",(0,i.kt)("inlineCode",{parentName:"p"},"T?")," for nullable according to Kotlin's own way."),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("p",null,"Whether a property is null in Java is determined by the following rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the property type is boolean, char, byte, short, int, long, float or double, then it is non-null.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the property type is Boolean, Character, Byte, Short, Integer, Long, Float or Double, then it is nullable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Otherwise"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the property is decorated by any annotation simply named ",(0,i.kt)("inlineCode",{parentName:"p"},"Nullable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Null"),", then it is nullable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Otherwise, the default is non-null."))),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"org.jetbrains.annotations.Nullable"),", because"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Although recognizable annotations are not restricted, if an annotation not included by default in the Jimmer annotation processor is used, its dependency needs to be added to the annotation processor, which is troublesome after all. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"org.jetbrains.annotations.Nullable")," is supported by Intellij.")))))),(0,i.kt)("h2",{id:"precautions"},"Precautions"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A series of concepts not explained yet will appear here. They will all be explained in subsequent documents. "),(0,i.kt)("p",{parentName:"admonition"},"Here is just a simple list of precautions. Please ignore these terms for now. This document does not provide related examples either. Come back and check after you understand all subsequent concepts.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Id")," property must be non-null."),(0,i.kt)("p",{parentName:"li"},"Very different from JPA/Hibernate."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"JPA/Hibernate recommends declaring the id property as a nullable type, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Long")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"long")," in Java, so that the absence of id and the need for automatic allocation can be expressed when saving data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Jimmer must declare the id property as a non-null type, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"long")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"Long")," in Java. Jimmer relies on the dynamism of the entity objects themselves to express the absence of the id property.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One-to-many and many-to-many properties must be non-null. "),(0,i.kt)("p",{parentName:"li"},"One-to-many and many-to-many properties are represented by collections of length 0 instead of null when there is no data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"One-to-one and many-to-one properties must be nullable when any of the following conditions is met:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mapping based on join table, rather than foreign key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mapping based on pseudo foreign key, rather than real foreign key"),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},'A "pseudo foreign key" refers to a foreign key in the developer\'s mind, but there is no corresponding foreign key constraint in the database.'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Remote association")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As the mirror side of @OneToOne association")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If the associated entity has ",(0,i.kt)("a",{parentName:"p",href:"../../query/global-filter"},"global filters")," applied, then for one-to-one/many-to-one associations must be nullable even if they are directly based on foreign keys, unless all of the following conditions are met:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All global filters applied to the associated entity implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociationIntegrityAssuranceFilter"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"KAssociationIntegrityAssuranceFilter")," interface. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All global filters applied to the associated entity are also applied to the current entity."))))),(0,i.kt)("h2",{id:"inputnotnull"},"inputNotNull"),(0,i.kt)("p",null,"As mentioned before, due to some query scenarios, one-to-one and many-to-one properties based on foreign keys must be declared as nullable. "),(0,i.kt)("p",null,"However, when saving data, developers may not expect users to modify the foreign key fields in the database to null. In this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"inputNotNull")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"@OneToOne")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToOne")," can be set to true, for example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@OneToOne(inputNotNull = true)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@ManyToOne(inputNotNull = true)"))),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"inputNotNull")," is configured for an associated property, it will be given priority consideration in ",(0,i.kt)("a",{parentName:"p",href:"../../configuration/database-validation"},"database validation")," to verify that the foreign key field in the database cannot be null."))}m.isMDXComponent=!0}}]);