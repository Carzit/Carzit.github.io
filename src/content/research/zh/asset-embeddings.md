---
title: "中国市场中的时变资产嵌入"
authors: ["Zitong Cheng", "Xiaobin Liu", "Dashan Huang"]
venue: "Management Science"
year: 2025
status: "revision"
tags: ["表示学习", "自然语言处理", "资产定价", "BERT"]
links: []
featured: true
order: 1
---

本文将自然语言处理和表示学习方法应用于基金持仓数据中的金融资产建模。我们将机构投资组合类比为"文档"，股票类比为"词元"，采用Word2Vec、推荐系统和基于BERT的嵌入模型（AssetBERT）来捕捉跨资产关系和投资者行为模式。我们设计了季度微调工作流以应对时变动态：基础模型在历史数据上训练后，逐季度适应持仓数据，避免前视偏差，性能优于静态嵌入方法。上下文嵌入模型（AssetBERT）在估值准确性、收益率协动性和投资组合层面测试中，预测能力比传统公司特征模型高出15–25%。
