"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5483],{10394:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(74848),t=r(28453);const i={title:"Framework",slug:"/developer/framework/",description:"Jan Docs | Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models"]},o=void 0,a={id:"developer/framework/README",title:"Framework",description:"Jan Docs | Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/developer/05-framework/README.md",sourceDirName:"developer/05-framework",slug:"/developer/framework/",permalink:"/developer/framework/",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/developer/05-framework/README.md",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1711818688,formattedLastUpdatedAt:"Mar 30, 2024",frontMatter:{title:"Framework",slug:"/developer/framework/",description:"Jan Docs | Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models"]},sidebar:"developerSidebar",previous:{title:"Installation and Prerequisites",permalink:"/developer/prereq"},next:{title:"Engineering Specs",permalink:"/developer/engineering"}},l={},c=[{value:"Jan Framework",id:"jan-framework",level:2},{value:"Extensions",id:"extensions",level:3},{value:"Cross Platform",id:"cross-platform",level:3},{value:"Local First",id:"local-first",level:3},{value:"AI Native",id:"ai-native",level:3},{value:"Fun Project Ideas",id:"fun-project-ideas",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The following low-level docs are aimed at core contributors."}),"\n",(0,s.jsxs)(n.p,{children:["We cover how to contribute to the core framework (aka the ",(0,s.jsx)(n.code,{children:"Core SDK"}),")."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you are interested to ",(0,s.jsx)(n.strong,{children:"build on top of the framework"}),", like creating assistants or adding app level extensions, please refer to ",(0,s.jsx)(n.a,{href:"/developer",children:"developer docs"})," instead."]})}),"\n",(0,s.jsx)(n.h2,{id:"jan-framework",children:"Jan Framework"}),"\n",(0,s.jsxs)(n.p,{children:["At its core, Jan is a ",(0,s.jsx)(n.strong,{children:"cross-platform, local-first and AI native framework"})," that can be used to build anything."]}),"\n",(0,s.jsx)(n.h3,{id:"extensions",children:"Extensions"}),"\n",(0,s.jsxs)(n.p,{children:["Ultimately, we aim for a ",(0,s.jsx)(n.code,{children:"VSCode"})," or ",(0,s.jsx)(n.code,{children:"Obsidian"})," like SDK that allows ",(0,s.jsx)(n.strong,{children:"devs to build and customize complex and ethical AI applications for any use case"}),", in less than 30 minutes."]}),"\n",(0,s.jsxs)(n.p,{children:["In fact, the current Jan ",(0,s.jsx)(n.a,{href:"https://jan.ai/",children:"Desktop Client"})," is actually just a specific set of extensions & integrations built on top of this framework."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Desktop is Extensions",src:r(39110).A+"",width:"2706",height:"1770"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"We encourage devs to fork, customize, and open source your improvements for the greater community."})}),"\n",(0,s.jsx)(n.h3,{id:"cross-platform",children:"Cross Platform"}),"\n",(0,s.jsxs)(n.p,{children:["Jan follows ",(0,s.jsx)(n.a,{href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",children:"Clean Architecture"})," to the best of our ability. Though leaky abstractions remain (we're a fast moving, open source codebase), we do our best to build an SDK that allows devs to ",(0,s.jsx)(n.strong,{children:"build once, deploy everywhere."})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Clean Architecture",src:r(86171).A+"",width:"772",height:"567"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported Runtimes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Node Native Runtime"}),", good for server side apps"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Electron Chromium"}),", good for Desktop Native apps"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Capacitor"}),", good for Mobile apps (planned, not built yet)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Python Runtime"}),", good for MLOps workflows (planned, not built yet)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Supported OS & Architectures:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Mac Intel & Silicon"}),"\n",(0,s.jsx)(n.li,{children:"Windows"}),"\n",(0,s.jsx)(n.li,{children:"Linux (through AppImage)"}),"\n",(0,s.jsx)(n.li,{children:"Nvidia GPUs"}),"\n",(0,s.jsx)(n.li,{children:"AMD ROCm (coming soon)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Read more:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/core",children:"Code Entrypoint"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Dependency_inversion_principle",children:"Dependency Inversion"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"local-first",children:"Local First"}),"\n",(0,s.jsx)(n.p,{children:"Jan's data persistence happens on the user's local filesystem."}),"\n",(0,s.jsxs)(n.p,{children:["We implemented abstractions on top of ",(0,s.jsx)(n.code,{children:"fs"})," and other core modules in an opinionated way, s.t. user data is saved in a folder-based framework that lets users easily package, export, and manage their data."]}),"\n",(0,s.jsx)(n.p,{children:"Future endeavors on this front include cross device syncing, multi user experience, and more."}),"\n",(0,s.jsxs)(n.p,{children:["Long term, we want to integrate with folks working on ",(0,s.jsx)(n.a,{href:"https://www.inkandswitch.com/local-first/",children:"CRDTs"}),", e.g. ",(0,s.jsx)(n.a,{href:"https://www.theregister.com/2023/04/11/socket_runtime/",children:"Socket Runtime"})," to deeply enable local-first software."]}),"\n",(0,s.jsx)(n.p,{children:"Read more:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/janhq/jan/blob/main/core/src/fs.ts",children:"Folder-based wrappers entrypoint"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/core/src/node",children:"Piping Node modules across infrastructures"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Our local first approach at the moment needs a lot of work. Please don't hesitate to refactor as you make your way through the codebase."})}),"\n",(0,s.jsx)(n.h3,{id:"ai-native",children:"AI Native"}),"\n",(0,s.jsx)(n.p,{children:"We believe all software applications can be natively supercharged with AI primitives and embedded AI servers."}),"\n",(0,s.jsx)(n.p,{children:"Including:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["OpenAI Compatible AI ",(0,s.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/core/src/types",children:"types"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/core/src/extensions",children:"core extensions"})," to support common functionality like making an inference call."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Multiple inference engines through ",(0,s.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/extensions/inference-nitro-extension",children:"extensions, integrations & wrappers"})," ",(0,s.jsxs)(n.em,{children:["On this, we'd like to appreciate the folks at ",(0,s.jsx)(n.a,{href:"https://github.com/ggerganov/llama.cpp",children:"llamacpp"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/NVIDIA/TensorRT-LLM",children:"TensorRT-LLM"})," for. To which we'll continue to make commits & fixes back upstream."]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/janhq/jan/tree/main/core/src/api",children:"Code Entrypoint"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"fun-project-ideas",children:"Fun Project Ideas"}),"\n",(0,s.jsx)(n.p,{children:"Beyond the current Jan client and UX, the Core SDK can be used to build many other AI-powered and privacy preserving applications."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Game engine"}),": For AI enabled character games, procedural generation games"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Health app"}),": For a personal healthcare app that improves habits"]}),"\n",(0,s.jsx)(n.li,{children:"Got ideas? Make a PR into this docs page!"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you are interested to tackle these issues, or have suggestions for integrations and other OSS tools we can use, please hit us up in ",(0,s.jsx)(n.a,{href:"https://discord.gg/5rQ2zTv3be",children:"Discord"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Our open source license is copy left, which means we encourage forks to stay open source, and allow core contributors to merge things upstream."})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},86171:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/CleanArchitecture-26ac5f08c770e19c35a8ef38b905373f.jpg"},39110:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/ExtensionCallouts-f5153831c0519e3eab145eed8be4f67d.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);