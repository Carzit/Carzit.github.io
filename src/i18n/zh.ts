import type en from './en';

const zh: typeof en = {
  nav: {
    home: '首页',
    research: '研究',
    blog: '博客',
    cv: '简历',
  },
  home: {
    title: '程子桐的个人主页',
    name: '程子桐',
    otherName: 'Zitong Cheng',
    where: '新加坡国立大学风险管理研究所 · 金融工程硕士在读',
    lede: '我的研究方向是实证资产定价、金融人工智能和表示学习的计量经济学。',
  },
  map: {
    hint: '指向一只股票。',
    caption: '{n} 只 A 股的资产嵌入，2023 年第四季度。',
    rotate: '拖动可旋转。',
    view: '视图',
    highlight: '高亮',
    owner: ['非国企', '国企', '未标注所有制'],
    groups: ['国企', '沪市主板', '深市主板', '创业板', '科创板', '北交所'],
    groupPhrase: ['国企', '沪市主板股票', '深市主板股票', '创业板股票', '科创板股票', '北交所股票'],
    readout: '{code} · {what} · {k} 个近邻中 {n} 个是{group}',
  },
  research: {
    title: '研究',
    intro: '实证资产定价、金融人工智能、表示学习的计量经济学。',
    workingPapers: '工作论文',
    inProgress: '进行中的研究',
    with: '合作者：',
    abstract: '摘要',
    status: {
      'published': '已发表',
      'accepted': '已录用',
      'revision': '修改后重投',
      'under-review': '审稿中',
      'preprint': '预印本',
      'working-paper': '工作论文',
      'in-progress': '进行中',
    },
  },
  blog: {
    title: '博客',
    readMore: '阅读更多',
    noPostsYet: '暂无文章。',
    publishedOn: '发布于',
    updatedOn: '更新于',
    minRead: '分钟阅读',
    tableOfContents: '目录',
    backToBlog: '← 返回博客',
    prevPost: '← 上一篇',
    nextPost: '下一篇 →',
  },
  cv: {
    title: '个人简历',
    download: '下载 PDF',
    papers: '论文见',
  },
  common: {
    copyright: '© 2026 程子桐',
    updated: '更新于 2026 年 11 月',
    switchLanguage: '切换到英文',
    toggleTheme: '切换深色模式',
  },
};

export default zh;
