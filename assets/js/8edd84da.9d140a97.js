"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5971],{73972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(74848),i=n(28453);const r={title:"Discord",slug:"/integrations/discord",sidebar_position:5,description:"A step-by-step guide on how to integrate Jan with a Discord bot.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Discord integration","Discord","bot"]},o=void 0,d={id:"guides/integrations/discord",title:"Discord",description:"A step-by-step guide on how to integrate Jan with a Discord bot.",source:"@site/docs/guides/integrations/discord.mdx",sourceDirName:"guides/integrations",slug:"/integrations/discord",permalink:"/integrations/discord",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/integrations/discord.mdx",tags:[],version:"current",lastUpdatedBy:"Henry",lastUpdatedAt:1711461431,formattedLastUpdatedAt:"Mar 26, 2024",sidebarPosition:5,frontMatter:{title:"Discord",slug:"/integrations/discord",sidebar_position:5,description:"A step-by-step guide on how to integrate Jan with a Discord bot.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Discord integration","Discord","bot"]},sidebar:"guidesSidebar",previous:{title:"Integrations",permalink:"/integrations/"},next:{title:"Open Interpreter",permalink:"/integrations/interpreter"}},l={},c=[{value:"Integrate Discord Bot with Jan",id:"integrate-discord-bot-with-jan",level:2},{value:"Step 1: Clone the repository",id:"step-1-clone-the-repository",level:3},{value:"Step 2: Install the Required Libraries",id:"step-2-install-the-required-libraries",level:3},{value:"Step 3: Set the Environment",id:"step-3-set-the-environment",level:3},{value:"Step 4: Insert the Bot",id:"step-4-insert-the-bot",level:3},{value:"Step 5: Run the bot",id:"step-5-run-the-bot",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"integrate-discord-bot-with-jan",children:"Integrate Discord Bot with Jan"}),"\n",(0,s.jsx)(t.p,{children:"Discord bot can enhances your discord server interactions. By integrating Jan with it, you can significantly boost responsiveness and user engaggement in your discord server."}),"\n",(0,s.jsx)(t.p,{children:"To integrate Jan with a Discord bot, follow the steps below:"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-clone-the-repository",children:"Step 1: Clone the repository"}),"\n",(0,s.jsxs)(t.p,{children:["To make this integration successful, it is necessary to clone the discord bot's ",(0,s.jsx)(t.a,{href:"https://github.com/jakobdylanc/discord-llm-chatbot",children:"repository"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"step-2-install-the-required-libraries",children:"Step 2: Install the Required Libraries"}),"\n",(0,s.jsx)(t.p,{children:"After cloning the repository, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"pip install -r requirements.txt\n"})}),"\n",(0,s.jsx)(t.h3,{id:"step-3-set-the-environment",children:"Step 3: Set the Environment"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a copy of ",(0,s.jsx)(t.code,{children:".env.example"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Change the name to ",(0,s.jsx)(t.code,{children:".env"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Set the environment with the following options:"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Setting"}),(0,s.jsx)(t.th,{children:"Instructions"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DISCORD_BOT_TOKEN"})}),(0,s.jsxs)(t.td,{children:["Generate a new Discord application at ",(0,s.jsx)(t.a,{href:"https://discord.com/developers/applications",children:"discord.com/developers/applications"}),", obtain a token from the Bot tab, and enable MESSAGE CONTENT INTENT."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"LLM"})}),(0,s.jsxs)(t.td,{children:["For ",(0,s.jsx)(t.a,{href:"https://jan.ai/",children:"Jan"}),", set to ",(0,s.jsx)(t.code,{children:"local/openai/(MODEL_NAME)"}),", where ",(0,s.jsx)(t.code,{children:"(MODEL_NAME)"})," is your loaded model's name."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CUSTOM_SYSTEM_PROMPT"})}),(0,s.jsx)(t.td,{children:"Adjust the bot's behavior as needed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CUSTOM_DISCORD_STATUS"})}),(0,s.jsx)(t.td,{children:"Set a custom message for the bot's Discord profile. (Max 128 characters)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ALLOWED_CHANNEL_IDS"})}),(0,s.jsx)(t.td,{children:"Enter Discord channel IDs where the bot can send messages, separated by commas. Leave blank to allow all channels."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ALLOWED_ROLE_IDS"})}),(0,s.jsx)(t.td,{children:"Enter Discord role IDs allowed to use the bot, separated by commas. Leave blank to allow everyone. Including at least one role also disables DMs."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"MAX_IMAGES"})}),(0,s.jsxs)(t.td,{children:["Max number of image attachments allowed per message when using a vision model. (Default: ",(0,s.jsx)(t.code,{children:"5"}),")"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"MAX_MESSAGES"})}),(0,s.jsxs)(t.td,{children:["Max messages allowed in a reply chain. (Default: ",(0,s.jsx)(t.code,{children:"20"}),")"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"LOCAL_SERVER_URL"})}),(0,s.jsxs)(t.td,{children:["URL of your local API server for LLMs starting with ",(0,s.jsx)(t.code,{children:"local/"}),". (Default: ",(0,s.jsx)(t.code,{children:"http://localhost:5000/v1"}),")"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"LOCAL_API_KEY"})}),(0,s.jsxs)(t.td,{children:["API key for your local API server with LLMs starting with ",(0,s.jsx)(t.code,{children:"local/"}),". Usually safe to leave blank."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"step-4-insert-the-bot",children:"Step 4: Insert the Bot"}),"\n",(0,s.jsx)(t.p,{children:"Invite the bot to your Discord server using the following URL:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"https://discord.com/api/oauth2/authorize?client_id=(CLIENT_ID)&permissions=412317273088&scope=bot\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Replace ",(0,s.jsx)(t.code,{children:"CLIENT_ID"})," with your Discord application's client ID from the OAuth2 tab"]})}),"\n",(0,s.jsx)(t.h3,{id:"step-5-run-the-bot",children:"Step 5: Run the bot"}),"\n",(0,s.jsx)(t.p,{children:"Run the bot by using the following command in your command prompt:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"python llmcord.py\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);