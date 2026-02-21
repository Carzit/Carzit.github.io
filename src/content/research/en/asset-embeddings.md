---
title: "Time-varying Asset Embeddings in China"
authors: ["Zitong Cheng", "Xiaobin Liu", "Dashan Huang"]
venue: "Management Science"
year: 2025
status: "revision"
tags: ["Representation Learning", "NLP", "Asset Pricing", "BERT"]
links: []
featured: true
order: 1
draft: true
---

This paper applies NLP and representation learning to model financial assets from mutual fund holdings data. We model institutional portfolios as "documents" and stocks as "tokens," applying Word2Vec, Recommender System, and BERT-based embedding models (AssetBERT) to capture cross-asset relationships and investor behavior patterns. A quarterly fine-tuning workflow is designed to address temporal dynamics: base models trained on historical data are adapted to each quarter's holdings without look-ahead bias, outperforming static embedding approaches. Contextual embeddings (AssetBERT) achieve 15–25% higher predictive power than traditional firm-characteristic models across valuation accuracy, return comovement, and portfolio-level tests.
