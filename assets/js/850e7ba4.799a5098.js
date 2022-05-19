"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9432],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),l=n(72389),o=n(67392),i=n(7094),s=n(12466),u=n(86010),p="tabList_uSqn",c="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,m=e.block,f=e.defaultValue,v=e.values,h=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==w&&!y.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),j=N.tabGroupChoices,S=N.setTabGroupChoices,T=(0,r.useState)(w),C=T[0],I=T[1],O=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=j[h];null!=E&&E!==C&&y.some((function(e){return e.value===E}))&&I(E)}var P=function(e){var t=e.currentTarget,n=O.indexOf(t),a=y[n].value;a!==C&&(x(t),I(a),null!=h&&S(h,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},g)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:P,onClick:P},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},27073:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(9877),i=n(72360),s=["components"],u={id:"set-up-dev-enviroment",title:"Set up Development Environment",sidebar_label:"Set up Development Environment",description:"Set up your environment to use the SAP Cloud SDK for JavaScript.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},p=void 0,c={unversionedId:"js/tutorials/getting-started/set-up-dev-enviroment",id:"js/tutorials/getting-started/set-up-dev-enviroment",title:"Set up Development Environment",description:"Set up your environment to use the SAP Cloud SDK for JavaScript.",source:"@site/docs/js/tutorials/getting-started/1-set-up-dev-environment.mdx",sourceDirName:"js/tutorials/getting-started",slug:"/js/tutorials/getting-started/set-up-dev-enviroment",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/set-up-dev-enviroment",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/tutorials/getting-started/1-set-up-dev-environment.mdx",tags:[],version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1652951003,formattedLastUpdatedAt:"5/19/2022",sidebarPosition:1,frontMatter:{id:"set-up-dev-enviroment",title:"Set up Development Environment",sidebar_label:"Set up Development Environment",description:"Set up your environment to use the SAP Cloud SDK for JavaScript.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial"]},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/introduction"},next:{title:"Execute an OData Request",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/execute-an-odata-request"}},d={},m=[{value:"Node.js and npm",id:"nodejs-and-npm",level:2},{value:"Install Nest CLI",id:"install-nest-cli",level:2},{value:"Cloud Foundry Command Line Interface",id:"cloud-foundry-command-line-interface",level:2},{value:"Scaffold an Application",id:"scaffold-an-application",level:2},{value:"Get Familiar With the Project",id:"get-familiar-with-the-project",level:2},{value:"npm / Project",id:"npm--project",level:4},{value:"TypeScript",id:"typescript",level:4},{value:"Local Development",id:"local-development",level:4},{value:"Run the Project",id:"run-the-project",level:2},{value:"Final Code Review",id:"final-code-review",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You will start with installing the tools necessary to getting started.\nOnce your development enviroment is setup, you can begin with scaffolding an initial application with the NestJS CLI.\nThroughout this tutorial, you'll modify and extend this starter application to use the SAP Cloud SDK for JavaScript."),(0,l.kt)("p",null,"In this part of the tutorial, you will do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install Node.js and npm."),(0,l.kt)("li",{parentName:"ul"},"Install the Nest CLI."),(0,l.kt)("li",{parentName:"ul"},"Install the Cloud Foundry CLI, cf."),(0,l.kt)("li",{parentName:"ul"},"Scaffold your NestJS application and learn about the project's structure."),(0,l.kt)("li",{parentName:"ul"},"Run the application locally.")),(0,l.kt)("h2",{id:"nodejs-and-npm"},"Node.js and npm"),(0,l.kt)("p",null,"If you have Node.js and npm installed, skip ahead to the next step.\nTo check the Node.js and npm versions you have installed, run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"node -v\nnpm -v\n")),(0,l.kt)("p",null,"If one of those commands fails, you will have to install Node.js.\nIt is recommended to use the ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"latest LTS version"),"."),(0,l.kt)("h2",{id:"install-nest-cli"},"Install Nest CLI"),(0,l.kt)("p",null,"You need to have the Nest CLI installed to create a new project.\nYou can install it globally by executing the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g @nestjs/cli\n")),(0,l.kt)("h2",{id:"cloud-foundry-command-line-interface"},"Cloud Foundry Command Line Interface"),(0,l.kt)("p",null,"You will need the Cloud Foundry CLI (cf) to later deploy your application to SAP Business Technology Platform.\nTo see whether it is already installed, run the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cf -v\n")),(0,l.kt)("p",null,"If the command fails, you will need to install cf."),(0,l.kt)("p",null,"You can find installation instructions for all common platforms in the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/cf-cli/install-go-cli.html"},"Cloud Foundry documentation"),".\nWe recommend to use a package manager for that.\nIf you are using Chocolatey on Windows, please find the instructions ",(0,l.kt)("a",{parentName:"p",href:"https://community.chocolatey.org/packages/cloudfoundry-cli"},"here"),"."),(0,l.kt)("h2",{id:"scaffold-an-application"},"Scaffold an Application"),(0,l.kt)("p",null,"You can now create a new project using the command below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nest new <project-name>\n")),(0,l.kt)("p",null,'This will create an application that already contains all the files and configuration you need to use the SAP Cloud SDK for JavaScript.\nThe CLI will ask you to select a package manager.\nSelect "npm".\nThe CLI will then install all the necessary dependencies for the project, so this might take a minute.\nIf everything worked correctly, you should see an output like this:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n\ud83d\ude80  Successfully created project <project-name>\n\ud83d\udc49  Get started with the following commands:\n\n$ cd <project-name>\n$ npm run start\n\n")),(0,l.kt)("h2",{id:"get-familiar-with-the-project"},"Get Familiar With the Project"),(0,l.kt)("p",null,"The project contains the following files and folders:"),(0,l.kt)("h4",{id:"npm--project"},"npm / Project"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"package.json")),": Specifies dependencies, metadata, and user-defined scripts.\nThe application comes with some predefined scripts and dependencies.")),(0,l.kt)("h4",{id:"typescript"},"TypeScript"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"tsconfig.json")),": Configuration file for TypeScript.\nThis is not needed in the plain JavaScript version.")),(0,l.kt)("h4",{id:"local-development"},"Local Development"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"src/")),": Source code for the initial application.")),(0,l.kt)("h2",{id:"run-the-project"},"Run the Project"),(0,l.kt)("p",null,"To run the application locally, execute the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm run start:dev\n")),(0,l.kt)("p",null,'This will start a local server in watch mode so that subsequent changes will automatically trigger a restart of the server.\nGo to http://localhost:3000 and you should get a "Hello World!" in response.\nBefore continuing with the next part of the tutorial, open ',(0,l.kt)("inlineCode",{parentName:"p"},"src/main.ts")," and switch the port from 3000 to 8080.\nThis is required as the mock server (covered ",(0,l.kt)("a",{parentName:"p",href:"./execute-an-odata-request#set-up-a-mock-server-optional"},"later"),") runs on port ",(0,l.kt)("inlineCode",{parentName:"p"},"3000"),".\nThe corresponding line should then look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"await app.listen(process.env.PORT || 8080);\n")),(0,l.kt)("h2",{id:"final-code-review"},"Final Code Review"),(0,l.kt)("p",null,"Here are the code files discussed on this page:"),(0,l.kt)(o.Z,{groupId:"code-files",defaultValue:"app-module",values:[{label:"src/main.ts",value:"main"},{label:"src/app.module.ts",value:"app-module"},{label:"src/app.controller.ts",value:"app-controller"},{label:"src/app.service.ts",value:"app-service"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"main",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(process.env.PORT || 8080);\n}\nbootstrap();\n"))),(0,l.kt)(i.Z,{value:"app-module",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@nestjs/common';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\n\n@Module({\n  imports: [],\n  controllers: [AppController],\n  providers: [AppService]\n})\nexport class AppModule {}\n"))),(0,l.kt)(i.Z,{value:"app-controller",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller, Get } from '@nestjs/common';\nimport { AppService } from './app.service';\n\n@Controller()\nexport class AppController {\n  constructor(private readonly appService: AppService) {}\n\n  @Get()\n  getHello(): string {\n    return this.appService.getHello();\n  }\n}\n"))),(0,l.kt)(i.Z,{value:"app-service",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class AppService {\n  getHello(): string {\n    return 'Hello World!';\n  }\n}\n")))))}v.isMDXComponent=!0}}]);