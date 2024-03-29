---
title: Comparing Performance - TensorRT-LLM and llama.cpp on Nvidia GPUs
description: This post compares the performance of TensorRT-LLM and llama.cpp on Nvidia GPUs, highlighting the trade-offs between speed and resource usage.
tags: [Nvidia, TensorRT-LLM, llama.cpp, 3090, 4090, "inference engine"]
unlisted: true
---

Jan now supports [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) to further accelerate model inference for users with Nvidia GPUs. Users with Windows & RTX GPUs can use it as an alternative to [llama.cpp](https://github.com/ggerganov/llama.cpp).

This post compares GGUF/llama.cpp vs. TensorRT/TRT-LLM on speed and resource requirements, for popular consumer Ada & Ampere architectures.

Checkout the [TensorRT-LLM Guide](/guides/engines/tensorrt-llm) for setup instructions and access our Model Hub for prebuilt TensorRT-LLM models:

- Mistral 7b
- TinyLlama-1.1b
- TinyJensen-1.1b 😂

:::tip

TensorRT-LLM is available in [v0.4.9+](https://github.com/janhq/jan/releases/tag/v0.4.9) through [Nitro](https://github.com/janhq/nitro-tensorrt-llm), but should be considered an experimental feature.

Feedback? Let us know on [Github](https://github.com/janhq/jan) or via Discord [#tensorrt-llm](https://discord.com/channels/1107178041848909847/1201832734704795688). We're here to help!

:::

## Detailed Performance Comparison

We were curious on how TensorRT-LLM performs against llama.cpp on consumer-grade GPUs. TensorRT-LLM has previously been shown by Nvidia to reach performance of up to [10,000 tokens/s](https://nvidia.github.io/TensorRT-LLM/blogs/H100vsA100.html) on datacenter-grade GPUs.

So as proud, self-proclaimed [GPU Poors](https://www.semianalysis.com/p/google-gemini-eats-the-world-gemini#the-gpu-poor), we tested both inference engines across our Ada and Ampere cards, the most popular architectures for consumers.

:::info

An interesting aside: Jan actually started out in June 2023 building on [FastTransformer](https://github.com/NVIDIA/FasterTransformer), the precursor library to TensorRT-LLM. TensorRT-LLM was released in September 2023, making it a very young library. We're excited to see it's roadmap develop!

:::

### How We Conducted the Tests

This analysis delves into the comparative performance of TensorRT-LLM and llama.cpp on Nvidia's high-end RTX 4090 and RTX 3090 GPUs, with a special note on the limitations when extending these findings to laptop GPUs like the RTX 4070. We aim to uncover how the distinct architectural enhancements and software implementations of these inference engines interact with the hardware capabilities, focusing on CUDA and Tensor Cores, memory usage, and the impact of system-wide optimizations such as XMP on RAM speed. Our objective is to provide users with a deep understanding of the trade-offs involved, enabling informed choices that align with their specific computational needs and hardware setups.

Our biggest takeaway: **TensorRT-LLM is up to 60% faster than llama.cpp on larger VRAMs** like the 4090s and 3090s.

|              | 4090 Desktop | 3090 Desktop | 4060 Laptop |
| ------------ | ------------ | ------------ | ----------- |
| TensorRT-LLM | ✅ 159t/s    | ✅ 140.27t/s | ❌ 19t/s    |
| llama.cpp    | 101.3t/s     | 90t/s        | 22t/s       |

- **Hardware Selection**: The choice of Nvidia RTX 4090 and RTX 3090 GPUs highlights the engines' behavior on top-tier consumer hardware. The RTX 4070 laptop GPU is also discussed to explore performance in constrained environments.

  | NVIDIA GPU                | VRAM Used (GB) | CUDA Cores | Tensor Cores | Memory Bus Width (bit) | Memory Bandwidth (GB/s) |
  | ------------------------- | -------------- | ---------- | ------------ | ---------------------- | ----------------------- |
  | RTX 4090 Desktop (Ada)    | 24             | 16,384     | 512          | 384                    | ~1000                   |
  | RTX 3090 Desktop (Ampere) | 24             | 10,496     | 328          | 384                    | 935.8                   |
  | RTX 4060 Laptop (Ada)     | 8              | 3,072      | 96           | 128                    | 272                     |

  Both desktop GPUs utilize PCIE 5.0, offering substantial bandwidth at 63.015 Gbps, in contrast to the RTX 4070 laptop's more limited capabilities due to power and thermal restrictions.

:::warning[Low-spec Machines?]

We focused on mid to high-end Nvidia GPUs for our tests, as TensorRT-LLM's performance enhancements are most apparent on these devices. For users with lower-spec machines, llama.cpp remains a reliable alternative.

TensorRT-LLM provides blazing fast performance at the cost of [memory usage](https://nvidia.github.io/TensorRT-LLM/memory.html). This means that the performance improvements only show up in higher-range GPUs with larger VRAMs.

We've found that [llama.cpp](https://github.com/ggerganov/llama.cpp) does an incredible job of democratizing inference to the [GPU Poor](https://www.semianalysis.com/p/google-gemini-eats-the-world-gemini#the-gpu-poor) with CPU-only or lower-range GPUs. Huge shout outs to the [llama.cpp maintainers](https://github.com/ggerganov/llama.cpp/graphs/contributors) and the [ggml.ai](https://ggml.ai/) team.

:::

- **Experiment Setup**:
  We ran the experiment using a standardized inference request in a sandboxed environment on the same machine:
  - Model: Mistral 7b model to run on both GGUF and TensorRT-LLM with quantizations at `INT4`.
  - We ran tests 5 times for each inference engine, on a baremetal PC with no other opened applications.
  - Each inference request was of `batch_size` 1 and `input_len` 2048, `output_len` 512 as a realistic test case
  - CPU and Memory usage were obtained from.... Windows Task Manager 😱
  - GPU usage was obtained from `nvidia-smi`

> TensorRT-LLM and llama.cpp Params: Benchmarking focused on both engines' latest configurations, highlighting the difference between llama.cpp's use of the open-source cuBLAS and TensorRT-LLM's proprietary optimizations.

#### llama.cpp Setup

- llama.cpp commit [15499eb](https://github.com/ggerganov/llama.cpp/commit/15499eb94227401bdc8875da6eb85c15d37068f7)
- We used `Mistral-7b-q4_k_m` in `GGUF` with `ngl` at `100` (`ngl` is the abbreviation of `Number of GPU Layers` with the range from `0` as no GPU acceleration to `100` as full on GPU)

#### TensorRT-LLM Setup

- TensorRT-LLM version [0.7.1](https://github.com/NVIDIA/TensorRT-LLM/releases/tag/v0.7.1) and build on Windows
- For TensorRT-LLM, we used `Mistral-7b-int4 AWQ`
- We ran TensorRT-LLM with `free_gpu_memory_fraction` to test it with the lowest VRAM consumption (performance may be affected)
- Note: We picked AWQ for TensorRT-LLM as a handicap as AWQ supposedly sacrifices quality for performance

#### Experiment Setup

## Results

### RTX-4090 Desktop

:::info[Hardware Details]

- CPU: Intel 13th series
- GPU: NVIDIA GPU 4090 (Ada - sm 89)
- RAM: 32GB
- OS: Windows 11 Pro

:::

Nvidia's RTX-4090 is their top-of-the-line consumer GPU, and retails for [approximately $2,000](https://www.amazon.com/rtx-4090/s?k=rtx+4090).

#### Mistral-7b int4

| Metrics              | GGUF (using CPU) | GGUF (using GPU) | TensorRT-LLM | Difference on GPU |
| -------------------- | ---------------- | ---------------- | ------------ | ----------------- |
| Throughput (token/s) | 14.0             | 99.69            | 166.9        | ✅ 57% faster     |
| VRAM Used (GB)       | 0                | 5.5              | 6.3          | 🤔 14% more       |
| RAM Used (GB)        | 0.611            | 0.54             | 0.42         | 🤯 20% less       |
| Disk Size (GB)       | 4.07             | 4.07             | 3.66         | 🤯 10% smaller    |

### RTX-3090 Desktop

:::info[Hardware Details]

- CPU: Intel 13th series
- GPU: NVIDIA GPU 3090 (Ampere - sm 86)
- RAM: 64GB
- OS: Windows 11 Pro

:::

#### Mistral-7b int4

| Metrics              | GGUF (using CPU) | GGUF (using GPU) | TensorRT-LLM | Difference on GPU |
| -------------------- | ---------------- | ---------------- | ------------ | ----------------- |
| Throughput (token/s) | 11.42            | 90               | 140.27       | ✅ 55% faster     |
| VRAM Used (GB)       | 0                | 6.0              | 6.8          | 🤔 13% more       |
| RAM Used (GB)        | 0.611            | 0.54             | 0.42         | 🤯 22% less       |
| Disk Size (GB)       | 4.07             | 4.07             | 3.66         | 🤯 10% smaller    |

### RTX-4070 Laptop with eGPU

:::info[Hardware Details]

- CPU: AMD Ryzen
- GPU: NVIDIA GPU 4070 (Ada - sm 89) on PCIE 5.0 and NVIDIA GPU 4090 (Ada - sm 89) on eGPU
- RAM: 64GB
- OS: Windows 11 Pro

:::

#### Mistral-7b int4 with NVIDIA GPU Laptop 4070 on PCIE

| Metrics              | GGUF (using CPU) | GGUF (using GPU) | TensorRT-LLM | Difference on GPU |
| -------------------- | ---------------- | ---------------- | ------------ | ----------------- |
| Throughput (token/s) |                  |                  |              |                   |
| VRAM Used (GB)       | 0                | 6.0              | 6.8          | 🤔 13% more       |
| RAM Used (GB)        | 0.611            | 0.54             | 0.42         | 🤯 22% less       |
| Disk Size (GB)       | 4.07             | 4.07             | 3.66         | 🤯 10% smaller    |

#### Mistral-7b int4 with NVIDIA GPU 4090 in eGPU via Thunderbolt 3

| Metrics              | GGUF (using CPU) | GGUF (using GPU) | TensorRT-LLM | Difference on GPU |
| -------------------- | ---------------- | ---------------- | ------------ | ----------------- |
| Throughput (token/s) |                  |                  |              |                   |
| VRAM Used (GB)       | 0                | 6.0              | 6.8          | 🤔 13% more       |
| RAM Used (GB)        | 0.611            | 0.54             | 0.42         | 🤯 22% less       |
| Disk Size (GB)       | 4.07             | 4.07             | 3.66         | 🤯 10% smaller    |

The NVIDIA GPU laptop compared to NVIDIA GPU on desktop is worse (metrics to prove) because of the thermal constraint and energy consumption (it's a good tradeoff for portability). The PCIe 5.0 speed is the same at 63.015 Gbp.

There is a way to extend laptop with GPU is eGPU (metrics to prove). Though it extends the capabilites, it also has performance issue because of the bandwidth in Thunderbolt 3.0 at 40Gbps.

## ROI comparison

- **Price**: The RTX 3090 is priced at approximately $1,440, whereas the RTX 4090 retails for around $2,000.
- **Throughput**: As previously discussed, TensorRT-LLM achieves a throughput of 159 tokens/s on the RTX 4090 and 140.27 tokens/s on the RTX 3090.

To evaluate ROI, we consider the cost per throughput unit (tokens/s) for each GPU:

- **Cost per Throughput Unit (CPT)**: Calculating the CPT provides insight into the efficiency of the investment in terms of performance gain per dollar spent.

### Resource Usage Comparison: TensorRT-LLM vs. llama.cpp

Resource efficiency is a critical component in assessing the overall value provided by each inference engine, influencing both short-term performance and long-term operational costs.

### ROI Analysis

To quantify ROI, we compare the cost per throughput unit with the resource usage efficiencies, providing a balanced view of performance versus investment.

- **RTX 4090**:

  - CPT for TensorRT-LLM: $2,000 / 166.9 tokens/s ≈ $11.98 per token/s
  - CPT for llama.cpp (GPU): $2,000 / 99.69 tokens/s ≈ $20.07 per token

- **RTX 4090**:

  - Cost per Throughput Unit for TensorRT-LLM: $\approx $11.98 per token/s
  - Cost per Throughput Unit for llama.cpp: $\approx $20.06 per token/s

- **RTX 3090**:
  - Cost per Throughput Unit for TensorRT-LLM: $\approx $10.27 per token/s
  - Cost per Throughput Unit for llama.cpp: $\approx $16.00 per token/s

#### ROI Insights

- **Performance vs. Cost**: The RTX 3090 demonstrates a lower cost per throughput unit for both TensorRT-LLM and llama.cpp compared to the RTX 4090, indicating a more cost-efficient performance for the investment. This suggests that while the RTX 4090 offers superior performance, the RTX 3090 provides better value for money, especially when using TensorRT-LLM.
- **TensorRT-LLM vs. llama.cpp**: Across both GPUs, TensorRT-LLM offers a lower cost per throughput unit compared to llama.cpp, highlighting its efficiency and optimization for Nvidia's latest hardware. This efficiency not only translates to faster inference speeds but also to a more favorable ROI, especially when considering the added benefits of lower RAM and disk space usage.

#### Resource Usage Considerations

- **VRAM and RAM Efficiency**: TensorRT-LLM's slightly higher VRAM requirement is offset by its substantial gains in throughput and reduced RAM and disk usage. For users prioritizing performance and resource efficiency, TensorRT-LLM presents a compelling choice, despite the initial higher hardware investment.
- **Long-Term Operational Costs**: The operational cost benefits from reduced RAM and disk usage by TensorRT-LLM, combined with its superior throughput, could translate into significant savings over time, further enhancing the ROI for users with the requisite hardware capabilities.

## Conclusion

We were surprised to discover that TensorRT-LLM uses less RAM, VRAM, and disk size while yielding faster TPS. i.e. On NVIDIA GeForce RTX and 7B model at INT4, TensorRT-LLM is ~55% faster than llama.cpp
[say more about this!]

?? [this sentence doesnt make sense] For popular 7B int4 models, NVIDIA GTX Geforce 4090s perform ~12% better compared to NVIDIA GTX Geforce 4090.

We also found out that the performance with TensorRT-LLM can increase around 15% if we enable [XMP](https://www.intel.com/content/www/us/en/gaming/extreme-memory-profile-xmp.html) in BIOS for RAM bus speed from 3600 to 5600. [say more about this?! why what is it]

**tl;dr: Users with larger VRAM should use TensorRT-LLM engine. Whereas, users with smaller cards should stick with llama.cpp, which seems to excel at CPU inference, in highly resource constrained environments.**
