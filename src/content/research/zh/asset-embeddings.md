---
title: "Do Asset Embeddings Need Complete Holdings? Lessons from China"
authors: ["Zitong Cheng", "Dashan Huang", "Xiaobin Liu", "Tao Zeng"]
status: "revision"
statusLabel: "Management Science 修改后重投（小修）"
finding: "仅凭部分披露的机构持仓估计出的资产嵌入在 A 股依然有效，并且比公司特征更准确地识别国有企业。"
links:
  - label: "SSRN"
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7690818"
  - label: "数据（Zenodo）"
    url: "https://zenodo.org/records/20712455"
  - label: "代码（GitHub）"
    url: "https://github.com/Initial-Singularity/AssetEmbeddingsInChina"
order: 1
---

我们检验 Gabaix 等（2025）基于持仓的资产嵌入在中国 A 股市场是否成立。在这个市场中，只有机构持仓可得，披露往往不完整，卖空几乎不存在。我们采用预训练加微调的范式估计 Word2Vec 和 BERT，并用 Word2Vec 嵌入对 BERT 做热启动。结果显示，基于 BERT 的嵌入在高维度下的相对估值和收益联动检验中表现最好，在管理组合检验中则在所有维度下都最好；资产嵌入优于文本嵌入，也更贴近投资者需求。这些嵌入还捕捉到中国市场特有的特征：它们比公司特征更准确地识别国有企业，并且在 2024 年第一季度的国企价值重估行情中，由嵌入推断出的国有属性暴露包含了法定国企标签之外的收益信息。
