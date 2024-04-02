"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[825],{40516:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=s(74848),t=s(28453);const o={title:"File-based Approach",slug:"/developer/file-based",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","file based approach"]},r=void 0,i={id:"developer/overview/file-based",title:"File-based Approach",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/developer/01-overview/02-file-based.md",sourceDirName:"developer/01-overview",slug:"/developer/file-based",permalink:"/developer/file-based",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/developer/01-overview/02-file-based.md",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1712046709,formattedLastUpdatedAt:"Apr 2, 2024",sidebarPosition:2,frontMatter:{title:"File-based Approach",slug:"/developer/file-based",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","file based approach"]},sidebar:"developerSidebar",previous:{title:"Architecture",permalink:"/developer/architecture"},next:{title:"User Interface",permalink:"/developer/ui"}},l={},d=[{value:"Data Dependencies",id:"data-dependencies",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"This page is still under construction, and should be read as a scratchpad"})}),"\n",(0,a.jsx)(n.p,{children:"Jan use the local filesystem for data persistence, similar to VSCode. This allows for composability and tinkerability."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"janroot/               # Jan's root folder (e.g. ~/jan)\n    models/            # For raw AI models\n    threads/           # For conversation history\n    assistants/        # For AI assistants' configs, knowledge, etc.\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"/models\n    /modelA\n        model.json        # Default model settings\n        llama-7b-q4.gguf  # Model binaries\n/threads\n    /jan-unixstamp\n        thread.json       # thread metadata (e.g. subject)\n        messages.jsonl    # messages\n        files/            # RAG\n/assistants\n    /jan                  # A default assistant that can use all models\n        assistant.json    # Assistant configs (see below)\n        package.json      # Import npm modules, e.g. Langchain, Llamaindex\n        /src              # For custom code\n            index.js      # Entrypoint\n                          # `/threads` at root level\n                          # `/models` at root level\n    /shakespeare          # Example of a custom assistant\n        assistant.json\n        package.json\n        /threads          # Assistants remember conversations in the future\n        /models           # Users can upload custom models\n"})}),"\n",(0,a.jsx)(n.h2,{id:"data-dependencies",children:"Data Dependencies"}),"\n",(0,a.jsx)(n.mermaid,{value:'graph LR\n    A1[("A User Integrators")] --\x3e|uses| B1[assistant]\n    B1 --\x3e|persist conversational history| C1[("thread A")]\n    B1 --\x3e|executes| D1[("built-in tools as module")]\n    B1 -.->|uses| E1[model]\n    E1 -.->|model.json| D1\n    D1 --\x3e F1[retrieval]\n    F1 --\x3e|belongs to| G1[("web browsing")]\n    G1 --\x3e H1[Google]\n    G1 --\x3e H2[Duckduckgo]\n    F1 --\x3e|belongs to| I1[("API calling")]\n    F1 --\x3e J1[("knowledge files")]'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"User/ Integrator"}),"\n",(0,a.jsx)(n.li,{children:"Assistant object"}),"\n",(0,a.jsx)(n.li,{children:"Model object"}),"\n",(0,a.jsx)(n.li,{children:"Thread object"}),"\n",(0,a.jsx)(n.li,{children:"Built-in tool object"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var a=s(96540);const t={},o=a.createContext(t);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);