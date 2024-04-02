"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9704],{40981:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>r});var i=t(74848),a=t(28453);const n={},l="Regression test",c={id:"template/QA_script",title:"Regression test",description:"Release Version: v0.4.7",source:"@site/docs/template/QA_script.md",sourceDirName:"template",slug:"/template/QA_script",permalink:"/template/QA_script",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/template/QA_script.md",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1712046709,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{}},d={},r=[{value:"A. Installation, Update, and Uninstallation",id:"a-installation-update-and-uninstallation",level:2},{value:"1. Users install app",id:"1-users-install-app",level:3},{value:"2. Users update app",id:"2-users-update-app",level:3},{value:"3. Users uninstall / close app",id:"3-users-uninstall--close-app",level:3},{value:"B. Overview",id:"b-overview",level:2},{value:"1. Shortcut key, memory usage / CPU usage",id:"1-shortcut-key-memory-usage--cpu-usage",level:3},{value:"2. Users check the <code>active model</code>",id:"2-users-check-the-active-model",level:3},{value:"C. Thread",id:"c-thread",level:2},{value:"1. Users can chat with Jan, the default assistant",id:"1-users-can-chat-with-jan-the-default-assistant",level:3},{value:"2. Users can customize chat settings like model parameters via both the GUI &amp; thread.json",id:"2-users-can-customize-chat-settings-like-model-parameters-via-both-the-gui--threadjson",level:3},{value:"3. Model dropdown",id:"3-model-dropdown",level:3},{value:"4. Users can click on a history thread",id:"4-users-can-click-on-a-history-thread",level:3},{value:"5. Users can config instructions for the assistant.",id:"5-users-can-config-instructions-for-the-assistant",level:3},{value:"D. Hub",id:"d-hub",level:2},{value:"1. Users can discover recommended models (Jan ships with a few preconfigured model.json files)",id:"1-users-can-discover-recommended-models-jan-ships-with-a-few-preconfigured-modeljson-files",level:3},{value:"2. Users can download models suitable for their devices, e.g. compatible with their RAM",id:"2-users-can-download-models-suitable-for-their-devices-eg-compatible-with-their-ram",level:3},{value:"3. Users can download models via a HuggingFace URL (coming soon)",id:"3-users-can-download-models-via-a-huggingface-url-coming-soon",level:3},{value:"4. Users can import new models to the Hub",id:"4-users-can-import-new-models-to-the-hub",level:3},{value:"5. Users can use the model as they want",id:"5-users-can-use-the-model-as-they-want",level:3},{value:"6. Users can Integrate With a Remote Server",id:"6-users-can-integrate-with-a-remote-server",level:3},{value:"E. System Monitor",id:"e-system-monitor",level:2},{value:"1. Users can see disk and RAM utilization",id:"1-users-can-see-disk-and-ram-utilization",level:3},{value:"2. Users can start and stop models based on system health",id:"2-users-can-start-and-stop-models-based-on-system-health",level:3},{value:"F. Settings",id:"f-settings",level:2},{value:"1. Appearance",id:"1-appearance",level:3},{value:"2. Extensions [TBU]",id:"2-extensions-tbu",level:3},{value:"3. Users can add custom plugins via manual installation [TBU]",id:"3-users-can-add-custom-plugins-via-manual-installation-tbu",level:3},{value:"4. Advanced settings",id:"4-advanced-settings",level:3},{value:"G. Local API server",id:"g-local-api-server",level:2},{value:"1. Local Server Usage with Server Options",id:"1-local-server-usage-with-server-options",level:3}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"regression-test",children:"Regression test"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Release Version:"})," v0.4.7"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Operating System:"})," MacOS"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"a-installation-update-and-uninstallation",children:"A. Installation, Update, and Uninstallation"}),"\n",(0,i.jsx)(s.h3,{id:"1-users-install-app",children:"1. Users install app"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Check that the installation package is not corrupted and passes all security checks."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Confirm that the app launches successfully after installation."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"2-users-update-app",children:"2. Users update app"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Validate that the update does not corrupt user data or settings."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Confirm that the app restarts or prompts the user to restart after an update."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","When updating the app, check if the ",(0,i.jsx)(s.code,{children:"/models"})," directory has any JSON files that change according to the update."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Verify if updating the app also updates extensions correctly (test functionality changes, support notifications for necessary tests with each version related to extensions update)."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"3-users-uninstall--close-app",children:"3. Users uninstall / close app"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Ensure that after closing the app, all models are unloaded."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11","\u26a0\ufe0f"," Check that the uninstallation process removes the app successfully from the system."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Clean the Jan root directory and open the app to check if it creates all the necessary folders, especially models and extensions."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"b-overview",children:"B. Overview"}),"\n",(0,i.jsx)(s.h3,{id:"1-shortcut-key-memory-usage--cpu-usage",children:"1. Shortcut key, memory usage / CPU usage"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Test each shortcut key to confirm it works as described (My models, navigating, opening, closing, etc.)."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Ensure that the interface presents the correct numbers for memory and CPU usage."]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"2-users-check-the-active-model",children:["2. Users check the ",(0,i.jsx)(s.code,{children:"active model"})]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Verify that the app correctly displays the state of the loading model (e.g., loading, ready, error)."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Confirm that the app allows users to switch between models if multiple are available."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Check that the app provides feedback or instructions if the model fails to load."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Verify the troubleshooting assistant correctly capture hardware / log info #1784"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"c-thread",children:"C. Thread"}),"\n",(0,i.jsx)(s.h3,{id:"1-users-can-chat-with-jan-the-default-assistant",children:"1. Users can chat with Jan, the default assistant"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Verify sending a message enables users to receive responses from model."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Ensure that the conversation thread is maintained without any loss of data upon sending multiple messages."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\u200cUsers should be able to edit msg and the assistant will re-generate the answer based on the edited version of the message."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Test for the ability to send different types of messages (e.g., text, emojis, code blocks)."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Check the output format of the AI (code blocks, JSON, markdown, ...)."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Validate the scroll functionality in the chat window for lengthy conversations."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Check if the user can copy / delete the response."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check the ",(0,i.jsx)(s.code,{children:"clear message"})," / ",(0,i.jsx)(s.code,{children:"delete entire chat"})," button works."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Check if deleting all the chat retains the system prompt."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Validate that there is appropriate error handling and messaging if the assistant fails to respond."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Test assistant's ability to maintain context over multiple exchanges."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check the ",(0,i.jsx)(s.code,{children:"create new chat"})," button, and new conversation will have an automatically generated thread title based on users msg."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Confirm that by changing ",(0,i.jsx)(s.code,{children:"models"})," mid-thread the app can still handle it."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Check the ",(0,i.jsx)(s.code,{children:"regenerate"})," button renews the response (single / multiple times)."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Check the ",(0,i.jsx)(s.code,{children:"Instructions"})," update correctly after the user updates it midway (mid-thread)."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"2-users-can-customize-chat-settings-like-model-parameters-via-both-the-gui--threadjson",children:"2. Users can customize chat settings like model parameters via both the GUI & thread.json"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Test the functionality to adjust model parameters (e.g., Temperature, Top K, Top P) from the GUI and verify they are reflected in the chat behavior."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Ensure that changes can be saved and persisted between sessions."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Validate that users can access and modify the thread.json file."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check that changes made in thread.json are correctly applied to the chat session upon reload or restart."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Check the maximum and minimum limits of the adjustable parameters and how they affect the assistant's responses."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Ensure that users switch between threads with different models, the app can handle it."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"3-model-dropdown",children:"3. Model dropdown"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Model list should highlight recommended based on user RAM"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Model size should display (for both installed and imported models)"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"4-users-can-click-on-a-history-thread",children:"4. Users can click on a history thread"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Confirm that the chat window displays the entire conversation from the selected history thread without any missing messages."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check the performance and accuracy of the history feature when dealing with a large number of threads."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Validate that historical threads reflect the exact state of the chat at that time, including settings."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Verify the ability to delete or clean old threads."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Confirm that changing the title of the thread updates correctly."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"5-users-can-config-instructions-for-the-assistant",children:"5. Users can config instructions for the assistant."}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Test if the instructions set by the user are being followed by the assistant in subsequent conversations."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Validate that changes to instructions are updated in real time and do not require a restart of the application or session."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check for the ability to reset instructions to default or clear them completely."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," RAG - Users can import documents and the system should process queries about the uploaded file, providing accurate and appropriate responses in the conversation thread."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"d-hub",children:"D. Hub"}),"\n",(0,i.jsx)(s.h3,{id:"1-users-can-discover-recommended-models-jan-ships-with-a-few-preconfigured-modeljson-files",children:"1. Users can discover recommended models (Jan ships with a few preconfigured model.json files)"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Ensure that each model's recommendations are consistent with the user\u2019s activity and preferences."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Test the functionality of any filters that refine model recommendations."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"2-users-can-download-models-suitable-for-their-devices-eg-compatible-with-their-ram",children:"2. Users can download models suitable for their devices, e.g. compatible with their RAM"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Display the best model for their RAM at the top."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Ensure that models are labeled with RAM requirements and compatibility."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check the download model functionality and validate if the cancel download feature works correctly."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"3-users-can-download-models-via-a-huggingface-url-coming-soon",children:"3. Users can download models via a HuggingFace URL (coming soon)"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Have the warning/status when the user enters the URL."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check the progress bar reflects the right process."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Validate the error handling for invalid or inaccessible URLs."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"4-users-can-import-new-models-to-the-hub",children:"4. Users can import new models to the Hub"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Ensure import successfully via drag / drop or upload GGUF."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Verify Move model binary file / Keep Original Files & Symlink option are working"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\u26a0\ufe0f"," Ensure it raises clear errors for users to fix the problem while adding a new model."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Users can add more info to the imported model / edit name"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Ensure the new model updates after restarting the app."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"5-users-can-use-the-model-as-they-want",children:"5. Users can use the model as they want"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check ",(0,i.jsx)(s.code,{children:"start"})," / ",(0,i.jsx)(s.code,{children:"stop"})," / ",(0,i.jsx)(s.code,{children:"delete"})," button response exactly what it does."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Check if starting another model stops the other model entirely."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","\ud83d\ude80"," Check the ",(0,i.jsx)(s.code,{children:"Explore models"})," navigate correctly to the model panel."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check when deleting a model it will delete all the files on the user's computer."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ",":warning",":The"," recommended tags should present right for the user's hardware."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"6-users-can-integrate-with-a-remote-server",children:"6. Users can Integrate With a Remote Server"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Import openAI GPT model ",(0,i.jsx)(s.a,{href:"https://jan.ai/guides/using-models/integrate-with-remote-server/",children:"https://jan.ai/guides/using-models/integrate-with-remote-server/"})," and the model displayed in Hub / Thread dropdown"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Users can use the remote model properly"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"e-system-monitor",children:"E. System Monitor"}),"\n",(0,i.jsx)(s.h3,{id:"1-users-can-see-disk-and-ram-utilization",children:"1. Users can see disk and RAM utilization"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Verify that the RAM and VRAM utilization graphs display accurate information."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check that the CPU usage is accurately reported in real time."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Validate that the utilization percentages reflect the actual usage compared to the system's total available resources."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Ensure that the system monitors updates dynamically as the models run and stop."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"2-users-can-start-and-stop-models-based-on-system-health",children:"2. Users can start and stop models based on system health"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Test the 'Start' action for a model to ensure it initiates and the system resource usage reflects this change."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Verify the 'Stop' action for a model to confirm it ceases operation and frees up the system resources accordingly."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Confirm that any changes in model status (start/stop) are logged or reported to the user for transparency."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"f-settings",children:"F. Settings"}),"\n",(0,i.jsx)(s.h3,{id:"1-appearance",children:"1. Appearance"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Test the ",(0,i.jsx)(s.code,{children:"Light"}),", ",(0,i.jsx)(s.code,{children:"Dark"}),", and ",(0,i.jsx)(s.code,{children:"System"})," theme settings to ensure they are functioning as expected."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Confirm that the application saves the theme preference and persists it across sessions."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Validate that all elements of the UI are compatible with the theme changes and maintain legibility and contrast."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"2-extensions-tbu",children:"2. Extensions [TBU]"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Confirm that the ",(0,i.jsx)(s.code,{children:"Extensions"})," tab lists all available plugins."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","\ud83d\udd11"," Test the toggle switch for each plugin to ensure it enables or disables the plugin correctly."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Verify that plugin changes take effect without needing to restart the application unless specified."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","\ud83d\udd11"," Check that the plugin's status (",(0,i.jsx)(s.code,{children:"Installed the latest version"}),") updates accurately after any changes."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Validate the ",(0,i.jsx)(s.code,{children:"Manual Installation"})," process by selecting and installing a plugin file."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Test for proper error handling and user feedback when a plugin installation fails."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"3-users-can-add-custom-plugins-via-manual-installation-tbu",children:"3. Users can add custom plugins via manual installation [TBU]"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Verify that the ",(0,i.jsx)(s.code,{children:"Manual Installation"})," option is clearly visible and accessible in the ",(0,i.jsx)(s.code,{children:"Extensions"})," section."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Test the functionality of the ",(0,i.jsx)(s.code,{children:"Select"})," button within the ",(0,i.jsx)(s.code,{children:"Manual Installation"})," area."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","\u26a0\ufe0f"," Check that the file picker dialog allows for the correct plugin file types (e.g., .tgz)."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","\ud83d\udd11"," Validate that the selected plugin file installs correctly and the plugin becomes functional."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Ensure that there is a progress indicator or confirmation message once the installation is complete."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Confirm that if the installation is interrupted or fails, the user is given a clear error message."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","\ud83d\udd11"," Test that the application prevents the installation of incompatible or corrupt plugin files."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","\ud83d\udd11"," Check that the user can uninstall or disable custom plugins as easily as pre-installed ones."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Verify that the application's performance remains stable after the installation of custom plugins."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"4-advanced-settings",children:"4. Advanced settings"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Test the ",(0,i.jsx)(s.code,{children:"Experimental Mode"})," toggle to confirm it enables or disables experimental features as intended."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Check the functionality of ",(0,i.jsx)(s.code,{children:"Open App Directory"})," to ensure it opens the correct folder in the system file explorer."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Users can move ",(0,i.jsx)(s.strong,{children:"Jan data folder"})]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Validate that changes in advanced settings are applied immediately or provide appropriate instructions if a restart is needed."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Attemp to test downloading model from hub using ",(0,i.jsx)(s.strong,{children:"HTTP Proxy"})," ",(0,i.jsx)(s.a,{href:"https://github.com/janhq/jan/pull/1562",children:"guideline"})]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Logs that are older than 7 days or exceed 1MB in size will be automatically cleared upon starting the application."]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Users can click on Reset button to ",(0,i.jsx)(s.strong,{children:"factory reset"})," app settings to its original state & delete all usage data."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"g-local-api-server",children:"G. Local API server"}),"\n",(0,i.jsx)(s.h3,{id:"1-local-server-usage-with-server-options",children:"1. Local Server Usage with Server Options"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","\ud83d\udd11"," Explore API Reference: Swagger API for sending/receiving requests","\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Use default server option"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Configure and use custom server options"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Test starting/stopping the local API server with different Model/Model settings"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Server logs captured with correct Server Options provided"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Verify functionality of Open logs/Clear feature"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Ensure that threads and other functions impacting the model are disabled while the local server is running"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>c});var i=t(96540);const a={},n=i.createContext(a);function l(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);