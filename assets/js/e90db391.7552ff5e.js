"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9982],{74643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=n(74848),r=n(28453);const o={title:"Local API Server",slug:"/guides/local-api",description:"A step-by-step guide to start Jan Local Server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","local server","start server","api endpoint"]},l=void 0,i={id:"guides/user-guides/local-server",title:"Local API Server",description:"A step-by-step guide to start Jan Local Server.",source:"@site/docs/guides/user-guides/local-server.mdx",sourceDirName:"guides/user-guides",slug:"/guides/local-api",permalink:"/guides/local-api",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/user-guides/local-server.mdx",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1712027706,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{title:"Local API Server",slug:"/guides/local-api",description:"A step-by-step guide to start Jan Local Server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","local server","start server","api endpoint"]},sidebar:"guidesSidebar",previous:{title:"Use Tools",permalink:"/guides/tools"},next:{title:"Advanced Settings",permalink:"/guides/advanced"}},a={},d=[{value:"Step 1: Set the Local Server",id:"step-1-set-the-local-server",level:2},{value:"Step 2: Start and Use the Built-in API Server",id:"step-2-start-and-use-the-built-in-api-server",level:2}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Jan provides a built-in API server that can be used as a drop-in for OpenAI's API local replacement. This guide will walk you through on how to start the local server and use it to make request to the local server."}),"\n",(0,s.jsx)(t.h2,{id:"step-1-set-the-local-server",children:"Step 1: Set the Local Server"}),"\n",(0,s.jsx)(t.p,{children:"To start the local server, follow the steps below:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Navigate to the Jan main menu dashboard."}),"\n",(0,s.jsx)(t.li,{children:"Click the corresponding icon on the bottom left side of your screen."}),"\n",(0,s.jsx)(t.li,{children:"Select the model you want to use under the Model Settings screen to set the LLM for your local server."}),"\n",(0,s.jsx)(t.li,{children:"Configure the server settings as follows:"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Feature"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default Setting"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Local Server Address"}),(0,s.jsx)(t.td,{children:"By default, Jan is only accessible on the same computer it's running on, using the address 127.0.0.1. You can change this to 0.0.0.0 to let other devices on your local network access it. However, this is less secure than just allowing access from the same computer."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"localhost (127.0.0.1)"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Port"}),(0,s.jsx)(t.td,{children:"Jan runs on port 1337 by default. The port can be changed to any other port number as needed."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"1337"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Cross-Origin Resource Sharing (CORS)"}),(0,s.jsx)(t.td,{children:"Manages resource access from external domains. Enabled for security by default but can be disabled if needed."}),(0,s.jsx)(t.td,{children:"Enabled"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Verbose Server Logs"}),(0,s.jsx)(t.td,{children:"Provides extensive details about server activities as the local server runs, displayed at the center of the screen."}),(0,s.jsx)(t.td,{children:"Not specified (implied enabled)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"step-2-start-and-use-the-built-in-api-server",children:"Step 2: Start and Use the Built-in API Server"}),"\n",(0,s.jsx)(t.p,{children:"Once you have set the server settings, you can start the server by following the steps below:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Start Server"})," button on the top left of your screen."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["When the server starts, you'll see a message like ",(0,s.jsx)(t.code,{children:"Server listening at http://127.0.0.1:1337"}),", and the ",(0,s.jsx)(t.strong,{children:"Start Server"})," button will turn into a red ",(0,s.jsx)(t.strong,{children:"Stop Server"})," button."]})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"You will be redirected to the API reference server in your browser."}),"\n",(0,s.jsx)(t.li,{children:"Select the available endpoints and try them out by executing the example request."}),"\n",(0,s.jsxs)(t.li,{children:["In this example, we will show you how it works using the ",(0,s.jsx)(t.code,{children:"Chat"})," endpoint."]}),"\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.strong,{children:"Try it out"})," button."]}),"\n",(0,s.jsxs)(t.li,{children:["The Chat endpoint has the following ",(0,s.jsx)(t.code,{children:"cURL request example"})," when running using a ",(0,s.jsx)(t.code,{children:"tinyllama-1.1b"})," model local server:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "messages": [\n    {\n      "content": "You are a helpful assistant.",\n      "role": "system"\n    },\n    {\n      "content": "Hello!",\n      "role": "user"\n    }\n  ],\n  "model": "tinyllama-1.1b",\n  "stream": true,\n  "max_tokens": 2048,\n  "stop": [\n    "hello"\n  ],\n  "frequency_penalty": 0,\n  "presence_penalty": 0,\n  "temperature": 0.7,\n  "top_p": 0.95\n}\n\'\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsxs)(t.li,{children:["The endpoint returns the following ",(0,s.jsx)(t.code,{children:"JSON response body"}),":"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "choices": [\n    {\n      "finish_reason": null,\n      "index": 0,\n      "message": {\n        "content": "Hello user. What can I help you with?",\n        "role": "assistant"\n      }\n    }\n  ],\n  "created": 1700193928,\n  "id": "ebwd2niJvJB1Q2Whyvkz",\n  "model": "_",\n  "object": "chat.completion",\n  "system_fingerprint": "_",\n  "usage": {\n    "completion_tokens": 500,\n    "prompt_tokens": 33,\n    "total_tokens": 533\n  }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var s=n(96540);const r={},o=s.createContext(r);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);