"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8579],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||s;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),s=n(86010),o=n(72389),u=n(67392),i=n(7094),l=n(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,h=e.defaultValue,f=e.values,m=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===h?h:null!=(t=null!=h?h:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),T=w.tabGroupChoices,N=w.setTabGroupChoices,q=(0,r.useState)(k),C=q[0],P=q[1],x=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=T[m];null!=E&&E!==C&&g.some((function(e){return e.value===E}))&&P(E)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==C&&(O(t),P(a),null!=m&&N(m,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;n=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var s,o=x.indexOf(e.currentTarget)-1;n=null!=(s=x[o])?s:x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},b)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:j,onClick:j},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function h(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},15005:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=n(65488),u=n(85162),i=["components"],l={},c=void 0,d={unversionedId:"js/features/odata/common/batch/changeset",id:"js/features/odata/common/batch/changeset",title:"changeset",description:"A changeset is a collection of HTTP POST, PUT, PATCH and DELETE operations - requests built by CreateRequestBuilders, UpdateRequestBuilders, and DeleteRequestBuilders in terms of the SAP Cloud SDK.",source:"@site/docs/js/features/odata/common/batch/changeset.mdx",sourceDirName:"js/features/odata/common/batch",slug:"/js/features/odata/common/batch/changeset",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/changeset",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/changeset.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Frenken",lastUpdatedAt:1656338509,formattedLastUpdatedAt:"6/27/2022",frontMatter:{}},p={},h=[],f={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A changeset is a collection of HTTP ",(0,s.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"PUT"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"PATCH")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"DELETE")," operations - requests built by ",(0,s.kt)("a",{parentName:"p",href:"#create-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"CreateRequestBuilder"),"s"),", ",(0,s.kt)("a",{parentName:"p",href:"#update-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateRequestBuilder"),"s"),", and ",(0,s.kt)("a",{parentName:"p",href:"#delete-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteRequestBuilder"),"s")," in terms of the SAP Cloud SDK.\nThe order of execution within a changeset is not defined.\nThis differs from the whole batch request itself, where the order is defined.\nTherefore, the requests within one changeset should not depend on each other.\nIf the execution of any request within a changeset fails, the whole changeset will be reflected as an error in the response.\nThe changeset will not be applied, much like a database transaction."),(0,s.kt)("p",null,"Unlike retrieve requests, you can not pass change requests to the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," function directly.\nYou have to combine them in a ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset"),", which in turn can be passed to the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," function.\nOnce a batch request is executed, it returns a list of ",(0,s.kt)("a",{parentName:"p",href:"#responses"},(0,s.kt)("inlineCode",{parentName:"a"},"BatchResponse"),"s"),"."),(0,s.kt)("p",null,"If a changeset was executed successfully, its corresponding response is of type ",(0,s.kt)("inlineCode",{parentName:"p"},"WriteResponses")," and contains a collection of all raw responses to the requests in the changeset.\nIf the execution fails, the response is an ",(0,s.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"."),(0,s.kt)("p",null,"In the example below, we create a list of ",(0,s.kt)("a",{parentName:"p",href:"#update-request-builder"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateRequestBuilder"),"s")," from a list of addresses.\nWe combine these change requests into one ",(0,s.kt)("inlineCode",{parentName:"p"},"changeset")," and pass it to the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request, which we execute against a destination."),(0,s.kt)("p",null,"Once we execute the ",(0,s.kt)("inlineCode",{parentName:"p"},"batch")," request, we get a list of ",(0,s.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s, which in this example contains one response only, i.e. the one for the changeset."),(0,s.kt)(o.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"major",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Destructure business partner service\nconst { batch, businessPartnerAddressApi, changeset } =\n  businessPartnerService();\n\nasync function updateAddresses(\n  businessPartnerAddresses: BusinessPartnerAddress[]\n): Promise<BusinessPartnerAddress[]> {\n  // Create update requests\n  const updateRequests = businessPartnerAddresses.map(address =>\n    businessPartnerAddressApi.requestBuilder().update(address)\n  );\n\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  // ...\n}\n"))),(0,s.kt)(u.Z,{value:"deprecated",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"async function updateAddresses(\n  businessPartnerAddresses: BusinessPartnerAddress[]\n): Promise<BusinessPartnerAddress[]> {\n  // Create update requests\n  const updateRequests = businessPartnerAddresses.map(address =>\n    BusinessPartnerAddress.requestBuilder().update(address)\n  );\n\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResponse = batchResponses[0];\n\n  // ...\n}\n")))))}m.isMDXComponent=!0}}]);