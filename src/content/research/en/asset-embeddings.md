---
title: "Do Asset Embeddings Need Complete Holdings? Lessons from China"
authors: ["Zitong Cheng", "Dashan Huang", "Xiaobin Liu", "Tao Zeng"]
status: "revision"
statusLabel: "R&R (minor revision), Management Science"
finding: "Embeddings estimated from partial institutional holdings still work in the A-share market, and identify state-owned enterprises more accurately than firm characteristics do."
links:
  - label: "SSRN"
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7690818"
  - label: "Data (Zenodo)"
    url: "https://zenodo.org/records/20712455"
  - label: "Code (GitHub)"
    url: "https://github.com/Initial-Singularity/AssetEmbeddingsInChina"
order: 1
---

We examine whether the holdings-based asset embeddings of Gabaix et al. (2025) work in China's A-share market, where only institutional holdings are available, disclosure is often partial, and short selling is negligible. Estimating Word2Vec and BERT with a pretrain-finetune paradigm and warm-starting BERT from Word2Vec embeddings, we find that BERT-based embeddings perform best on relative valuation and return comovement at high dimensions and on managed portfolios at every dimension, and that asset embeddings outperform text embeddings and align more closely with investor demand. The embeddings also capture China-specific features: they identify state-owned enterprises more accurately than firm characteristics, and their implied state exposures carry return information beyond the legal SOE label during the 2024Q1 SOE re-rating campaign.
