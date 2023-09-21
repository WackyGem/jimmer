"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[19],{31536:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(80102),i=n(83117),o=n(67294),r=n(10209),l=n(59766),p=n(94780),s=n(34867);const u=(0,n(70182).ZP)();var c=n(65149),m=n(39707),d=n(66500),k=n(95408),v=n(98700),g=n(85893);const h=["component","direction","spacing","divider","children","className","useFlexGap"],y=(0,d.Z)(),b=u("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function I(e){return(0,c.Z)({props:e,name:"MuiStack",defaultTheme:y})}function N(e,t){const n=o.Children.toArray(e).filter(Boolean);return n.reduce(((e,a,i)=>(e.push(a),i<n.length-1&&e.push(o.cloneElement(t,{key:`separator-${i}`})),e)),[])}const f=({ownerState:e,theme:t})=>{let n=(0,i.Z)({display:"flex",flexDirection:"column"},(0,k.k9)({theme:t},(0,k.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,v.hB)(t),i=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),o=(0,k.P$)({values:e.direction,base:i}),r=(0,k.P$)({values:e.spacing,base:i});"object"==typeof o&&Object.keys(o).forEach(((e,t,n)=>{if(!o[e]){const a=t>0?o[n[t-1]]:"column";o[e]=a}}));const p=(t,n)=>{return e.useFlexGap?{gap:(0,v.NA)(a,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${i=n?o[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,v.NA)(a,t)}};var i};n=(0,l.Z)(n,(0,k.k9)({theme:t},r,p))}return n=(0,k.dt)(t.breakpoints,n),n};var Z=n(90948),E=n(71657);const C=function(e={}){const{createStyledComponent:t=b,useThemeProps:n=I,componentName:l="MuiStack"}=e,u=t(f),c=o.forwardRef((function(e,t){const o=n(e),c=(0,m.Z)(o),{component:d="div",direction:k="column",spacing:v=0,divider:y,children:b,className:I,useFlexGap:f=!1}=c,Z=(0,a.Z)(c,h),E={direction:k,spacing:v,useFlexGap:f},C=(0,p.Z)({root:["root"]},(e=>(0,s.Z)(l,e)),{});return(0,g.jsx)(u,(0,i.Z)({as:d,ownerState:E,ref:t,className:(0,r.Z)(C.root,I)},Z,{children:y?N(b,y):b}))}));return c}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,E.Z)({props:e,name:"MuiStack"})}),T=C},86153:(e,t,n)=>{n.d(t,{_:()=>x});var a=n(67294),i=n(87357),o=n(83321),r=n(61903),l=n(23599),p=n(86886),s=n(67720),u=n(90629),c=n(7906),m=n(295),d=n(53252),k=n(72882),v=n(53184),g=n(53816),h=n(24661),y=n(96540),b=n(93946),I=n(41733),N=n(50657),f=n(31425),Z=n(6514),E=n(58951),C=n(37645),T=n(52263),P=n(59457),B=n(53143);const x=(0,a.memo)((()=>{const{i18n:e}=(0,T.Z)(),t=(0,B.S)(),n=(0,a.useMemo)((()=>t?M:w),[t]),x=(0,a.useMemo)((()=>{const e=new Map;for(const t of n)e.set(t.id,t);return e}),[n]),R=(0,a.useMemo)((()=>t?S:j),[t]),_=(0,a.useMemo)((()=>{const e=new Map;for(const t of R)e.set(t.id,t);return e}),[R]),[D,A]=(0,P.x)((()=>({userId:1,province:x.get(1).province,city:x.get(1).city,address:x.get(1).address,items:[{__rowId:1,productId:1,name:_.get(1).name,quantity:2},{__rowId:2,productId:10,name:_.get(10).name,quantity:1}]}))),L=(0,a.useMemo)((()=>Math.max(...D.items.map((e=>e.__rowId)))+1),[D]),q=(0,a.useCallback)((e=>{const t=x.get(parseInt(e.target.value));void 0!==t&&A((e=>{e.userId=t.id,e.province=t.province,e.city=t.city,e.address=t.address}))}),[A,x]),U=(0,a.useCallback)((e=>{A((t=>{t.province=e.target.value}))}),[A]),J=(0,a.useCallback)((e=>{A((t=>{t.city=e.target.value}))}),[A]),F=(0,a.useCallback)((e=>{A((t=>{t.address=e.target.value}))}),[A]),z=(0,a.useCallback)(((e,t)=>{A((n=>{for(const a of n.items)if(a.__rowId===t){a.productId=parseInt(e.target.value),O(n);break}}))}),[A]),K=(0,a.useCallback)(((e,t)=>{A((n=>{for(const a of n.items)if(a.__rowId===t){a.quantity=parseInt(e.target.value),O(n);break}}))}),[A]),G=(0,a.useCallback)((e=>{A((t=>{for(let n=t.items.length-1;n>=0;--n)if(t.items[n].__rowId===e){t.items.splice(n,1);break}}))}),[A]),V=(0,a.useCallback)((()=>{A((e=>{e.items.push({__rowId:L,quantity:1})}))}),[A,L]),[W,$]=(0,a.useState)(!1),H=(0,a.useCallback)((()=>{$(!0)}),[]),X=(0,a.useCallback)((()=>{$(!1)}),[]);return a.createElement(u.Z,{elevation:3,style:{padding:"1.5rem"}},a.createElement(i.Z,{component:"form",noValidate:!0,autoComplete:"off"},a.createElement(p.ZP,{container:!0,spacing:2},a.createElement(p.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,select:!0,label:t?"\u8d2d\u4e70\u4eba":"Purchaser",value:D.userId,onChange:q},n.map((e=>a.createElement(l.Z,{key:e.id,value:e.id},e.nickName))))),a.createElement(p.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,label:t?"\u7701\u4efd":"Province",value:D.province,onChange:U})),a.createElement(p.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,label:t?"\u57ce\u5e02":"City",value:D.city,onChange:J})),a.createElement(p.ZP,{item:!0,xs:12},a.createElement(r.Z,{fullWidth:!0,label:t?"\u5730\u5740":"Address",value:D.address,onChange:F})),a.createElement(p.ZP,{item:!0,xs:12},a.createElement(s.Z,{textAlign:"left"},t?"\u8ba2\u5355\u660e\u7ec6":"Order Items"),a.createElement(k.Z,{component:u.Z},a.createElement(c.Z,{size:"small"},a.createElement(v.Z,null,a.createElement(g.Z,null,a.createElement(d.Z,null,t?"\u5546\u54c1":"Commodity"),a.createElement(d.Z,null,t?"\u6570\u91cf":"Quantity"),a.createElement(d.Z,null,t?"\u5355\u4ef7":"Unit price"),a.createElement(d.Z,null,t?"\u660e\u7ec6\u4ef7":"Item price"),a.createElement(d.Z,null,t?"\u5220\u9664":"Delete"))),a.createElement(m.Z,null,D.items.map((e=>{const t=void 0!==e.productId?_.get(e.productId):void 0;return a.createElement(g.Z,{key:e.__rowId},a.createElement(d.Z,null,a.createElement(r.Z,{select:!0,value:null==t?void 0:t.id,variant:"standard",size:"small",onChange:t=>{z(t,e.__rowId)}},R.map((e=>a.createElement(l.Z,{key:e.id,value:e.id},e.name))))),a.createElement(d.Z,null,a.createElement(r.Z,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:t=>{K(t,e.__rowId)}})),a.createElement(d.Z,null,null==t?void 0:t.price),a.createElement(d.Z,null,void 0!==t&&t.price*e.quantity),a.createElement(d.Z,null,a.createElement(b.Z,{onClick:()=>G(e.__rowId)},a.createElement(I.Z,null))))}))),a.createElement(h.Z,null,a.createElement(g.Z,null,a.createElement(d.Z,{colSpan:5},a.createElement(o.Z,{onClick:V},a.createElement(y.Z,null),t?"\u6dfb\u52a0":"Add"))))))),a.createElement(p.ZP,{item:!0,xs:12},t?"\u603b\u989d":"Total price",":",D.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>_.get(e.productId).price*e.quantity)).reduce(((e,t)=>e+t),0)),a.createElement(p.ZP,{item:!0,xs:12},a.createElement(o.Z,{variant:"contained",onClick:H},t?"\u63d0\u4ea4":"Submit")))),a.createElement(N.Z,{open:W,onClose:X},a.createElement(C.Z,null,t?"\u4fe1\u606f":"Info"),a.createElement(Z.Z,null,a.createElement(E.Z,null,t?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),a.createElement(f.Z,null,a.createElement(o.Z,{onClick:X},t?"\u5173\u95ed":"Close"))))})),M=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],w=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],S=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}],j=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function O(e){const t=e.items,n=new Map;for(let a=0;a<t.length;a++){const e=t[a];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){t.splice(a--,1);continue}if(void 0===e.productId)continue;const i=n.get(e.productId);void 0===i?n.set(e.productId,e):(i.quantity+=e.quantity,t.splice(a--,1))}}},20036:(e,t,n)=>{n.d(t,{k:()=>y});var a=n(52263),i=n(94054),o=n(33841),r=n(23599),l=n(90629),p=n(43246),s=n(31536),u=n(61903),c=n(50657),m=n(37645),d=n(6514),k=n(31425),v=n(58951),g=n(83321),h=n(67294);const y=(0,h.memo)((()=>{const[e,t]=(0,h.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),n=(0,h.useCallback)((e=>{t((t=>({...t,name:e.target.value})))}),[]),y=(0,h.useCallback)((e=>{t((t=>({...t,edition:e.target.valueAsNumber})))}),[]),b=(0,h.useCallback)((e=>{t((t=>({...t,price:e.target.valueAsNumber})))}),[]),I=(0,h.useCallback)((e=>{let n;const a=e.target.value;n="string"==typeof a?parseInt(a):a,-1===n&&(n=void 0),t((e=>({...e,storeId:n})))}),[]),N=(0,h.useCallback)((e=>{let n=[];console.log(e.target.value);const a=e.target.value;n="string"==typeof a?a.split(",").map((e=>parseInt(e))):a,t((e=>({...e,authorIds:n})))}),[]),{i18n:f}=(0,a.Z)(),Z=(0,h.useMemo)((()=>"zh"==f.currentLocale||"zh_cn"==f.currentLocale||"zh_CN"==f.currentLocale),[f.currentLocale]),[E,C]=(0,h.useState)(!1),T=(0,h.useCallback)((()=>{C(!0)}),[]),P=(0,h.useCallback)((()=>{C(!1)}),[]);return h.createElement(l.Z,{elevation:3,style:{padding:"1.5rem",width:500}},h.createElement(s.Z,{spacing:2},h.createElement("h1",null,"Book Form"),h.createElement(u.Z,{label:"Name",value:e.name,onChange:n,error:""===e.name,helperText:""===e.name?"Name is required":""}),h.createElement(u.Z,{label:"Edition",type:"number",value:e.edition,onChange:y}),h.createElement(u.Z,{label:"Price",type:"number",value:e.price,onChange:b}),h.createElement(i.Z,{fullWidth:!0},h.createElement(o.Z,{id:"store-select-label"},"Store"),h.createElement(p.Z,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:I},h.createElement(r.Z,{value:-1},"--NONE--"),h.createElement(r.Z,{value:1},"O'REILLY"),h.createElement(r.Z,{value:2},"MANNING"))),h.createElement(i.Z,{fullWidth:!0},h.createElement(o.Z,{id:"author-multi-select-label"},"Authors"),h.createElement(p.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:N},h.createElement(r.Z,{value:1},"Eve Procello"),h.createElement(r.Z,{value:2},"Alex Banks"),h.createElement(r.Z,{value:3},"Dan Vanderkam"),h.createElement(r.Z,{value:4},"Boris Cherny"),h.createElement(r.Z,{value:5},"Samer Buna"))),h.createElement(i.Z,null,h.createElement(g.Z,{onClick:T,variant:"contained"},"\u63d0\u4ea4"))),h.createElement(c.Z,{open:E,onClose:P},h.createElement(m.Z,null,Z?"\u4fe1\u606f":"Info"),h.createElement(d.Z,null,h.createElement(v.Z,null,Z?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),h.createElement(k.Z,null,h.createElement(g.Z,{onClick:P},"\u5173\u95ed"))))}))},32102:(e,t,n)=>{n.d(t,{s:()=>v});var a=n(83117),i=n(67294),o=n(42293),r=n(50657),l=n(6514),p=n(54776),s=n(10155),u=n(15861),c=n(93946),m=n(9137),d=n(61274),k=n(50594);const v=(0,i.memo)((e=>{let{open:t,fullScreen:n=!1,title:a,onClose:p,children:v}=e;const[h,y]=(0,i.useState)(n),b=(0,i.useCallback)((()=>{y((e=>!e))}),[]);return i.createElement(r.Z,{open:t,onClose:p,fullScreen:h,TransitionComponent:g,maxWidth:"md"},i.createElement(o.Z,{sx:{position:"relative"}},i.createElement(s.Z,null,i.createElement(u.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),i.createElement(c.Z,{onClick:b,style:{color:"white"}},h?i.createElement(d.Z,null):i.createElement(m.Z,null)),i.createElement(c.Z,{"aria-label":"close",onClick:p,style:{color:"white"}},i.createElement(k.Z,null)))),i.createElement(l.Z,null,v))})),g=i.forwardRef((function(e,t){return i.createElement(p.Z,(0,a.Z)({direction:"up",ref:t},e))}))},39511:(e,t,n)=>{n.d(t,{b:()=>r});var a=n(67294),i=n(83321),o=n(32102);const r=(0,a.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:r=t,children:l}=e;const[p,s]=(0,a.useState)(!1),u=(0,a.useCallback)((e=>{s(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),c=(0,a.useCallback)((()=>{s(!1)}),[]);return a.createElement(a.Fragment,null,a.createElement(i.Z,{"data-is-view-more-button":"true",onClick:u,variant:"outlined",size:"small"},t),a.createElement(o.s,{open:p,onClose:c,title:r,fullScreen:n},l))}))},53143:(e,t,n)=>{n.d(t,{S:()=>i});var a=n(52263);function i(){const{i18n:e}=(0,a.Z)(),t=e.currentLocale;return"zh"===t||"zh_cn"===t||"zh_CN"==t}},38472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var a=n(83117),i=(n(67294),n(3905)),o=n(65488),r=n(85162),l=n(20036),p=n(86153),s=n(39511);const u={sidebar_position:4,title:"Using MapStruct"},c=void 0,m={unversionedId:"mutation/save-command/input-dto/mapstruct",id:"mutation/save-command/input-dto/mapstruct",title:"Using MapStruct",description:"Not recommended for Kotlin.",source:"@site/docs/mutation/save-command/input-dto/mapstruct.mdx",sourceDirName:"mutation/save-command/input-dto",slug:"/mutation/save-command/input-dto/mapstruct",permalink:"/jimmer/docs/mutation/save-command/input-dto/mapstruct",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/save-command/input-dto/mapstruct.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Using MapStruct"},sidebar:"tutorialSidebar",previous:{title:"Using DTO Language",permalink:"/jimmer/docs/mutation/save-command/input-dto/dto-lang"},next:{title:"Delete Command",permalink:"/jimmer/docs/mutation/delete-command"}},d={},k=[{value:"Define Input DTO",id:"define-input-dto",level:2},{value:"MapStruct Converter",id:"mapstruct-converter",level:2},{value:"HTTP API",id:"http-api",level:2},{value:"Improvement",id:"improvement",level:2},{value:"Best Practices",id:"best-practices",level:2}],v={toc:k};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Not recommended for Kotlin."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This solution is based on ",(0,i.kt)("a",{parentName:"p",href:"https://mapstruct.org/"},"MapStruct"),", which relies on ",(0,i.kt)("inlineCode",{parentName:"p"},"apt"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kotlin has deprecated ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/kapt.html"},"kapt")," in favor of ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/ksp-overview.html"},"ksp"),"."))),(0,i.kt)("p",{parentName:"admonition"},"So as Kotlin evolves, using ",(0,i.kt)("inlineCode",{parentName:"p"},"kapt")," may cause more and more problems in the future.")),(0,i.kt)("h2",{id:"define-input-dto"},"Define Input DTO"),(0,i.kt)("p",null,"Let's look at an example ",(0,i.kt)("inlineCode",{parentName:"p"},"InputDTO")," ",(0,i.kt)("em",{parentName:"p"},"(for simplicity, Java version uses Lombok)"),":"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"@Data\npublic class BookInput {\n\n    @Nullable\n    private Long id; \u2776\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId; \u2777\n\n    private List<AuthorItem> authors; \u2778\n\n    @Data\n    public static class AuthorItem {\n\n        private String firstName;\n        \n        private String lastName;\n        \n        private Gender gender;\n    }\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},"data class BookInput(\n    val id: Long? = null, \u2776\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long?, \u2777 \n    val authors: List<AuthorItem> \u2778\n) {\n\n    data class AuthorItem(\n        val firstName: String,\n        val lastName: String,\n        val gender: Gender\n    )\n}\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2776 If the id is designated some auto-generation strategy, it is not required. This is also a feature of save commands, see details in ",(0,i.kt)("a",{parentName:"p",href:"../save-mode#summary"},"Save Modes/Summary"),"."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Jimmer entities, ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," cannot be null. Missing ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("em",{parentName:"p"},"(i.e. not assigning it)")," represents the object does not have an ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Input DTOs, static POJO types do not have the concept of missing properties. ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," represents missing ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"."))),(0,i.kt)("p",{parentName:"admonition"},"This seems contradictory and difficult to convert between. Don't worry, Jimmer provides automated solutions, discussed later."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2777 Explicitly specifies this Input DTO wants to edit the entity's many-to-one association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store")," using the ",(0,i.kt)(s.b,{buttonText:"short association",mdxType:"ViewMore"},(0,i.kt)(l.k,{mdxType:"ShortAssociation"}))," mode.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2778 Explicitly specifies this Input DTO wants to edit the entity's many-to-many association ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")," using the ",(0,i.kt)(s.b,{buttonText:"long association",mdxType:"ViewMore"},(0,i.kt)(p._,{mdxType:"LongAssociation"}))," mode.\nThe type of associated objects is also fixed to the nested Input DTO type ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput.AuthorItem"),"."))),(0,i.kt)("h2",{id:"mapstruct-converter"},"MapStruct Converter"),(0,i.kt)("p",null,"Jimmer extends ",(0,i.kt)("a",{parentName:"p",href:"https://mapstruct.org/"},"MapStruct")," which can be used to handle conversions between dynamic entities and static Input DTOs.\nHow to use the relevant extensions is detailed in ",(0,i.kt)("a",{parentName:"p",href:"../../../object/view/mapstruct"},"Object/DTO Conversion/MapStruct"),", this article will not repeat it."),(0,i.kt)("p",null,"Define the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInputMapper")," interface:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInputMapper.java"',title:'"BookInputMapper.java"'},"@Mapper\npublic interface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    Book toBook(BookInput input);\n\n    ...Other mapstruct configurations omitted...  \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInputMapper.kt"',title:'"BookInputMapper.kt"'},"@Mapper\ninterface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    fun toBook(BookInput input): Book\n\n    ...Other mapstruct configurations omitted...\n}\n")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"MapStruct's annotation processor needs to be used to generate the implementation class for this interface at compile time. Details are explained in ",(0,i.kt)("a",{parentName:"p",href:"../../../object/view/mapstruct"},"Object Section/DTO Mapping/MapStruct")," and not repeated here.")),(0,i.kt)("h2",{id:"http-api"},"HTTP API"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'private static final BookInputMapper BOOK_INPUT_MAPPER =\n    Mappers.getMapper(BookInputMapper.class);\n\n@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line \n    @RequestBody BookInput input\n) {\n    bookRepository.save(\n        // highlight-next-line\n        BOOK_INPUT_MAPPER.toBook(input)\n    );\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody input: BookInput\n) {\n    bookRepository.save(\n        // highlight-next-line\n        BOOK_INPUT_MAPPER.toBook(input)\n    )\n\n    companion object {\n        private val BOOK_INPUT_MAPPER =\n            Mappers.getMapper(BookInputMapper::class.java) \n    }\n}\n')))),(0,i.kt)("p",null,"In this example, MapStruct is used to convert ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," entity and directly persist it."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Jimmer entities, ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.id")," cannot be null. Missing ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," ",(0,i.kt)("em",{parentName:"p"},"(i.e. not assigning it)")," represents the object does not have an ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Input DTO, static POJO type, ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput.id")," being null represents missing ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"."))),(0,i.kt)("p",{parentName:"admonition"},"Jimmer has built-in extensions to MapStruct that will not assign ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput.id")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.id")," if it is null, so there are no issues.  ")),(0,i.kt)("h2",{id:"improvement"},"Improvement"),(0,i.kt)("p",null,"To better integrate with Jimmer, developers can make ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.Input<E>")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Input<E> {\n\n    E toEntity(); \n}\n")),(0,i.kt)("p",null,"Dynamic objects will never implement this interface. It should be implemented by user-defined static POJO classes. Its functionality is simple: convert the current static POJO to a dynamic object."),(0,i.kt)("p",null,"Make ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput")," implement ",(0,i.kt)("inlineCode",{parentName:"p"},"Input<Book>"),":"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"@Data\npublic class BookInput implements Input<Book> {\n\n    private static final Converter CONVERTER =\n        Mappers.getMapper(Converter.class);\n\n    ...Private fields omitted...\n\n    @Override\n    // highlight-next-line \n    public Book toEntity() {\n        return CONVERTER.toBook(this);\n    }\n\n    @Mapper\n    interface Converter {\n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        Book toBook(BookInput input);\n\n        ...Other mapstruct configurations omitted...\n    }\n\n    ...AuthorItem definition omitted...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},"data class BookInput(\n   ...\n) : Input<Book> {\n\n    // highlight-next-line\n    override fun toEntity(): Book =\n        CONVERTER.toBook(this)\n\n    @Mapper  \n    internal interface Converter {\n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        fun toBook(input: BookInput): Book\n\n        ...Other mapstruct configurations omitted...\n    }\n\n    companion object {\n\n        @JvmStatic\n        private val CONVERTER =\n            Mappers.getMapper(Converter::class.java)\n    }\n\n    ...AuthorItem definition omitted...\n}\n")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In this improved example, the previously introduced ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInputMapper")," is replaced by ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInput.Converter"),", so the previous ",(0,i.kt)("inlineCode",{parentName:"p"},"BookInputMapper")," can be deleted.")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line\n    @RequestBody BookInput input\n) {\n    // `save(input)` is equivalent to `save(input.toEntity())`\n    // highlight-next-line\n    bookRepository.save(input);\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody input: BookInput\n) {\n    // `save(input)` is equivalent to `save(input.toEntity())`\n    // highlight-next-line\n    bookRepository.save(input) \n}\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Leveraging the ",(0,i.kt)("inlineCode",{parentName:"p"},"Input<E>")," interface to change coding style is recommended but not mandatory. ")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("p",null,"In real projects, we often face the problem that entities may have many properties, and"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Relatively more properties need to be specified during insertion  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Relatively fewer properties need to be specified during modification"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," entity we consistently use as example has few properties and is inconvenient to demonstrate this. "),(0,i.kt)("p",null,"So I make up an entity type ",(0,i.kt)("inlineCode",{parentName:"p"},"Product")," with more properties:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Product.java"',title:'"Product.java"'},"@Entity\npublic interface Product {\n\n    ...Many entity properties, omitted... \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Product.kt"',title:'"Product.kt"'},"@Entity\ninterface Product {\n\n    ...Many entity properties, omitted...\n} \n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For insertion which requires specifying relatively more properties, define ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateProductInput"),":"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CreateProductInput.java"',title:'"CreateProductInput.java"'},"@Data\npublic class CreateProductInput implements Input<Product> {\n\n    ...More fields, omitted... \n\n    @Override\n    public Product toEntity() {\n        ...\n    }\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="CreateProductInput.kt"',title:'"CreateProductInput.kt"'},"data class CreateProductInput(\n    ...More fields, omitted...\n) : Input<Product> {\n\n    override fun toEntity(): Product {\n        ...\n    }\n}\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For modification which requires specifying relatively fewer properties, define ",(0,i.kt)("inlineCode",{parentName:"p"},"UpdateProductInput"),":"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="UpdateProductInput.java"',title:'"UpdateProductInput.java"'},"@Data  \npublic class UpdateProductInput implements Input<Product> {\n\n    ...Fewer fields, omitted...\n\n    @Override\n    public Product toEntity() {\n        ...\n    }\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="UpdateProductInput.kt"',title:'"UpdateProductInput.kt"'},"data class UpdateProductInput(\n    ...Fewer fields, omitted... \n) : Input<Product> {\n\n    override fun toEntity(): Product {\n        ...\n    }\n}\n")))))),(0,i.kt)("p",null,"Finally, provide two HTTP APIs:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@PostMapping("/product")\npublic void createProduct(\n    // `CreateProductInput` has relatively more properties  \n    // highlight-next-line\n    @RequestBody CreateProductInput input\n) {\n    productRepository.insert(input);\n}\n\n@PutMapping("/product")\npublic void updateProduct(\n    // `UpdateProductInput` has relatively fewer properties\n    // highlight-next-line\n    @RequestBody UpdateProductInput input\n) {\n    productRepository.update(input);\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PostMapping("/product")\nfun createProduct(\n    // `CreateProductInput` has relatively more properties\n    // highlight-next-line \n    @RequestBody input: CreateProductInput\n) {\n    productRepository.insert(input)\n}\n\n@PutMapping("/product")  \nfun updateProduct(\n    // `UpdateProductInput` has relatively fewer properties\n    // highlight-next-line\n    @RequestBody input: UpdateProductInput\n) {\n    productRepository.update(input)\n}\n')))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As you can see, no matter how many different ",(0,i.kt)("inlineCode",{parentName:"p"},"Input DTO")," types need to be defined for the same entity according to project requirements, we can always use MapStruct to convert them into the uniform dynamic entity type, then persist in one line of code calling save commands."),(0,i.kt)("p",{parentName:"admonition"},"Even if the project is more complex, e.g. people with different identities can edit data structures of different shapes, this pattern can still be applied repeatedly to handle such scenarios easily. ")))}g.isMDXComponent=!0}}]);