"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[747],{38270:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=t(74848),s=t(28453),i=t(11470),l=t(19365);const o={title:"Advanced Settings",slug:"/guides/advanced",description:"Jan Docs | Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Advanced Settings","HTTPS Proxy","SSL","settings","Jan settings"]},a=void 0,d={id:"guides/user-guides/advanced-settings",title:"Advanced Settings",description:"Jan Docs | Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/guides/user-guides/advanced-settings.mdx",sourceDirName:"guides/user-guides",slug:"/guides/advanced",permalink:"/guides/advanced",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/docs/tree/main/docs/guides/user-guides/advanced-settings.mdx",tags:[],version:"current",lastUpdatedBy:"Nicole Zhu",lastUpdatedAt:1712027706,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{title:"Advanced Settings",slug:"/guides/advanced",description:"Jan Docs | Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan","Customizable Intelligence","LLM","local AI","privacy focus","free and open source","private and offline","conversational AI","no-subscription fee","large language models","Advanced Settings","HTTPS Proxy","SSL","settings","Jan settings"]},sidebar:"guidesSidebar",previous:{title:"Local API Server",permalink:"/guides/local-api"},next:{title:"Local Engines",permalink:"/guides/engines/local"}},c={},h=[{value:"Access the Advanced Settings",id:"access-the-advanced-settings",level:2},{value:"Keyboard Shortcuts",id:"keyboard-shortcuts",level:2},{value:"Enable the Experimental Mode",id:"enable-the-experimental-mode",level:2},{value:"Enable the GPU Acceleration",id:"enable-the-gpu-acceleration",level:2},{value:"Access the Jan Data Folder",id:"access-the-jan-data-folder",level:2},{value:"HTTPS Proxy",id:"https-proxy",level:2},{value:"Setting Up Your Own HTTPS Proxy Server",id:"setting-up-your-own-https-proxy-server",level:3},{value:"Step 1: Choosing a Server",id:"step-1-choosing-a-server",level:4},{value:"Step 2: Installing Squid",id:"step-2-installing-squid",level:4},{value:"Step 3: Configure Squid for HTTPS",id:"step-3-configure-squid-for-https",level:4},{value:"Step 4 (Optional): Configure ACLs and Authentication",id:"step-4-optional-configure-acls-and-authentication",level:4},{value:"Step 5: Restart and Test Your Proxy",id:"step-5-restart-and-test-your-proxy",level:4},{value:"Setting Up Jan to Use Your HTTPS Proxy",id:"setting-up-jan-to-use-your-https-proxy",level:3},{value:"Ignore SSL Certificate",id:"ignore-ssl-certificate",level:2},{value:"Clear Logs",id:"clear-logs",level:2},{value:"Reset To Factory Default",id:"reset-to-factory-default",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This guide will show you how to use the advanced settings in Jan."}),"\n",(0,r.jsx)(n.h2,{id:"access-the-advanced-settings",children:"Access the Advanced Settings"}),"\n",(0,r.jsx)(n.p,{children:"To access the Jan's advanced settings, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate to the main dashboard."}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"gear icon (\u2699\ufe0f)"})," on the bottom left of your screen."]}),"\n",(0,r.jsxs)(n.li,{children:["Under the ",(0,r.jsx)(n.strong,{children:"Settings screen"}),", click the ",(0,r.jsx)(n.strong,{children:"Advanced Settings"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"You can configure the following settings:"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feature"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Keyboard Shortcuts"})}),(0,r.jsxs)(n.td,{children:["Keyboard shortcuts speed up your workflow. For a quick overview of useful keyboard shortcuts, refer to the list ",(0,r.jsx)(n.a,{href:"/guides/advanced#keyboard-shortcuts",children:"below"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Experimental Mode"})}),(0,r.jsx)(n.td,{children:"Enables experimental features that may be unstable."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"GPU Acceleration"})}),(0,r.jsx)(n.td,{children:"Enables the boosting of your model performance by using your GPU devices for acceleration."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Jan Data Folder"})}),(0,r.jsx)(n.td,{children:"Location for messages, model configurations, and user data. Changeable to a different location."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"HTTPS Proxy & Ignore SSL Certificate"})}),(0,r.jsxs)(n.td,{children:["Use a proxy server for internet connections and ignore SSL certificates for self-signed certificates. Please check out the guide on how to set up your own HTTPS proxy server ",(0,r.jsx)(n.a,{href:"/guides/advanced#https-proxy",children:"here"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Clear Logs"})}),(0,r.jsx)(n.td,{children:"Removes all logs from the Jan application."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Reset To Factory Default"})}),(0,r.jsx)(n.td,{children:"Resets the application to its original state, deleting all data including model customizations and conversation history."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"keyboard-shortcuts",children:"Keyboard Shortcuts"}),"\n",(0,r.jsx)(n.p,{children:"Here are some of the keyboard shortcuts that you can use in Jan."}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(l.A,{value:"mac",label:"Mac",default:!0,children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Combination"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"\u2318 E"})}),(0,r.jsx)(n.td,{children:"Show list your models"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"\u2318 K"})}),(0,r.jsx)(n.td,{children:"Show list navigation pages"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"\u2318 B"})}),(0,r.jsx)(n.td,{children:"Toggle collapsible left panel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"\u2318 ,"})}),(0,r.jsx)(n.td,{children:"Navigate to setting page"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Enter"})}),(0,r.jsx)(n.td,{children:"Send a message"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Shift + Enter"})}),(0,r.jsx)(n.td,{children:"Insert new line in input box"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Arrow Up"})}),(0,r.jsx)(n.td,{children:"Navigate to the previous option (within the search dialog)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Arrow Down"})}),(0,r.jsx)(n.td,{children:"Navigate to the next option (within the search dialog)"})]})]})]})}),(0,r.jsx)(l.A,{value:"windows",label:"Windows",default:!0,children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Combination"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ctrl E"})}),(0,r.jsx)(n.td,{children:"Show list your models"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ctrl K"})}),(0,r.jsx)(n.td,{children:"Show list navigation pages"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ctrl B"})}),(0,r.jsx)(n.td,{children:"Toggle collapsible left panel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ctrl ,"})}),(0,r.jsx)(n.td,{children:"Navigate to setting page"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Enter"})}),(0,r.jsx)(n.td,{children:"Send a message"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Shift + Enter"})}),(0,r.jsx)(n.td,{children:"Insert new line in input box"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Arrow Up"})}),(0,r.jsx)(n.td,{children:"Navigate to the previous option (within the search dialog)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Arrow Down"})}),(0,r.jsx)(n.td,{children:"Navigate to the next option (within the search dialog)"})]})]})]})}),(0,r.jsx)(l.A,{value:"linux",label:"Linux",default:!0,children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Combination"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ctrl E"})}),(0,r.jsx)(n.td,{children:"Show list your models"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ctrl K"})}),(0,r.jsx)(n.td,{children:"Show list navigation pages"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ctrl B"})}),(0,r.jsx)(n.td,{children:"Toggle collapsible left panel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Ctrl ,"})}),(0,r.jsx)(n.td,{children:"Navigate to setting page"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Enter"})}),(0,r.jsx)(n.td,{children:"Send a message"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Shift + Enter"})}),(0,r.jsx)(n.td,{children:"Insert new line in input box"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Arrow Up"})}),(0,r.jsx)(n.td,{children:"Navigate to the previous option (within the search dialog)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Arrow Down"})}),(0,r.jsx)(n.td,{children:"Navigate to the next option (within the search dialog)"})]})]})]})})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The keyboard shortcuts are customizable."})}),"\n",(0,r.jsx)(n.h2,{id:"enable-the-experimental-mode",children:"Enable the Experimental Mode"}),"\n",(0,r.jsx)(n.p,{children:"To try out new fetures that are still in testing phase, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate to the main dashboard."}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"gear icon (\u2699\ufe0f)"})," on the bottom left of your screen."]}),"\n",(0,r.jsxs)(n.li,{children:["Under the ",(0,r.jsx)(n.strong,{children:"Settings screen"}),", click the ",(0,r.jsx)(n.strong,{children:"Advanced Settings"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.strong,{children:"Experimental Mode"})," click the slider to enable."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"enable-the-gpu-acceleration",children:"Enable the GPU Acceleration"}),"\n",(0,r.jsx)(n.p,{children:"To enhance your model performance, follow the steps below:"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Ensure that you have read the ",(0,r.jsx)(n.a,{href:"/troubleshooting/#troubleshooting-nvidia-gpu",children:"troubleshooting guide"})," here for further assistance."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate to the main dashboard."}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"gear icon (\u2699\ufe0f)"})," on the bottom left of your screen."]}),"\n",(0,r.jsxs)(n.li,{children:["Under the ",(0,r.jsx)(n.strong,{children:"Settings screen"}),", click the ",(0,r.jsx)(n.strong,{children:"Advanced Settings"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.strong,{children:"GPU Acceleration"})," click the slider to enable."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"access-the-jan-data-folder",children:"Access the Jan Data Folder"}),"\n",(0,r.jsx)(n.p,{children:"To access the folder where messages, model configurations and user data are stored, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate to the main dashboard."}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"gear icon (\u2699\ufe0f)"})," on the bottom left of your screen."]}),"\n",(0,r.jsxs)(n.li,{children:["Under the ",(0,r.jsx)(n.strong,{children:"Settings screen"}),", click the ",(0,r.jsx)(n.strong,{children:"Advanced Settings"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.strong,{children:"Jan Data Folder"})," click the ",(0,r.jsx)(n.strong,{children:"folder icon (\ud83d\udcc2)"})," to access the data or the ",(0,r.jsx)(n.strong,{children:"pencil icon (\u270f\ufe0f)"})," to change the folder where you keep your data."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"https-proxy",children:"HTTPS Proxy"}),"\n",(0,r.jsx)(n.p,{children:"HTTPS Proxy encrypts data between your browser and the internet, making it hard for outsiders to intercept or read. It also helps you to maintain your privacy and security while being able to bypass regional restrictions on internet."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"When configuring Jan using an HTTPS proxy, the speed of the downloading model may be affected due to the encryption and decryption process. It also depends on the networking of the cloud service provider."}),"\n",(0,r.jsx)(n.li,{children:"HTTPS Proxy does not affect the remote model usage."}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-your-own-https-proxy-server",children:"Setting Up Your Own HTTPS Proxy Server"}),"\n",(0,r.jsxs)(n.p,{children:["This guide provides a simple overview of setting up an HTTPS proxy server using ",(0,r.jsx)(n.strong,{children:"Squid"}),", a widely used open-source proxy software."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Other software options are also available depending on your requirements."})}),"\n",(0,r.jsx)(n.h4,{id:"step-1-choosing-a-server",children:"Step 1: Choosing a Server"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Firstly, you need to choose a server to host your proxy server."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"We recommend using a well-known cloud provider service like:"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Amazon AWS"}),"\n",(0,r.jsx)(n.li,{children:"Google Cloud"}),"\n",(0,r.jsx)(n.li,{children:"Microsoft Azure"}),"\n",(0,r.jsx)(n.li,{children:"Digital Ocean\n:::"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Ensure that your server has a public IP address and is accessible from the internet."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"step-2-installing-squid",children:"Step 2: Installing Squid"}),"\n",(0,r.jsxs)(n.p,{children:["Instal ",(0,r.jsx)(n.strong,{children:"Squid"})," using the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install squid\n"})}),"\n",(0,r.jsx)(n.h4,{id:"step-3-configure-squid-for-https",children:"Step 3: Configure Squid for HTTPS"}),"\n",(0,r.jsx)(n.p,{children:"To enable HTTPS, you will need to configure Squid with SSL support."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Squid requires an SSL certificate to be able to handle HTTPS traffic. You can generate a self-signed certificate or obtain one from a Certificate Authority (CA). For a self-signed certificate, you can use OpenSSL:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout squid-proxy.pem -out squid-proxy.pem\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Edit the Squid configuration file ",(0,r.jsx)(n.code,{children:"/etc/squid/squid.conf"})," to include the path to your SSL certificate and enable the HTTPS port:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"http_port 3128 ssl-bump cert=/path/to/your/squid-proxy.pem\nssl_bump server-first all\nssl_bump bump all\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["To intercept HTTPS traffic, Squid uses a process called SSL Bumping. This process allows Squid to decrypt and re-encrypt HTTPS traffic. To enable SSL Bumping, ensure the ",(0,r.jsx)(n.code,{children:"ssl_bump"})," directives are configured correctly in your ",(0,r.jsx)(n.code,{children:"squid.conf"})," file."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"step-4-optional-configure-acls-and-authentication",children:"Step 4 (Optional): Configure ACLs and Authentication"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"You can define rules to control who can access your proxy. This is done by editing the squid.conf file and defining ACLs:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'acl allowed_ips src "/etc/squid/allowed_ips.txt"\nhttp_access allow allowed_ips\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"If you want to add an authentication layer, Squid supports several authentication schemes. Basic authentication setup might look like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"auth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/passwords\nacl authenticated proxy_auth REQUIRED\nhttp_access allow authenticated\n"})}),"\n",(0,r.jsx)(n.h4,{id:"step-5-restart-and-test-your-proxy",children:"Step 5: Restart and Test Your Proxy"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"After configuring, restart Squid to apply the changes:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart squid\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"To test, configure your browser or another client to use the proxy server with its IP address and port (default is 3128)."}),"\n",(0,r.jsx)(n.li,{children:"Check if you can access the internet through your proxy."}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Tips for Secure Your Proxy:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Firewall rules"}),": Ensure that only intended users or IP addresses can connect to your proxy server. This can be achieved by setting up appropriate firewall rules."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Regular updates"}),": Keep your server and proxy software updated to ensure that you are protected against known vulnerabilities."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Monitoring and logging"}),": Monitor your proxy server for unusual activity and enable logging to keep track of the traffic passing through your proxy."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-jan-to-use-your-https-proxy",children:"Setting Up Jan to Use Your HTTPS Proxy"}),"\n",(0,r.jsx)(n.p,{children:"Once you have your HTTPS proxy server set up, you can configure Jan to use it."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Navigate to ",(0,r.jsx)(n.strong,{children:"Settings"})," > ",(0,r.jsx)(n.strong,{children:"Advanced Settings"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.strong,{children:"HTTPS Proxy"})," click the slider to enable."]}),"\n",(0,r.jsx)(n.li,{children:"Input your domain in the blank field."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ignore-ssl-certificate",children:"Ignore SSL Certificate"}),"\n",(0,r.jsx)(n.p,{children:"To Allow self-signed or unverified certificates, follow the steps below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate to the main dashboard."}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"gear icon (\u2699\ufe0f)"})," on the bottom left of your screen."]}),"\n",(0,r.jsxs)(n.li,{children:["Under the ",(0,r.jsx)(n.strong,{children:"Settings screen"}),", click the ",(0,r.jsx)(n.strong,{children:"Advanced Settings"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.strong,{children:"Ignore SSL Certificates"})," click the slider to enable."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"clear-logs",children:"Clear Logs"}),"\n",(0,r.jsx)(n.p,{children:"To clear all logs on your Jan app, follow the steps below:"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["This feature clears all the data in your ",(0,r.jsx)(n.strong,{children:"Jan Data Folder"}),"."]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate to the main dashboard."}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"gear icon (\u2699\ufe0f)"})," on the bottom left of your screen."]}),"\n",(0,r.jsxs)(n.li,{children:["Under the ",(0,r.jsx)(n.strong,{children:"Settings screen"}),", click the ",(0,r.jsx)(n.strong,{children:"Advanced Settings"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.strong,{children:"Clear Logs"})," click the the ",(0,r.jsx)(n.strong,{children:"Clear"})," button."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"reset-to-factory-default",children:"Reset To Factory Default"}),"\n",(0,r.jsx)(n.p,{children:"To reset the Jan app to its original state, follow the steps below:"}),"\n",(0,r.jsx)(n.admonition,{title:"Remember!",type:"danger",children:(0,r.jsx)(n.p,{children:"This irreversible action is only recommended if the application is corrupted."})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate to the main dashboard."}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"gear icon (\u2699\ufe0f)"})," on the bottom left of your screen."]}),"\n",(0,r.jsxs)(n.li,{children:["Under the ",(0,r.jsx)(n.strong,{children:"Settings screen"}),", click the ",(0,r.jsx)(n.strong,{children:"Advanced Settings"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["On the ",(0,r.jsx)(n.strong,{children:"Reset To Factory Default"})," click the the ",(0,r.jsx)(n.strong,{children:"Reset"})," button."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(96540),s=t(18215),i=t(23104),l=t(56347),o=t(205),a=t(57485),d=t(31682),c=t(89466);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,h]=j({queryString:t,groupId:s}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),f=(()=>{const e=d??p;return x({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=a.indexOf(n),s=o[t].value;s!==r&&(d(n),l(s))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:c,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function m(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function S(e){const n=(0,g.A)();return(0,v.jsx)(m,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);