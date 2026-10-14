---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<div class="hero-card" id="intro" markdown="1">

<p class="eyebrow">Multimodal learning · Visual reasoning</p>
<h1 class="hero-title">Understanding &amp; improving<br><em>multimodal intelligence.</em></h1>

I am a **fourth-year Ph.D. student** in Computer Science at the **University of Georgia**, advised by Dr. Jin Sun and Dr. Ninghao Liu. My research centers on multimodal learning, vision-language models, and model interpretability, with the goal of building multimodal models that are more capable, reliable, and interpretable in real-world scenarios.

Prior to my Ph.D., I received my Master's degree from the National University of Singapore, where I was advised by Dr. Guillaume Sartoretti and worked on topics at the intersection of robotics and machine learning.

<div class="interests">
  <span class="tag">Multimodal Learning</span>
  <span class="tag">Vision-Language Models</span>
  <span class="tag">Reinforcement Learning</span>
  <span class="tag">Model Interpretability</span>
</div>

<div class="hero-actions"><a class="primary-link" href="#publications">Explore my research <span aria-hidden="true">↗</span></a><a href="mailto:ty45972@uga.edu">Get in touch <span aria-hidden="true">↗</span></a></div>
</div>

<span class="anchor" id="-news"></span>
<h2 class="section-heading" id="news"><span class="section-number">01</span> Latest news</h2>
<div class="timeline news" markdown="1">
- <span class="t-date">2026.10</span> Our open-source project [**AnyJev**](https://github.com/nokia-applied-research/AnyJev) has reached <span class="star-pill">★ ~1.3k GitHub stars</span> <span class="news-note">(Oct. 14, 2026)</span>! Read the [technical report](https://arxiv.org/abs/2610.00831).
- <span class="t-date">2026.08</span> Our preprint [**Self-Evolving Code-with-Image Reasoning**](https://arxiv.org/abs/2608.11292) is now available on arXiv.
- <span class="t-date">2026.05</span> Our paper *RSTR: Reducing SpatioTemporal Redundancy in Diffusion Transformers* was accepted to **ICML 2026** 🎉
- <span class="t-date">2026.02</span> Our paper *Common Inpainted Objects In-N-Out of Context* was accepted to **CVPR 2026** 🎉
- <span class="t-date">2025.05</span> Our paper *Concept-Centric Token Interpretation for Vector-Quantized Generative Models* was accepted to **ICML 2025** 🎉
- <span class="t-date">2024.11</span> Received the **Distinguished Paper Award** at **AMIA 2024** 🏆
</div>

<span class="anchor" id="-publications"></span>
<h2 class="section-heading" id="publications"><span class="section-number">02</span> Research &amp; publications</h2>
<div class="publication-toolbar"><p>* denotes equal contribution</p><div class="publication-filters" role="group" aria-label="Filter publications" hidden><button type="button" data-filter="all" aria-pressed="true">All work</button><button type="button" data-filter="paper" aria-pressed="false">Papers</button><button type="button" data-filter="report" aria-pressed="false">Reports</button></div></div>
<p class="sr-only" id="publication-status" aria-live="polite"></p>

<div class="pub pub-report" data-kind="report" markdown="1">
<span class="badge-venue v-report">Technical Report · 2026</span>

### [**AnyJev Technical Report**](https://arxiv.org/abs/2610.00831)

Jiamu Zhang, **Tianze Yang**, Yucheng Shi, Evan Chen, Zixiang Nie, Kelly Wan, Liangjie Hong, Ninghao Liu, Liang Wu  
*Technical Report, 2026*  
<span class="pub-links">[Paper](https://arxiv.org/abs/2610.00831) · [Code](https://github.com/nokia-applied-research/AnyJev)</span>
<span class="report-metric">★ ~1.3k GitHub stars <small>as of Oct. 14, 2026</small></span>
</div>

<div class="pub" data-kind="paper" markdown="1">
<span class="badge-venue v-review">arXiv 2026</span>

### [**Self-Evolving Code-with-Image Reasoning**](https://arxiv.org/abs/2608.11292)

**Tianze Yang**, Liang Wu, Ruitong Sun, Yucheng Shi, Yanqiao Wang, Mayank Darbari, Ninghao Liu, Jin Sun, Liangjie Hong  
*arXiv preprint arXiv:2608.11292, 2026*  
<span class="pub-links">[Paper](https://arxiv.org/abs/2608.11292)</span>
</div>

<div class="pub" data-kind="paper" markdown="1">
<span class="badge-venue v-review">Under Review</span>

### [**TRON: Targeted Rule-Verifiable Online Environments for Visual Reasoning RL**](https://tron-rl.github.io/)

**Tianze Yang\***, Yucheng Shi\*, Ruitong Sun, Jingyuan Huang, Ninghao Liu, Jin Sun  
<span class="pub-links">[Project Page](https://tron-rl.github.io/)</span>
</div>

<div class="pub" data-kind="paper" markdown="1">
<span class="badge-venue v-review">Under Review</span>

### [**Self-Improving Small Object Grounding in LVLMs**](https://groundvlm.github.io/)

**Tianze Yang**, Yucheng Shi, Ruitong Sun, Ninghao Liu, Jin Sun  
<span class="pub-links">[Project Page](https://groundvlm.github.io/)</span>
</div>

<div class="pub" data-kind="paper" markdown="1">
<span class="badge-venue v-icml">ICML 2026</span>

### **RSTR: Reducing SpatioTemporal Redundancy in Diffusion Transformers**

Ruitong Sun, **Tianze Yang**, Wei Niu, Jin Sun  
*International Conference on Machine Learning (ICML) 2026*
</div>

<div class="pub" data-kind="paper" markdown="1">
<span class="badge-venue v-cvpr">CVPR 2026</span>

### [**Common Inpainted Objects In-N-Out of Context**](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Common_Inpainted_Objects_In-N-Out_of_Context_CVPR_2026_paper.pdf)

**Tianze Yang\***, Tyson Jordan\*, Ninghao Liu, Jin Sun  
*IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2026*  
<span class="pub-links">[Project Page](https://co-in-co.github.io/)</span>
</div>

<div class="pub" data-kind="paper" markdown="1">
<span class="badge-venue v-icml">ICML 2025</span>

### [**Concept-Centric Token Interpretation for Vector-Quantized Generative Models**](https://arxiv.org/abs/2506.00698)

**Tianze Yang\***, Yucheng Shi\*, Mengnan Du, Xuansheng Wu, Qiaoyu Tan, Jin Sun, Ninghao Liu  
*International Conference on Machine Learning (ICML) 2025*
</div>

<div class="pub" data-kind="paper" markdown="1">
<span class="badge-venue v-bibm">BIBM 2025</span>

### [**SearchRAG: Can Search Engines Be Helpful for LLM-based Medical Question Answering?**](https://arxiv.org/pdf/2502.13233)

Yucheng Shi, **Tianze Yang**, Canyu Chen, Quanzheng Li, Tianming Liu, Xiang Li, Ninghao Liu  
*IEEE International Conference on Bioinformatics and Biomedicine (BIBM) 2025*
</div>

<div class="pub" data-kind="paper" markdown="1">
<span class="badge-venue v-amia">AMIA 2024</span>

### [**MKRAG: Medical Knowledge Retrieval Augmented Generation for Medical Question Answering**](https://pmc.ncbi.nlm.nih.gov/articles/PMC12099378/)

Yucheng Shi\*, Shaochen Xu\*, **Tianze Yang\***, Zhengliang Liu, Tianming Liu, Xiang Li, Ninghao Liu  
*American Medical Informatics Association Annual Symposium (AMIA) 2024* <span class="award">(Distinguished Paper Award)</span>
</div>

<div class="pub" data-kind="paper" markdown="1">
<span class="badge-venue v-icra">ICRA 2024</span>

### [**Alpha: Attention-based long-horizon pathfinding in highly-structured areas**](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10611301)

Chengyang He, **Tianze Yang**, Tanishq Duhan, Yutong Wang, Guillaume Sartoretti  
*IEEE International Conference on Robotics and Automation (ICRA) 2024*
</div>

<div class="pub" data-kind="paper" markdown="1">
<span class="badge-venue v-mrs">MRS 2023</span>

### [**Intent-based deep reinforcement learning for multi-agent informative path planning**](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10416797)

**Tianze Yang**, Yuhong Cao, Guillaume Sartoretti  
*International Symposium on Multi-Robot and Multi-Agent Systems (MRS) 2023*
</div>

<span class="anchor" id="-internships"></span>
<h2 class="section-heading" id="internships"><span class="section-number">03</span> Research experience</h2>
<div class="timeline" markdown="1">
- <span class="t-date">2026 Summer</span> **Research Intern** · Nokia · Sunnyvale, CA
</div>

<span class="anchor" id="-education"></span>
<h2 class="section-heading" id="education"><span class="section-number">04</span> Education</h2>
<div class="timeline" markdown="1">
- <span class="t-date">2023.08 – Present</span> **Ph.D. in Computer Science** · University of Georgia
- <span class="t-date">2021.08 – 2023.06</span> **M.Eng. in Mechanical Engineering** · National University of Singapore
- <span class="t-date">2016.09 – 2020.06</span> **B.Eng. in Mechanical Engineering** · Shandong University
</div>

<footer class="site-footer"><span>© {{ site.time | date: "%Y" }} Tianze Yang</span><a href="#top">Back to top ↑</a></footer>
