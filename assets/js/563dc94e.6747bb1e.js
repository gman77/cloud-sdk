(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9006],{28670:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(93456),s=["components"],p={title:"Using the SAP Application Router with the SAP Cloud SDK",sidebar_label:"Using the SAP Application Router",description:"This article describes how you can use the SAP Application Router with the SAP Cloud SDK",keywords:["sap","cloud","sdk","approuter","multi-tenancy","cloud-foundry","JavaScript","TypeScript"]},u="Using the SAP Application Router with the SAP Cloud SDK",l={unversionedId:"js/guides/how-to-use-the-approuter",id:"js/guides/how-to-use-the-approuter",title:"Using the SAP Application Router with the SAP Cloud SDK",description:"This article describes how you can use the SAP Application Router with the SAP Cloud SDK",source:"@site/docs/js/guides/how-to-use-the-approuter.mdx",sourceDirName:"js/guides",slug:"/js/guides/how-to-use-the-approuter",permalink:"/cloud-sdk/docs/js/guides/how-to-use-the-approuter",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/guides/how-to-use-the-approuter.mdx",tags:[],version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1657117026,formattedLastUpdatedAt:"7/6/2022",frontMatter:{title:"Using the SAP Application Router with the SAP Cloud SDK",sidebar_label:"Using the SAP Application Router",description:"This article describes how you can use the SAP Application Router with the SAP Cloud SDK",keywords:["sap","cloud","sdk","approuter","multi-tenancy","cloud-foundry","JavaScript","TypeScript"]},sidebar:"someSidebar",previous:{title:"Trust and Keystores",permalink:"/cloud-sdk/docs/js/guides/trust-and-key-stores"},next:{title:"How to Add Resilience",permalink:"/cloud-sdk/docs/js/guides/how-to-add-resilience"}},d={},c=[{value:"SAP Application Router",id:"sap-application-router",level:2},{value:"Application Router Setup",id:"application-router-setup",level:3},{value:"Securing Your Application",id:"securing-your-application",level:2},{value:"Enabling Principal Propagation",id:"enabling-principal-propagation",level:2}],h={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-sap-application-router-with-the-sap-cloud-sdk"},"Using the SAP Application Router with the SAP Cloud SDK"),(0,i.kt)("p",null,"In this guide, we will show you how to use the SAP Application Router together with the SAP Cloud SDK.\nYou will learn how to secure your application and configure multi-tenancy for principal propagation with an SAP Cloud SDK-based application example powered by ",(0,i.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"nestJS"),"."),(0,i.kt)("h2",{id:"sap-application-router"},"SAP Application Router"),(0,i.kt)("p",null,"When we want to enable multi-tenancy for our application, we use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sap/approuter"},"SAP Application Router"),".\nThe application router\u2019s primary purpose is to be the single entry point of a microservice-based application and act as the application\u2019s reverse proxy."),(0,i.kt)("p",null,"Its responsibilities consist of dispatching requests to backend microservices, authenticating users, and serving static content.\nThe application router checks if a given request has a valid JSON Web Token (JWT) when accessing a target service.\nIf the request contains a valid JWT, the application router forwards the request to the target service; if the request does not contain a valid JWT, the user must authenticate.\nAs we can see in the diagram below, we use an Identity Provider (IdP) to authenticate, the request is redirected to an IdP where a user gets authenticated and then redirected back to the application router for passing further according to its desired destination."),(0,i.kt)(o.Mermaid,{config:{},chart:"sequenceDiagram\n  User->>Approuter: sending request\n  alt has no JWT\n    Approuter->>Identity Provider: redirecting\n    Identity Provider->>Identity Provider: authenticating\n    Identity Provider->>Identity Provider: granting JWT\n    Identity Provider->>Approuter: redirecting\n  else has JWT\n    Approuter->>Backend App: forwarding request\n  end",mdxType:"Mermaid"}),(0,i.kt)("h3",{id:"application-router-setup"},"Application Router Setup"),(0,i.kt)("p",null,"To deploy our application router in SAP BTP Cloud Foundry, we need to configure it first.\nLet's walk through the four files we need to use."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"xs-security.json")," file defines the security and deployment options for an application.\nWith the below example, we enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"shared")," tenant-mode for our ",(0,i.kt)("inlineCode",{parentName:"p"},"xsuaa")," instance, which we need for multi-tenancy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "xsappname": "approuter-scaffold",\n  "tenant-mode": "shared"\n}\n')),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"xs-app.json"),", we specify to which backend service a request is forwarded to, and how this request has to be authenticated.\nWe can optionally also specify a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"identityProvider")," that is used for the authentication."),(0,i.kt)("p",null,"In the example below, we forward every request against the application router's ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," route to the backend destination's ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "welcomeFile": "index.html",\n  "routes": [\n    {\n      "source": "/",\n      "target": "/",\n      "destination": "approuter-scaffold"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," we only have one dependency, the application router module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "approuter",\n  "dependencies": {\n    "@sap/approuter": "*"\n  },\n  "scripts": {\n    "start": "node node_modules/@sap/approuter/approuter.js"\n  }\n}\n')),(0,i.kt)("p",null,"The manifest contains our application router, as well as environment variables which our application router needs for multi-tenancy.\nAs you see under ",(0,i.kt)("inlineCode",{parentName:"p"},"env"),", we specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"TENANT_HOST_PATTERN")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"destinations"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"destinations")," are the destinations we use in our ",(0,i.kt)("inlineCode",{parentName:"p"},"xs-app.json")," where we forward requests to.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"TENANT_HOST_PATTERN")," is a regular expression that describes how a tenant name should be retrieved from the host.\nWe also have to bind the ",(0,i.kt)("inlineCode",{parentName:"p"},"xsuaa")," which we configured with our ",(0,i.kt)("inlineCode",{parentName:"p"},"xs-security.json")," to the application router."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'applications:\n  - name: approuter-scaffold-approuter\n    routes:\n      - route: >-\n          approuter-scaffold-apps.cfapps.sap.hana.ondemand.com\n    path: .\n    memory: 128M\n    buildpacks:\n      - nodejs_buildpack\n    env:\n      TENANT_HOST_PATTERN: >-\n        "approuter-scaffold-(.*).cfapps.sap.hana.ondemand.com"\n      destinations: >-\n        [{"name":"approuter-scaffold","url":"approuter-scaffold.cfapps.sap.hana.ondemand.com","forwardAuthToken":true}]\n    services:\n      - approuter-scaffold-xsuaa\n')),(0,i.kt)("h2",{id:"securing-your-application"},"Securing Your Application"),(0,i.kt)("p",null,"To secure our application endpoints, we utilize the ",(0,i.kt)("a",{parentName:"p",href:"http://www.passportjs.org/packages/passport-jwt"},"passport")," library.\nIt lets us authenticate endpoints using a JSON web token."),(0,i.kt)("p",null,"Additionally, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"xsenv")," library to retrieve our ",(0,i.kt)("inlineCode",{parentName:"p"},"xsuaa")," credentials and the ",(0,i.kt)("inlineCode",{parentName:"p"},"xssec")," library's ",(0,i.kt)("inlineCode",{parentName:"p"},"JWTStrategy")," object for the middleware."),(0,i.kt)("p",null,"Below is a simple example, where we get the ",(0,i.kt)("inlineCode",{parentName:"p"},"approuter-scaffold-xsuaa")," which is bound to our application, use it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"JWTStrategy"),", and then forward the middleware to the passport."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\nimport { JWTStrategy } from '@sap/xssec';\nimport { getServices } from '@sap/xsenv';\nimport * as passport from 'passport';\n\nconst xsuaa = getServices({\n  xsuaa: { name: 'approuter-scaffold-xsuaa' }\n}).xsuaa;\npassport.use(new JWTStrategy(xsuaa));\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.use(passport.initialize());\n  app.use(passport.authenticate('JWT', { session: false }));\n  await app.listen(process.env.PORT || 3000);\n}\nbootstrap();\n")),(0,i.kt)("h2",{id:"enabling-principal-propagation"},"Enabling Principal Propagation"),(0,i.kt)("p",null,"To enable principal propagation with this setup, we must forward the request to our endpoints."),(0,i.kt)("p",null,"First, we forward the request in our ",(0,i.kt)("inlineCode",{parentName:"p"},"app.controller.ts")," to our principal propagation endpoint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Get('principal-business-partner')\n  getPrincipalBusinessPartner(\n    @Req() request: Request,\n  ): Promise<BusinessPartner[]> {\n    return this.principalBusinessPartnerService.getFiveBusinessPartners(\n      request,\n    );\n  }\n")),(0,i.kt)("p",null,"Then, we simply use the SAP Cloud SDK's ",(0,i.kt)("inlineCode",{parentName:"p"},"retrieveJwt")," function to extract the JWT from our request, and forward it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method."),(0,i.kt)("p",null,"Below is an example using the ",(0,i.kt)("inlineCode",{parentName:"p"},"BusinessPartnerService"),", where we retrieve the top five business partners."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';\nimport { retrieveJwt } from '@sap-cloud-sdk/core';\nimport { Request } from 'express';\n\n@Injectable()\nexport class PrincipalBusinessPartnerService {\n  async getFiveBusinessPartners(request: Request): Promise<BusinessPartner[]> {\n    return BusinessPartner.requestBuilder()\n      .getAll()\n      .top(5)\n      .execute({\n        destinationName: 'MY-DESTINATION',\n        jwt: retrieveJwt(request)\n      });\n  }\n}\n")))}m.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=11748}}]);