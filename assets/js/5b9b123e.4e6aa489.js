"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7785],{60365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),i=t(11470),a=t(19365);const l={title:"Llama.cpp Extension",slug:"/guides/engines/llamacpp",sidebar_position:1,description:"A step-by-step guide on how to customize the LlamaCPP extension.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Llama CPP integration","LlamaCPP Extension"]},o=void 0,c={id:"guides/local-providers/llamacpp",title:"Llama.cpp Extension",description:"A step-by-step guide on how to customize the LlamaCPP extension.",source:"@site/docs/guides/local-providers/llamacpp.mdx",sourceDirName:"guides/local-providers",slug:"/guides/engines/llamacpp",permalink:"/guides/engines/llamacpp",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/local-providers/llamacpp.mdx",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1711818688,formattedLastUpdatedAt:"Mar 30, 2024",sidebarPosition:1,frontMatter:{title:"Llama.cpp Extension",slug:"/guides/engines/llamacpp",sidebar_position:1,description:"A step-by-step guide on how to customize the LlamaCPP extension.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Llama CPP integration","LlamaCPP Extension"]},sidebar:"guidesSidebar",previous:{title:"Local Engines",permalink:"/guides/engines/local"},next:{title:"TensorRT-LLM Extension",permalink:"/guides/engines/tensorrt-llm"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"LlamaCPP Extension",id:"llamacpp-extension",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/janhq/nitro",children:"Nitro"})," is an inference server on top of ",(0,r.jsx)(n.a,{href:"https://github.com/ggerganov/llama.cpp",children:"llama.cpp"}),". It provides an OpenAI-compatible API, queue, & scaling."]}),"\n",(0,r.jsx)(n.h2,{id:"llamacpp-extension",children:"LlamaCPP Extension"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Nitro is the default AI engine downloaded with Jan. There is no additional setup needed."})}),"\n",(0,r.jsxs)(n.p,{children:["In this guide, we'll walk you through the process of customizing your engine settings by configuring the ",(0,r.jsx)(n.code,{children:"nitro.json"})," file"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Navigate to the ",(0,r.jsx)(n.code,{children:"App Settings"})," > ",(0,r.jsx)(n.code,{children:"Advanced"})," > ",(0,r.jsx)(n.code,{children:"Open App Directory"})," > ",(0,r.jsx)(n.code,{children:"~/jan/engine"})," folder."]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"mac",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cd ~/jan/engines\n"})})}),(0,r.jsx)(a.A,{value:"windows",label:"Windows",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"C:/Users/<your_user_name>/jan/engines\n"})})}),(0,r.jsx)(a.A,{value:"linux",label:"Linux",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cd ~/jan/engines\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Modify the ",(0,r.jsx)(n.code,{children:"nitro.json"})," file based on your needs. The default settings are shown below."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/nitro.json"',children:'{\n  "ctx_len": 2048,\n  "ngl": 100,\n  "cpu_threads": 1,\n  "cont_batching": false,\n  "embedding": false\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The table below describes the parameters in the ",(0,r.jsx)(n.code,{children:"nitro.json"})," file."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ctx_len"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Integer"})}),(0,r.jsxs)(n.td,{children:["Typically set at ",(0,r.jsx)(n.code,{children:"2048"}),", ",(0,r.jsx)(n.code,{children:"ctx_len"})," provides ample context for model operations like ",(0,r.jsx)(n.code,{children:"GPT-3.5"}),". (",(0,r.jsx)(n.em,{children:"Maximum"}),": ",(0,r.jsx)(n.code,{children:"4096"}),", ",(0,r.jsx)(n.em,{children:"Minimum"}),": ",(0,r.jsx)(n.code,{children:"1"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ngl"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Integer"})}),(0,r.jsxs)(n.td,{children:["Defaulted at ",(0,r.jsx)(n.code,{children:"100"}),", ",(0,r.jsx)(n.code,{children:"ngl"})," determines GPU layer usage."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cpu_threads"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Integer"})}),(0,r.jsxs)(n.td,{children:["Determines CPU inference threads, limited by hardware and OS. (",(0,r.jsx)(n.em,{children:"Maximum"})," determined by system)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cont_batching"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Integer"})}),(0,r.jsx)(n.td,{children:"Controls continuous batching, enhancing throughput for LLM inference."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"embedding"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Integer"})}),(0,r.jsx)(n.td,{children:"Enables embedding utilization for tasks like document-enhanced chat in RAG-based applications."})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["By default, the value of ",(0,r.jsx)(n.code,{children:"ngl"})," is set to 100, which indicates that it will offload all. If you wish to offload only 50% of the GPU, you can set ",(0,r.jsx)(n.code,{children:"ngl"})," to 15 because most models on Mistral or Llama are around ~ 30 layers."]}),"\n",(0,r.jsxs)(n.li,{children:["To utilize the embedding feature, include the JSON parameter ",(0,r.jsx)(n.code,{children:'"embedding": true'}),". It will enable Nitro to process inferences with embedding capabilities. Please refer to the ",(0,r.jsx)(n.a,{href:"https://nitro.jan.ai/features/embed",children:"Embedding in the Nitro documentation"})," for a more detailed explanation."]}),"\n",(0,r.jsxs)(n.li,{children:["To utilize the continuous batching feature for boosting throughput and minimizing latency in large language model (LLM) inference, include ",(0,r.jsx)(n.code,{children:"cont_batching: true"}),". For details, please refer to the ",(0,r.jsx)(n.a,{href:"https://nitro.jan.ai/features/cont-batch",children:"Continuous Batching in the Nitro documentation"}),"."]}),"\n"]})}),"\n",(0,r.jsx)(n.admonition,{title:"Assistance and Support",type:"info",children:(0,r.jsxs)(n.p,{children:["If you have questions, please join our ",(0,r.jsx)(n.a,{href:"https://discord.gg/Dt7MxDyNNZ",children:"Discord community"})," for support, updates, and discussions."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(18215),i=t(23104),a=t(56347),l=t(205),o=t(57485),c=t(31682),d=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),f=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==r&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);