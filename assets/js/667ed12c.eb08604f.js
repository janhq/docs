"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[259],{30749:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=o(74848),i=o(28453);const s={title:"Any OAI Compatible Server",sidebar_position:1,slug:"/guides/engines/remote-server",description:"A step-by-step guide on how to set up Jan to connect with any remote or local API server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","import-models-manually","remote server","OAI compatible"]},r=void 0,l={id:"guides/remote-providers/remote-server-integration",title:"Any OAI Compatible Server",description:"A step-by-step guide on how to set up Jan to connect with any remote or local API server.",source:"@site/docs/guides/remote-providers/remote-server-integration.mdx",sourceDirName:"guides/remote-providers",slug:"/guides/engines/remote-server",permalink:"/guides/engines/remote-server",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/remote-providers/remote-server-integration.mdx",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1711818688,formattedLastUpdatedAt:"Mar 30, 2024",sidebarPosition:1,frontMatter:{title:"Any OAI Compatible Server",sidebar_position:1,slug:"/guides/engines/remote-server",description:"A step-by-step guide on how to set up Jan to connect with any remote or local API server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","import-models-manually","remote server","OAI compatible"]},sidebar:"guidesSidebar",previous:{title:"OpenAI API",permalink:"/guides/engines/openai"},next:{title:"What are Jan Extensions?",permalink:"/extensions"}},a={},d=[{value:"1. Configure a Client Connection",id:"1-configure-a-client-connection",level:3},{value:"2. Create a Model JSON",id:"2-create-a-model-json",level:3},{value:"3. Start the Model",id:"3-start-the-model",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This guide will show you how to configure Jan as a client and point it to any remote or local (self-hosted) API server."}),"\n",(0,t.jsxs)(n.p,{children:["This section will show you how to configure a client connection to a remote/local server using Jan's API server running model ",(0,t.jsx)(n.code,{children:"mistral-ins-7b-q4"})," as an example."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Currently, you can only connect to one OpenAI-compatible endpoint at a time."})}),"\n",(0,t.jsx)(n.h3,{id:"1-configure-a-client-connection",children:"1. Configure a Client Connection"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"~/jan/engines"})," folder."]}),"\n",(0,t.jsxs)(n.li,{children:["Modify the ",(0,t.jsx)(n.code,{children:"openai.json file"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Please note that currently, the code that supports any OpenAI-compatible endpoint only reads ",(0,t.jsx)(n.code,{children:"engine/openai.json"})," file. Thus, it will not search any other files in this directory."]})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Configure ",(0,t.jsx)(n.code,{children:"full_url"})," properties with the endpoint server that you want to connect. For example, if you're going to communicate to Jan's API server, you can configure it as follows:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/openai.json"',children:'{\n  // "full_url": "https://<server-ip-address>:<port>/v1/chat/completions"\n  "full_url": "https://<server-ip-address>:1337/v1/chat/completions"\n  // Skip api_key if your local server does not require authentication\n  // "api_key": "sk-<your key here>"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-create-a-model-json",children:"2. Create a Model JSON"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"~/jan/models"}),", create a folder named ",(0,t.jsx)(n.code,{children:"mistral-ins-7b-q4"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In this folder, add a ",(0,t.jsx)(n.code,{children:"model.json"})," file with Filename as ",(0,t.jsx)(n.code,{children:"model.json"}),", ensure the following configurations:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"})," matching folder name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Format"})," set to ",(0,t.jsx)(n.code,{children:"api"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Engine"})," set to ",(0,t.jsx)(n.code,{children:"openai"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"State"})," set to ",(0,t.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/mistral-ins-7b-q4/model.json"',children:'{\n  "sources": [\n    {\n      "filename": "janai",\n      "url": "https://jan.ai"\n    }\n  ],\n  "id": "mistral-ins-7b-q4",\n  "object": "model",\n  "name": "Mistral Instruct 7B Q4 on Jan API Server",\n  "version": "1.0",\n  "description": "Jan integration with remote Jan API server",\n  "format": "api",\n  "settings": {},\n  "parameters": {},\n  "metadata": {\n    "author": "MistralAI, The Bloke",\n    "tags": ["remote", "awesome"]\n  },\n  "engine": "openai"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-start-the-model",children:"3. Start the Model"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Restart Jan and navigate to the ",(0,t.jsx)(n.strong,{children:"Hub"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Locate your model and click the ",(0,t.jsx)(n.strong,{children:"Use"})," button."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Assistance and Support",type:"info",children:(0,t.jsxs)(n.p,{children:["If you have questions or want more preconfigured GGUF models, please join our ",(0,t.jsx)(n.a,{href:"https://discord.gg/Dt7MxDyNNZ",children:"Discord community"})," for support, updates, and discussions."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var t=o(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);