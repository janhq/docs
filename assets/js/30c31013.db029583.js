"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6511],{15264:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=i(74848),o=i(28453);const s={title:"LM Studio",slug:"/guides/engines/lmstudio",sidebar_position:8,description:"A step-by-step guide on how to integrate Jan with LM Studio.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","LM Studio integration"]},l=void 0,d={id:"guides/local-providers/lmstudio",title:"LM Studio",description:"A step-by-step guide on how to integrate Jan with LM Studio.",source:"@site/docs/guides/local-providers/lmstudio.mdx",sourceDirName:"guides/local-providers",slug:"/guides/engines/lmstudio",permalink:"/guides/engines/lmstudio",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/local-providers/lmstudio.mdx",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1711818688,formattedLastUpdatedAt:"Mar 30, 2024",sidebarPosition:8,frontMatter:{title:"LM Studio",slug:"/guides/engines/lmstudio",sidebar_position:8,description:"A step-by-step guide on how to integrate Jan with LM Studio.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","LM Studio integration"]},sidebar:"guidesSidebar",previous:{title:"TensorRT-LLM Extension",permalink:"/guides/engines/tensorrt-llm"},next:{title:"Ollama",permalink:"/guides/engines/ollama"}},r={},a=[{value:"Integrate LM Studio with Jan",id:"integrate-lm-studio-with-jan",level:2},{value:"Step 1: Server Setup",id:"step-1-server-setup",level:3},{value:"Step 2: Model Configuration",id:"step-2-model-configuration",level:3},{value:"Step 3: Starting the Model",id:"step-3-starting-the-model",level:3},{value:"Migrating Models from LM Studio to Jan (version 0.4.6 and older)",id:"migrating-models-from-lm-studio-to-jan-version-046-and-older",level:2},{value:"Step 1: Model Migration",id:"step-1-model-migration",level:3},{value:"Step 2: Activating the Model",id:"step-2-activating-the-model",level:3},{value:"Direct Access to LM Studio Models from Jan (version 0.4.7+)",id:"direct-access-to-lm-studio-models-from-jan-version-047",level:2},{value:"Step 1: Locating the Model Path",id:"step-1-locating-the-model-path",level:3},{value:"Step 2: Model Configuration",id:"step-2-model-configuration-1",level:3},{value:"Step 3: Starting the Model",id:"step-3-starting-the-model-1",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"integrate-lm-studio-with-jan",children:"Integrate LM Studio with Jan"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://lmstudio.ai/",children:"LM Studio"})," enables you to explore, download, and run local Large Language Models (LLMs). You can integrate Jan with LM Studio using two methods:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Integrate the LM Studio server with Jan UI"}),"\n",(0,t.jsx)(n.li,{children:"Migrate your downloaded model from LM Studio to Jan."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To integrate LM Studio with Jan follow the steps below:"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["In this guide, we're going to show you how to connect Jan to ",(0,t.jsx)(n.a,{href:"https://lmstudio.ai/",children:"LM Studio"})," using the second method. We'll use the ",(0,t.jsx)(n.a,{href:"https://huggingface.co/TheBloke/phi-2-GGUF",children:"Phi 2 - GGUF"})," model from Hugging Face as our example."]})}),"\n",(0,t.jsx)(n.h3,{id:"step-1-server-setup",children:"Step 1: Server Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Access the ",(0,t.jsx)(n.code,{children:"Local Inference Server"})," within LM Studio."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select your desired model."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the server after configuring the port and options."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Update the ",(0,t.jsx)(n.code,{children:"openai.json"})," file in ",(0,t.jsx)(n.code,{children:"~/jan/engines"})," to include the LM Studio server's full URL."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/openai.json"',children:'{\n  "full_url": "http://localhost:<port>/v1/chat/completions"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"(port)"})," with your chosen port number. The default is 1234."]})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-model-configuration",children:"Step 2: Model Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.code,{children:"~/jan/models"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a folder named ",(0,t.jsx)(n.code,{children:"lmstudio-(modelname)"}),", like ",(0,t.jsx)(n.code,{children:"lmstudio-phi-2"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Inside, create a ",(0,t.jsx)(n.code,{children:"model.json"})," file with these options:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"format"})," to ",(0,t.jsx)(n.code,{children:"api"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Specify ",(0,t.jsx)(n.code,{children:"engine"})," as ",(0,t.jsx)(n.code,{children:"openai"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"state"})," to ",(0,t.jsx)(n.code,{children:"ready"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/lmstudio-phi-2/model.json"',children:'{\n  "sources": [\n    {\n      "filename": "phi-2-GGUF",\n      "url": "https://huggingface.co/TheBloke/phi-2-GGUF"\n    }\n  ],\n  "id": "lmstudio-phi-2",\n  "object": "model",\n  "name": "LM Studio - Phi 2 - GGUF",\n  "version": "1.0",\n  "description": "TheBloke/phi-2-GGUF",\n  "format": "api",\n  "settings": {},\n  "parameters": {},\n  "metadata": {\n    "author": "Microsoft",\n    "tags": ["General", "Big Context Length"]\n  },\n  "engine": "openai"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For more details regarding the ",(0,t.jsx)(n.code,{children:"model.json"})," settings and parameters fields, please see ",(0,t.jsx)(n.a,{href:"/guides/engines/remote-server/#modeljson",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-starting-the-model",children:"Step 3: Starting the Model"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Restart Jan and proceed to the ",(0,t.jsx)(n.strong,{children:"Hub"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Locate your model and click ",(0,t.jsx)(n.strong,{children:"Use"})," to activate it."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"migrating-models-from-lm-studio-to-jan-version-046-and-older",children:"Migrating Models from LM Studio to Jan (version 0.4.6 and older)"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-model-migration",children:"Step 1: Model Migration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In LM Studio, navigate to ",(0,t.jsx)(n.code,{children:"My Models"})," and access your model folder."]}),"\n",(0,t.jsxs)(n.li,{children:["Copy the model folder to ",(0,t.jsx)(n.code,{children:"~/jan/models"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Ensure the folder name matches the model name in the ",(0,t.jsx)(n.code,{children:".gguf"})," filename. Rename as necessary."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-activating-the-model",children:"Step 2: Activating the Model"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Restart Jan and navigate to the ",(0,t.jsx)(n.strong,{children:"Hub"}),", where the model will be automatically detected."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Use"})," to use the model."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"direct-access-to-lm-studio-models-from-jan-version-047",children:"Direct Access to LM Studio Models from Jan (version 0.4.7+)"}),"\n",(0,t.jsx)(n.p,{children:"Starting from version 0.4.7, Jan enables direct import of LM Studio models using absolute file paths."}),"\n",(0,t.jsx)(n.h3,{id:"step-1-locating-the-model-path",children:"Step 1: Locating the Model Path"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Access ",(0,t.jsx)(n.code,{children:"My Models"})," in LM Studio and locate your model folder."]}),"\n",(0,t.jsx)(n.li,{children:"Obtain the absolute path of your model."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-model-configuration-1",children:"Step 2: Model Configuration"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.code,{children:"~/jan/models"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a folder named ",(0,t.jsx)(n.code,{children:"(modelname)"})," (e.g., ",(0,t.jsx)(n.code,{children:"phi-2.Q4_K_S"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Inside, craft a ",(0,t.jsx)(n.code,{children:"model.json"})," file:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"id"})," to match the folder name."]}),"\n",(0,t.jsxs)(n.li,{children:["Use the direct binary download link ending in ",(0,t.jsx)(n.code,{children:".gguf"})," as the ",(0,t.jsx)(n.code,{children:"url"}),". You can now use the absolute filepath of the model file."]}),"\n",(0,t.jsxs)(n.li,{children:["Set ",(0,t.jsx)(n.code,{children:"engine"})," as ",(0,t.jsx)(n.code,{children:"nitro"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "object": "model",\n  "version": 1,\n  "format": "gguf",\n  "sources": [\n    {\n      "filename": "phi-2.Q4_K_S.gguf",\n      "url": "<absolute-path-of-model-file>"\n    }\n  ],\n  "id": "phi-2.Q4_K_S",\n  "name": "phi-2.Q4_K_S",\n  "created": 1708308111506,\n  "description": "phi-2.Q4_K_S - user self import model",\n  "settings": {\n    "ctx_len": 4096,\n    "embedding": false,\n    "prompt_template": "{system_message}\\n### Instruction: {prompt}\\n### Response:",\n    "llama_model_path": "phi-2.Q4_K_S.gguf"\n  },\n  "parameters": {\n    "temperature": 0.7,\n    "top_p": 0.95,\n    "stream": true,\n    "max_tokens": 2048,\n    "stop": ["<endofstring>"],\n    "frequency_penalty": 0,\n    "presence_penalty": 0\n  },\n  "metadata": {\n    "size": 1615568736,\n    "author": "User",\n    "tags": []\n  },\n  "engine": "nitro"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["For Windows users, ensure to include double backslashes in the URL property, such as ",(0,t.jsx)(n.code,{children:"C:\\\\Users\\\\username\\\\filename.gguf"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"step-3-starting-the-model-1",children:"Step 3: Starting the Model"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Restart Jan and proceed to the ",(0,t.jsx)(n.strong,{children:"Hub"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Locate your model and click ",(0,t.jsx)(n.strong,{children:"Use"})," to activate it."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(96540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);