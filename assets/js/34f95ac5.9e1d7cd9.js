"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8151],{96287:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=s(74848),t=s(28453);const i={title:"Benchmarking TensorRT-LLM vs. llama.cpp",description:"Jan has added support for the TensorRT-LLM Inference Engine, as an alternative to llama.cpp. We provide a performance benchmark that shows the head-to-head comparison of the two Inference Engine and model formats, with TensorRT-LLM providing better performance but consumes significantly more VRAM and RAM.",tags:["Nvidia","TensorRT-LLM","llama.cpp",3090,4090,"inference engine"],unlisted:!0},l=void 0,d={permalink:"/blog/2024/03/19/TensorRT-LLM",source:"@site/blog/2024-03-19-TensorRT-LLM.md",title:"Benchmarking TensorRT-LLM vs. llama.cpp",description:"Jan has added support for the TensorRT-LLM Inference Engine, as an alternative to llama.cpp. We provide a performance benchmark that shows the head-to-head comparison of the two Inference Engine and model formats, with TensorRT-LLM providing better performance but consumes significantly more VRAM and RAM.",date:"2024-03-19T00:00:00.000Z",formattedDate:"March 19, 2024",tags:[{label:"Nvidia",permalink:"/blog/tags/nvidia"},{label:"TensorRT-LLM",permalink:"/blog/tags/tensor-rt-llm"},{label:"llama.cpp",permalink:"/blog/tags/llama-cpp"},{label:"3090",permalink:"/blog/tags/3090"},{label:"4090",permalink:"/blog/tags/4090"},{label:"inference engine",permalink:"/blog/tags/inference-engine"}],readingTime:4.68,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Benchmarking TensorRT-LLM vs. llama.cpp",description:"Jan has added support for the TensorRT-LLM Inference Engine, as an alternative to llama.cpp. We provide a performance benchmark that shows the head-to-head comparison of the two Inference Engine and model formats, with TensorRT-LLM providing better performance but consumes significantly more VRAM and RAM.",tags:["Nvidia","TensorRT-LLM","llama.cpp","3090","4090","inference engine"],unlisted:!0},unlisted:!0},a={authorsImageUrls:[]},o=[{value:"Performance Benchmarks",id:"performance-benchmarks",level:2},{value:"Test Setup",id:"test-setup",level:3},{value:"llama.cpp Setup",id:"llamacpp-setup",level:4},{value:"TensorRT-LLM Setup",id:"tensorrt-llm-setup",level:4},{value:"Experiment Setup",id:"experiment-setup",level:4},{value:"Results",id:"results",level:2},{value:"RTX-4090 Desktop",id:"rtx-4090-desktop",level:3},{value:"Mistral-7b int4",id:"mistral-7b-int4",level:4},{value:"RTX-3090 Desktop",id:"rtx-3090-desktop",level:3},{value:"Mistral-7b int4",id:"mistral-7b-int4-1",level:4},{value:"RTX-4060 Laptop",id:"rtx-4060-laptop",level:3},{value:"Mistral-7b int4",id:"mistral-7b-int4-2",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Jan has added support ",(0,r.jsx)(n.a,{href:"https://github.com/NVIDIA/TensorRT-LLM",children:"TensorRT-LLM"})," as an alternative to the default ",(0,r.jsx)(n.a,{href:"https://github.com/ggerganov/llama.cpp",children:"llama.cpp"})," inference engine. TensorRT-LLM allows Nvidia GPU owners to run blazing fast LLM inference as a hardware-optimized LLM inference engine that compiles models to ",(0,r.jsx)(n.a,{href:"https://blogs.nvidia.com/blog/tensorrt-llm-windows-stable-diffusion-rtx/",children:"run extremely fast on Nvidia GPUs"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You can follow our ",(0,r.jsx)(n.a,{href:"/guides/providers/tensorrt-llm",children:"TensorRT-LLM Guide"})," to try it out today. We've also added a few TensorRT-LLM models to Jan's Model Hub for download:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mistral 7b"}),"\n",(0,r.jsx)(n.li,{children:"TinyLlama-1.1b"}),"\n",(0,r.jsx)(n.li,{children:"TinyJensen-1.1b \ud83d\ude02"}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["TensorRT-LLM support is available in ",(0,r.jsx)(n.a,{href:"https://github.com/janhq/jan/releases/tag/v0.4.9",children:"v0.4.9"}),", but should be considered an experimental feature."]}),(0,r.jsxs)(n.p,{children:["Please report bugs on ",(0,r.jsx)(n.a,{href:"https://github.com/janhq/jan",children:"Github"})," or on our Discord's ",(0,r.jsx)(n.a,{href:"https://discord.com/channels/1107178041848909847/1201832734704795688",children:"#tensorrt-llm"})," channel."]})]}),"\n",(0,r.jsx)(n.h2,{id:"performance-benchmarks",children:"Performance Benchmarks"}),"\n",(0,r.jsxs)(n.p,{children:["We were really curious to see how TensorRT-LLM would perform vs. llama.cpp on consumer-grade GPUs. TensorRT-LLM has previously been shown by Nvidia to reach performance of up to ",(0,r.jsx)(n.a,{href:"https://nvidia.github.io/TensorRT-LLM/blogs/H100vsA100.html",children:"10,000 tokens/s"})," on datacenter-grade GPUs. As most of Jan's users are proud card carrying members of the ",(0,r.jsx)(n.a,{href:"https://www.semianalysis.com/p/google-gemini-eats-the-world-gemini#the-gpu-poor",children:"GPU Poor"}),", we wanted to see how the two inference engine performed on the same hardware."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["An interesting aside: Jan actually started out in June 2023 building on ",(0,r.jsx)(n.a,{href:"https://github.com/NVIDIA/FasterTransformer",children:"FastTransformer"}),", the precursor library to TensorRT-LLM. TensorRT-LLM was released in September 2023, making it a very young library. We're excited to see it's roadmap develop!"]})}),"\n",(0,r.jsx)(n.h3,{id:"test-setup",children:"Test Setup"}),"\n",(0,r.jsx)(n.p,{children:"We picked 3 hardware platforms to run the test on, based on Jan's userbase's self-reported common hardware platforms."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"NVIDIA GPU"}),(0,r.jsx)(n.th,{children:"VRAM Used (GB)"}),(0,r.jsx)(n.th,{children:"CUDA Cores"}),(0,r.jsx)(n.th,{children:"Tensor Cores"}),(0,r.jsx)(n.th,{children:"Memory Bus Width (bit)"}),(0,r.jsx)(n.th,{children:"Memory Bandwidth (GB/s)"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RTX 4090 Desktop (Ada)"}),(0,r.jsx)(n.td,{children:"24"}),(0,r.jsx)(n.td,{children:"16,384"}),(0,r.jsx)(n.td,{children:"512"}),(0,r.jsx)(n.td,{children:"384"}),(0,r.jsx)(n.td,{children:"~1000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RTX 3090 Desktop (Ampere)"}),(0,r.jsx)(n.td,{children:"24"}),(0,r.jsx)(n.td,{children:"10,496"}),(0,r.jsx)(n.td,{children:"328"}),(0,r.jsx)(n.td,{children:"384"}),(0,r.jsx)(n.td,{children:"935.8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RTX 4060 Laptop (Ada)"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"3,072"}),(0,r.jsx)(n.td,{children:"96"}),(0,r.jsx)(n.td,{children:"128"}),(0,r.jsx)(n.td,{children:"272"})]})]})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Low-spec Machines?",type:"warning",children:[(0,r.jsx)(n.p,{children:"We didn't bother including low-spec machines: TensorRT-LLM is meant for performance, and simply doesn't work on lower grade Nvidia GPUs, or computers without GPUs."}),(0,r.jsxs)(n.p,{children:["TensorRT-LLM provides blazing fast performance at the cost of ",(0,r.jsx)(n.a,{href:"https://nvidia.github.io/TensorRT-LLM/memory.html",children:"memory usage"}),". This means that the performance improvements only show up in higher-range GPUs with larger VRAMs."]}),(0,r.jsxs)(n.p,{children:["We've found that ",(0,r.jsx)(n.a,{href:"https://github.com/ggerganov/llama.cpp",children:"llama.cpp"})," does an incredible job of democratizing inference to the ",(0,r.jsx)(n.a,{href:"https://www.semianalysis.com/p/google-gemini-eats-the-world-gemini#the-gpu-poor",children:"GPU Poor"})," with CPU-only or lower-range GPUs. Huge shout outs to the ",(0,r.jsx)(n.a,{href:"https://github.com/ggerganov/llama.cpp/graphs/contributors",children:"llama.cpp maintainers"})," and the ",(0,r.jsx)(n.a,{href:"https://ggml.ai/",children:"ggml.ai"})," team."]})]}),"\n",(0,r.jsx)(n.p,{children:"We chose the popular Mistral 7b model to run on both GGUF and TensorRT-LLM, picking comparable quantizations."}),"\n",(0,r.jsx)(n.h4,{id:"llamacpp-setup",children:"llama.cpp Setup"}),"\n",(0,r.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{children:["For llama.cpp, we used ",(0,r.jsx)(n.code,{children:"Mistral-7b-q4_k_m"})]}),"\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Fill in ",(0,r.jsx)(n.code,{children:"ngl"})," params, GPU offload etc"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"tensorrt-llm-setup",children:"TensorRT-LLM Setup"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For TensorRT-LLM, we used ",(0,r.jsx)(n.code,{children:"Mistral-7b-int4 AWQ"})]}),"\n",(0,r.jsxs)(n.li,{children:["We ran TensorRT-LLM with ",(0,r.jsx)(n.code,{children:"free_gpu_memory_fraction"})," to test it with the lowest VRAM consumption (performance may be affected)"]}),"\n",(0,r.jsx)(n.li,{children:"Note: We picked AWQ for TensorRT-LLM as a handicap as AWQ supposedly sacrifices performance for quality"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"experiment-setup",children:"Experiment Setup"}),"\n",(0,r.jsx)(n.p,{children:"We ran the experiment using a standardized inference request in a sandboxed environment on the same machine:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"We ran tests 5 times for each inference engine, on a baremetal PC with no other applications open"}),"\n",(0,r.jsxs)(n.li,{children:["Each inference request was of ",(0,r.jsx)(n.code,{children:"batch_size"})," 1 and ",(0,r.jsx)(n.code,{children:"input_len"})," 2048, ",(0,r.jsx)(n.code,{children:"output_len"})," 512 as a realistic test case"]}),"\n",(0,r.jsx)(n.li,{children:"CPU and Memory usage were obtained from.... Windows Task Manager \ud83d\ude31"}),"\n",(0,r.jsxs)(n.li,{children:["GPU usage was obtained from ",(0,r.jsx)(n.code,{children:"nvtop"}),", ",(0,r.jsx)(n.code,{children:"htop"}),", and ",(0,r.jsx)(n.code,{children:"nvidia-smi"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"results",children:"Results"}),"\n",(0,r.jsx)(n.p,{children:"Our biggest takeaway: TensorRT-LLM is faster than llama.cpp on 4090s and 3090s with larger VRAMs. However, on smaller GPUs (e.g. Laptop 4060 GPUs),"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"4090 Desktop"}),(0,r.jsx)(n.th,{children:"3090 Desktop"}),(0,r.jsx)(n.th,{children:"4060 Laptop"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TensorRT-LLM"}),(0,r.jsx)(n.td,{children:"\u2705 159t/s"}),(0,r.jsx)(n.td,{children:"\u2705 140.27t/s"}),(0,r.jsx)(n.td,{children:"\u274c 19t/s"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"llama.cpp"}),(0,r.jsx)(n.td,{children:"101.3t/s"}),(0,r.jsx)(n.td,{children:"90t/s"}),(0,r.jsx)(n.td,{children:"22t/s"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"rtx-4090-desktop",children:"RTX-4090 Desktop"}),"\n",(0,r.jsx)(n.admonition,{title:"Hardware Details",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CPU: Intel 13th series"}),"\n",(0,r.jsx)(n.li,{children:"GPU: NVIDIA GPU 4090 (Ampere - sm 86)"}),"\n",(0,r.jsx)(n.li,{children:"RAM: 32GB"}),"\n",(0,r.jsx)(n.li,{children:"OS: Windows 11 Pro on Proxmox"}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["Nvidia's RTX-4090 is their top-of-the-line consumer GPU, and retails for ",(0,r.jsx)(n.a,{href:"https://www.amazon.com/rtx-4090/s?k=rtx+4090",children:"approximately $2,000"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"mistral-7b-int4",children:"Mistral-7b int4"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Metrics"}),(0,r.jsx)(n.th,{children:"GGUF (using GPU)"}),(0,r.jsx)(n.th,{children:"TensorRT-LLM"}),(0,r.jsx)(n.th,{children:"Difference"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Throughput (token/s)"}),(0,r.jsx)(n.td,{children:"101.3"}),(0,r.jsx)(n.td,{children:"159"}),(0,r.jsx)(n.td,{children:"\u2705 57% faster"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VRAM Used (GB)"}),(0,r.jsx)(n.td,{children:"5.5"}),(0,r.jsx)(n.td,{children:"6.3"}),(0,r.jsx)(n.td,{children:"\ud83e\udd14 14% more"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM Used (GB)"}),(0,r.jsx)(n.td,{children:"0.54"}),(0,r.jsx)(n.td,{children:"0.42"}),(0,r.jsx)(n.td,{children:"\ud83e\udd2f 20% less"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Disk Size (GB)"}),(0,r.jsx)(n.td,{children:"4.07"}),(0,r.jsx)(n.td,{children:"3.66"}),(0,r.jsx)(n.td,{children:"\ud83e\udd2f 10% smaller"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"rtx-3090-desktop",children:"RTX-3090 Desktop"}),"\n",(0,r.jsx)(n.admonition,{title:"Hardware Details",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CPU: Intel 13th series"}),"\n",(0,r.jsx)(n.li,{children:"GPU: NVIDIA GPU 3090 (Ampere - sm 86)"}),"\n",(0,r.jsx)(n.li,{children:"RAM: 64GB"}),"\n",(0,r.jsx)(n.li,{children:"OS: Windows"}),"\n"]})}),"\n",(0,r.jsx)(n.h4,{id:"mistral-7b-int4-1",children:"Mistral-7b int4"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Metrics"}),(0,r.jsx)(n.th,{children:"GGUF (using GPU)"}),(0,r.jsx)(n.th,{children:"TensorRT-LLM"}),(0,r.jsx)(n.th,{children:"Difference"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Throughput (token/s)"}),(0,r.jsx)(n.td,{children:"90"}),(0,r.jsx)(n.td,{children:"\u2705 140.27"}),(0,r.jsx)(n.td,{children:"\u2705 55% faster"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VRAM Used (GB)"}),(0,r.jsx)(n.td,{children:"6.0"}),(0,r.jsx)(n.td,{children:"6.8"}),(0,r.jsx)(n.td,{children:"\ud83e\udd14 13% more"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM Used (GB)"}),(0,r.jsx)(n.td,{children:"0.54"}),(0,r.jsx)(n.td,{children:"0.42"}),(0,r.jsx)(n.td,{children:"\ud83e\udd2f 22% less"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Disk Size (GB)"}),(0,r.jsx)(n.td,{children:"4.07"}),(0,r.jsx)(n.td,{children:"3.66"}),(0,r.jsx)(n.td,{children:"\ud83e\udd2f 10% less"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"rtx-4060-laptop",children:"RTX-4060 Laptop"}),"\n",(0,r.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(n.li,{className:"task-list-item",children:[(0,r.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Dan to re-run perf tests and fill in details"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Hardware Details",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Manufacturer: Acer Nitro 16 Phenix"}),"\n",(0,r.jsx)(n.li,{children:"CPU: Ryzen 7000"}),"\n",(0,r.jsx)(n.li,{children:"RAM: 16GB"}),"\n",(0,r.jsx)(n.li,{children:"GPU: NVIDIA Laptop GPU 4060 (Ada)"}),"\n"]})}),"\n",(0,r.jsx)(n.h4,{id:"mistral-7b-int4-2",children:"Mistral-7b int4"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Metrics"}),(0,r.jsx)(n.th,{children:"GGUF (using the GPU)"}),(0,r.jsx)(n.th,{children:"TensorRT-LLM"}),(0,r.jsx)(n.th,{children:"Difference"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Throughput (token/s)"}),(0,r.jsx)(n.td,{children:"22"}),(0,r.jsx)(n.td,{children:"\u274c 19"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"VRAM Used (GB)"}),(0,r.jsx)(n.td,{children:"2.1"}),(0,r.jsx)(n.td,{children:"7.7"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM Used (GB)"}),(0,r.jsx)(n.td,{children:"0.3"}),(0,r.jsx)(n.td,{children:"13.5"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Disk Size (GB)"}),(0,r.jsx)(n.td,{children:"4.07"}),(0,r.jsx)(n.td,{children:"4.07"}),(0,r.jsx)(n.td,{})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);