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

<div class="hero-card" markdown="1">

I am a **third-year Ph.D. student** in Computer Science at the **University of Georgia**, advised by Dr. Jin Sun and Dr. Ninghao Liu. My research centers on multimodal learning, vision-language models, and model interpretability, with the goal of building multimodal models that are more capable, reliable, and interpretable in real-world scenarios.

Prior to my Ph.D., I received my Master's degree from the National University of Singapore, where I was advised by Dr. Guillaume Sartoretti and worked on topics at the intersection of robotics and machine learning.

<div class="interests">
  <span class="tag">Multimodal Learning</span>
  <span class="tag">Vision-Language Models</span>
  <span class="tag">Reinforcement Learning</span>
  <span class="tag">Model Interpretability</span>
</div>

</div>

# 🔥 News
<div class="timeline news" markdown="1">
- <span class="t-date">2026.05</span> Our paper *RSTR: Reducing SpatioTemporal Redundancy in Diffusion Transformers* was accepted to **ICML 2026** 🎉
- <span class="t-date">2026.02</span> Our paper *Common Inpainted Objects In-N-Out of Context* was accepted to **CVPR 2026** 🎉
- <span class="t-date">2025.05</span> Our paper *Concept-Centric Token Interpretation for Vector-Quantized Generative Models* was accepted to **ICML 2025** 🎉
- <span class="t-date">2024.11</span> Received the **Distinguished Paper Award** at **AMIA 2024** 🏆
</div>

# 📝 Publications 
<sub><em>\* denotes equal contribution</em></sub>

<div class="pub" markdown="1">
<span class="badge-venue v-review">Under Review</span>

[**TRON: Targeted Rule-Verifiable Online Environments for Visual Reasoning RL**](https://tron-rl.github.io/)  
**Tianze Yang\***, Yucheng Shi\*, Ruitong Sun, Jingyuan Huang, Ninghao Liu, Jin Sun  
<span class="pub-links">[Project Page](https://tron-rl.github.io/)</span>
</div>

<div class="pub" markdown="1">
<span class="badge-venue v-review">Under Review</span>

[**Self-Improving Small Object Grounding in LVLMs**](https://groundvlm.github.io/)  
**Tianze Yang**, Yucheng Shi, Ruitong Sun, Ninghao Liu, Jin Sun  
<span class="pub-links">[Project Page](https://groundvlm.github.io/)</span>
</div>

<div class="pub" markdown="1">
<span class="badge-venue v-icml">ICML 2026</span>

**RSTR: Reducing SpatioTemporal Redundancy in Diffusion Transformers**  
Ruitong Sun, **Tianze Yang**, Wei Niu, Jin Sun  
*International Conference on Machine Learning (ICML) 2026*
</div>

<div class="pub" markdown="1">
<span class="badge-venue v-cvpr">CVPR 2026</span>

[**Common Inpainted Objects In-N-Out of Context**](https://openaccess.thecvf.com/content/CVPR2026/papers/Yang_Common_Inpainted_Objects_In-N-Out_of_Context_CVPR_2026_paper.pdf)  
**Tianze Yang\***, Tyson Jordan\*, Ninghao Liu, Jin Sun  
*IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2026*  
<span class="pub-links">[Project Page](https://co-in-co.github.io/)</span>
</div>

<div class="pub" markdown="1">
<span class="badge-venue v-icml">ICML 2025</span>

[**Concept-Centric Token Interpretation for Vector-Quantized Generative Models**](https://arxiv.org/abs/2506.00698)  
**Tianze Yang\***, Yucheng Shi\*, Mengnan Du, Xuansheng Wu, Qiaoyu Tan, Jin Sun, Ninghao Liu  
*International Conference on Machine Learning (ICML) 2025*
</div>

<div class="pub" markdown="1">
<span class="badge-venue v-bibm">BIBM 2025</span>

[**SearchRAG: Can Search Engines Be Helpful for LLM-based Medical Question Answering?**](https://arxiv.org/pdf/2502.13233)  
Yucheng Shi, **Tianze Yang**, Canyu Chen, Quanzheng Li, Tianming Liu, Xiang Li, Ninghao Liu  
*IEEE International Conference on Bioinformatics and Biomedicine (BIBM) 2025*
</div>

<div class="pub" markdown="1">
<span class="badge-venue v-amia">AMIA 2024</span>

[**MKRAG: Medical Knowledge Retrieval Augmented Generation for Medical Question Answering**](https://pmc.ncbi.nlm.nih.gov/articles/PMC12099378/)  
Yucheng Shi\*, Shaochen Xu\*, **Tianze Yang\***, Zhengliang Liu, Tianming Liu, Xiang Li, Ninghao Liu  
*American Medical Informatics Association Annual Symposium (AMIA) 2024* <span class="award">(Distinguished Paper Award)</span>
</div>

<div class="pub" markdown="1">
<span class="badge-venue v-icra">ICRA 2024</span>

[**Alpha: Attention-based long-horizon pathfinding in highly-structured areas**](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10611301)  
Chengyang He, **Tianze Yang**, Tanishq Duhan, Yutong Wang, Guillaume Sartoretti  
*IEEE International Conference on Robotics and Automation (ICRA) 2024*
</div>

<div class="pub" markdown="1">
<span class="badge-venue v-mrs">MRS 2023</span>

[**Intent-based deep reinforcement learning for multi-agent informative path planning**](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10416797)  
**Tianze Yang**, Yuhong Cao, Guillaume Sartoretti  
*International Symposium on Multi-Robot and Multi-Agent Systems (MRS) 2023*
</div>

[//]: # ()
[//]: # (<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>)

[//]: # (<div class='paper-box-text' markdown="1">)

[//]: # ()
[//]: # ([Deep Residual Learning for Image Recognition]&#40;https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf&#41;)

[//]: # ()
[//]: # (**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun)

[//]: # ()
[//]: # ([**Project**]&#40;https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC&#41; <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>)

[//]: # (- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

[//]: # (</div>)

[//]: # (</div>)

[//]: # ()
[//]: # (- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet]&#40;https://github.com&#41;, A, B, C, **CVPR 2020**)

[//]: # (# 🎖 Honors and Awards)

[//]: # (- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

[//]: # (- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

# 💼 Internships
<div class="timeline" markdown="1">
- <span class="t-date">2026 Summer</span> **Research Intern** · Nokia · Sunnyvale, CA
</div>

# 🎓 Education
<div class="timeline" markdown="1">
- <span class="t-date">2023.08 – Present</span> **Ph.D. in Computer Science** · University of Georgia
- <span class="t-date">2021.08 – 2023.06</span> **M.Eng. in Mechanical Engineering** · National University of Singapore
- <span class="t-date">2016.09 – 2020.06</span> **B.Eng. in Mechanical Engineering** · Shandong University
</div>

[//]: # (# 💬 Invited Talks)

[//]: # (- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

[//]: # (- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]]&#40;https://github.com/&#41;)

[//]: # (# 💻 Internships)

[//]: # (- *2019.05 - 2020.02*, [Lorem]&#40;https://github.com/&#41;, China.)

<div class="site-footer">
  © Tianze Yang · Built with <a href="https://jekyllrb.com/" target="_blank" rel="noopener">Jekyll</a>
</div>