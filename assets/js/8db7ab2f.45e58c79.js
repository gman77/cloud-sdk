"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2220],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72360:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),r=t(86010),l="tabItem_OmH5";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),r=t(67294),l=t(72389),o=t(67392),s=t(7094),i=t(12466),u=t(86010),c="tabList_uSqn",p="tabItem_LplD";function m(e){var n,t,l,m=e.lazy,d=e.block,f=e.defaultValue,b=e.values,v=e.groupId,h=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=b?b:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,o.l)(k,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===f?f:null!=(n=null!=f?f:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=y[0])?void 0:l.props.value;if(null!==A&&!k.some((function(e){return e.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),g=T.tabGroupChoices,E=T.setTabGroupChoices,x=(0,r.useState)(A),P=x[0],w=x[1],q=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=g[v];null!=I&&I!==P&&k.some((function(e){return e.value===I}))&&w(I)}var S=function(e){var n=e.currentTarget,t=q.indexOf(n),a=k[t].value;a!==P&&(j(n),w(a),null!=v&&E(v,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=q.indexOf(e.currentTarget)+1;t=q[a]||q[0];break;case"ArrowLeft":var r=q.indexOf(e.currentTarget)-1;t=q[r]||q[q.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},h)},k.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:function(e){return q.push(e)},onKeyDown:O,onFocus:S,onClick:S},l,{className:(0,u.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),m?(0,r.cloneElement)(y.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==P})}))))}function d(e){var n=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},79128:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=t(9877),s=t(72360),i=["components"],u={},c=void 0,p={unversionedId:"js/features/odata/common/query-parameter/filter",id:"js/features/odata/common/query-parameter/filter",title:"filter",description:"When operating on a collection of entities, the API offers filter( ... ) on the builders.",source:"@site/docs/js/features/odata/common/query-parameter/filter.mdx",sourceDirName:"js/features/odata/common/query-parameter",slug:"/js/features/odata/common/query-parameter/filter",permalink:"/cloud-sdk/docs/js/features/odata/common/query-parameter/filter",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/query-parameter/filter.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1652369098,formattedLastUpdatedAt:"5/12/2022",frontMatter:{}},m={},d=[],f={toc:d};function b(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When operating on a collection of entities, the API offers ",(0,l.kt)("inlineCode",{parentName:"p"},"filter( ... )")," on the builders.\nIt directly corresponds to the ",(0,l.kt)("inlineCode",{parentName:"p"},"$filter")," parameter of the request."),(0,l.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,l.kt)("p",null,"Filters are also built via the fields available on the schema property of the entities API class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  Get all business partners that either:\n    - Have first name 'Alice' but not last name 'Bob'\n    - Or have first name 'Mallory'\n*/\nconst { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .getAll()\n  .filter(\n    or(\n      and(\n        businessPartnerApi.schema.FIRST_NAME.equals('Alice'),\n        businessPartnerApi.schema.LAST_NAME.notEquals('Bob')\n      ),\n      businessPartnerApi.schema.FIRST_NAME.equals('Mallory')\n    )\n  )\n  .execute(destination);\n"))),(0,l.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,l.kt)("p",null,"Filters are also built via the static property fields on entities:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"/*\n  Get all business partners that either:\n    - Have first name 'Alice' but not last name 'Bob'\n    - Or have first name 'Mallory'\n*/\nBusinessPartner.requestBuilder()\n  .getAll()\n  .filter(\n    or(\n      and(\n        BusinessPartner.FIRST_NAME.equals('Alice'),\n        BusinessPartner.LAST_NAME.notEquals('Bob')\n      ),\n      BusinessPartner.FIRST_NAME.equals('Mallory')\n    )\n  )\n  .execute(destination);\n")))),(0,l.kt)("p",null,"The example above will translate to this filter parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"$filter=(((FirstName eq 'Alice') and (LastName ne 'Bob')) or (FirstName eq 'Mallory'))\n")),(0,l.kt)("p",null,"Take note of the order of ",(0,l.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"or"),".\nAs ",(0,l.kt)("inlineCode",{parentName:"p"},"or")," is invoked on the result of ",(0,l.kt)("inlineCode",{parentName:"p"},"and")," it will form the outer expression while ",(0,l.kt)("inlineCode",{parentName:"p"},"and")," is an inner expression in the first branch of ",(0,l.kt)("inlineCode",{parentName:"p"},"or"),"."),(0,l.kt)("p",null,"In addition, the negation operator ",(0,l.kt)("inlineCode",{parentName:"p"},"not")," can also be used for wrapping any filter expressions."),(0,l.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/*\n  Get all business partners that do not match any of the cases:\n    - Have first name 'Alice'\n    - Have last name 'Bob'\n*/\n.filter(\n  not(\n    or(\n      businessPartnerApi.schema.FIRST_NAME.equals('Alice'),\n      businessPartnerApi.schema.LAST_NAME.equals('Bob')\n    )\n  )\n)\n"))),(0,l.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/*\n  Get all business partners that do not match any of the cases:\n    - Have first name 'Alice'\n    - Have last name 'Bob'\n*/\n.filter(\n  not(\n    or(\n      BusinessPartner.FIRST_NAME.equals('Alice'),\n      BusinessPartner.LAST_NAME.equals('Bob')\n    )\n  )\n)\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"$filter")," parameter will then be generated like below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"$filter=not (FirstName eq 'Alice') or (LastName eq 'Bob'))\n")),(0,l.kt)("p",null,"It is also possible to pass multiple filters to the same filter function without concatenating them with ",(0,l.kt)("inlineCode",{parentName:"p"},"and")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"or"),".\nThey will be concatenated with ",(0,l.kt)("inlineCode",{parentName:"p"},"and")," by default.\nThe two following examples are equal:"),(0,l.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"major",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},".filter(\n  and(\n    businessPartnerApi.schema.FIRST_NAME.equals('Alice'),\n    businessPartnerApi.schema.LAST_NAME.notEquals('Bob')\n  )\n)\n")),(0,l.kt)("p",null,"The example above can be shortened to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},".filter(\n  businessPartnerApi.schema.FIRST_NAME.equals('Alice'),\n  businessPartnerApi.schema.LAST_NAME.notEquals('Bob')\n)\n"))),(0,l.kt)(s.Z,{value:"deprecated",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},".filter(\n  and(\n    BusinessPartner.FIRST_NAME.equals('Alice'),\n    BusinessPartner.LAST_NAME.notEquals('Bob')\n  )\n)\n")),(0,l.kt)("p",null,"The example above can be shortened to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},".filter(\n  BusinessPartner.FIRST_NAME.equals('Alice'),\n  BusinessPartner.LAST_NAME.notEquals('Bob')\n)\n")))))}b.isMDXComponent=!0}}]);