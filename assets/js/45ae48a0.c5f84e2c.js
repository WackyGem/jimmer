"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(83117),r=n(67294),i=n(34334),o=n(72389),l=n(67392),s=n(7094),d=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:u,groupId:f,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=u??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:I}=(0,s.U)(),[T,N]=(0,r.useState)(k),D=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=f){const e=y[f];null!=e&&e!==T&&h.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,n=D.indexOf(t),a=h[n].value;a!==T&&(E(t),N(a),null!=f&&I(f,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=D.indexOf(e.currentTarget)+1;n=D[t]??D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=D[t]??D[D.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},g)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>D.push(e),onKeyDown:C,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function u(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},32361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={sidebar_position:6,title:"Interceptor"},s=void 0,d={unversionedId:"mutation/draft-interceptor",id:"mutation/draft-interceptor",title:"Interceptor",description:"Define Intercepted Data Format",source:"@site/docs/mutation/draft-interceptor.mdx",sourceDirName:"mutation",slug:"/mutation/draft-interceptor",permalink:"/jimmer/docs/mutation/draft-interceptor",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/draft-interceptor.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Interceptor"},sidebar:"tutorialSidebar",previous:{title:"Mutable Association Table",permalink:"/jimmer/docs/mutation/associations"},next:{title:"Trigger",permalink:"/jimmer/docs/mutation/trigger"}},p={},c=[{value:"Define Intercepted Data Format",id:"define-intercepted-data-format",level:2},{value:"Define Interceptor",id:"define-interceptor",level:2},{value:"Using Jimmer Spring Starter",id:"using-jimmer-spring-starter",level:3},{value:"Not Using Jimmer Spring Starter",id:"not-using-jimmer-spring-starter",level:3},{value:"Final Usage",id:"final-usage",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"define-intercepted-data-format"},"Define Intercepted Data Format"),(0,r.kt)("p",null,"Draft interceptors work with ",(0,r.kt)("a",{parentName:"p",href:"./save-command"},"Save Command")," to adjust data before objects are saved."),(0,r.kt)("p",null,"If most entity tables have the four fields created_time, modified_time, created_by and modified_by, a super class can be provided as follows:"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line  \n@MappedSuperclass\npublic interface BaseEntity {\n\n    LocalDateTime createdTime();\n\n    LocalDateTime modifiedTime();\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User creator();\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User editor();\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\n@MappedSuperclass\ninterface BaseEntity {\n\n    val createdTime: LocalDateTime\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val createdBy: User\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL) \n    val modifiedBy: User\n}\n")))),(0,r.kt)("p",null,"All entities that need these fields can derive from this superclass."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@OnDissociate(DissociateAction.SET_NULL)")," here is to prevent deletion operations on associated ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," data from being blocked due to these two foreign keys. When associated ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," is deleted, these two foreign keys are automatically cleared.")),(0,r.kt)("h2",{id:"define-interceptor"},"Define Interceptor"),(0,r.kt)("p",null,"Assume there is a service class called ",(0,r.kt)("inlineCode",{parentName:"p"},"UserService")," whose Java method ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentUserId()")," or Kotlin property ",(0,r.kt)("inlineCode",{parentName:"p"},"currentUserId")," returns the id of the currently logged in user."),(0,r.kt)("p",null,"The interceptor must implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.DraftInterceptor")," interface. If using Spring management, the code is:"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class BaseEntityDraftInterceptor implements DraftInterceptor<BaseEntityDraft> {\n\n    private final UserService userService;\n\n    public BaseEntityDraftInterceptor(UserService userService) {\n        this.userService = userService;\n    }\n\n    @Override\n    public void beforeSave(BaseEntityDraft draft, boolean isNew) {\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.MODIFIED_TIME)) {\n            draft.setModifiedTime(LocalDateTime.now());\n        }\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.EDITOR)) {\n            draft.applyModifiedBy(user -> {\n                user.setId(userService.getCurrentUserId());\n            });\n        }\n        if (isNew) {\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATED_TIME)) {\n                draft.setCreatedTime(LocalDateTime.now());\n            }\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATOR)) {\n                draft.applyCreatedBy(user -> {\n                    user.setId(userService.getCurrentUserId());\n                });\n            }   \n        }\n    }\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass BaseEntityDraftInterceptor(\n    private val userService: UserService  \n) : DraftInterceptor<BaseEntityDraft> {\n\n    override fun beforeSave(draft: BaseEntityDraft, isNew: Boolean) {\n        if (!isLoaded(draft, BaseEntity::modifiedTime)) {\n            draft.modifiedTime = LocalDateTime.now()\n        }\n\n        if (!isLoaded(draft, BaseEntity::modifiedBy)) {\n            draft.modifiedBy().apply {\n                id = userService.currentUserId\n            }\n        }\n\n        if (isNew) {\n            if (!isLoaded(draft, BaseEntity::createdTime)) {\n                draft.createdTime = LocalDateTime.now()\n            }\n\n            if (!isLoaded(draft, BaseEntity::createdBy)) {\n                draft.createdBy().apply {\n                    id = userService.currentUserId\n                }\n            }\n        }\n    }\n}\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSave")," method is called before an object is saved, where the user can make final adjustments to the data to be saved. "),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"isNew")," parameter is true, it means the subsequent operation is an insert; otherwise, it is an update."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please do not modify properties decorated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@Key")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSave")," method.")),(0,r.kt)("h3",{id:"using-jimmer-spring-starter"},"Using Jimmer Spring Starter"),(0,r.kt)("p",null,"In the above, the class ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseEntityDraftInterceptor")," is decorated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Component"),", obviously a Spring-managed object."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If using Spring Boot Starter and ensuring the interceptor is Spring-managed, then Jimmer will register it automatically without additional configuration."),(0,r.kt)("p",{parentName:"admonition"},"Otherwise, it must be manually registered.")),(0,r.kt)("h3",{id:"not-using-jimmer-spring-starter"},"Not Using Jimmer Spring Starter"),(0,r.kt)("p",null,"If jimmer spring starter is not used, attaching the interceptor to the SqlClient object makes it take effect:"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic JSqlClient sqlClient(\n    List<DraftInterceptor<?>> interceptors,\n    ...other params omitted...  \n) {\n    return JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addDraftinterceptors(interceptors)\n        ...other config omitted...\n        .build();\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean  \nfun sqlClient(\n    interceptors: List<DraftInterceptor<?>>,\n    ...other params omitted...\n): KSqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        addDraftinterceptors(interceptors)\n        ...other config omitted...\n    }\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Although only one ",(0,r.kt)("inlineCode",{parentName:"p"},"DraftInterceptor")," is demoed in this article, there may be many in an actual project."),(0,r.kt)("p",{parentName:"admonition"},"So here a collection is used for Spring to inject all ",(0,r.kt)("inlineCode",{parentName:"p"},"DraftInterceptor")," instances.")),(0,r.kt)("h2",{id:"final-usage"},"Final Usage"),(0,r.kt)("p",null,"Assume ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseEntity"),", then it can be used like:"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("59"));\n    draft.applyStore(store -> store.setId(2L));\n});\nsqlClient.getEntities().save(book);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action" \n    edition = 1\n    price = BigDecimal("59")\n    store().id = 2\n}\nsqlClient.entities.save(book)\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the above save command finally results in an insert operation, the generated SQL is:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK(\n    /* highlight-start */\n    CREATED_TIME,\n    MODIFIED_TIME, \n    CREATED_BY,\n    MODIFIED_BY,\n    /* highlight-end */\n    NAME,\n    EDITION,\n    PRICE,\n    STORE_ID  \n) values(\n    /* highlight-next-line */\n    ?, ?, ?, ?, \n    ?, ?, ?, ?\n)\n")),(0,r.kt)("p",{parentName:"li"},"Where the assignment behavior for ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED_TIME"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFIED_TIME"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED_BY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFIED_BY")," is automatically added by the interceptor.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the above save command finally results in an update operation, the generated SQL is: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK set\n    /* highlight-start */\n    MODIFIED_TIME = ?, \n    MODIFIED_TIME,\n    /* highlight-end */ \n    PRICE = ?,\n    STORE_ID = ?\nwhere ID = ?\n")),(0,r.kt)("p",{parentName:"li"},"Where the assignment behavior for ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFIED_TIME")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MODIFIED_BY")," is automatically added by the interceptor."))))}u.isMDXComponent=!0}}]);