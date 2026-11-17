import type { BrandContent } from './types'

export const brandContent: BrandContent = {
  meta: {
    title: '品牌系统',
    description: 'RopeHuo / Strand：Rope + Huo 的个人品牌与设计系统。',
  },
  header: {
    index: '[04]',
    label: 'brand system',
    title: 'Strand',
    subtitle: 'RopeHuo / personal brand system / v1.0',
    intro:
      'RopeHuo 由两个母题组成：Rope（结构）和 Huo（能量）。Strand 是把两者渲染成同一套视觉语法的设计语言。',
  },
  manifesto: {
    zh: [
      '绳子不是装饰。',
      '它是一门把东西连住、提起、固定住的技术。',
      '一根纤维很弱。拧成股，才有力量。',
      '多股合在一起，才成为绳。',
      '打一个结，长度才变成支点。',
    ],
    en: [
      'Rope is not decoration.',
      'It is a technology for holding things together.',
      'A single fiber is weak. Twisted, it becomes a strand.',
      'Strands laid together become rope.',
      'A knot turns length into leverage.',
    ],
    note: '绳子负责承重。火负责照亮。',
  },
  duality: [
    {
      name: 'Rope',
      role: '结构',
      body: '连接、承重、打结、编接、收头。',
      keywords: ['连接', '承重', '结', '编接'],
    },
    {
      name: 'Huo',
      role: '能量',
      body: '余烬、火花、点亮、预热、信号。',
      keywords: ['余烬', '点亮', '信号'],
    },
    {
      name: 'Strand',
      role: '表达',
      body: '把两者渲染成同一套视觉语法。',
      keywords: ['线', '色', '字', '网格'],
    },
  ],
  ladder: [
    { layer: 'Fiber', zh: '纤维', meaning: '单项能力' },
    { layer: 'Strand', zh: '股', meaning: '一条实践线' },
    { layer: 'Rope', zh: '绳', meaning: '能独立交付的能力组合' },
    { layer: 'Knot', zh: '结', meaning: '一个项目 / 一次取舍' },
    { layer: 'Splice', zh: '编接', meaning: '协作与团队' },
    { layer: 'Whipping', zh: '绳头包扎', meaning: '文档、规范、脚手架' },
    { layer: 'Tension', zh: '张力', meaning: '工程质量' },
    { layer: 'Net', zh: '网', meaning: '平台 / 生态' },
    { layer: 'Fray', zh: '散股', meaning: '技术债 / 失维护' },
  ],
  logo: {
    wordmark: 'ropehuo',
    notes: [
      '一条连续的线 = Rope',
      '末端橙块 = 火点（Huo）',
      '无外框；需要容器时用纸色 / 墨色底板',
      '字标：ropehuo，小写等宽，-0.02em',
    ],
  },
  colors: [
    { token: '--c-bg', light: '#F3EFE6', dark: '#12110F', role: '页面底色 / 纸' },
    { token: '--c-panel', light: '#FAF7F0', dark: '#1A1815', role: '卡片 / 图版' },
    { token: '--c-ink', light: '#191713', dark: '#F2ECE2', role: '主文字 / 墨' },
    { token: '--c-muted', light: '#625B51', dark: '#A89F92', role: '正文次级' },
    { token: '--c-dim', light: '#746B5E', dark: '#8D8477', role: '标注 / 弱信息' },
    { token: '--c-line', light: '#DED6C8', dark: '#2D2923', role: '细线 / 1px' },
    { token: '--c-accent', light: '#D84A21', dark: '#FF6F47', role: '余烬橙 / 火点' },
    { token: '--c-night', light: '#1B1814', dark: '#0C0B0A', role: '深色图版' },
    { token: '--c-success', light: '#3F7A4F', dark: '#7FBF8C', role: '通过 / 状态' },
  ],
  type: [
    {
      name: 'Display',
      kind: 'display',
      sample: '写前端，也造会自己干活的 Agent',
      spec: 'Sans / 600 / -0.055em',
    },
    {
      name: 'Body',
      kind: 'body',
      sample: '把分散的系统、团队和想法，接成一条能承重的线，再把它点亮。',
      spec: 'Sans / 16px / 1.78',
    },
    {
      name: 'Mono',
      kind: 'mono',
      sample: 'FIG. 01 — THE LONG LINE / 2018—NOW',
      spec: 'Mono / 9–11px / 0.14em',
    },
  ],
  spacing: [
    { value: '4px' },
    { value: '8px' },
    { value: '12px' },
    { value: '16px' },
    { value: '24px' },
    { value: '32px' },
    { value: '48px' },
    { value: '64px' },
    { value: '96px' },
  ],
  voice: {
    dos: [
      '先写结构、证据、结果，再写它点亮了什么。',
      '项目页先回答「两端是什么」。',
      '用具体动作代替形容词。',
      '限制就写限制：v0 spike / 源码私有。',
    ],
    donts: [
      '少说赋能、闭环、打造。',
      '不写燃爆、颠覆、引爆。',
      '不把绳写成玄学。',
      '不拿火焰插画当科技感。',
    ],
  },
  usage: [
    '复制 brand/tokens.css，作为唯一颜色/字体来源。',
    '复用按钮、标签、区块头、图版和绳结线稿。',
    '每屏最多一个火点；先承重，再发光。',
  ],
  version: 'v1.0 / 2026-11',
}
