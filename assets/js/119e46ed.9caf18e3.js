"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7570],{92617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),i=t(11470),l=t(19365);const o={title:"Install with Docker",sidebar_position:4,slug:"/guides/install/server",hide_table_of_contents:!0,description:"A step-by-step guide to install Jan using Docker.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Install on Docker","Docker","Helm"]},a=void 0,c={id:"guides/installation/docker",title:"Install with Docker",description:"A step-by-step guide to install Jan using Docker.",source:"@site/docs/guides/installation/docker.mdx",sourceDirName:"guides/installation",slug:"/guides/install/server",permalink:"/guides/install/server",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/installation/docker.mdx",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1711818688,formattedLastUpdatedAt:"Mar 30, 2024",sidebarPosition:4,frontMatter:{title:"Install with Docker",sidebar_position:4,slug:"/guides/install/server",hide_table_of_contents:!0,description:"A step-by-step guide to install Jan using Docker.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Install on Docker","Docker","Helm"]}},d={},u=[{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Run Jan in Docker",id:"run-jan-in-docker",level:3},{value:"Docker Compose Profile and Environment",id:"docker-compose-profile-and-environment",level:3},{value:"Docker Compose Profile",id:"docker-compose-profile",level:4},{value:"Environment Variables",id:"environment-variables",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsx)(n.p,{children:"Ensure that your system meets the following requirements:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Linux or WSL2 Docker"}),"\n",(0,r.jsx)(n.li,{children:"Latest Docker Engine and Docker Compose"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To enable GPU support, you will need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"nvidia-driver"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"nvidia-docker2"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you have not installed Docker, follow the instructions ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If you have not installed the required file for GPU support, follow the instructions ",(0,r.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",children:"here"}),"."]}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"run-jan-in-docker",children:"Run Jan in Docker"}),"\n",(0,r.jsx)(n.p,{children:"You can run Jan in Docker with two methods:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Run Jan in CPU mode"}),"\n",(0,r.jsx)(n.li,{children:"Run Jan in GPU mode"}),"\n"]}),"\n",(0,r.jsxs)(i.A,{groupId:"ldocker_type",children:[(0,r.jsxs)(l.A,{value:"docker_cpu",label:"CPU",children:[(0,r.jsx)(n.p,{children:"To run Jan in Docker CPU mode, by using the following code:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# cpu mode with default file system\ndocker compose --profile cpu-fs up -d\n\n# cpu mode with S3 file system\ndocker compose --profile cpu-s3fs up -d\n"})})]}),(0,r.jsxs)(l.A,{value:"docker_gpu",label:"GPU",children:[(0,r.jsx)(n.p,{children:"To run Jan in Docker CPU mode, follow the steps below:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Check CUDA compatibility with your NVIDIA driver by running nvidia-smi and check the CUDA version in the output as shown below:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"nvidia-smi\n\n# Output\n+---------------------------------------------------------------------------------------+\n| NVIDIA-SMI 531.18                 Driver Version: 531.18       CUDA Version: 12.1     |\n|-----------------------------------------+----------------------+----------------------+\n| GPU  Name                      TCC/WDDM | Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf            Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                                         |                      |               MIG M. |\n|=========================================+======================+======================|\n|   0  NVIDIA GeForce RTX 4070 Ti    WDDM | 00000000:01:00.0  On |                  N/A |\n|  0%   44C    P8               16W / 285W|   1481MiB / 12282MiB |      2%      Default |\n|                                         |                      |                  N/A |\n+-----------------------------------------+----------------------+----------------------+\n|   1  NVIDIA GeForce GTX 1660 Ti    WDDM | 00000000:02:00.0 Off |                  N/A |\n|  0%   49C    P8               14W / 120W|      0MiB /  6144MiB |      0%      Default |\n|                                         |                      |                  N/A |\n+-----------------------------------------+----------------------+----------------------+\n|   2  NVIDIA GeForce GTX 1660 Ti    WDDM | 00000000:05:00.0 Off |                  N/A |\n| 29%   38C    P8               11W / 120W|      0MiB /  6144MiB |      0%      Default |\n|                                         |                      |                  N/A |\n+-----------------------------------------+----------------------+----------------------+\n\n+---------------------------------------------------------------------------------------+\n| Processes:                                                                            |\n|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |\n|        ID   ID                                                             Usage      |\n|=======================================================================================|\n"})}),(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Visit ",(0,r.jsx)(n.a,{href:"https://catalog.ngc.nvidia.com/orgs/nvidia/containers/cuda/tags",children:"NVIDIA NGC Catalog"})," and find the smallest minor version of image tag that matches your CUDA version (e.g., 12.1 -> 12.1.0)"]}),"\n",(0,r.jsxs)(n.li,{children:["Update the ",(0,r.jsx)(n.code,{children:"Dockerfile.gpu"})," line number 5 with the latest minor version of the image tag from step 2 (e.g. change ",(0,r.jsx)(n.code,{children:"FROM nvidia/cuda:12.2.0-runtime-ubuntu22.04 AS base"})," to ",(0,r.jsx)(n.code,{children:"FROM nvidia/cuda:12.1.0-runtime-ubuntu22.04 AS base"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Run Jan in GPU mode by using the following command:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# GPU mode with default file system\ndocker compose --profile gpu-fs up -d\n\n# GPU mode with S3 file system\ndocker compose --profile gpu-s3fs up -d\n"})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"docker-compose-profile-and-environment",children:"Docker Compose Profile and Environment"}),"\n",(0,r.jsx)(n.p,{children:"The available Docker Compose profile and the environment variables listed below:"}),"\n",(0,r.jsx)(n.h4,{id:"docker-compose-profile",children:"Docker Compose Profile"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Profile"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cpu-fs"}),(0,r.jsx)(n.td,{children:"Run Jan in CPU mode with default file system"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cpu-s3fs"}),(0,r.jsx)(n.td,{children:"Run Jan in CPU mode with S3 file system"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gpu-fs"}),(0,r.jsx)(n.td,{children:"Run Jan in GPU mode with default file system"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gpu-s3fs"}),(0,r.jsx)(n.td,{children:"Run Jan in GPU mode with S3 file system"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Environment Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"S3_BUCKET_NAME"}),(0,r.jsx)(n.td,{children:"S3 bucket name - leave blank for default file system"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AWS_ACCESS_KEY_ID"}),(0,r.jsx)(n.td,{children:"AWS access key ID - leave blank for default file system"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AWS_SECRET_ACCESS_KEY"}),(0,r.jsx)(n.td,{children:"AWS secret access key - leave blank for default file system"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AWS_ENDPOINT"}),(0,r.jsx)(n.td,{children:"AWS endpoint URL - leave blank for default file system"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AWS_REGION"}),(0,r.jsx)(n.td,{children:"AWS region - leave blank for default file system"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"API_BASE_URL"}),(0,r.jsxs)(n.td,{children:["Jan Server URL, please modify it as your public ip address or domain name default ",(0,r.jsx)(n.a,{href:"http://localhost:1377",children:"http://localhost:1377"})]})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["If you are stuck in a broken build, go to the ",(0,r.jsx)(n.a,{href:"/troubleshooting/#broken-build",children:"Broken Build"})," section of Common Errors."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),s=t(18215),i=t(23104),l=t(56347),o=t(205),a=t(57485),c=t(31682),d=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=f({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&a(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),s=o[t].value;s!==r&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function y(e){const n=(0,b.A)();return(0,j.jsx)(k,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);