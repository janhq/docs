---
title: "Data is an invisible moat and OpenAI has it"
description: "Uncover the pivotal role of data ownership in training the next iteration of LLM."
slug: /data-is-a-moat
tags: [OpenAI has a moat, Catastrophic forgetting, ChatGPT]
authors:
    -   name: Rex Ha
        title: LLM Researcher & Content Writer
        url: https://github.com/hahuyhoang411
        image_url: https://avatars.githubusercontent.com/u/64120343?v=4
        email: rex@jan.ai
    -   name: Alan Dao
        title: AI Engineer
        url: https://github.com/tikikun
        image_url: https://avatars.githubusercontent.com/u/22268502?v=4
        email: alan@jan.ai
unlisted: true
categories: Reseach
---

In the crowded AI landscape, OpenAI's ChatGPT stands out, not just for its capabilities but for its unique access to vast, original datasets. This post explores the vital role of data in maintaining a competitive edge, focusing on OpenAI's strategic advantage through data ownership.

## Data: The Secret Weapon

OpenAI, with ChatGPT, has carved a distinct advantage. By harnessing user interactions, it gains invaluable insights into diverse use cases, enabling precise model refinements. The cornerstone of this advantage lies in the "Pretrained dataset." This treasure trove of data empowers OpenAI to cater to specific needs, ensuring sustained improvement and differentiation.

### The Significance of Original Data

Owning the original dataset tackles the critical issue of ["Catastrophic forgetting"](https://en.wikipedia.org/wiki/Catastrophic_interference) faced by Language Learning Models (LLMs). This phenomenon describes how LLMs lose hold of prior knowledge upon learning new information. Access to the foundational dataset allows for effective fine-tuning, balancing the introduction of new data with the retention of existing knowledge.

![Catastrophic forgetting](img/catastrophic-demo.png)

Figure 1. Demonstration of catastrophic forgetting problem

### Smoothing Distribution Shifts

The original dataset ensures smoother distribution shifts when introducing new information, as it embodies a comprehensive spectrum of prior knowledge. This continuity in knowledge transition helps in maintaining the robustness of the model against sudden changes, akin to providing a more gradual learning curve where the new information is incrementally integrated with the existing knowledge base.

This concept is supported by the [EleutherAI's research](https://arxiv.org/abs/2403.08763) highlighting the importance of how tasks are sequenced in the learning process, suggesting that introducing dissimilar tasks early on can expand the network's capacity for new information.

### Acting as a Noise Mask

The original data can serve as a form of noise masking, similar to techniques used in training [early computer vision models](https://arxiv.org/abs/1911.04252). This approach introduces a level of variability or ["noise"](https://arxiv.org/abs/2310.05914) during training, which can prevent the model from overfitting to the new dataset. By retaining a mix of old and new data, the model is exposed to a broader range of scenarios, enhancing its generalization capabilities and robustness across tasks.

### Illustrating Catastrophic Forgetting

Catastrophic forgetting can be visualized as a ball in a multidimensional landscape, where moving towards new knowledge risks losing grasp on the old. Original data acts as a map, guiding fine-tuning in a way that incorporates new information while safeguarding existing knowledge.

![Gradient decent](img/gradient-decent.gif)

Figure 2. [Gradient decent demonstration](https://en.wikipedia.org/wiki/Gradient_descent)

## Viable Solutions

Overcoming these challenges requires a balanced approach. One method involves inundating the model with extensive, quality data, allowing for comprehensive fine-tuning. While effective, this demands significant computational resources and the cost of gathering millions of top-rated GPT-4 and human reponses. Examples include [OpenChat](https://huggingface.co/openchat/openchat-3.5-0106) and [OpenHermes](https://huggingface.co/teknium/OpenHermes-2.5-Mistral-7B), which demonstrate the trade-offs between data quantity, quality, and computational demands.

## Conclusion

The ownership and strategic use of original data serve as an invisible moat. It not only enables the tackling of complex challenges like catastrophic forgetting but also provides a framework for continuous, targeted improvements. This foundational advantage underscores the critical importance of data in the ongoing evolution of LLMs.

## Reference
- [Catastrophic forgetting](https://arxiv.org/abs/2308.08747)
- [Simple and Scalable Strategies to Continually Pre-train Large Language Models](https://arxiv.org/abs/2403.08763)
- [Gradient descent](https://en.wikipedia.org/wiki/Gradient_descent)
- [Neftune](https://arxiv.org/abs/2310.05914)
- [Self-training with Noisy Student improves ImageNet classification](https://arxiv.org/abs/1911.04252)