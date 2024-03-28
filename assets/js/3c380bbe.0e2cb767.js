"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5033],{81972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var i=t(74848),o=t(28453),s=t(11470),r=t(19365);const a={title:"Continue Integration",sidebar_position:18,slug:"/integrations/continue",description:"A step-by-step guide on how to integrate Jan with Continue and VS Code.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Continue integration","VSCode integration"]},l=void 0,u={id:"guides/integrations/vscode",title:"Continue Integration",description:"A step-by-step guide on how to integrate Jan with Continue and VS Code.",source:"@site/docs/guides/integrations/vscode.mdx",sourceDirName:"guides/integrations",slug:"/integrations/continue",permalink:"/integrations/continue",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/integrations/vscode.mdx",tags:[],version:"current",lastUpdatedBy:"Henry",lastUpdatedAt:1711669448,formattedLastUpdatedAt:"Mar 28, 2024",sidebarPosition:18,frontMatter:{title:"Continue Integration",sidebar_position:18,slug:"/integrations/continue",description:"A step-by-step guide on how to integrate Jan with Continue and VS Code.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Continue integration","VSCode integration"]},sidebar:"guidesSidebar",previous:{title:"OpenRouter",permalink:"/integrations/openrouter"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},c={},d=[{value:"Integrate with Continue VS Code",id:"integrate-with-continue-vs-code",level:2},{value:"Step 1: Installing Continue on Visal Studio Code",id:"step-1-installing-continue-on-visal-studio-code",level:3},{value:"Step 2: Enable the Jan API Server",id:"step-2-enable-the-jan-api-server",level:3},{value:"Step 3: Configure Continue to Use Jan&#39;s Local Server",id:"step-3-configure-continue-to-use-jans-local-server",level:3},{value:"Step 4: Ensure the Using Model Is Activated in Jan",id:"step-4-ensure-the-using-model-is-activated-in-jan",level:3},{value:"Try out Jan integration with Continue in Visual Studio Code",id:"try-out-jan-integration-with-continue-in-visual-studio-code",level:2},{value:"1. Asking questions about the code",id:"1-asking-questions-about-the-code",level:3},{value:"2. Editing the code with the help of a large language model",id:"2-editing-the-code-with-the-help-of-a-large-language-model",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"integrate-with-continue-vs-code",children:"Integrate with Continue VS Code"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://continue.dev/docs/intro",children:"Continue"})," is an open-source autopilot compatible with Visual Studio Code and JetBrains, offering the simplest method to code with any LLM (Local Language Model)."]}),"\n",(0,i.jsx)(n.p,{children:"To integrate Jan with a local AI language model, follow the steps below:"}),"\n",(0,i.jsx)(n.h3,{id:"step-1-installing-continue-on-visal-studio-code",children:"Step 1: Installing Continue on Visal Studio Code"}),"\n",(0,i.jsxs)(n.p,{children:["Follow this ",(0,i.jsx)(n.a,{href:"https://continue.dev/docs/quickstart",children:"guide to install the Continue extension on Visual Studio Code"})]}),"\n",(0,i.jsx)(n.h3,{id:"step-2-enable-the-jan-api-server",children:"Step 2: Enable the Jan API Server"}),"\n",(0,i.jsx)(n.p,{children:"To set up Continue for use with Jan's Local Server, you must activate the Jan API Server with your chosen model."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Press the ",(0,i.jsx)(n.code,{children:"<>"})," button. Jan will take you to the ",(0,i.jsx)(n.strong,{children:"Local API Server"})," section."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Setup the server, which includes the ",(0,i.jsx)(n.strong,{children:"IP Port"}),", ",(0,i.jsx)(n.strong,{children:"Cross-Origin-Resource-Sharing (CORS)"})," and ",(0,i.jsx)(n.strong,{children:"Verbose Server Logs"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Press the ",(0,i.jsx)(n.strong,{children:"Start Server"})," button"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-configure-continue-to-use-jans-local-server",children:"Step 3: Configure Continue to Use Jan's Local Server"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.code,{children:"~/.continue"})," directory."]}),"\n"]}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(r.A,{value:"mac",label:"Mac",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd ~/.continue\n"})})}),(0,i.jsx)(r.A,{value:"windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"C:/Users/<your_user_name>/.continue\n"})})}),(0,i.jsx)(r.A,{value:"linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cd ~/.continue\n"})})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="~/.continue/config.json"',children:'{\n  "models": [\n    {\n      "title": "Jan",\n      "provider": "openai",\n      "model": "mistral-ins-7b-q4",\n      "apiKey": "EMPTY",\n      "apiBase": "http://localhost:1337/v1"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Ensure the file has the following configurations:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure ",(0,i.jsx)(n.code,{children:"openai"})," is selected as the ",(0,i.jsx)(n.code,{children:"provider"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Match the ",(0,i.jsx)(n.code,{children:"model"})," with the one enabled in the Jan API Server."]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"apiBase"})," to ",(0,i.jsx)(n.code,{children:"http://localhost:1337"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Leave the ",(0,i.jsx)(n.code,{children:"apiKey"})," field to ",(0,i.jsx)(n.code,{children:"EMPTY"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-4-ensure-the-using-model-is-activated-in-jan",children:"Step 4: Ensure the Using Model Is Activated in Jan"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.code,{children:"Settings"})," > ",(0,i.jsx)(n.code,{children:"Models"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Activate the model you want to use in Jan by clicking the ",(0,i.jsx)(n.strong,{children:"three dots (\u22ee)"})," and select ",(0,i.jsx)(n.strong,{children:"Start Model"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"try-out-jan-integration-with-continue-in-visual-studio-code",children:"Try out Jan integration with Continue in Visual Studio Code"}),"\n",(0,i.jsx)(n.h3,{id:"1-asking-questions-about-the-code",children:"1. Asking questions about the code"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Highlight a code snippet and press ",(0,i.jsx)(n.code,{children:"Command + Shift + M"})," to open the Left Panel."]}),"\n",(0,i.jsxs)(n.li,{children:["Select Jan at the bottom and ask a question about the code, for example, ",(0,i.jsx)(n.code,{children:"Explain this code"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-editing-the-code-with-the-help-of-a-large-language-model",children:"2. Editing the code with the help of a large language model"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Select a code snippet and use ",(0,i.jsx)(n.code,{children:"Command + Shift + L"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Enter your editing request, such as ",(0,i.jsx)(n.code,{children:"Add comments to this code"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(18215);const o={tabItem:"tabItem_Ymn6"};var s=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var i=t(96540),o=t(18215),s=t(23104),r=t(56347),a=t(205),l=t(57485),u=t(31682),c=t(89466);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[u,d]=g({queryString:t,groupId:o}),[v,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,c.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),x=(()=>{const e=u??v;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function b(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==i&&(u(n),r(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,o.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=v(e);return(0,m.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,m.jsx)(b,{...e,...n}),(0,m.jsx)(j,{...e,...n})]})}function S(e){const n=(0,f.A)();return(0,m.jsx)(w,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);