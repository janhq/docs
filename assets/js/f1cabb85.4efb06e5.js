"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6369],{94575:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>f,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=i(74848),l=i(28453);const t={title:"Files",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models"]},r=void 0,o={id:"developer/framework/engineering/files",title:"Files",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/developer/05-framework/03-engineering/files.md",sourceDirName:"developer/05-framework/03-engineering",slug:"/developer/framework/engineering/files",permalink:"/developer/framework/engineering/files",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/developer/05-framework/03-engineering/files.md",tags:[],version:"current",lastUpdatedBy:"Faisal Amir",lastUpdatedAt:1712042520,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{title:"Files",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models"]},sidebar:"developerSidebar",previous:{title:"Engine",permalink:"/developer/framework/engineering/engine"},next:{title:"Messages",permalink:"/developer/framework/engineering/messages"}},a={},c=[{value:"Files Object",id:"files-object",level:2},{value:"File API",id:"file-api",level:2},{value:"List Files",id:"list-files",level:3},{value:"Upload file",id:"upload-file",level:3},{value:"Delete file",id:"delete-file",level:3},{value:"Retrieve file",id:"retrieve-file",level:3},{value:"Retrieve file content",id:"retrieve-file-content",level:3},{value:"Files Filesystem",id:"files-filesystem",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Draft Specification: functionality has not been implemented yet."})}),"\n",(0,s.jsxs)(n.p,{children:["Files can be used by ",(0,s.jsx)(n.code,{children:"threads"}),", ",(0,s.jsx)(n.code,{children:"assistants"})," and ",(0,s.jsx)(n.code,{children:"fine-tuning"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Equivalent to: ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/files",children:"https://platform.openai.com/docs/api-reference/files"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"files-object",children:"Files Object"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Equivalent to: ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/files",children:"https://platform.openai.com/docs/api-reference/files"})]}),"\n",(0,s.jsx)(n.li,{children:"Note: OAI's struct doesn't seem very well designed"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"files.json"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  // Public properties (OpenAI Compatible: https://platform.openai.com/docs/api-reference/files/object)\n  "id": "file-BK7bzQj3FfZFXr7DbL6xJwfo",\n  "object": "file",\n  "bytes": 120000,\n  "created_at": 1677610602,\n  "filename": "salesOverview.pdf",\n  "purpose": "assistants"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"file-api",children:"File API"}),"\n",(0,s.jsx)(n.h3,{id:"list-files",children:"List Files"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["OpenAI Equivalent: ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/files/list",children:"https://platform.openai.com/docs/api-reference/files/list"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"upload-file",children:"Upload file"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["OpenAI Equivalent: ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/files/create",children:"https://platform.openai.com/docs/api-reference/files/create"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"delete-file",children:"Delete file"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["OpenAI Equivalent: ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/files/delete",children:"https://platform.openai.com/docs/api-reference/files/delete"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"retrieve-file",children:"Retrieve file"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["OpenAI Equivalent: ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/files/retrieve",children:"https://platform.openai.com/docs/api-reference/files/retrieve"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"retrieve-file-content",children:"Retrieve file content"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["OpenAI Equivalent: ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/files/retrieve-contents",children:"https://platform.openai.com/docs/api-reference/files/retrieve-contents"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"files-filesystem",children:"Files Filesystem"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Files can exist in several parts of Jan's filesystem"}),"\n",(0,s.jsxs)(n.li,{children:["TODO: are files hard copied into these folders? Or do we define a ",(0,s.jsx)(n.code,{children:"files.json"})," and only record the relative filepath?"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"/files                  # root `/files` for finetuning, etc\n/assistants\n    /jan\n        /files          # assistant-specific files\n/threads\n    /jan-12938912\n        /files          # thread-specific files\n"})})]})}function f(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(96540);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);