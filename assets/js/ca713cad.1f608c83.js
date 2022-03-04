"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[130],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},50370:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={title:"Error Handling",sidebar_label:"Error Handling",description:"How to work with errors thrown by the SAP Cloud SDK",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","cause","root cause"]},l=void 0,u={unversionedId:"js/features/error-handling",id:"js/features/error-handling",title:"Error Handling",description:"How to work with errors thrown by the SAP Cloud SDK",source:"@site/docs/js/features/error-handling.mdx",sourceDirName:"js/features",slug:"/js/features/error-handling",permalink:"/cloud-sdk/docs/js/features/error-handling",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/error-handling.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1646385479,formattedLastUpdatedAt:"3/4/2022",frontMatter:{title:"Error Handling",sidebar_label:"Error Handling",description:"How to work with errors thrown by the SAP Cloud SDK",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","cause","root cause"]},sidebar:"someSidebar",previous:{title:"SAP Workflow API for Cloud Foundry",permalink:"/cloud-sdk/docs/js/features/openapi/pregenerated-clients/workflow"},next:{title:"Logging",permalink:"/cloud-sdk/docs/js/features/logging"}},c=[],d={toc:c};function p(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are many reasons for errors to occur when developing software.\nThe SAP Cloud SDK tries to provide as much information as possible and necessary to understand what caused an error.\nGenerally speaking, there is no difference in handling errors when working with the SAP Cloud SDK.\nHowever, some errors are caused by underlying errors.\nIn these cases, the SAP Cloud SDK throws an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorWithCause"),", that allows access to the immediate cause and root cause of this error.\nThese can be accessed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"cause")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rootCause")," properties on ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorWithCause"),"."),(0,a.kt)("p",null,"In the example below we try to create a business partner against ",(0,a.kt)("a",{parentName:"p",href:"https://example.com"},"https://example.com")," as a destination.\nAs this is not an SAP S/4HANA system, this will fail and the error reveals the cause and root cause of the failure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';\n\nBusinessPartner.requestBuilder()\n  .create(BusinessPartner.builder().build())\n  .execute({ url: 'https://example.com' })\n  .catch(err => {\n    console.log('Error:', err.message);\n    console.log('Cause:', err.cause?.message);\n    console.log('Root cause:', err.rootCause?.message);\n  });\n")),(0,a.kt)("p",null,"The example above will yield the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Error: Create request failed!\nCause: post request to https://example.com/sap/opu/odata/sap/API_BUSINESS_PARTNER failed!\nRoot cause: Request failed with status code 404\n")),(0,a.kt)("p",null,"The final error is an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorWithCause")," that was caused by another ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorWithCause"),".\nThe root cause is an ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," and reveals that the requested URL does not exist."))}p.isMDXComponent=!0}}]);