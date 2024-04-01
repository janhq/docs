---
title: About Jan
slug: /about
description: Jan is a desktop application that turns computers into AI computers.
keywords:
  [
    Jan,
    local AI,
    privacy focus,
    free and open source,
    private and offline,
    conversational AI,
    no-subscription fee,
    large language models,
    about Jan,
    desktop application,
    thinking machine,
  ]
---

Welcome to Jan, a platform that enables you to run self-hosted local AI. Jan provides an OpenAI-equivalent API server at localhost:1337 that can be used as a drop-in replacement with compatible apps.

With Jan, you can:

- Run open-source LLMs locally or connect to cloud AIs like ChatGPT or Google.
- Search the web and databases.
- Integrate AI with everyday tools to work on your behalf (with permission).
- Customize and add features with Extensions.

Jan is opinionated software about what AI should be.

## Principles

### Local-first

Jan prioritizes running models on your device, giving you freedom and control. This approach improves performance and reliability by processing data where it's generated.

### Privacy-focused

Jan respects your privacy. We can't see your data, you store your files. This ensures complete control and confidentiality of your information.

### User-owned

Jan is yours to shape. Being open-source, you have access to adjust, tinker with, and even run it offline. Ownership is entirely in your hands.

### Ethics-guided

Jan supports your independence. We don’t lock you into our ecosystem or charge unexpected fees. Our ethics ensure Jan serves you without conditions or constraints.

## Why do we exist?

> "I do not fear computers. I fear the lack of them." - Isaac Asimov

Jan was founded on the belief that AI should coexist with humans, not replace them. Our mission is to democratize AI access, ensuring everyone can easily utilize it with full ownership and control over their data, free from privacy concerns.

We are committed to creating open, local-first products that extend individual freedom, rejecting dark patterns and ecosystem lock-ins, and embracing an open-source ethos.

## What's different: Closed AIs vs. Jan

| Aspect               | Closed AIs                        | Jan                                         |
|----------------------|-----------------------------------|---------------------------------------------|
| Philosophy           | User monetization                 | User empowerment and privacy                |
| Your Role            | Consumer                          | Creator                                     |
| Customization        | Limited by platform               | Full customization to meet specific needs   |
| Approach             | Closed-source                     | Open-source (AGPLv3)                        |
| Privacy              | Questionable                      | Private, with enhanced data protection      |
| Self-Hosting         | Reliant on provider's infrastructure | Enables self-hosting for full control and independence |
| Ownership            | Owned by Big Tech                 | Ownership and local folder system           |
| Transparency         | "Black Box"                       | Fully transparent, open-source, and customizable |
| Data                 | Cloud-based                       | Local-first, with server capabilities       |
| Outage Resilience    | Potential data hostage            | Continues to work independently on your device |


## How to get it?

You can install and start using Jan in less than 5 minutes, from [jan.ai](https://jan.ai) or our [Github repo](https://github.com/janhq/jan).

## What license is the code under?

Jan is licensed under the [AGPLv3 License](https://github.com/janhq/jan/blob/main/LICENSE).

We happily accept pull requests, however, we do ask that you sign a [Contributor License Agreement](https://en.wikipedia.org/wiki/Contributor_License_Agreement) so that we have the right to relicense your contributions[^2].

## What was it built with?

[Jan](https://github.com/janhq/jan) is pragmatically built using `Typescript` at the application level and `C++` at the Inference level (which we have refactored into [Nitro](https://nitro.jan.ai)[^3]).

We follow [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) and currently support multiple frameworks and runtimes:

- A desktop client with [Electron](https://www.electronjs.org/)
- A headless server-mode with [Nodejs](https://nodejs.org/en)
- Planned support for mobile with [Capacitor](https://capacitorjs.com/)
- Planned support for Python runtime

Architecturally, we have made similar choices to the [Next.js Enterprise Javascript Stack](https://vercel.com/templates/next.js/nextjs-enterprise-boilerplate), which is a [battle-tested](https://nextjs.org/showcase/enterprise) framework for building enterprise-grade applications that scale.

## Join the team

Join us on this journey at Jan Labs, where we embrace open-source collaboration and transparency. Together, let's shape a future where Jan becomes an essential companion in the open-source community. Explore [careers](https://janai.bamboohr.com/careers) with us.

## Contact

Drop us a message in our [Discord](https://discord.gg/af6SaTdzpx) and we'll get back to you.

- `#general`: for general discussion
- `#get-help`: for bug reports and troubleshooting
- `#roadmap`: for feature requests and ideas

## Footnotes

[^1]: Credit to Obsidian's original website
[^2]: Credit to [Discourse's About Page](https://www.discourse.org/about)
[^3]: Credit to [Llama.cpp](https://github.com/ggerganov/llama.cpp), [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM), [vLLM](https://github.com/vllm-project/vllm), [LMDeploy](https://github.com/InternLM/lmdeploy) and more.