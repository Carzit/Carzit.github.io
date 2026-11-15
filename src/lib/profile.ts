import type { Locale } from '@i18n/utils';

export interface CvEntry {
  // Left column: a period for dated entries, a category for skills.
  label: string;
  title: string;
  organization?: string;
  details?: string[];
}

export interface CvSection {
  heading: string;
  entries: CvEntry[];
}

export const CV: Record<Locale, CvSection[]> = {
  en: [
    {
      heading: 'Education',
      entries: [
        {
          label: '2026 – 2027',
          title: 'Master of Financial Engineering',
          organization: 'Risk Management Institute, National University of Singapore',
          details: [
            'Coursework: Financial Econometrics, Portfolio Theory and Investments, Stochastic Calculus and Quantitative Methods, Fixed Income.',
          ],
        },
        {
          label: '2022 – 2026',
          title: 'Bachelor of Economics in Finance, Minor in Statistics',
          organization: 'Lingnan College, Sun Yat-sen University',
          details: [
            'Thesis: VAE Probabilistic Factor Models and Asset Pricing (advisor: Jianhao Lin).',
            'Coursework: Stochastic Processes, Probability and Statistics, Linear Algebra, Differential Equations, Real Analysis, Machine Learning in Economics and Finance, Financial Engineering, Econometrics.',
          ],
        },
      ],
    },
    {
      heading: 'Research experience',
      entries: [
        {
          label: '2023 – 2026',
          title: 'Research group of Prof. Jianhao Lin',
          organization: 'Lingnan College, Sun Yat-sen University',
          details: ['Presented research progress at regular group meetings; wrote my undergraduate thesis under his supervision.'],
        },
        {
          label: 'Feb – Jul 2025',
          title: 'Research assistant to Prof. Xiaobin Liu',
          organization: 'Lingnan College, Sun Yat-sen University',
          details: ['Led methodology design and full implementation of “Do Asset Embeddings Need Complete Holdings? Lessons from China.”'],
        },
        {
          label: '2023 – 2024',
          title: 'Research assistant, MindDFT',
          organization: 'Science and Technology Innovation 2030 Program',
          details: ['Core developer migrating the DeepDFT scientific-computing model from PyTorch to MindSpore.'],
        },
      ],
    },
    {
      heading: 'Professional experience',
      entries: [
        {
          label: 'Aug – Oct 2025',
          title: 'Quantitative research intern',
          organization: 'Huatai Securities',
          details: ['Built a production pipeline for holdings-based asset embeddings and used it to study sector rotation and fund style drift.'],
        },
        {
          label: 'Jul – Sep 2024',
          title: 'Quantitative research intern',
          organization: 'Shenwan Hongyuan Group',
          details: ['Replicated and extended the FactorVAE model of Duan et al. (2022) for cross-sectional return prediction.'],
        },
      ],
    },
    {
      heading: 'Skills',
      entries: [
        { label: 'Programming', title: 'Python (PyTorch, TensorFlow, Pandas, NumPy, scikit-learn), SQL, Git' },
        { label: 'Data', title: 'WRDS (CRSP, Compustat), CSMAR, Wind' },
        { label: 'Languages', title: 'Mandarin (native), English (TOEFL 106)' },
      ],
    },
  ],
  zh: [
    {
      heading: '教育背景',
      entries: [
        {
          label: '2026 – 2027',
          title: '金融工程硕士',
          organization: '新加坡国立大学风险管理研究所',
          details: ['课程：金融计量经济学、投资组合理论与投资、随机分析与数量方法、固定收益。'],
        },
        {
          label: '2022 – 2026',
          title: '经济学学士（金融学），辅修统计学',
          organization: '中山大学岭南学院',
          details: [
            '毕业论文：VAE Probabilistic Factor Models and Asset Pricing（指导教师：林建浩）。',
            '课程：随机过程、概率论与数理统计、线性代数、微分方程、实分析、经济与金融中的机器学习、金融工程、计量经济学。',
          ],
        },
      ],
    },
    {
      heading: '研究经历',
      entries: [
        {
          label: '2023 – 2026',
          title: '林建浩教授课题组',
          organization: '中山大学岭南学院',
          details: ['定期在组会上汇报研究进展，并在林老师指导下完成本科毕业论文。'],
        },
        {
          label: '2025.02 – 2025.07',
          title: '刘晓彬老师研究助理',
          organization: '中山大学岭南学院',
          details: ['主导 “Do Asset Embeddings Need Complete Holdings? Lessons from China” 的方法设计与全部实现。'],
        },
        {
          label: '2023 – 2024',
          title: 'MindDFT 项目研究助理',
          organization: '科技创新 2030 重大项目',
          details: ['作为核心开发者，将科学计算模型 DeepDFT 从 PyTorch 迁移到 MindSpore。'],
        },
      ],
    },
    {
      heading: '实习经历',
      entries: [
        {
          label: '2025.08 – 2025.10',
          title: '量化研究实习生',
          organization: '华泰证券',
          details: ['搭建基于持仓的资产嵌入生产流程，并用它研究行业轮动和基金风格漂移。'],
        },
        {
          label: '2024.07 – 2024.09',
          title: '量化研究实习生',
          organization: '申万宏源集团',
          details: ['复现并扩展 Duan 等（2022）的 FactorVAE 模型，用于截面收益预测。'],
        },
      ],
    },
    {
      heading: '技能',
      entries: [
        { label: '编程', title: 'Python（PyTorch、TensorFlow、Pandas、NumPy、scikit-learn）、SQL、Git' },
        { label: '数据', title: 'WRDS（CRSP、Compustat）、CSMAR、Wind' },
        { label: '语言', title: '中文（母语）、英语（托福 106）' },
      ],
    },
  ],
};
