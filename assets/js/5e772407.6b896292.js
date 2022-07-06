"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7666],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42726:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"spring-boot-war-deployment",title:"Use WAR Deployment with Spring Boot",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Use WAR Deployment with Spring Boot",description:"Adjust a Spring Boot project to use WAR deployment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},p=void 0,s={unversionedId:"java/guides/spring-boot-war-deployment",id:"java/guides/spring-boot-war-deployment",title:"Use WAR Deployment with Spring Boot",description:"Adjust a Spring Boot project to use WAR deployment",source:"@site/docs/java/guides/spring-boot-war-deployment.mdx",sourceDirName:"java/guides",slug:"/java/guides/spring-boot-war-deployment",permalink:"/cloud-sdk/docs/java/guides/spring-boot-war-deployment",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/spring-boot-war-deployment.mdx",tags:[],version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1657117026,formattedLastUpdatedAt:"7/6/2022",frontMatter:{id:"spring-boot-war-deployment",title:"Use WAR Deployment with Spring Boot",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Use WAR Deployment with Spring Boot",description:"Adjust a Spring Boot project to use WAR deployment",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","cap"]},sidebar:"someSidebar",previous:{title:"Integration With CAP",permalink:"/cloud-sdk/docs/java/guides/cap-sdk-integration"},next:{title:"Overview",permalink:"/cloud-sdk/docs/java/extensions/extensions-supported-by-sap-cloud-sdk-for-java"}},d={},c=[{value:"Modern and Traditional Spring Deployment",id:"modern-and-traditional-spring-deployment",level:2},{value:"Target Projects of This Guide",id:"target-projects-of-this-guide",level:2},{value:"Use Traditional Spring Deployment",id:"use-traditional-spring-deployment",level:2},{value:"Change Maven Packaging",id:"change-maven-packaging",level:3},{value:"Add Maven WAR Plugin",id:"add-maven-war-plugin",level:3},{value:"Let Application Class Inherit from <code>SpringBootServletInitializer</code>",id:"let-application-class-inherit-from-springbootservletinitializer",level:3},{value:"Change the Deployment Configuration",id:"change-the-deployment-configuration",level:3},{value:"Build and Deploy the Project",id:"build-and-deploy-the-project",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document outlines how to adjust a Spring Boot project to use WAR deployment (also known as traditional deployment).\nThe traditional deployment of Spring helps overcome exceptions related to the SAP JCo library."),(0,r.kt)("h2",{id:"modern-and-traditional-spring-deployment"},"Modern and Traditional Spring Deployment"),(0,r.kt)("p",null,"Traditionally, Java projects based on Spring were built as war files which had to be deployed to standalone application servers, such as Tomcat.\nWith the rise of Spring Boot, the target file type changed to jar files where the application server is already built in.\nThe advantage of that modern deployment form is that the application can be started directly without the need to administer a complex application server."),(0,r.kt)("h2",{id:"target-projects-of-this-guide"},"Target Projects of This Guide"),(0,r.kt)("p",null,"This guide is applicable to all Spring-based Java projects which use the modern deployment of Spring as jar file.\nThat comprises in the first place any project using the ",(0,r.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/"},"new CAP stack")," as well as the ",(0,r.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.sap.cloud.sdk.archetypes/scp-cf-spring"},"Spring Boot Maven archetype")," of the SAP Cloud SDK."),(0,r.kt)("p",null,"The problem with the modern deployment is that the ",(0,r.kt)("a",{parentName:"p",href:"https://support.sap.com/en/product/connectors/jco.html"},"SAP Java Connector")," library cannot be used when the application gets deployed as jar file.\nThat results in runtime exceptions like ",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.NoClassDefFoundError: com/sap/conn/jco/JCoException"),"."),(0,r.kt)("p",null,"To overcome this problem, we'll outline how to adjust your project to leverage the traditional Spring deployment instead."),(0,r.kt)("h2",{id:"use-traditional-spring-deployment"},"Use Traditional Spring Deployment"),(0,r.kt)("p",null,"Perform the following steps to switch your project from using the modern to the traditional Spring deployment."),(0,r.kt)("h3",{id:"change-maven-packaging"},"Change Maven Packaging"),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),", change the packaging setting from ",(0,r.kt)("inlineCode",{parentName:"p"},"jar")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"war"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- before: --\x3e\n\x3c!-- <packaging>jar</packaging> --\x3e\n\n\x3c!-- after: --\x3e\n<packaging>war</packaging>\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use the right ",(0,r.kt)("inlineCode",{parentName:"h5"},"pom.xml"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When your project uses multiple Maven modules, you need to choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," that contains your application code.\nFor instance, in a CAP project use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"srv")," module."))),(0,r.kt)("h3",{id:"add-maven-war-plugin"},"Add Maven WAR Plugin"),(0,r.kt)("p",null,"Add the Maven WAR plugin to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-war-plugin</artifactId>\n    \x3c!-- use latest version here --\x3e\n    <version>3.3.1</version>\n    <configuration>\n      <attachClasses>true</attachClasses>\n    </configuration>\n</plugin>\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Use the latest plugin version")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We recommend you use the ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.maven.plugins/maven-war-plugin"},"latest version")," of this Maven plugin."))),(0,r.kt)("h3",{id:"let-application-class-inherit-from-springbootservletinitializer"},"Let Application Class Inherit from ",(0,r.kt)("inlineCode",{parentName:"h3"},"SpringBootServletInitializer")),(0,r.kt)("p",null,"Make your application class a subclass of the class ",(0,r.kt)("inlineCode",{parentName:"p"},"SpringBootServletInitializer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\npublic class Application extends SpringBootServletInitializer {\n\n  public static void main(String[] args) {\n    SpringApplication.run(Application.class, args);\n  }\n}\n\n")),(0,r.kt)("h3",{id:"change-the-deployment-configuration"},"Change the Deployment Configuration"),(0,r.kt)("p",null,"Go to your deployment descriptor, for instance to your mta.yaml, and locate the module that contains your application under ",(0,r.kt)("inlineCode",{parentName:"p"},"modules"),".\nFor that particular module, perform the following changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"java")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"java.tomcat"),"."),(0,r.kt)("li",{parentName:"ul"},"Change the ",(0,r.kt)("inlineCode",{parentName:"li"},"build-result")," so that the file extension is ",(0,r.kt)("inlineCode",{parentName:"li"},"war"),"."),(0,r.kt)("li",{parentName:"ul"},"If not present, add the property ",(0,r.kt)("inlineCode",{parentName:"li"},"USE_JCO")," with the value ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"properties"),".")),(0,r.kt)("p",null,"In the following example we have commented the old values for your reference:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  - name: example-project-srv\n    #type: java\n    type: java.tomcat\n    path: srv\n    properties:\n      SPRING_PROFILES_ACTIVE: cloud\n      # make sure that the property USE_JCO is present\n      USE_JCO: true\n    build-parameters:\n      builder: custom\n      commands:\n        - mvn clean package\n      #build-result: target/*-exec.[wj]ar\n      build-result: target/*-exec.war\n    provides:\n      - name: srv-api\n        properties:\n          srv-url: ${default-url}\n    requires:\n      - name: my-destination\n")),(0,r.kt)("h2",{id:"build-and-deploy-the-project"},"Build and Deploy the Project"),(0,r.kt)("p",null,"The presented changes do not lead to any changes in the build and deployment process.\nHence, you can build and deploy your Java project as usually."),(0,r.kt)("p",null,"From now on, the JCo classes should be found during runtime."))}m.isMDXComponent=!0}}]);