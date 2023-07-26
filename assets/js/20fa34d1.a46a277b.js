"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[993],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,k=d["".concat(l,".").concat(c)]||d[c]||s[c]||o;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),r=t(34334),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(83117),r=t(67294),o=t(34334),i=t(72389),p=t(67392),l=t(7094),u=t(12466),m="tabList__CuJ",s="tabItem_LNqP";function d(e){var n,t,i=e.lazy,d=e.block,c=e.defaultValue,k=e.values,g=e.groupId,v=e.className,I=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:I.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,p.l)(b,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(n=null!=c?c:null==(t=I.find((function(e){return e.props.default})))?void 0:t.props.value)?n:I[0].props.value;if(null!==f&&!b.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.U)(),y=h.tabGroupChoices,B=h.setTabGroupChoices,j=(0,r.useState)(f),O=j[0],M=j[1],T=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var P=y[g];null!=P&&P!==O&&b.some((function(e){return e.value===P}))&&M(P)}var x=function(e){var n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==O&&(C(n),M(a),null!=g&&B(g,String(a)))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;t=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var o,i=T.indexOf(e.currentTarget)-1;t=null!=(o=T[i])?o:T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},b.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(I.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},I.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function c(e){var n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},89075:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=t(65488),p=t(85162),l=["components"],u={sidebar_position:5,title:"\u548cmapstruct\u534f\u540c"},m=void 0,s={unversionedId:"team-work/object/mapstruct",id:"team-work/object/mapstruct",title:"\u548cmapstruct\u534f\u540c",description:"Jimmer\u52a8\u6001\u5bf9\u8c61\u548c\u9759\u6001POJO\u5b8c\u5168\u4e0d\u540c\uff0c\u662f\u4e00\u5957\u5b8c\u6574\u7684\u65b0\u6280\u672f\u4f53\u7cfb\uff0c\u8be5\u4f53\u7cfb\u652f\u6491\u8d77\u4e86\u6574\u4e2aJimmer ORM\u3002",source:"@site/docs/team-work/object/mapstruct.mdx",sourceDirName:"team-work/object",slug:"/team-work/object/mapstruct",permalink:"/jimmer/docs/team-work/object/mapstruct",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/object/mapstruct.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u548cmapstruct\u534f\u540c"},sidebar:"tutorialSidebar",previous:{title:"\u548cJackson\u534f\u540c",permalink:"/jimmer/docs/team-work/object/jackson"},next:{title:"\u53ef\u89c1\u6027",permalink:"/jimmer/docs/team-work/object/visibility"}},d={},c=[{value:"\u4f9d\u8d56\u548c\u9884\u7f16\u8bd1\u5668",id:"\u4f9d\u8d56\u548c\u9884\u7f16\u8bd1\u5668",level:2},{value:"\u5b9a\u4e49POJO",id:"\u5b9a\u4e49pojo",level:2},{value:"\u5b9a\u4e49Mappper",id:"\u5b9a\u4e49mappper",level:2},{value:"\u5982\u679c\u5b9e\u4f53\u5b9a\u4e49\u4e86@IdView\u5c5e\u6027",id:"\u5982\u679c\u5b9e\u4f53\u5b9a\u4e49\u4e86idview\u5c5e\u6027",level:3},{value:"\u5982\u679c\u5b9e\u4f53\u672a\u5b9a\u4e49@IdView\u5c5e\u6027",id:"\u5982\u679c\u5b9e\u4f53\u672a\u5b9a\u4e49idview\u5c5e\u6027",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u8ba9POJO\u5b9e\u73b0Input\u63a5\u53e3",id:"\u8ba9pojo\u5b9e\u73b0input\u63a5\u53e3",level:2}],k={toc:c};function g(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jimmer\u52a8\u6001\u5bf9\u8c61\u548c\u9759\u6001POJO\u5b8c\u5168\u4e0d\u540c\uff0c\u662f\u4e00\u5957\u5b8c\u6574\u7684\u65b0\u6280\u672f\u4f53\u7cfb\uff0c\u8be5\u4f53\u7cfb\u652f\u6491\u8d77\u4e86\u6574\u4e2aJimmer ORM\u3002"),(0,o.kt)("p",null,"\u7136\u800c\uff0c\u6709\u65f6\u6211\u4eec\u9700\u8981\u5728Jimmer\u52a8\u6001\u548c\u666e\u901a\u9759\u6001POJO\u4e4b\u95f4\u76f8\u4e92\u8f6c\u5316\u3002\u6bd4\u5982Jimmer\u81ea\u8eab\u5c31\u4e3a\u4e86API\u7684\u5b89\u5168\u6027\u63a8\u8350\u4e86Input DTO ",(0,o.kt)("em",{parentName:"p"},"(\u65e0\u8bbaREST\u8fd8\u662fGraphQL)"),"\u3002"),(0,o.kt)("h2",{id:"\u4f9d\u8d56\u548c\u9884\u7f16\u8bd1\u5668"},"\u4f9d\u8d56\u548c\u9884\u7f16\u8bd1\u5668"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Jimmer\u9009\u62e9\u4ee5",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mapstruct/mapstruct"},"MapStruct"),"\u4f5c\u4e3a\u548c\u9759\u6001POJO\u5f7c\u6b64\u8f6c\u5316\u7684\u6280\u672f\u3002")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u5c06\u9759\u6001POJO\u8f6c\u5316\u4e3aJimmer\u52a8\u6001\u5bf9\u8c61\u800c\u8a00\uff0cMapStruct\u5e76\u4e0d\u77e5\u9053\u8be5\u5982\u4f55\u6784\u5efaJimmer\u5bf9\u8c61\u3002\u56e0\u6b64"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Jimmer\u672c\u8eab\u7684\u9884\u7f16\u8bd1\u5668 ",(0,o.kt)("em",{parentName:"p"},"(Java\u7684",(0,o.kt)("inlineCode",{parentName:"em"},"jimmer-apt"),"\u6216Kotlin\u7684",(0,o.kt)("inlineCode",{parentName:"em"},"jimmer-ksp"),")")," \u5728Draft\u4e2d\u751f\u6210\u4e86\u4e00\u4e2a\u4e00\u4e9b\u9762\u5411MapStruct\u7684\u4ee3\u7801\uff0c\u8ba9MapStruct\u53ef\u4ee5\u901a\u8fc7\u5176",(0,o.kt)("a",{parentName:"p",href:"https://mapstruct.org/documentation/stable/reference/html/#mapping-with-builders"},"Builder"),"\u6a21\u5f0f\u6784\u5efaJimmer\u5bf9\u8c61\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Jimmer\u6269\u5c55\u4e86MapStruct\u7684Annotation Processor\uff0c\u8be5\u6269\u5c55\u8ba9MapStruct\u5229\u7528\u751f\u6210\u7684Draft\u4e2d\u4e3aMapStruct\u9884\u7559\u7684\u80fd\u529b\u6784\u5efaJimmer\u5bf9\u8c61\u3002"),(0,o.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u6269\u5c55\u53eb\u505a",(0,o.kt)("inlineCode",{parentName:"p"},"jimmer-mapstruct-apt")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5bf9\u4e8eJava\u800c\u8a00\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"jimmer-mapstruct-apt"),"\u88ab",(0,o.kt)("inlineCode",{parentName:"p"},"jimmer-apt"),"\u6240\u5305\u542b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5bf9\u4e8eKotlin\u800c\u8a00\uff0c\u9700\u540c\u65f6\u5728maven\u6216gradle\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"jimmer-ksp"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"jimmer-mapstruct-apt")))))),(0,o.kt)(i.Z,{groupId:"buildTool",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java_maven",label:"Java(Maven)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <dependencies>\n        <dependency> \u2780\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <version>${lombok.version}</version>\n        </dependency>\n        <dependency> \u278a\n            <groupId>org.mapstruct</groupId>\n            <artifactId>mapstruct</artifactId>\n            <version>${mapstruct.version}</version>\n        </dependency>\n        ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n    </dependencies>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.10.1</version>\n            <configuration>\n                <annotationProcessorPaths>\n                    <path> \u2781\n                        <groupId>org.projectlombok</groupId>\n                        <artifactId>lombok</artifactId>\n                        <version>${lombok.version}</version>\n                    </path>\n                    <path> \u278b\n                        <groupId>org.babyfish.jimmer</groupId>\n                        <artifactId>jimmer-apt</artifactId>\n                        <version>${jimmer.version}</version>\n                    </path>\n                    <path> \u278c\n                        <groupId>org.mapstruct</groupId>\n                        <artifactId>mapstruct-processor</artifactId>\n                        <version>${mapstruct.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"))),(0,o.kt)(p.Z,{value:"java_gradle",label:"Java(Gradle)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},'dependencies {\n    \n    implementation "org.projectlombok:lombok:${lombok.version}" \u2780\n    implementation "org.mapstruct:mapstruct:${mapstructVersion}" \u278a\n\n    annotationProcessor "org.projectlombok:lombok:${lombok.version}" \u2781\n    annotationProcessor "org.babyfish.jimmer:jimmer-apt:${jimmerVersion}" \u278b\n    annotationProcessor "org.mapstruct:mapstruct-processor:${mapstructVersion}" \u278c\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n'))),(0,o.kt)(p.Z,{value:"kotin_maven",label:"Kotlin(Maven)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <sourceDirectory>src/main/kotlin</sourceDirectory>\n    <testSourceDirectory>src/test/kotlin</testSourceDirectory>\n\n    <dependencies>\n        <dependency> \u278a\n            <groupId>org.mapstruct</groupId>\n            <artifactId>mapstruct</artifactId>\n            <version>${mapstruct.version}</version>\n        </dependency>\n        ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n    </dependencies>\n\n    <plugins>\n        <plugin>\n            <groupId>org.jetbrains.kotlin</groupId>\n            <artifactId>kotlin-maven-plugin</artifactId>\n            <version>${kotlin.version}</version>\n            <executions>\n                <execution>\n                    <id>compile</id>\n                    <phase>compile</phase>\n                    <goals>\n                        <goal>compile</goal>\n                    </goals>\n                </execution>\n                <execution>\n                    <id>test-compile</id>\n                    <phase>test-compile</phase>\n                    <goals>\n                        <goal>test-compile</goal>\n                    </goals>\n                </execution>\n            </executions>\n            <configuration>\n                <compilerPlugins>\n                    <compilerPlugin>ksp</compilerPlugin>\n                </compilerPlugins>\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.mapstruct</groupId> \u278c\n                        <artifactId>mapstruct-processor</artifactId>\n                        <version>${mapstruct.version}</version>\n                    </path>\n                    <path>\n                        <groupId>org.babyfish.jimmer</groupId> \u24d0\n                        <artifactId>jimmer-mapstruct-apt</artifactId>\n                        <version>${jimmer.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n            <dependencies>\n                <dependency>\n                    <groupId>com.dyescape</groupId>\n                    <artifactId>kotlin-maven-symbol-processing</artifactId>\n                    <version>1.3</version>\n                </dependency>\n                <dependency>\n                    <groupId>org.babyfish.jimmer</groupId> \u278b\n                    <artifactId>jimmer-ksp</artifactId>\n                    <version>${jimmer.version}</version>\n                </dependency>\n            </dependencies>\n        </plugin>\n    </plugins>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"))),(0,o.kt)(p.Z,{value:"kotin_gralde",label:"Kotlin(Gradle.kts)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'plugins {\n    id("com.google.devtools.ksp") version "1.7.10-1.0.6"\n    kotlin("kapt") version "1.6.21"\n\n    ...\u7701\u7565\u5176\u4ed6\u63d2\u4ef6...\n}\ndependencies {\n    \n    implementation "org.mapstruct:mapstruct:${mapstructVersion}" \u278a\n\n    ksp("org.babyfish.jimmer:jimmer-ksp:${jimmerVersion}") \u278b\n    kapt("org.mapstruct:mapstruct-processor:${mapstructVersion}") \u278c\n    kapt("org.babyfish.jimmer:jimmer-mapstruct-apt:${jimmerVersion}") \u24d0\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n\nkotlin {\n    sourceSets.main {\n        kotlin.srcDir("build/generated/ksp/main/kotlin")\n    }\n}\n')))),(0,o.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5047\u8bbeJava\u4e2d\u57fa\u4e8e",(0,o.kt)("a",{parentName:"p",href:"https://projectlombok.org/"},"lombok"),"\u7f16\u5199\u9759\u6001POJO\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u8bed\u8a00"),(0,o.kt)("th",null,"\u4f4d\u7f6e"),(0,o.kt)("th",null,"\u63cf\u8ff0"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"3"},"Java\u548cKotlin"),(0,o.kt)("td",null,"\u278a"),(0,o.kt)("td",null,"\u5f15\u5165mapstruct\u4f9d\u8d56\uff0c\u8ba9\u7528\u6237\u4ee3\u7801\u53ef\u4ee5\u4f7f\u7528mapstruct\u7684\u6ce8\u89e3")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"\u278b"),(0,o.kt)("td",null,"\u4f7f\u7528Jimmer\u7684\u9884\u7f16\u8bd1\u5668\u4e3a\u52a8\u6001\u7c7b\u578b\u751f\u6210\u76f8\u5173\u7684\u6e90\u4ee3\u7801\uff0cJava\u4f7f\u7528`jimmer-apt`\uff0cKotlin\u4f7f\u7528`jimmer-ksp`")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"\u278c"),(0,o.kt)("td",null,"\u4f7f\u7528mapstruct\u7684annotation processor\u751f\u6210\u6e90\u4ee3\u7801 ",(0,o.kt)("i",null,"(\u540e\u6587\u4f1a\u4ecb\u7ecd)")," ")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"2"},"\u4ec5Java"),(0,o.kt)("td",null,"\u2780"),(0,o.kt)("td",null,"\u5f15\u5165lombok\u7684\u4f9d\u8d56\uff0c\u8ba9\u7528\u6237\u4ee3\u7801\u53ef\u4ee5\u4f7f\u7528lombok\u7684\u6ce8\u89e3")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"\u2781"),(0,o.kt)("td",null,"\u4f7f\u7528Lombok\u7684\u9884\u7f16\u8bd1\u5668\u66f4\u6539\u9759\u6001POJO\u7c7b\u7684\u4ee3\u7801\uff0c\u6bd4\u5982\u6dfb\u52a0getter, setter")),(0,o.kt)("tr",null,(0,o.kt)("td",{rowspan:"2"},"\u4ec5Kotlin"),(0,o.kt)("td",null,"\u24d0"),(0,o.kt)("td",null,"\u4f7f\u7528`jimmer-mapstruct-apt`\u62d3\u5c55\u278c")))),(0,o.kt)("h2",{id:"\u5b9a\u4e49pojo"},"\u5b9a\u4e49POJO"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"@Data\npublic class BookInput {\n\n    @Nullable\n    private Long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId;\n\n    private List<Long> authorIds;\n}\n"))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"data class BookInput(\n    val id: Long? = null,\n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long?,\n    val authorIds: List<Long>\n)\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Java POJO\u4ee3\u7801\u4e2d\u91c7\u7528\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"@Nullable"),"\u6ce8\u89e3\uff0c\u4ec5\u4e3a\u63d0\u9ad8\u53ef\u8bfb\u6027\uff0c\u65e0\u5b9e\u8d28\u6027\u529f\u80fd")),(0,o.kt)("p",null,"\u8be5POJO\u6709\u4e09\u4e2a\u5c5e\u6027\uff0c\u9700\u8981\u8bf4\u660e\u4e00\u4e0b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.id")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8fd9\u91cc\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.id"),"\u662f\u5141\u8bb8\u4e3anull\u7684\u3002\u8fd9\u662f\u5fc5\u8981\u7684\uff0c\u6bd4\u5982\uff0c\u63d2\u5165\u6570\u636e\u4e0d\u9700\u8981\u6307\u5b9aid\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u5bf9\u8c61\u52a8\u6001\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"p"},"Book.id"),"\u4e0d\u5141\u8bb8\u4e3anull ",(0,o.kt)("em",{parentName:"p"},"(Jimmer\u7981\u6b62id\u53ef\u4ee5\u4e3anull\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"em",href:"../mapping/base/basic#id"},"\u6620\u5c04\u7bc7/\u57fa\u7840\u6620\u5c04/\u7b80\u5355\u6620\u5c04#@Id"),")")))),(0,o.kt)("p",{parentName:"li"},"\u4e8c\u8005\u5f7c\u6b64\u77db\u76fe\uff0c\u90a3\u4e48\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u600e\u4e48\u8f6c\u5316\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u5462\uff1f"),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Jimmer\u7ea6\u5b9a\uff0c\u5982\u679cPOJO\u7684\u5c5e\u6027\u53ef\u4e3anull\u800c\u52a8\u6001\u5bf9\u8c61\u4e0a\u5bf9\u5e94\u7684\u5c5e\u6027\u4e0d\u80fd\u4e3anull\uff0c\u90a3\u4e48\u52a8\u6001\u5bf9\u8c61\u7684\u5bf9\u5e94\u5c5e\u6027\u4e0d\u4f1a\u88ab\u8d4b\u503c\uff0c\u4fdd\u6301\u7f3a\u5931\u7684\u72b6\u6001\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.storeId")),(0,o.kt)("p",{parentName:"li"},"\u5f88\u660e\u663e\uff0c\u8fd9\u662f\u5173\u8054id\uff0c\u5bf9\u5b9e\u4f53\u5bf9\u8c61\u52a8\u6001\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u52a8\u6001\u5bf9\u8c61\u5c5e\u6027\u88ab\u5b9a\u4e49\u4e3a\u5173\u8054\u5bf9\u8c61\uff0c\u800cPOJO\u4e2d\u5374\u5b9a\u4e49\u4e3a\u5173\u8054id\uff0c\u53eb\u505a\u77ed\u5173\u8054\u6620\u5c04\u3002"),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u77ed\u5173\u8054\u8fd9\u4e2a\u6982\u5ff5\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/view/id-view#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%E7%9F%AD%E5%85%B3%E8%81%94"},"\u8fd9\u91cc")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.authors")),(0,o.kt)("p",{parentName:"li"},"\u5f88\u660e\u663e\uff0c\u8fd9\u662f\u5173\u8054id\u96c6\u5408\uff0c\u5bf9\u5b9e\u4f53\u5bf9\u8c61\u52a8\u6001\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"\u8fd9\u79cd\u52a8\u6001\u5bf9\u8c61\u5c5e\u6027\u88ab\u5b9a\u4e49\u4e3a\u5173\u8054\u5bf9\u8c61\u96c6\u5408\uff0c\u800cPOJO\u4e2d\u5374\u5b9a\u4e49\u4e3a\u5173\u8054id\u7684\u96c6\u5408\uff0c\u53eb\u505a\u77ed\u5173\u8054\u6620\u5c04\u3002"),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u77ed\u5173\u8054\u8fd9\u4e2a\u6982\u5ff5\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"../mapping/advanced/view/id-view#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%E7%9F%AD%E5%85%B3%E8%81%94"},"\u8fd9\u91cc"))))),(0,o.kt)("p",null,"\u5176\u4ed6\u5c5e\u6027\u548c\u539f\u59cb\u5b9e\u4f53\u7684\u5b9a\u4e49\u5b8c\u5168\u4e00\u6837\uff0c\u65e0\u9700\u8bf4\u660e"),(0,o.kt)("h2",{id:"\u5b9a\u4e49mappper"},"\u5b9a\u4e49Mappper"),(0,o.kt)("p",null,"\u4f7f\u7528mapstruct\u6700\u91cd\u8981\u7684\u4e8b\u662f\u5b9a\u4e49Mapper\uff0c\u5982\u4e0b"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInputMapper.java"',title:'"BookInputMapper.java"'},"@Mapper\npublic interface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    Book toBook(BookInput input);\n}\n"))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInputMapper.java"',title:'"BookInputMapper.java"'},"@Mapper\ninterface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    fun toBook(input: BookInput): Book\n}\n")))),(0,o.kt)("p",null,"\u8be5Mapper\u63d0\u4f9b\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"toBook"),"\u65b9\u6cd5\uff0c\u7528\u4e8e\u628a",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u5bf9\u8c61\u8f6c\u5316\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.id"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.id"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.name"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.price"),"\u90fd\u662f\u975e\u5173\u8054\u5c5e\u6027\uff0cmapstruct\u80fd\u5f88\u597d\u5730\u5904\u7406\u5b83\u4eec\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5176\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.id"),"\u53ef\u4ee5\u4e3anull, \u800c",(0,o.kt)("inlineCode",{parentName:"p"},"Book.id"),"\u4e0d\u80fd\u4e3anull\u7684\u95ee\u9898\uff0c\u524d\u9762\u5df2\u7ecf\u8ba8\u8bba\u8fc7\u4e86\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002")),(0,o.kt)("p",null,"\u5173\u952e\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.storeId"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.authorIds"),"\u5e94\u8be5\u5982\u4f55\u6620\u5c04\uff0c\u8fd9\u5206\u4e3a\u4e24\u79cd\u60c5\u51b5\u4e86\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u5b9a\u4e49\u4e86@IdView\u5c5e\u6027")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u672a\u5b9a\u4e49@IdView\u5c5e\u6027"))),(0,o.kt)("h3",{id:"\u5982\u679c\u5b9e\u4f53\u5b9a\u4e49\u4e86idview\u5c5e\u6027"},"\u5982\u679c\u5b9e\u4f53\u5b9a\u4e49\u4e86@IdView\u5c5e\u6027"),(0,o.kt)("p",null,"\u5982\u679c\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\uff0c\u4f8b\u5982"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    Long storeId();\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    List<Long> authorIds();\n}\n'))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Auhtor>\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    val storeId: Long?\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    val authorIds: List<Long>\n}\n')))),(0,o.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b9e\u4f53\u5bf9\u8c61\u548cPOJO\u5b8c\u5168\u5bf9\u5e94\uff0cMapper\u65e0\u9700\u505a\u4efb\u4f55\u4fee\u6539\u3002"),(0,o.kt)("h3",{id:"\u5982\u679c\u5b9e\u4f53\u672a\u5b9a\u4e49idview\u5c5e\u6027"},"\u5982\u679c\u5b9e\u4f53\u672a\u5b9a\u4e49@IdView\u5c5e\u6027"),(0,o.kt)("p",null,"\u5982\u679c\u5b9e\u4f53\u7c7b\u578b\u5e76\u4e3a\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\uff0c\u9700\u8981\u4fee\u6539Mapper"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.storeId"),"\u8f6c\u5316\u4e3a\u53ea\u6709id\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u5bf9\u8c61\uff0c\u518d\u8d4b\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput.authorIds"),"\u8f6c\u5316\u4e3a\u53ea\u6709id\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),"\u5bf9\u8c61\u7684\u96c6\u5408\uff0c\u518d\u8d4b\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"Book.authors")))),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInputMapper.java"',title:'"BookInputMapper.java"'},'@Mapper\npublic interface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    // highlight-next-line\n    @Mapping(target = "store", source = "storeId")\n    // highlight-next-line\n    @Mapping(target = "authors", source = "authorIds")\n    Book toBook(BookInput input);\n\n    @BeanMapping(ignoreByDefault = true)\n    // highlight-next-line\n    @Mapping(target = "id", source = ".")\n    BookStore toBookStore(Long id);\n\n    @BeanMapping(ignoreByDefault = true)\n    // highlight-next-line\n    @Mapping(target = "id", source = ".")\n    Author toAuthor(Long id);\n}\n'))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInputMapper.java"',title:'"BookInputMapper.java"'},'@Mapper\ninterface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    // highlight-next-line\n    @Mapping(target = "store", source = "storeId")\n    // highlight-next-line\n    @Mapping(target = "authors", source = "authorIds")\n    fun toBook(input: BookInput): Book\n\n    @BeanMapping(ignoreByDefault = true)\n    // highlight-next-line\n    @Mapping(target = "id", source = ".")\n    fun toBookStore(id: Long?): BookStore\n\n    @BeanMapping(ignoreByDefault = true)\n    // highlight-next-line\n    @Mapping(target = "id", source = ".")\n    fun toAuthor(id: Long?): Author\n}\n')))),(0,o.kt)("p",null,"\u7531\u4e8emapstruct\u8fd8\u652f\u6301",(0,o.kt)("inlineCode",{parentName:"p"},'@Mapping(target = "store.id", source = "storeId")'),"\u7684\u5199\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u5199\u6cd5\u6765\u7b80\u5316\u4ee3\u7801"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInputMapper.java"',title:'"BookInputMapper.java"'},'@Mapper\npublic interface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    // highlight-next-line\n    @Mapping(target = "store.id", source = "storeId")\n    @Mapping(target = "authors", source = "authorIds")\n    Book toBook(BookInput input);\n\n    @BeanMapping(ignoreByDefault = true)\n    @Mapping(target = "id", source = ".")\n    Author toAuthor(Long id);\n}\n'))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInputMapper.java"',title:'"BookInputMapper.java"'},'@Mapper\ninterface BookInputMapper {\n\n    @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n    // highlight-next-line\n    @Mapping(target = "store.id", source = "storeId")\n    @Mapping(target = "authors", source = "authorIds")\n    fun toBook(input: BookInput): Book\n\n    @BeanMapping(ignoreByDefault = true)\n    @Mapping(target = "id", source = ".")\n    fun toAuthor(id: Long?): Author\n}\n')))),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u628a",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u8f6c\u5316\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u4e86"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"BookInput input = ...\u7701\u7565...;\nBookInputMapper mapper = Mappers.getMapper(BookInputMapper.class);\nBook book = mapper.toBook(input);\n"))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val input: BookInput = ...\u7701\u7565...\nval mapper = Mappers.getMapper(BookInputMapper::class.java)\nval book = mapper.toBook(input)\n")))),(0,o.kt)("h2",{id:"\u8ba9pojo\u5b9e\u73b0input\u63a5\u53e3"},"\u8ba9POJO\u5b9e\u73b0Input\u63a5\u53e3"),(0,o.kt)("p",null,"Jimmer\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u63a5\u53e3\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.Input<E>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface Input<E> {\n\n    E toEntity();\n}\n")),(0,o.kt)("p",null,"\u52a8\u6001\u5bf9\u8c61\u6c38\u8fdc\u4e0d\u4f1a\u5b9e\u73b0\u8fd9\u4e2a\u6b64\u7ed3\u6784\uff0c\u8be5\u63a5\u53e3\u5e94\u8be5\u6709\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u9759\u6001POJO\u7c7b\u6765\u5b9e\u73b0\u3002\u5176\u529f\u80fd\u975e\u5e38\u7b80\u5355\uff0c\u5c31\u662f\u628a\u5f53\u524d\u9759\u6001POJO\u8f6c\u5316\u4e3a\u52a8\u6001\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u8be5\u63a5\u53e3\u53ef\u4ee5\u63d0\u4f9b\u8bed\u6cd5\u5c42\u9762\u7684\u4fbf\u5229\uff0c\u65e0\u8bba\u662f\u5e95\u5c42\u7684",(0,o.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u8fd8\u662f\u4e0a\u5c42\u7684spring-data\u57fa\u63a5\u53e3",(0,o.kt)("inlineCode",{parentName:"p"},"JRepository/KRepository"),"\uff0c\u5176",(0,o.kt)("inlineCode",{parentName:"p"},"sava"),"\u65b9\u6cd5\u90fd\u76f4\u63a5\u63a5\u53d7",(0,o.kt)("inlineCode",{parentName:"p"},"Input"),"\u53c2\u6570\uff0c\u800c\u65e0\u9700\u7528\u6237\u8c03\u7528Mapper\u5b8c\u6210\u8f6c\u5316\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u8981\u8fd9\u4e2a\u8bed\u6cd5\u5c42\u9762\u7684\u4fbf\u5229\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u8ba9POJO\u5b9e\u73b0\u8be5\u63a5\u53e3\uff0c\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7684\u4ee3\u7801\uff0c\u5982\u4e0b"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},"@Data\npublic class BookInput implements Input<Book> { \u2776\n\n    private static final Converter CONVERTER = \n        Mappers.getMapper(Converter.class);\n\n    ...\u7701\u7565\u79c1\u6709\u5b57\u6bb5...\n\n    @Override\n    public Book toEntity() { \u2777\n        return CONVERTER.toBook(this);\n    }\n\n    @Mapper\n    interface Converter {\n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        Book toBook(BookInput input);\n\n        ...\u7701\u7565\u5176\u4ed6mapstruct\u914d\u7f6e...\n    }\n}\n"))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},"data class BookInput(\n    ...\u7565...\n): Input<Book> { \u2776\n\n    override fun toEntity(): Book = \u2777\n        CONVERTER.toBook(this)\n\n    @Mapper\n    internal interface Converter { \n\n        @BeanMapping(unmappedTargetPolicy = ReportingPolicy.IGNORE)\n        fun toBook(input: BookInput): Book\n\n        ...\u7701\u7565\u5176\u4ed6mapstruct\u914d\u7f6e...\n    }\n\n    companion object {\n\n        @JvmStatic\n        private val CONVERTER = \n            Mappers.getMapper(Converter::class.java)\n    }\n}\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u2776 ",(0,o.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7c7b\u5b9e\u73b0\u4e86\u63a5\u53e3",(0,o.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.Input"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u2777 \u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"Input.toEntity"),"\u65b9\u6cd5\uff0c\u5229\u7528MapStruct\u628a\u5f53\u524d\u9759\u6001\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Input DTO"),"\u5bf9\u8c61\u8f6c\u5316\u4e3a\u52a8\u6001\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u5b9e\u4f53\u5bf9\u8c61\u3002\u8fd9\u662f\u8fd9\u4e2a\u7c7b\u552f\u4e00\u7684\u529f\u80fd"))))}g.isMDXComponent=!0}}]);