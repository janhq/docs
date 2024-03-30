"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8740],{25526:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=i(74848),o=i(28453);const s={title:"OpenAI API",sidebar_position:2,slug:"/guides/engines/openai",description:"A step-by-step guide on how to integrate Jan with Azure OpenAI.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","integration","Azure OpenAI Service"]},r=void 0,d={id:"guides/remote-providers/openai",title:"OpenAI API",description:"A step-by-step guide on how to integrate Jan with Azure OpenAI.",source:"@site/docs/guides/remote-providers/openai.mdx",sourceDirName:"guides/remote-providers",slug:"/guides/engines/openai",permalink:"/guides/engines/openai",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/remote-providers/openai.mdx",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1711818688,formattedLastUpdatedAt:"Mar 30, 2024",sidebarPosition:2,frontMatter:{title:"OpenAI API",sidebar_position:2,slug:"/guides/engines/openai",description:"A step-by-step guide on how to integrate Jan with Azure OpenAI.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","integration","Azure OpenAI Service"]},sidebar:"guidesSidebar",previous:{title:"Mistral API",permalink:"/guides/engines/mistral"},next:{title:"Any OAI Compatible Server",permalink:"/guides/engines/remote-server"}},l={},a=[{value:"OpenAI Platform",id:"openai-platform",level:2},{value:"1. Create a Model JSON",id:"1-create-a-model-json",level:3},{value:"<code>model.json</code>",id:"modeljson",level:3},{value:"Settings",id:"settings",level:4},{value:"Parameters",id:"parameters",level:4},{value:"2. Configure OpenAI API Keys",id:"2-configure-openai-api-keys",level:3},{value:"3. Start the Model",id:"3-start-the-model",level:3},{value:"Azure OpenAI",id:"azure-openai",level:2},{value:"Step 1: Configure Azure OpenAI Service API Key",id:"step-1-configure-azure-openai-service-api-key",level:3},{value:"Step 2: Model Configuration",id:"step-2-model-configuration",level:3},{value:"Step 3: Start the Model",id:"step-3-start-the-model",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"openai-platform",children:"OpenAI Platform"}),"\n",(0,t.jsx)(n.h3,{id:"1-create-a-model-json",children:"1. Create a Model JSON"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"~/jan/models"}),", create a folder named ",(0,t.jsx)(n.code,{children:"gpt-3.5-turbo-16k"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In this folder, add a ",(0,t.jsx)(n.code,{children:"model.json"})," file with Filename as ",(0,t.jsx)(n.code,{children:"model.json"}),", ",(0,t.jsx)(n.code,{children:"id"})," matching folder name, ",(0,t.jsx)(n.code,{children:"Format"})," as ",(0,t.jsx)(n.code,{children:"api"}),", ",(0,t.jsx)(n.code,{children:"Engine"})," as ",(0,t.jsx)(n.code,{children:"openai"}),", and ",(0,t.jsx)(n.code,{children:"State"})," as ",(0,t.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/gpt-3.5-turbo-16k/model.json"',children:'{\n  "sources": [\n    {\n      "filename": "openai",\n      "url": "https://openai.com"\n    }\n  ],\n  "id": "gpt-3.5-turbo-16k",\n  "object": "model",\n  "name": "OpenAI GPT 3.5 Turbo 16k",\n  "version": "1.0",\n  "description": "OpenAI GPT 3.5 Turbo 16k model is extremely good",\n  "format": "api",\n  "settings": {},\n  "parameters": {},\n  "metadata": {\n    "author": "OpenAI",\n    "tags": ["General", "Big Context Length"]\n  },\n  "engine": "openai"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"modeljson",children:(0,t.jsx)(n.code,{children:"model.json"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"model.json"})," file is used to set up your local models."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you've set up your model's configuration in ",(0,t.jsx)(n.code,{children:"nitro.json"}),", please note that ",(0,t.jsx)(n.code,{children:"model.json"})," can overwrite the settings."]}),"\n",(0,t.jsxs)(n.li,{children:["When using OpenAI models like GPT-3.5 and GPT-4, you can use the default settings in ",(0,t.jsx)(n.code,{children:"model.json"})," file."]}),"\n"]})}),"\n",(0,t.jsx)(n.p,{children:"There are two important fields in model.json that you need to setup:"}),"\n",(0,t.jsx)(n.h4,{id:"settings",children:"Settings"}),"\n",(0,t.jsx)(n.p,{children:"This is the field where to set your engine configurations, there are two imporant field that you need to define for your local models:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Term"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ctx_len"})}),(0,t.jsx)(n.td,{children:"Defined based on the model's context size."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"prompt_template"})}),(0,t.jsx)(n.td,{children:"Defined based on the model's trained template (e.g., ChatML, Alpaca)."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["To set up the ",(0,t.jsx)(n.code,{children:"prompt_template"})," based on your model, follow the steps below: 1. Visit ",(0,t.jsx)(n.a,{href:"https://huggingface.co/",children:"Hugging Face"}),", an open-source machine learning platform. 2. Find the current model that you're using (e.g., ",(0,t.jsx)(n.a,{href:"https://huggingface.co/google/gemma-7b-it",children:"Gemma 7b it"}),"). 3. Review the text and identify the template."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"parameters"})," is the adjustable settings that affect how your model operates or processes the data.\nThe fields in ",(0,t.jsx)(n.code,{children:"parameters"})," are typically general and can be the same across models. An example is provided below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"parameters":{\n  "temperature": 0.7,\n  "top_p": 0.95,\n  "stream": true,\n  "max_tokens": 4096,\n  "frequency_penalty": 0,\n  "presence_penalty": 0\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can find the list of available models in the ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/docs/models/overview",children:"OpenAI Platform"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"id"})," property needs to match the model name in the list.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For example, if you want to use the ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo",children:"GPT-4 Turbo"}),", you must set the ",(0,t.jsx)(n.code,{children:"id"})," property to ",(0,t.jsx)(n.code,{children:"gpt-4-1106-preview"}),"."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"2-configure-openai-api-keys",children:"2. Configure OpenAI API Keys"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Find your API keys in the ",(0,t.jsx)(n.a,{href:"https://platform.openai.com/api-keys",children:"OpenAI Platform"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the OpenAI API keys in ",(0,t.jsx)(n.code,{children:"~/jan/engines/openai.json"})," file."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/openai.json"',children:'{\n  "full_url": "https://api.openai.com/v1/chat/completions",\n  "api_key": "sk-<your key here>"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-start-the-model",children:"3. Start the Model"}),"\n",(0,t.jsx)(n.p,{children:"Restart Jan and navigate to the Hub. Then, select your configured model and start the model."}),"\n",(0,t.jsx)(n.h2,{id:"azure-openai",children:"Azure OpenAI"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/overview?source=docs",children:"Azure OpenAI Service"})," offers robust APIs, making it simple for you to incorporate OpenAI's language models into your applications. You can integrate Azure OpenAI with Jan by following the steps below:"]}),"\n",(0,t.jsx)(n.h3,{id:"step-1-configure-azure-openai-service-api-key",children:"Step 1: Configure Azure OpenAI Service API Key"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set up and deploy the Azure OpenAI Service."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Once you've set up and deployed Azure OpenAI Service, you can find the endpoint and API key in ",(0,t.jsx)(n.a,{href:"https://oai.azure.com/",children:"Azure OpenAI Studio"})," under ",(0,t.jsx)(n.code,{children:"Chat"})," > ",(0,t.jsx)(n.code,{children:"View code"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set up the endpoint and API key for Azure OpenAI Service in the ",(0,t.jsx)(n.code,{children:"~/jan/engines/openai.json"})," file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/openai.json"',children:'{\n  // https://hieujan.openai.azure.com/openai/deployments/gpt-35-hieu-jan/chat/completions?api-version=2023-07-01-preview\n  "full_url": "https://<your-resource-name>.openai.azure.com/openai/deployments/<your-deployment-name>/chat/completions?api-version=<api-version>",\n  "api_key": "<your-api-key>"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-model-configuration",children:"Step 2: Model Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to the ",(0,t.jsx)(n.code,{children:"~/jan/models"})," directory."]}),"\n",(0,t.jsxs)(n.li,{children:["Make a new folder called ",(0,t.jsx)(n.code,{children:"(your-deployment-name)"}),", for example ",(0,t.jsx)(n.code,{children:"gpt-35-hieu-jan"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.code,{children:"model.json"})," file inside the folder with the specified configurations:"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Match the ",(0,t.jsx)(n.code,{children:"id"})," property with both the folder name and your deployment name."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"format"})," property as ",(0,t.jsx)(n.code,{children:"api"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.code,{children:"openai"})," for the ",(0,t.jsx)(n.code,{children:"engine"})," property."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"state"})," property as ",(0,t.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/gpt-35-hieu-jan/model.json"',children:'{\n  "sources": [\n    {\n      "filename": "azure_openai",\n      "url": "https://hieujan.openai.azure.com"\n    }\n  ],\n  "id": "gpt-35-hieu-jan",\n  "object": "model",\n  "name": "Azure OpenAI GPT 3.5",\n  "version": "1.0",\n  "description": "Azure Open AI GPT 3.5 model is extremely good",\n  "format": "api",\n  "settings": {},\n  "parameters": {},\n  "metadata": {\n    "author": "OpenAI",\n    "tags": ["General", "Big Context Length"]\n  },\n  "engine": "openai"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For more details regarding the ",(0,t.jsx)(n.code,{children:"model.json"})," settings and parameters fields, please see ",(0,t.jsx)(n.a,{href:"/guides/engines/remote-server/#modeljson",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-start-the-model",children:"Step 3: Start the Model"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Restart Jan and go to the Hub."}),"\n",(0,t.jsx)(n.li,{children:"Find your model in Jan application and click on the Use button."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);