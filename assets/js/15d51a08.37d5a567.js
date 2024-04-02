"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6034],{15373:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=s(74848),i=s(28453);const o={title:"What are Jan Extensions?",slug:"/extensions",description:"Jan Docs | Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",sidebar_position:1,keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Jan Extensions","Extensions"]},r=void 0,a={id:"guides/extensions/extensions",title:"What are Jan Extensions?",description:"Jan Docs | Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/guides/extensions/extensions.mdx",sourceDirName:"guides/extensions",slug:"/extensions",permalink:"/extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/extensions/extensions.mdx",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1712046709,formattedLastUpdatedAt:"Apr 2, 2024",sidebarPosition:1,frontMatter:{title:"What are Jan Extensions?",slug:"/extensions",description:"Jan Docs | Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",sidebar_position:1,keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Jan Extensions","Extensions"]},sidebar:"guidesSidebar",previous:{title:"Any OAI Compatible Server",permalink:"/guides/engines/remote-server"},next:{title:"Integrations",permalink:"/integrations/"}},l={},d=[{value:"Default Extensions",id:"default-extensions",level:2},{value:"List of Default Extensions",id:"list-of-default-extensions",level:2},{value:"Configure Extension Settings",id:"configure-extension-settings",level:2},{value:"Import Custom Extension",id:"import-custom-extension",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"The current Jan Desktop Client has some default extensions built on top of this framework to enhance the user experience. In this guide, we will show you the list of default extensions and how to configure extension settings."}),"\n",(0,t.jsx)(e.h2,{id:"default-extensions",children:"Default Extensions"}),"\n",(0,t.jsxs)(e.p,{children:["You can find the default extensions in the ",(0,t.jsx)(e.code,{children:"Settings"})," > ",(0,t.jsx)(e.code,{children:"Extensions"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"list-of-default-extensions",children:"List of Default Extensions"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Extension Name"}),(0,t.jsx)(e.th,{children:"Version"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Source Code Link"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Assistant Extension"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"v1.0.0"})}),(0,t.jsx)(e.td,{children:"This extension enables assistants, including Jan, a default assistant that can call all downloaded models."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/janhq/jan/tree/dev/extensions/assistant-extension",children:"Link to Source"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Conversational Extension"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"v1.0.0"})}),(0,t.jsx)(e.td,{children:"This extension enables conversations and state persistence via your filesystem."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/janhq/jan/tree/dev/extensions/conversational-extension",children:"Link to Source"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Inference Nitro Extension"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"v1.0.0"})}),(0,t.jsx)(e.td,{children:"This extension embeds Nitro, a lightweight (3 MB) inference engine in C++. See nitro.jan.ai."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/janhq/jan/tree/dev/extensions/inference-nitro-extension",children:"Link to Source"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Inference Openai Extension"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"v1.0.0"})}),(0,t.jsx)(e.td,{children:"This extension enables OpenAI chat completion API calls."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/janhq/jan/tree/dev/extensions/inference-openai-extension",children:"Link to Source"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Inference Triton Trt Llm Extension"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"v1.0.0"})}),(0,t.jsx)(e.td,{children:"This extension enables Nvidia's TensorRT-LLM as an inference engine option."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/janhq/jan/tree/dev/extensions/inference-triton-trtllm-extension",children:"Link to Source"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Model Extension"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"v1.0.22"})}),(0,t.jsx)(e.td,{children:"Model Management Extension provides model exploration and seamless downloads."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/janhq/jan/tree/dev/extensions/model-extension",children:"Link to Source"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Monitoring Extension"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"v1.0.9"})}),(0,t.jsx)(e.td,{children:"This extension offers system health and OS-level data."}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"https://github.com/janhq/jan/tree/dev/extensions/monitoring-extension",children:"Link to Source"})})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"configure-extension-settings",children:"Configure Extension Settings"}),"\n",(0,t.jsx)(e.p,{children:"To configure extension settings:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Navigate to the ",(0,t.jsx)(e.code,{children:"~/jan/extensions"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Open the ",(0,t.jsx)(e.code,{children:"extensions.json"})," file"]}),"\n",(0,t.jsx)(e.li,{children:"Edit the file with options including:"}),"\n"]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Option"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"_active"})}),(0,t.jsx)(e.td,{children:"Enable/disable the extension."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"listeners"})}),(0,t.jsx)(e.td,{children:"Default listener setting."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"origin"})}),(0,t.jsx)(e.td,{children:"Extension file path."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"installOptions"})}),(0,t.jsx)(e.td,{children:"Version and metadata configuration."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"name"})}),(0,t.jsx)(e.td,{children:"Extension name."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"version"})}),(0,t.jsx)(e.td,{children:"Extension version."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"main"})}),(0,t.jsx)(e.td,{children:"Main file path."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"description"})}),(0,t.jsx)(e.td,{children:"Extension description."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"url"})}),(0,t.jsx)(e.td,{children:"Extension URL."})]})]})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:'title="~/jan/extensions/extensions.json"',children:'{\n  "@janhq/assistant-extension": {\n    "_active": true,\n    "listeners": {},\n    "origin": "/Applications/Jan.app/Contents/Resources/app.asar.unpacked/pre-install/janhq-assistant-extension-1.0.0.tgz",\n    "installOptions": { "version": false, "fullMetadata": false },\n    "name": "@janhq/assistant-extension",\n    "version": "1.0.0",\n    "main": "dist/index.js",\n    "description": "This extension enables assistants, including Jan, a default assistant that can call all downloaded models",\n    "url": "extension://@janhq/assistant-extension/dist/index.js"\n  },\n  "@janhq/conversational-extension": {\n    "_active": true,\n    "listeners": {},\n    "origin": "/Applications/Jan.app/Contents/Resources/app.asar.unpacked/pre-install/janhq-conversational-extension-1.0.0.tgz",\n    "installOptions": { "version": false, "fullMetadata": false },\n    "name": "@janhq/conversational-extension",\n    "version": "1.0.0",\n    "main": "dist/index.js",\n    "description": "This extension enables conversations and state persistence via your filesystem",\n    "url": "extension://@janhq/conversational-extension/dist/index.js"\n  },\n  "@janhq/inference-nitro-extension": {\n    "_active": true,\n    "listeners": {},\n    "origin": "/Applications/Jan.app/Contents/Resources/app.asar.unpacked/pre-install/janhq-inference-nitro-extension-1.0.0.tgz",\n    "installOptions": { "version": false, "fullMetadata": false },\n    "name": "@janhq/inference-nitro-extension",\n    "version": "1.0.0",\n    "main": "dist/index.js",\n    "description": "This extension embeds Nitro, a lightweight (3mb) inference engine written in C++. See nitro.jan.ai",\n    "url": "extension://@janhq/inference-nitro-extension/dist/index.js"\n  },\n  "@janhq/inference-openai-extension": {\n    "_active": true,\n    "listeners": {},\n    "origin": "/Applications/Jan.app/Contents/Resources/app.asar.unpacked/pre-install/janhq-inference-openai-extension-1.0.0.tgz",\n    "installOptions": { "version": false, "fullMetadata": false },\n    "name": "@janhq/inference-openai-extension",\n    "version": "1.0.0",\n    "main": "dist/index.js",\n    "description": "This extension enables OpenAI chat completion API calls",\n    "url": "extension://@janhq/inference-openai-extension/dist/index.js"\n  },\n  "@janhq/inference-triton-trt-llm-extension": {\n    "_active": true,\n    "listeners": {},\n    "origin": "/Applications/Jan.app/Contents/Resources/app.asar.unpacked/pre-install/janhq-inference-triton-trt-llm-extension-1.0.0.tgz",\n    "installOptions": { "version": false, "fullMetadata": false },\n    "name": "@janhq/inference-triton-trt-llm-extension",\n    "version": "1.0.0",\n    "main": "dist/index.js",\n    "description": "This extension enables Nvidia\'s TensorRT-LLM as an inference engine option",\n    "url": "extension://@janhq/inference-triton-trt-llm-extension/dist/index.js"\n  },\n  "@janhq/model-extension": {\n    "_active": true,\n    "listeners": {},\n    "origin": "/Applications/Jan.app/Contents/Resources/app.asar.unpacked/pre-install/janhq-model-extension-1.0.22.tgz",\n    "installOptions": { "version": false, "fullMetadata": false },\n    "name": "@janhq/model-extension",\n    "version": "1.0.22",\n    "main": "dist/index.js",\n    "description": "Model Management Extension provides model exploration and seamless downloads",\n    "url": "extension://@janhq/model-extension/dist/index.js"\n  },\n  "@janhq/monitoring-extension": {\n    "_active": true,\n    "listeners": {},\n    "origin": "/Applications/Jan.app/Contents/Resources/app.asar.unpacked/pre-install/janhq-monitoring-extension-1.0.9.tgz",\n    "installOptions": { "version": false, "fullMetadata": false },\n    "name": "@janhq/monitoring-extension",\n    "version": "1.0.9",\n    "main": "dist/index.js",\n    "description": "This extension provides system health and OS level data",\n    "url": "extension://@janhq/monitoring-extension/dist/index.js"\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"import-custom-extension",children:"Import Custom Extension"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"Currently, Jan only supports official extensions, which can be directly downloaded in Extension Settings. We plan to support 3rd party Extensions in the future."})}),"\n",(0,t.jsx)(e.p,{children:"For now you can always import a third party extension at your own risk by following the steps below:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Navigate to ",(0,t.jsx)(e.strong,{children:"Settings"})," > ",(0,t.jsx)(e.strong,{children:"Extensions"})," > Click Select under ",(0,t.jsx)(e.strong,{children:"Manual Installation"}),"."]}),"\n",(0,t.jsx)(e.li,{children:"Then, the ~/jan/extensions/extensions.json file will be updated automatically."}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"caution",children:(0,t.jsxs)(e.p,{children:["You need to prepare the extension file in .tgz format to install the ",(0,t.jsx)(e.strong,{children:"non-default"})," extension."]})}),"\n",(0,t.jsx)(e.admonition,{title:"Assistance and Support",type:"info",children:(0,t.jsxs)(e.p,{children:["If you have questions, please join our ",(0,t.jsx)(e.a,{href:"https://discord.gg/Dt7MxDyNNZ",children:"Discord community"})," for support, updates, and discussions."]})})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>a});var t=s(96540);const i={},o=t.createContext(i);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);