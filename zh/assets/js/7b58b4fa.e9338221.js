"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9956],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=a.createContext({}),s=function(n){var e=a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=s(n.components);return a.createElement(u.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,u=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),p=s(t),m=r,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(k,i(i({ref:e},c),{},{components:t})):a.createElement(k,i({ref:e},c))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o.mdxType="string"==typeof n?n:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:function(n,e,t){t.d(e,{Z:function(){return i}});var a=t(67294),r=t(34334),l="tabItem_Ymn6";function i(n){var e=n.children,t=n.hidden,i=n.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},e)}},65488:function(n,e,t){t.d(e,{Z:function(){return m}});var a=t(83117),r=t(67294),l=t(34334),i=t(72389),o=t(67392),u=t(7094),s=t(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(n){var e,t,i=n.lazy,p=n.block,m=n.defaultValue,k=n.values,g=n.groupId,v=n.className,b=r.Children.map(n.children,(function(n){if((0,r.isValidElement)(n)&&"value"in n.props)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:b.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,o.l)(y,(function(n,e){return n.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(e=null!=m?m:null==(t=b.find((function(n){return n.props.default})))?void 0:t.props.value)?e:b[0].props.value;if(null!==h&&!y.some((function(n){return n.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),I=T.tabGroupChoices,w=T.setTabGroupChoices,L=(0,r.useState)(h),N=L[0],_=L[1],E=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var x=I[g];null!=x&&x!==N&&y.some((function(n){return n.value===x}))&&_(x)}var j=function(n){var e=n.currentTarget,t=E.indexOf(e),a=y[t].value;a!==N&&(O(e),_(a),null!=g&&w(g,String(a)))},M=function(n){var e,t=null;switch(n.key){case"ArrowRight":var a,r=E.indexOf(n.currentTarget)+1;t=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var l,i=E.indexOf(n.currentTarget)-1;t=null!=(l=E[i])?l:E[E.length-1]}null==(e=t)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},y.map((function(n){var e=n.value,t=n.label,i=n.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:function(n){return E.push(n)},onKeyDown:M,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===e})}),null!=t?t:e)}))),i?(0,r.cloneElement)(b.filter((function(n){return n.props.value===N}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(n,e){return(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==N})}))))}function m(n){var e=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(e)},n))}},76456:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=t(83117),r=t(80102),l=(t(67294),t(3905)),i=t(65488),o=t(85162),u=["components"],s={sidebar_position:5,title:"\u89c6\u56fe\u5c5e\u6027"},c=void 0,d={unversionedId:"team-work/query/object-fetcher/view",id:"team-work/query/object-fetcher/view",title:"\u89c6\u56fe\u5c5e\u6027",description:"IdView",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/query/object-fetcher/view.mdx",sourceDirName:"team-work/query/object-fetcher",slug:"/team-work/query/object-fetcher/view",permalink:"/jimmer/zh/docs/team-work/query/object-fetcher/view",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/query/object-fetcher/view.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u89c6\u56fe\u5c5e\u6027"},sidebar:"tutorialSidebar",previous:{title:"\u9012\u5f52\u67e5\u8be2",permalink:"/jimmer/zh/docs/team-work/query/object-fetcher/recursive"},next:{title:"\u66b4\u9732\u7ed9\u5ba2\u6237\u7aefAPI",permalink:"/jimmer/zh/docs/team-work/query/object-fetcher/fetch-by"}},p={},m=[{value:"IdView",id:"idview",level:2},{value:"\u4fee\u6539\u793a\u4f8b\u5b9e\u4f53\u63a5\u53e3",id:"\u4fee\u6539\u793a\u4f8b\u5b9e\u4f53\u63a5\u53e3",level:3},{value:"\u6293\u53d6<code>IdView</code>\u89c6\u56fe\u5c5e\u6027",id:"\u6293\u53d6idview\u89c6\u56fe\u5c5e\u6027",level:3},{value:"ManyToManyView",id:"manytomanyview",level:2},{value:"\u6570\u636e\u51c6\u5907",id:"\u6570\u636e\u51c6\u5907",level:3},{value:"\u5efa\u7acb\u5b9e\u4f53",id:"\u5efa\u7acb\u5b9e\u4f53",level:3},{value:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868\u5c5e\u6027",id:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868\u5c5e\u6027",level:3},{value:"\u67e5\u8be2\u591a\u5bf9\u591a\u89c6\u56fe\u5c5e\u6027",id:"\u67e5\u8be2\u591a\u5bf9\u591a\u89c6\u56fe\u5c5e\u6027",level:3}],k={toc:m};function g(n){var e=n.components,t=(0,r.Z)(n,u);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"idview"},"IdView"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6570\u636e\u7ed3\u6784\uff0c\u524d\u540e\u7aef\u5404\u81ea\u504f\u597d\u6709\u6240\u4e0d\u540c\uff0c\u540e\u7aef\u503e\u5411\u4e8e\u7ed3\u6784\u5316\u6570\u636e\uff0c\u800c\u524d\u7aef\u503e\u5411\u4e8e\u5e73\u94fa\u5316\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8eIdOnly\u7684\u5bf9\u8c61\uff0cJimmer\u63d0\u4f9b\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u6ce8\u89e3\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5c06IdOnly\u5bf9\u8c61\u5c55\u5f00\u6210\u4e00\u4e2a\u5b57\u6bb5\u3002"),(0,l.kt)("h3",{id:"\u4fee\u6539\u793a\u4f8b\u5b9e\u4f53\u63a5\u53e3"},"\u4fee\u6539\u793a\u4f8b\u5b9e\u4f53\u63a5\u53e3"),(0,l.kt)("p",null,"\u5728\u793a\u4f8b\u5b9e\u4f53\u63a5\u53e3\u4e2d\uff0c\u5206\u522b\u6dfb\u52a0\u4e86\u4e24\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u7684\u5c5e\u6027\uff0c\u8fd9\u662f\u4e00\u4e2a\u89c6\u56fe\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u7684\u503c\u5c06\u81ea\u52a8\u540c\u6b65\u5bf9\u5e94\u5173\u8054\u5bf9\u8c61\u7684\u503c\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u96c6\u5408\u5c5e\u6027\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"IdView"),"\uff0c\u9700\u8981\u624b\u52a8\u5199\u660e\u5176\u5bf9\u5e94\u7684\u662f\u54ea\u4e2a\u5173\u8054\u5c5e\u6027\u3002"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    String name();\n\n    int edition();\n\n    BigDecimal price();\n\n    @Nullable\n    @ManyToOne\n    BookStore store();\n\n    @ManyToMany\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView\n    Long storeId();\n\n    // highlight-next-line\n    @IdView("authors")\n    List<Long> authorIds();\n}\n\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    val name: String\n\n    val edition: Int\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    val authors: List<Author>\n\n    // highlight-next-line\n    @IdView\n    val storeId: Long?\n\n    // highlight-next-line\n    @IdView("authors")\n    val authorsIds: List<Long>\n}\n')))),(0,l.kt)("h3",{id:"\u6293\u53d6idview\u89c6\u56fe\u5c5e\u6027"},"\u6293\u53d6",(0,l.kt)("inlineCode",{parentName:"h3"},"IdView"),"\u89c6\u56fe\u5c5e\u6027"),(0,l.kt)("p",null,"\u89c6\u56fe\u5c5e\u6027\u9700\u8981\u624b\u52a8\u6293\u53d6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"allScalarFields"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"allTableFields"),"\u4e0d\u4f1a\u81ea\u52a8\u6293\u53d6\u89c6\u56fe\u5c5e\u6027\u3002"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\nList<Book> bookWithIdViews = sqlClient.createQuery(book)\n    .where(book.edition().eq(3))\n    .select(\n        book.fetch(\n            BookFetcher.$.allScalarFields()\n            // highlight-next-line\n            .storeId().authorIds()\n        )\n    )\n    .execute();\nSystem.out.println(toJson(bookWithIdViews));\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"var bookWithIdViews = sqlClient.createQuery(Book::class) {\n    where(table.edition.eq(3))\n    select(\n        table.fetchBy {\n            allScalarFields\n            storeId\n            authorIds\n        }\n    )\n    }\n    .execute()\nprintln(toJson(bookWithIdViews))\n")))),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": 3,\n        "name": "Learning GraphQL",\n        "edition": 3,\n        "price": 51.00,\n        "storeId": 1,\n        "authorIds": [\n            1,\n            2\n        ]\n    }\n    ...\u7701\u7565\u5176\u4ed6\u5bf9\u8c61\n]\n')),(0,l.kt)("h2",{id:"manytomanyview"},"ManyToManyView"),(0,l.kt)("p",null,"\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u591a\u5bf9\u591a\u5173\u8054\u7684\u4e2d\u95f4\u8868\uff0c\u4e0d\u518d\u662f\u7eaf\u7cb9\u7684\u7531\u53cc\u65b9id\u7ec4\u6210\uff0c\u800c\u662f\u5939\u6742\u4e86\u4e00\u4e9b\u5176\u4ed6\u5b57\u6bb5\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u67e5\u8be2\u4e2d\u95f4\u8868\u7684\u5c5e\u6027\uff0c\u4ee5\u53ca\u591a\u5bf9\u591a\u5173\u8054\u8868\u7684\u5c5e\u6027\u3002"),(0,l.kt)("p",null,"\u4f20\u7edf\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"ManyToMany"),"\u7684\u4e24\u4e2a\u5b9e\u4f53\u62c6\u5206\u6210\u4e09\u4e2a\u5b9e\u4f53\uff1a\u4e24\u4e2a\u539f\u672c\u7684\u5b9e\u4f53\u4e0e\u4e00\u4e2a\u4e2d\u95f4\u8868\u5b9e\u4f53\u3002\u4e09\u65b9\u5173\u7cfb\u53d8\u4e3a\u539f\u672c\u7684\u4e24\u4e2a\u5b9e\u4f53\u4e00\u5bf9\u591a\u4e2d\u95f4\u5b9e\u4f53\uff0c\u4e2d\u95f4\u5b9e\u4f53\u4e3a\u4e24\u4e2a\u591a\u5bf9\u4e00\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u4e3e\u4f8b\uff0c\u8fd9\u91cc\u4e0d\u5728\u4f7f\u7528\u4e66\u7c4d\u3001\u4f5c\u8005\uff0c\u800c\u662f\u66f4\u5177\u771f\u5b9e\u542b\u4e49\u7684\u5b66\u751f(student)\u3001\u8bfe\u7a0b(course)\u3001\u8bfe\u7a0b\u5f97\u5206(learning_link)\u4e09\u5f20\u8868\u4e3a\u4f8b\u3002"),(0,l.kt)("h3",{id:"\u6570\u636e\u51c6\u5907"},"\u6570\u636e\u51c6\u5907"),(0,l.kt)("p",null,"\u4e3a\u4e86\u793a\u4f8b\u65b9\u4fbf\uff0c\u8fd9\u91cc\u4f7f\u7528\u7684\u662fH2\u6570\u636e\u5e93\uff0c\u9996\u5148\u4f7f\u7528\u4ee5\u4e0bsql\u5efa\u7acb\u8868\u7ed3\u6784\u548c\u521d\u59cb\u5316\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"drop table course if exists;\ndrop table learning_link if exists;\ndrop table student if exists;\n\ncreate table course(\n    id identity(100, 1) not null,\n    name varchar(50) not null,\n    academic_credit integer not null\n);\n\ncreate table student(\n    id identity(100, 1) not null,\n    name varchar(50) not null\n);\n\ncreate table learning_link(\n    id identity(100, 1) not null,\n    student_id int not null,\n    course_id int not null,\n    score int null\n);\n\nalter table learning_link\n    add constraint fk_learning_link__student\n        foreign key(student_id)\n            references student(id)\n            on delete cascade;\n\nalter table learning_link\n    add constraint fk_learning_link__course\n        foreign key(course_id)\n            references course(id)\n            on delete cascade;\n\ninsert into student(id, name)\nvalues  (1, 'John'),\n        (2, 'Jane'),\n        (3, 'Jack'),\n        (4, 'Jill'),\n        (5, 'Joe');\n\ninsert into course(id, name, academic_credit)\nvalues  (1, 'Math', 100),\n        (2, 'English', 100),\n        (3, 'History', 100),\n        (4, 'Science', 100),\n        (5, 'Art', 100);\n\ninsert into learning_link(student_id, course_id, score)\nvalues  (1, 1, 100), (1, 2, 90), (1, 3, 80), (1, 4, 70), (1, 5, 60),\n        (2, 1, 90), (2, 2, 80), (2, 3, 70), (2, 4, 60), (2, 5, 100),\n        (3, 1, 80), (3, 2, 70), (3, 3, 60), (3, 4, 100), (3, 5, 90),\n        (4, 1, 70), (4, 2, 60), (4, 3, 100), (4, 4, 90), (4, 5, 80),\n        (5, 1, 60), (5, 2, 100), (5, 3, 90), (5, 4, 80), (5, 5, 70);\n")),(0,l.kt)("h3",{id:"\u5efa\u7acb\u5b9e\u4f53"},"\u5efa\u7acb\u5b9e\u4f53"),(0,l.kt)("p",null,"Student\u5b66\u751f\u5b9e\u4f53\uff1a"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Student {\n\n    @Id\n    long id();\n\n    String name();\n    // \u4e00\u5bf9\u591a\u5173\u8054\uff0c\u6307\u5411\u4e2d\u95f4\u5b9e\u4f53\u8bfe\u7a0b\u5f97\u5206\n    @OneToMany(mappedBy = "student")\n    List<LearningLink> learningLinks();\n\n    // \u591a\u5bf9\u591a\u89c6\u56fe\uff0cprop\u503c\u4e3a\u7531`@OneToMany`\u6ce8\u89e3\u7684\u5c5e\u6027\uff0c\u4ece\u5f53\u524d\u5b9e\u4f53\u6307\u5411\u4e2d\u95f4\u8868\u7684\u5c5e\u6027\u540d\n    @ManyToManyView(prop = "learningLinks")\n    // @ManyToManyView(prop = "learnLinks", deeperProp = "course")\n    List<Course> courses();\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Student {\n    @Id\n    val id: Long\n\n    val name: String\n\n    // \u4e00\u5bf9\u591a\u5173\u8054\uff0c\u6307\u5411\u4e2d\u95f4\u5b9e\u4f53\u8bfe\u7a0b\u5f97\u5206\n    @OneToMany(mappedBy = "student")\n    val learningLinks: List<LearningLink>\n\n    // \u591a\u5bf9\u591a\u89c6\u56fe\uff0cprop\u503c\u4e3a\u7531`@OneToMany`\u6ce8\u89e3\u7684\u5c5e\u6027\uff0c\u4ece\u5f53\u524d\u5b9e\u4f53\u6307\u5411\u4e2d\u95f4\u8868\u7684\u5c5e\u6027\u540d\n    @ManyToManyView(prop = "learningLinks")\n    val courses: List<Course>\n}\n')))),(0,l.kt)("p",null,"Course\u8bfe\u7a0b\u5b9e\u4f53\uff1a"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Course {\n\n    @Id\n    long id();\n\n    String name();\n\n    int academicCredit();\n\n    // \u4e00\u5bf9\u591a\u5173\u8054\uff0c\u6307\u5411\u4e2d\u95f4\u5b9e\u4f53\u8bfe\u7a0b\u5f97\u5206\n    @OneToMany(mappedBy = "course")\n    List<LearningLink> learningLinks();\n\n    // \u591a\u5bf9\u591a\u89c6\u56fe\uff0cprop\u503c\u4e3a\u7531`@OneToMany`\u6ce8\u89e3\u7684\u5c5e\u6027\uff0c\u4ece\u5f53\u524d\u5b9e\u4f53\u6307\u5411\u4e2d\u95f4\u8868\u7684\u5c5e\u6027\u540d\n    // deeperProp\u503c\u4e3a\u4e2d\u95f4\u5b9e\u4f53\u4e2d\u7531`@ManyToOne`\u6ce8\u89e3\u7684\u6307\u5411\u76ee\u6807\u5c5e\u6027\u7684\u540d\u79f0\n    @ManyToManyView(prop = "learningLinks", deeperProp = "student")\n    // \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u63a8\u65addeeperProp\uff0c\u53ef\u4ee5\u7701\u7565\n    // or @ManyToManyView(prop = "learningLinks")\n    List<Student> students();\n}\n\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Course {\n    @Id\n    val id: Long\n\n    val name: String\n\n    val academicCredit: Int\n\n    // \u4e00\u5bf9\u591a\u5173\u8054\uff0c\u6307\u5411\u4e2d\u95f4\u5b9e\u4f53\u8bfe\u7a0b\u5f97\u5206\n    @OneToMany(mappedBy = "course")\n    val learningLinks: List<LearningLink>\n\n    // \u591a\u5bf9\u591a\u89c6\u56fe\uff0cprop\u503c\u4e3a\u7531`@OneToMany`\u6ce8\u89e3\u7684\u5c5e\u6027\uff0c\u4ece\u5f53\u524d\u5b9e\u4f53\u6307\u5411\u4e2d\u95f4\u8868\u7684\u5c5e\u6027\u540d\n    // deeperProp\u503c\u4e3a\u4e2d\u95f4\u5b9e\u4f53\u4e2d\u7531`@ManyToOne`\u6ce8\u89e3\u7684\u6307\u5411\u76ee\u6807\u5c5e\u6027\u7684\u540d\u79f0\n    @ManyToManyView(prop = "learningLinks", deeperProp = "student")\n    val students: List<Student>\n}\n')))),(0,l.kt)("p",null,"LearningLink\u8bfe\u7a0b\u5f97\u5206\uff1a"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface LearningLink {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // \u591a\u5bf9\u4e00\u5173\u8054\uff0c\u6307\u5411\u5b66\u751f\u5b9e\u4f53\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    Student student();\n\n    // \u591a\u5bf9\u4e00\u5173\u8054\uff0c\u6307\u5411\u8bfe\u7a0b\u5b9e\u4f53\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    Course course();\n\n    Integer score();\n\n    @IdView\n    long studentId();\n\n    @IdView\n    long courseId();\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface LearningLink {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // \u591a\u5bf9\u4e00\u5173\u8054\uff0c\u6307\u5411\u5b66\u751f\u5b9e\u4f53\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    val student: Student\n\n    // \u591a\u5bf9\u4e00\u5173\u8054\uff0c\u6307\u5411\u8bfe\u7a0b\u5b9e\u4f53\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    val course: Course\n\n    val score: Int\n\n    @IdView\n    val studentId: Long\n\n    @IdView\n    val courseId: Long\n}\n")))),(0,l.kt)("h3",{id:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868\u5c5e\u6027"},"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868\u5c5e\u6027"),(0,l.kt)("p",null,"\u67e5\u8be2\u9009\u4fee\u8bfe\u7a0b\u5f97\u5206\u5927\u4e8e\u7b49\u4e8e90\u5206\u4ee5\u4e0a\u7684\u5b66\u751f\u59d3\u540d\u548c\u8bfe\u7a0b\u540d\u79f0\u548c\u5f97\u5206"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"LearningLinkTable learningLink = LearningLinkTable.$;\nList<LearningLink> list = sqlClient.createQuery(learningLink)\n    .where(learningLink.score().ge(90))\n    .select(\n        learningLink.fetch(\n            LearningLinkFetcher.$\n                .student(StudentFetcher.$.name())\n                .course(CourseFetcher.$.name())\n                .score()\n        )\n    )\n    .execute();\nSystem.out.println(toJson(list));\n\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(LearningLink::class) {\n        where(learningLink.score().ge(90))\n        select(\n            table.fetchBy {\n                student {\n                    name\n                }\n                course {\n                    name\n                }\n                score\n            }\n        )\n    }\n    .execute()\n")))),(0,l.kt)("p",null,"\u751f\u6210\u7684sql\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"# 1.\u67e5\u8be2\u8bfe\u7a0b\u5f97\u5206\u8868\uff0c\u5f97\u5230\u5173\u8054\u5b66\u751fid\u3001\u5173\u8054\u8bfe\u7a0bid\nselect\n    tb_1_.ID,\n    tb_1_.STUDENT_ID,\n    tb_1_.COURSE_ID,\n    tb_1_.SCORE\nfrom LEARNING_LINK tb_1_\nwhere tb_1_.SCORE >= ?\n\n# 2.\u67e5\u8be2\u5b66\u751f\u8868\uff0c\u5f97\u5230\u5b66\u751f\u540d\u79f0\nselect\n    tb_1_.ID,\n    tb_1_.NAME\nfrom STUDENT tb_1_\nwhere tb_1_.ID in (?, ?, ?, ?, ?)\n\n# 3.\u67e5\u8be2\u8bfe\u7a0b\u8868\uff0c\u5f97\u5230\u8bfe\u7a0b\u540d\u79f0\nselect\n    tb_1_.ID,\n    tb_1_.NAME\nfrom COURSE tb_1_\nwhere tb_1_.ID in (?, ?, ?, ?, ?)\n\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": 100,\n        "student": {\n            "id": 1,\n            "name": "John"\n        },\n        "course": {\n            "id": 1,\n            "name": "Math"\n        },\n        "score": 100\n    },\n    {\n        "id": 101,\n        "student": {\n            "id": 1,\n            "name": "John"\n        },\n        "course": {\n            "id": 2,\n            "name": "English"\n        },\n        "score": 90\n    }\n    ...\u7701\u7565\u5176\u4ed6\u5bf9\u8c61\n]\n')),(0,l.kt)("h3",{id:"\u67e5\u8be2\u591a\u5bf9\u591a\u89c6\u56fe\u5c5e\u6027"},"\u67e5\u8be2\u591a\u5bf9\u591a\u89c6\u56fe\u5c5e\u6027"),(0,l.kt)("p",null,"\u7531\u4e8e\u5f15\u5165\u4e86\u4e2d\u95f4\u5b9e\u4f53\uff0c\u5b66\u751f\u5b9e\u4f53\u4e0e\u8bfe\u7a0b\u5b9e\u4f53\u4e0d\u518d\u76f4\u63a5\u4e92\u76f8\u5173\u8054\uff0c\u867d\u7136\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"\u5b66\u751f->\u8bfe\u7a0b\u5f97\u5206->\u8bfe\u7a0b"),"\u8fd9\u6837\u7684\u94fe\u8def\u95f4\u63a5\u5173\u8054\uff0c\u4f46\u662f\u8def\u5f84\u592a\u957f\u3002"),(0,l.kt)("p",null,"\u800c\u4e14\u4e2d\u95f4\u5b9e\u4f53\u5e94\u8be5\u53ea\u5728\u5fc5\u8981\u65f6\u5019\u8fdb\u884c\u64cd\u4f5c\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u5e94\u8be5\u5c3d\u91cf\u9690\u85cf\u4e2d\u95f4\u5b9e\u4f53\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64Jimmer\u63d0\u4f9b\u4e86\u591a\u5bf9\u591a\u89c6\u56fe\u6765\u51cf\u5c11\u8c03\u7528\u94fe\u8def\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u67e5\u8be2\uff1aid\u4e3a1\u7684\u5b66\u751f\u7684\u6240\u6709\u8bfe\u7a0b\u540d\u79f0"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"StudentTable student = StudentTable.$;\nStudent result = sqlClient.createQuery(student)\n    .where(student.id().eq(1L))\n    .select(student.fetch(StudentFetcher.$.name().courses(CourseFetcher.$.name())))\n    .fetchOne();\nSystem.out.println(toJson(result));\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(LearningLink::class) {\n        where(table.id.eq(1))\n        select(\n            table.fetchBy {\n                student {\n                    name\n                }\n                course {\n                    name\n                }\n            }\n        )\n    }\n    .execute()\n")))),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "name": "John",\n    "courses": [\n        {\n            "id": 1,\n            "name": "Math"\n        },\n        {\n            "id": 2,\n            "name": "English"\n        },\n        {\n            "id": 3,\n            "name": "History"\n        },\n        {\n            "id": 4,\n            "name": "Science"\n        },\n        {\n            "id": 5,\n            "name": "Art"\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"\u4f7f\u7528\u591a\u5bf9\u591a\u89c6\u56fe\uff0c\u53ef\u4ee5\u50cf\u6ca1\u6709\u5f15\u5165\u4e2d\u95f4\u5b9e\u4f53\u65f6\u4e00\u6837\u65b9\u4fbf\u5feb\u6377\u7684\u76f4\u63a5\u64cd\u4f5c\u5173\u8054\u5bf9\u8c61\u3002"))}g.isMDXComponent=!0}}]);