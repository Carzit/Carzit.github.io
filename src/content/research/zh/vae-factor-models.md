---
title: "VAE Probabilistic Factor Models and Asset Pricing"
authors: ["Zitong Cheng"]
status: "working-paper"
finding: "变分训练会把因子估计向先验均值收缩。样本外 R² 为 1.08%–1.30%，基准模型为 0.43%–0.93%。"
order: 2
---

我把 Gu、Kelly 和 Xiu（2021）条件自编码器中的因子网络改成概率形式，并以闭式解证明变分训练会把因子估计向先验均值收缩，收缩强度由噪声水平和 KL 权重决定。在 1957 至 2012 年的美国股票样本上，条件先验模型的样本外预测 R² 达到 1.08%–1.30%，基准模型为 0.43%–0.93%；多空组合夏普比率为 3.19–3.45，改进集中在低信噪比的环境中。
