"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7567],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Shared ESLint configuration",sidebar_label:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",keywords:["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},c=void 0,u={unversionedId:"js/features/eslint-configuration",id:"js/features/eslint-configuration",title:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",source:"@site/docs/js/features/eslint-configuration.mdx",sourceDirName:"js/features",slug:"/js/features/eslint-configuration",permalink:"/cloud-sdk/docs/js/features/eslint-configuration",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/eslint-configuration.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1653394084,formattedLastUpdatedAt:"5/24/2022",frontMatter:{title:"Shared ESLint configuration",sidebar_label:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",keywords:["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},sidebar:"someSidebar",previous:{title:"Logging",permalink:"/cloud-sdk/docs/js/features/logging"},next:{title:"Migrate to Kubernetes",permalink:"/cloud-sdk/docs/js/guides/migrate-sdk-application-from-btp-cf-to-kubernetes"}},l={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The SAP Cloud SDK provides a configuration with our recommended ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," rules and plugin.\nIt extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint:recommended")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/recommended")," configurations.\nIt also uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-config-prettier")," to avoid any formatting conflicts when using the highly recommended ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),"."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/eslint-config")," package in your project.\nTo add the configuration please adjust your ESLint configuration (usually called ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.js"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "extends": "@sap-cloud-sdk"\n}\n')),(0,i.kt)("p",null,"or if you want to combine this configuration with others:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "extends": ["example-config", "@sap-cloud-sdk"]\n}\n')),(0,i.kt)("p",null,"This configuration depends on plugins ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-unused-imports"),", which need to be installed in your project."),(0,i.kt)("p",null,"ESLint merges these shareable configurations with your configuration.\nAny rule configured in your ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," will overwrite the setting for this rule in the shareable configuration."))}f.isMDXComponent=!0}}]);