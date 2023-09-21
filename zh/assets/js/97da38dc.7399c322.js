"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3860],{86153:(e,t,n)=>{n.d(t,{_:()=>L});var a=n(67294),i=n(87357),l=n(83321),r=n(61903),o=n(23599),d=n(86886),m=n(67720),s=n(90629),p=n(7906),c=n(295),u=n(53252),k=n(72882),N=n(53184),h=n(53816),g=n(24661),v=n(96540),y=n(93946),b=n(41733),I=n(50657),C=n(31425),Z=n(6514),f=n(58951),E=n(37645),T=n(52263),x=n(59457),B=n(53143);const L=(0,a.memo)((()=>{const{i18n:e}=(0,T.Z)(),t=(0,B.S)(),n=(0,a.useMemo)((()=>t?S:A),[t]),L=(0,a.useMemo)((()=>{const e=new Map;for(const t of n)e.set(t.id,t);return e}),[n]),q=(0,a.useMemo)((()=>t?w:_),[t]),M=(0,a.useMemo)((()=>{const e=new Map;for(const t of q)e.set(t.id,t);return e}),[q]),[z,D]=(0,x.x)((()=>({userId:1,province:L.get(1).province,city:L.get(1).city,address:L.get(1).address,items:[{__rowId:1,productId:1,name:M.get(1).name,quantity:2},{__rowId:2,productId:10,name:M.get(10).name,quantity:1}]}))),j=(0,a.useMemo)((()=>Math.max(...z.items.map((e=>e.__rowId)))+1),[z]),U=(0,a.useCallback)((e=>{const t=L.get(parseInt(e.target.value));void 0!==t&&D((e=>{e.userId=t.id,e.province=t.province,e.city=t.city,e.address=t.address}))}),[D,L]),F=(0,a.useCallback)((e=>{D((t=>{t.province=e.target.value}))}),[D]),G=(0,a.useCallback)((e=>{D((t=>{t.city=e.target.value}))}),[D]),K=(0,a.useCallback)((e=>{D((t=>{t.address=e.target.value}))}),[D]),O=(0,a.useCallback)(((e,t)=>{D((n=>{for(const a of n.items)if(a.__rowId===t){a.productId=parseInt(e.target.value),P(n);break}}))}),[D]),Q=(0,a.useCallback)(((e,t)=>{D((n=>{for(const a of n.items)if(a.__rowId===t){a.quantity=parseInt(e.target.value),P(n);break}}))}),[D]),V=(0,a.useCallback)((e=>{D((t=>{for(let n=t.items.length-1;n>=0;--n)if(t.items[n].__rowId===e){t.items.splice(n,1);break}}))}),[D]),W=(0,a.useCallback)((()=>{D((e=>{e.items.push({__rowId:j,quantity:1})}))}),[D,j]),[J,X]=(0,a.useState)(!1),$=(0,a.useCallback)((()=>{X(!0)}),[]),R=(0,a.useCallback)((()=>{X(!1)}),[]);return a.createElement(s.Z,{elevation:3,style:{padding:"1.5rem"}},a.createElement(i.Z,{component:"form",noValidate:!0,autoComplete:"off"},a.createElement(d.ZP,{container:!0,spacing:2},a.createElement(d.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,select:!0,label:t?"\u8d2d\u4e70\u4eba":"Purchaser",value:z.userId,onChange:U},n.map((e=>a.createElement(o.Z,{key:e.id,value:e.id},e.nickName))))),a.createElement(d.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,label:t?"\u7701\u4efd":"Province",value:z.province,onChange:F})),a.createElement(d.ZP,{item:!0,xs:4},a.createElement(r.Z,{fullWidth:!0,label:t?"\u57ce\u5e02":"City",value:z.city,onChange:G})),a.createElement(d.ZP,{item:!0,xs:12},a.createElement(r.Z,{fullWidth:!0,label:t?"\u5730\u5740":"Address",value:z.address,onChange:K})),a.createElement(d.ZP,{item:!0,xs:12},a.createElement(m.Z,{textAlign:"left"},t?"\u8ba2\u5355\u660e\u7ec6":"Order Items"),a.createElement(k.Z,{component:s.Z},a.createElement(p.Z,{size:"small"},a.createElement(N.Z,null,a.createElement(h.Z,null,a.createElement(u.Z,null,t?"\u5546\u54c1":"Commodity"),a.createElement(u.Z,null,t?"\u6570\u91cf":"Quantity"),a.createElement(u.Z,null,t?"\u5355\u4ef7":"Unit price"),a.createElement(u.Z,null,t?"\u660e\u7ec6\u4ef7":"Item price"),a.createElement(u.Z,null,t?"\u5220\u9664":"Delete"))),a.createElement(c.Z,null,z.items.map((e=>{const t=void 0!==e.productId?M.get(e.productId):void 0;return a.createElement(h.Z,{key:e.__rowId},a.createElement(u.Z,null,a.createElement(r.Z,{select:!0,value:null==t?void 0:t.id,variant:"standard",size:"small",onChange:t=>{O(t,e.__rowId)}},q.map((e=>a.createElement(o.Z,{key:e.id,value:e.id},e.name))))),a.createElement(u.Z,null,a.createElement(r.Z,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:t=>{Q(t,e.__rowId)}})),a.createElement(u.Z,null,null==t?void 0:t.price),a.createElement(u.Z,null,void 0!==t&&t.price*e.quantity),a.createElement(u.Z,null,a.createElement(y.Z,{onClick:()=>V(e.__rowId)},a.createElement(b.Z,null))))}))),a.createElement(g.Z,null,a.createElement(h.Z,null,a.createElement(u.Z,{colSpan:5},a.createElement(l.Z,{onClick:W},a.createElement(v.Z,null),t?"\u6dfb\u52a0":"Add"))))))),a.createElement(d.ZP,{item:!0,xs:12},t?"\u603b\u989d":"Total price",":",z.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>M.get(e.productId).price*e.quantity)).reduce(((e,t)=>e+t),0)),a.createElement(d.ZP,{item:!0,xs:12},a.createElement(l.Z,{variant:"contained",onClick:$},t?"\u63d0\u4ea4":"Submit")))),a.createElement(I.Z,{open:J,onClose:R},a.createElement(E.Z,null,t?"\u4fe1\u606f":"Info"),a.createElement(Z.Z,null,a.createElement(f.Z,null,t?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),a.createElement(C.Z,null,a.createElement(l.Z,{onClick:R},t?"\u5173\u95ed":"Close"))))})),S=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],A=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],w=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}],_=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function P(e){const t=e.items,n=new Map;for(let a=0;a<t.length;a++){const e=t[a];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){t.splice(a--,1);continue}if(void 0===e.productId)continue;const i=n.get(e.productId);void 0===i?n.set(e.productId,e):(i.quantity+=e.quantity,t.splice(a--,1))}}},20036:(e,t,n)=>{n.d(t,{k:()=>v});var a=n(52263),i=n(94054),l=n(33841),r=n(23599),o=n(90629),d=n(43246),m=n(31536),s=n(61903),p=n(50657),c=n(37645),u=n(6514),k=n(31425),N=n(58951),h=n(83321),g=n(67294);const v=(0,g.memo)((()=>{const[e,t]=(0,g.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),n=(0,g.useCallback)((e=>{t((t=>({...t,name:e.target.value})))}),[]),v=(0,g.useCallback)((e=>{t((t=>({...t,edition:e.target.valueAsNumber})))}),[]),y=(0,g.useCallback)((e=>{t((t=>({...t,price:e.target.valueAsNumber})))}),[]),b=(0,g.useCallback)((e=>{let n;const a=e.target.value;n="string"==typeof a?parseInt(a):a,-1===n&&(n=void 0),t((e=>({...e,storeId:n})))}),[]),I=(0,g.useCallback)((e=>{let n=[];console.log(e.target.value);const a=e.target.value;n="string"==typeof a?a.split(",").map((e=>parseInt(e))):a,t((e=>({...e,authorIds:n})))}),[]),{i18n:C}=(0,a.Z)(),Z=(0,g.useMemo)((()=>"zh"==C.currentLocale||"zh_cn"==C.currentLocale||"zh_CN"==C.currentLocale),[C.currentLocale]),[f,E]=(0,g.useState)(!1),T=(0,g.useCallback)((()=>{E(!0)}),[]),x=(0,g.useCallback)((()=>{E(!1)}),[]);return g.createElement(o.Z,{elevation:3,style:{padding:"1.5rem",width:500}},g.createElement(m.Z,{spacing:2},g.createElement("h1",null,"Book Form"),g.createElement(s.Z,{label:"Name",value:e.name,onChange:n,error:""===e.name,helperText:""===e.name?"Name is required":""}),g.createElement(s.Z,{label:"Edition",type:"number",value:e.edition,onChange:v}),g.createElement(s.Z,{label:"Price",type:"number",value:e.price,onChange:y}),g.createElement(i.Z,{fullWidth:!0},g.createElement(l.Z,{id:"store-select-label"},"Store"),g.createElement(d.Z,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:b},g.createElement(r.Z,{value:-1},"--NONE--"),g.createElement(r.Z,{value:1},"O'REILLY"),g.createElement(r.Z,{value:2},"MANNING"))),g.createElement(i.Z,{fullWidth:!0},g.createElement(l.Z,{id:"author-multi-select-label"},"Authors"),g.createElement(d.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:I},g.createElement(r.Z,{value:1},"Eve Procello"),g.createElement(r.Z,{value:2},"Alex Banks"),g.createElement(r.Z,{value:3},"Dan Vanderkam"),g.createElement(r.Z,{value:4},"Boris Cherny"),g.createElement(r.Z,{value:5},"Samer Buna"))),g.createElement(i.Z,null,g.createElement(h.Z,{onClick:T,variant:"contained"},"\u63d0\u4ea4"))),g.createElement(p.Z,{open:f,onClose:x},g.createElement(c.Z,null,Z?"\u4fe1\u606f":"Info"),g.createElement(u.Z,null,g.createElement(N.Z,null,Z?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),g.createElement(k.Z,null,g.createElement(h.Z,{onClick:x},"\u5173\u95ed"))))}))},53143:(e,t,n)=>{n.d(t,{S:()=>i});var a=n(52263);function i(){const{i18n:e}=(0,a.Z)(),t=e.currentLocale;return"zh"===t||"zh_cn"===t||"zh_CN"==t}},65484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>N,frontMatter:()=>m,metadata:()=>p,toc:()=>u});var a=n(83117),i=(n(67294),n(3905)),l=n(65488),r=n(85162),o=n(20036),d=n(86153);const m={sidebar_position:4,title:"\u4fdd\u5b58\u5173\u8054"},s=void 0,p={unversionedId:"mutation/save-command/association",id:"mutation/save-command/association",title:"\u4fdd\u5b58\u5173\u8054",description:"\u5173\u8054\u7c7b\u578b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/association.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/association",permalink:"/jimmer/zh/docs/mutation/save-command/association",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/save-command/association.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u4fdd\u5b58\u5173\u8054"},sidebar:"tutorialSidebar",previous:{title:"\u4e0d\u5b8c\u6574\u5bf9\u8c61",permalink:"/jimmer/zh/docs/mutation/save-command/incomplete"},next:{title:"\u8131\u94a9\u64cd\u4f5c",permalink:"/jimmer/zh/docs/mutation/save-command/dissociation"}},c={},u=[{value:"\u5173\u8054\u7c7b\u578b",id:"\u5173\u8054\u7c7b\u578b",level:2},{value:"\u77ed\u5173\u8054",id:"\u77ed\u5173\u8054",level:3},{value:"\u957f\u5173\u8054",id:"\u957f\u5173\u8054",level:3},{value:"\u4e00\u5bf9\u591a\u5173\u8054\u7684\u7279\u6b8a\u6027",id:"\u4e00\u5bf9\u591a\u5173\u8054\u7684\u7279\u6b8a\u6027",level:2},{value:"\u5b9e\u4f53\u5b9a\u4e49",id:"\u5b9e\u4f53\u5b9a\u4e49",level:3},{value:"\u4f7f\u7528\u4fdd\u5b58\u6307\u4ee4",id:"\u4f7f\u7528\u4fdd\u5b58\u6307\u4ee4",level:3},{value:"\u8131\u52fe\u64cd\u4f5c",id:"\u8131\u52fe\u64cd\u4f5c",level:2}],k={toc:u};function N(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5173\u8054\u7c7b\u578b"},"\u5173\u8054\u7c7b\u578b"),(0,i.kt)("p",null,"\u7ad9\u5728\u7528\u6237\u89d2\u5ea6\uff0c\u88ab\u4fdd\u5b58\u6570\u636e\u7ed3\u6784\u4e2d\u5b58\u5728\u4e24\u79cd\u5173\u8054"),(0,i.kt)("h3",{id:"\u77ed\u5173\u8054"},"\u77ed\u5173\u8054"),(0,i.kt)("p",null,"\u6240\u8c13\u77ed\u5173\u8054\uff0c\u8868\u793a\u4ec5\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u548c\u5176\u4ed6\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u672c\u8eab\uff0c\u5bf9\u5173\u8054\u5bf9\u8c61\u7684\u4fee\u6539\u6ca1\u5174\u8da3\u3002"),(0,i.kt)("p",null,"\u901a\u5e38\uff0cUI\u8bbe\u8ba1\u4f1a\u91c7\u7528\u5355\u9009\u6846 ",(0,i.kt)("em",{parentName:"p"},"(\u5173\u8054\u5f15\u7528)")," \u6216\u591a\u9009\u6846 ",(0,i.kt)("em",{parentName:"p"},"(\u5173\u8054\u96c6\u5408)"),"\u3002"),(0,i.kt)(o.k,{mdxType:"ShortAssociation"}),(0,i.kt)("div",null,"\xa0"),(0,i.kt)("p",null,"\u5176\u4e2d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5355\u9009\u6846\u5bf9\u5e94\u591a\u5bf9\u4e00\u5173\u8054",(0,i.kt)("inlineCode",{parentName:"p"},"Book.store"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u591a\u9009\u6846\u5bf9\u5e94\u591a\u5bf9\u591a\u5173\u8054",(0,i.kt)("inlineCode",{parentName:"p"},"Book.authors")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u5f85\u9009\u6570\u636e\u53ef\u80fd\u5f88\u591a\uff0c\u5e76\u4e0d\u9002\u5408\u8bbe\u8ba1\u4e3a\u4e0b\u62c9UI\u3002\u8fd9\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5177\u5907\u7b5b\u9009\u6761\u4ef6\u548c\u5206\u9875\u529f\u80fd\u7684\u5bf9\u8c61\u6846\u6765\u4ee3\u66ff\u4e0b\u62c9\u6846\uff0c\u8fd9\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u53d8\u901a\u65b9\u5f0f\u3002")),(0,i.kt)("p",null,"\u7531\u4e8e\u7528\u6237\u53ea\u60f3\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u548c\u5176\u4ed6\u5bf9\u8c61\u7684\u5173\u8054\uff0c\u4e0d\u60f3\u8fdb\u4e00\u6b65\u4fee\u6539\u5173\u8054\u5bf9\u8c61\uff0c\u6240\u4ee5UI\u4e0d\u53ef\u80fd\u51fa\u73b0\u591a\u5c42\u5173\u8054\u5d4c\u5957\u3002\u8fd9\u5c31\u662f\u79f0\u5176\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"\u77ed\u5173\u8054")," \u7684\u539f\u56e0\u3002"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u4e3asave\u6307\u4ee4\u4f20\u9012\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\u4f5c\u4e3a\u53c2\u6570\u65f6\uff0c\u6307\u5b9a\u77ed\u5173\u8054\u6709\u4e24\u79cd\u65b9\u6cd5"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8981\u4e48\u8ba9\u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8981\u4e48\u8ba9\u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027")))),(0,i.kt)("p",null,"\u4e24\u79cd\u65b9\u6cd5\u793a\u8303\u5982\u4e0b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8ba9\u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.applyStore(store -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        store.setId(2L);\n    });\n    draft.addIntoAuthors(author -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        author.setId(4L);\n    });\n    draft.addIntoAuthors(author -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        author.setId(5L);\n    });\n});\nsqlClient.save(book);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store().apply {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        id = 2L\n    }\n    authors().addBy {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        id = 4L\n    }\n    authors().addBy {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        id = 5L\n    }\n}\nsqlClient.save(book)\n')))),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u5bf9\u88ab\u4fdd\u5b58\u6570\u636e\u7ed3\u6784\u8fdb\u884c\u786c\u7f16\u7801\u4ec5\u4e3a\u793a\u8303\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u88ab\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u7531\u524d\u7aef\u754c\u9762\u63d0\u4ea4\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u5f53\u7136\uff0c\u5982\u679c\u7528\u6237\u6309\u7167",(0,i.kt)("a",{parentName:"p",href:"../../mapping/advanced/view/id-view"},"\u6620\u5c04\u7bc7/\u8fdb\u9636\u6620\u5c04/\u89c6\u56fe\u5c5e\u6027/IdView"),"\u4e00\u6587\u7684\u65b9\u6cd5\u5b9a\u4e49\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"authorIds"),"\u5c5e\u6027\uff0c\u4e0a\u8ff0\u4ee3\u7801\u53ef\u4ee5\u88ab\u7b80\u5316\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"draft.setAuthorIds(Arrays.asList(4L, 5L));\n")),(0,i.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u8ba9\u4f8b\u5b50\u66f4\u5177\u666e\u9002\u6027\uff0c\u8fd9\u91cc\u5e76\u4e0d\u5047\u8bbe\u7528\u6237\u4e3a\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49\u4e86",(0,i.kt)("a",{parentName:"p",href:"../../mapping/advanced/view/id-view"},"IdView"),"\u5c5e\u6027\u3002\u540e\u7eed\u6240\u6709\u6587\u6863\u90fd\u5982\u6b64\uff0c\u4e0d\u518d\u63d0\u9192\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8ba9\u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027"),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0b\u9762\u4ee3\u7801\uff0c\u5047\u8bbe"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u7c7b\u578b\u7684key\u5c5e\u6027\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Author"),"\u7c7b\u578b\u7684key\u5c5e\u6027\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"lastName")," "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u8fd9\u4e2a\u552f\u4e00\u6027\u7ea6\u675f\u5e76\u4e0d\u5408\u7406\uff0c\u8fd9\u91cc\u4e3a\u7b80\u5316\u4f8b\u5b50\uff0c\u59d1\u4e14\u8fd9\u6837\u5047\u8bbe\uff0c\u8bf7\u8bfb\u8005\u5bf9\u6b64\u7ec6\u8282\u522b\u592a\u8f83\u771f"))))),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.applyStore(store -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`BookStore.name`\n        // highlight-next-line\n        store.setName("MANNING");\n    });\n    draft.addIntoAuthors(author -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`Author.firstName`\u548c`Author.lastName`\n        // highlight-next-line\n        author.setFirstName("Boris").setLastName("Cherny");\n    });\n    draft.addIntoAuthors(author -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`Author.firstName`\u548c`Author.lastName`\n        // highlight-next-line\n        author.setFirstName("Samer").setLastName("Buna");\n    });\n});\nsqlClient.save(book);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store().apply {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`BookStore.name`\n        // highlight-next-line\n        name = "MANNING"\n    }\n    authors().addBy {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`Author.firstName`\u548c`Author.lastName`\n        // highlight-next-line\n        firstName = "Boris"\n        // highlight-next-line\n        lastName = "Cherny"\n    }\n    authors().addBy {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`Author.firstName`\u548c`Author.lastName`\n        // highlight-next-line\n        firstName = "Samer"\n        // highlight-next-line\n        lastName = "Buna"\n    }\n}\nsqlClient.save(book)\n')))))),(0,i.kt)("h3",{id:"\u957f\u5173\u8054"},"\u957f\u5173\u8054"),(0,i.kt)("p",null,"\u6240\u8c13\u957f\u5173\u8054\uff0c\u8868\u793a\u9664\u4e86\u8981\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u548c\u5176\u4ed6\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u672c\u8eab\u5916\uff0c\u8fd8\u8981\u8fdb\u4e00\u6b65\u4fee\u6539\u5173\u8054\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u901a\u5e38\uff0cUI\u8bbe\u8ba1\u4f1a\u91c7\u7528\u5185\u5d4c\u8868\u683c\uff0c\u4f8b\u5982"),(0,i.kt)(d._,{mdxType:"LongAssociation"}),(0,i.kt)("div",null,"\xa0"),(0,i.kt)("p",null,"\u7531\u4e8e\u7528\u6237\u4e0d\u4f46\u8981\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u548c\u5176\u4ed6\u5bf9\u8c61\u7684\u5173\u8054\uff0c\u8fd8\u8981\u8fdb\u4e00\u6b65\u4fee\u6539\u5173\u8054\u5bf9\u8c61\uff0c\u800c\u5173\u8054\u5bf9\u8c61\u53ef\u4ee5\u5305\u542b\u66f4\u6df1\u7684\u5173\u8054\uff0c\u6240\u4ee5\uff0c\u7406\u8bba\u4e0a\u8bb2\uff0cUI\u53ef\u51fa\u591a\u5c42\u5173\u8054\u5d4c\u5957\u3002\u8fd9\u5c31\u662f\u79f0\u5176\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"\u957f\u5173\u8054")," \u7684\u539f\u56e0\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u867d\u7136\u8bbe\u8ba1\u4eba\u5458\u4e3a\u4e86\u4fdd\u8bc1UI\u7684\u7b80\u6d01\u6027\u4f1a\u523b\u610f\u907f\u514d\u5728\u5185\u5d4c\u8868\u683c\u4e2d\u5d4c\u5957\u66f4\u6df1\u7684\u5185\u5d4c\u8868\u683c\uff0c\u4f46\u662f\u5b9e\u9645\u9879\u76ee\u4e2d\u4ecd\u7136\u5b58\u5728\u9700\u8981\u5728UI\u4e0a\u7ef4\u62a4\u591a\u5c42\u5d4c\u5957\u5173\u8054\u7684\u573a\u666f\uff0c\u6bd4\u5982\uff1a"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8868\u5355\u672c\u8eab\u662f\u4e00\u9897\u6811\u7ed3\u6784\uff0c\u7f16\u8f91\u597d\u4e86\u540e\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u4fdd\u5b58\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53ef\u89c6\u5316UI\u8bbe\u8ba1\uff0c\u56e0\u4e3aUI\u7ec4\u4ef6\u672c\u8eab\u5c31\u662f\u6811\u5f62\u7ed3\u6784\uff0c\u7528\u6237\u8fdb\u884c\u4e00\u7cfb\u5217\u53ef\u89c6\u5316\u62d6\u62c9\u62fd\u7684\u8bbe\u8ba1\u540e\uff0c\u628aUI\u7ec4\u4ef6\u6811\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u4fdd\u5b58\u3002")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u4e3asave\u6307\u4ee4\u4f20\u9012\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\u4f5c\u4e3a\u53c2\u6570\u65f6\uff0c\u6307\u5b9a\u957f\u5173\u8054\u6709\u4e24\u79cd\u65b9\u6cd5"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u5df2\u7ecf\u4e3a\u5173\u8054\u5bf9\u8c61\u6307\u5b9a\u4e86id\u5c5e\u6027\uff0c\u7ee7\u7eed\u4e3a\u5bf9\u8c61\u6307\u5b9a\u4efb\u4f55\u975eid\u5c5e\u6027 ",(0,i.kt)("em",{parentName:"p"},"\uff08\u5305\u62eckey\u5c5e\u6027\uff09"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u5fc5\u987b\u4e3a\u5173\u8054\u5bf9\u8c61\u6307\u5b9a\u4e86\u6240\u6709key\u5c5e\u6027\u548c\u5176\u4ed6\u5c5e\u6027\u3002"))),(0,i.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u662f\u4ee5\u4e0a\u54ea\u79cd\u65b9\u5f0f\uff0c\u81f3\u5c11\u4e3a\u5173\u8054\u5bf9\u8c61\u6307\u5b9a\u4e00\u4e2a\u65e2\u975eid\u4e5f\u975ekey\u7684\u5c5e\u6027\u3002")),(0,i.kt)("p",null,"\u4f8b\u5b50\u5982\u4e0b"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Order order = Order.$.produce(draft -> {\n    draft.applyCustomer(customer -> customer.setId(1L));\n    draft.setProvince("\u56db\u5ddd");\n    draft.setCity("\u6210\u90fd");\n    draft.setAddress("\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3");\n    draft.addIntoItems(item -> {\n        item.applyProduct(product -> product.setId(1L));\n        // \u65e2\u975eid\u4e5f\u975ekey\u7684\u5c5e\u6027\n        // highlight-next-line\n        item.setQuantity(2);\n    });\n    draft.addIntoItems(item -> {\n        item.applyProduct(product -> product.setId(10L));\n        // \u65e2\u975eid\u4e5f\u975ekey\u7684\u5c5e\u6027\n        // highlight-next-line\n        item.setQuantity(1);\n    });\n});\nsqlClient.save(order);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val order = new(Order::class).by {\n    customer().apply { id = 1L }\n    province = "\u56db\u5ddd"\n    city = "\u6210\u90fd"\n    address = "\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"\n    items().addBy {\n        product().apply { id = 1L }\n        // \u65e2\u975eid\u4e5f\u975ekey\u7684\u5c5e\u6027\n        // highlight-next-line\n        quantity = 2\n    }\n    items().addBy {\n        product().apply { id = 10L }\n        // \u65e2\u975eid\u4e5f\u975ekey\u7684\u5c5e\u6027\n        // highlight-next-line\n        quantity = 1\n    }\n}\nsqlClient.save(order)\n')))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u5bf9\u88ab\u4fdd\u5b58\u6570\u636e\u7ed3\u6784\u8fdb\u884c\u786c\u7f16\u7801\u4ec5\u4e3a\u793a\u8303\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u88ab\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u7531\u524d\u7aef\u754c\u9762\u63d0\u4ea4\u3002")),(0,i.kt)("h2",{id:"\u4e00\u5bf9\u591a\u5173\u8054\u7684\u7279\u6b8a\u6027"},"\u4e00\u5bf9\u591a\u5173\u8054\u7684\u7279\u6b8a\u6027"),(0,i.kt)("p",null,"\u4e4b\u524d\u63d0\u5230"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5b9e\u4f53\u7c7b\u578b\u58f0\u660e\u4e86Key\u5c5e\u6027 ",(0,i.kt)("em",{parentName:"p"},"(\u4e5f\u610f\u5473\u7740id\u9664\u4e86\u5145\u5f53\u552f\u4e00\u6807\u8bc6\u7b26\u5916\u65e0\u4efb\u4f55\u4e1a\u52a1\u610f\u4e49)"),"\uff0c\u90a3\u4e48"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u88ab\u4fdd\u5b58\u7684\u805a\u5408\u6839\u5bf9\u8c61\u800c\u8a00\uff0c\u5efa\u8bae\u4e3a\u5176\u6307\u5b9aid\u5c5e\u6027\u6216key\u5c5e\u6027\u3002\u5426\u5219\u4f1a\u88ab\u7406\u89e3\u6210\u5f3a\u884c\u63d2\u5165\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u672c\u6587\u6b63\u5728\u8ba8\u8bba\u7684\u5f85\u4fdd\u5b58\u7684\u5173\u8054\u5bf9\u8c61\u800c\u8a00\uff0c\u8981\u4e48\u6307\u5b9aid\u5c5e\u6027\uff0c\u8981\u4e48\u6307\u5b9a\u6240\u6709key\u5c5e\u6027\u3002\u5426\u5219\u4f1a\u5f02\u5e38\u3002")))),(0,i.kt)("p",null,"\u4f46\u662f\uff0c\u6709\u4e00\u79cd\u60c5\u51b5\u4f8b\u5916\uff0c\u4e00\u5bf9\u591a\u5173\u7cfb\u3002"),(0,i.kt)("p",null,"\u8ba9\u6211\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50"),(0,i.kt)("h3",{id:"\u5b9e\u4f53\u5b9a\u4e49"},"\u5b9e\u4f53\u5b9a\u4e49"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @Key\n    @Nullable\n    @ManyToOne\n    TreeNode parent();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNode.kt"',title:'"TreeNode.kt"'},"@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val parent: TreeNode?\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n")))),(0,i.kt)("h3",{id:"\u4f7f\u7528\u4fdd\u5b58\u6307\u4ee4"},"\u4f7f\u7528\u4fdd\u5b58\u6307\u4ee4"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(food -> {\n    food\n        // highlight-next-line\n        .setParent(null)\n        .setName("Food")\n        .addIntoChildNodes(drink -> {\n            drink\n                .setName("Drink")\n                .addIntoChildNodes(cococola -> {\n                    cococola.setName("Cococola");\n                })\n                .addIntoChildNodes(fanta -> {\n                    fanta.setName("Fanta");\n                });\n            ;\n        })\n        .addIntoAuthors(bread -> {\n            bread\n                .setName("Bread")\n                .addIntoChildNodes(daguette -> {\n                    daguette.setName("Baguette");\n                })\n                .addIntoChildNodes(ciabatta -> {\n                    ciabatta.setName("Ciabatta");\n                })\n        });\n    ;\n});\nsqlClient.save(treeNode);\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    // highlight-next-line\n    parent = null\n    name = "Food"\n    childNodes().addBy {\n        name = "Drinks"\n        childNodes().addBy {\n            name = "Cococola"\n        }\n        childNodes().addBy {\n            name = "Fanta"\n        }\n    }\n    childNodes().addBy {\n        name = "Bread"\n        childNodes().addBy {\n            name = "Baguette"\n        }\n        childNodes().addBy {\n            name = "Ciabatta"\n        }\n    }\n}\nsqlClient.save(treeNode)\n')))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\u7c7b\u578b\u7684key\u5c5e\u6027\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"parent")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u6839\u8282\u70b9\u800c\u8a00\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9aid\u5c5e\u6027\uff0c\u5efa\u8bae\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\uff0c\u5426\u5219\u4f1a\u88ab\u7406\u89e3\u4e3a\u5f3a\u884c\u63d2\u5165\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u5b50\u8282\u70b9\u800c\u8a00\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9aid\u5c5e\u6027\uff0c\u5219\u5fc5\u987b\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\uff0c\u5426\u5219\u5f02\u5e38\u3002"))),(0,i.kt)("p",null,"\u7136\u800c\uff0c\u5728\u8fd9\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u9664\u4e86\u6839\u8282\u70b9\u5bf9\u8c61\u5916\uff0c\u5176\u4ed6\u6240\u6709\u5bf9\u8c61\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\u90fd\u672a\u88ab\u6307\u5b9a\u3002\u8fd9\u6bb5\u4ee3\u7801\u770b\u8d77\u6765\u4f3c\u4e4e\u65e0\u6cd5\u6b63\u5e38\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u6bb5\u4ee3\u7801\u53ef\u4ee5\u6b63\u786e\u8fd0\u884c\uff0c\u56e0\u4e3asave\u6307\u4ee4\u4e3a\u4e00\u5bf9\u591a\u5173\u8054\u505a\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684\u89c4\u5b9a\uff1a"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u88ab\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u4e2d\uff0c\u7236\u5bf9\u8c61\u901a\u8fc7\u4e00\u5bf9\u591a\u5173\u8054 ",(0,i.kt)("em",{parentName:"p"},"(\u672c\u4f8b\u4e2d\u4e3a",(0,i.kt)("inlineCode",{parentName:"em"},"TreeNode.childNodes"),")")," \u6301\u6709\u4e86\u67d0\u4e9b\u5b50\u5bf9\u8c61\uff0c\n\u90a3\u4e48\u8fd9\u4e9b\u5b50\u5bf9\u8c61\u7684\u9006\u5411\u591a\u5bf9\u4e00\u5173\u8054 ",(0,i.kt)("em",{parentName:"p"},"(\u672c\u4f8b\u4e2d\u4e3a",(0,i.kt)("inlineCode",{parentName:"em"},"TreeNode.parent"),")")," \u5c06\u4f1a\u88ab\u4fdd\u5b58\u6307\u4ee4\u89c6\u4e3a\u5df2\u88ab\u8bbe\u7f6e\u3002")),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u4e0a\u4f8b\u4e2d\uff0c\u4fdd\u5b58\u6307\u4ee4\u4f1a\u8ba4\u4e3a\u6240\u6709\u5b50\u8282\u70b9\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\u90fd\u5df2\u7ecf\u88ab\u8bbe\u7f6e\u4e86\u3002\u5373\uff0c\u6240\u6709\u5b50\u5bf9\u8c61\u90fd\u540c\u65f6\u5177\u5907",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\uff0c\u4fdd\u5b58\u6307\u4ee4\u53ef\u987a\u5229\u8fd0\u884c\u3002"),(0,i.kt)("h2",{id:"\u8131\u52fe\u64cd\u4f5c"},"\u8131\u52fe\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5173\u8054\u5bf9\u8c61\u800c\u8a00\uff0c\u63d2\u5165\u6216\u66f4\u65b0\u64cd\u4f5c\u548c\u4e4b\u524d\u4ecb\u7ecd\u8fc7\u7684\u4fdd\u5b58\u805a\u5408\u6839\u5bf9\u8c61\u64cd\u4f5c\u5e76\u65e0\u8f83\u5927\u5dee\u5f02\u3002\u7528\u6237\u53ea\u9700\u8981\u8bb0\u4f4f\u5173\u8054\u5bf9\u8c61\u4e0d\u53d7",(0,i.kt)("a",{parentName:"p",href:"./save-mode"},"\u4fdd\u5b58\u6a21\u5f0f"),"\u63a7\u5236 ",(0,i.kt)("em",{parentName:"p"},"(\u4e5f\u53ef\u8ba4\u4e3a\u5173\u8054\u5bf9\u8c61\u7684\u4fdd\u5b58\u6a21\u5f0f\u53ea\u6709",(0,i.kt)("inlineCode",{parentName:"em"},"UPSERT"),")")," \u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u7136\u800c\uff0c\u5173\u8054\u5bf9\u8c61\u5177\u6709\u4e00\u4e2a\u975e\u5e38\u7279\u6b8a\u7684\u64cd\u4f5c\uff1a\u8131\u52fe\u3002"),(0,i.kt)("p",null,"\u8131\u52fe\u64cd\u4f5c\u65f6\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u9650\u4e8e\u7bc7\u5e45\uff0c\u6211\u4eec\u4f1a\u5728",(0,i.kt)("a",{parentName:"p",href:"./dissociation"},"\u4e0b\u4e00\u7bc7\u6587\u6863"),"\u4e2d\u5bf9\u5176\u8be6\u7ec6\u4ecb\u7ecd\u3002"))}N.isMDXComponent=!0}}]);