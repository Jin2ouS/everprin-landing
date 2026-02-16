/**
 * Everprin landing page copy.
 * Edit this file to change headlines, body text, and links.
 */

export const copy = {
  seo: {
    title: '시간을 먼저 설계하는 투자 사고 프레임 | Everprin',
    description:
      'Everprin은 수익을 약속하지 않습니다. 대신 시간을 먼저 설계하는 사고와 장기적 투자 구조를 정리합니다. 판단을 대신하지 않고 기준을 설명하는 교육·기록 브랜드입니다.',
    ogImage: '/og-everprin.png', // placeholder; replace with real image path
  },

  nav: {
    brand: 'Everprin',
    links: [
      { label: '브랜드', href: '#brand' },
      { label: '철학', href: '#philosophy' },
      { label: '시경자', href: '#sigyeongja' },
      { label: '역할', href: '#role' },
      { label: 'mntfree', href: '#mntfree' },
      { label: '시작하기', href: '#cta' },
    ],
  },

  hero: {
    headline: '시간을 먼저 설계하는 사고, Everprin',
    subheadline:
      '수익을 약속하지 않습니다. 판단을 대신하지 않습니다. 대신, 기준과 구조를 함께 정리합니다.',
    disclaimers: [
      '수익·손실을 보장하거나 예측하지 않습니다.',
      '종목·상품 추천 및 투자 판단을 대신하지 않습니다.',
      '교육·기록·사고 프레임에 초점을 둡니다.',
    ],
  },

  brand: {
    title: 'Everprin이 하는 일',
    intro:
      'Everprin은 교육·기록 브랜드로, 사고 프레임과 기준(standards)을 다룹니다.',
    does: [
      '사고 프레임과 기준을 정리하고 설명합니다.',
      '"왜"를 함께 짚고, 구조를 이해하도록 돕습니다.',
      '교육·기록 콘텐츠로 생각을 정리합니다.',
    ],
    doesNot: [
      '수익을 약속하거나 보장하지 않습니다.',
      '투자 판단을 대신하지 않습니다.',
      '종목·상품을 추천하지 않습니다.',
    ],
    doesLabel: '하는 일',
    doesNotLabel: '하지 않는 일',
  },

  philosophy: {
    title: '철학',
    subtitle: '시간 우선, 구조 우선, 지속 가능성',
    pillars: [
      {
        title: '돈보다 시간을 먼저 설계',
        description:
          '시간을 먼저 설계하는 사람(시경자)이 됩니다. 돈을 쫓기보다 자신의 시간 구조를 설계하고, 그 위에 수익 구조를 올립니다.',
      },
      {
        title: '결과보다 구조',
        description:
          '단기 결과보다 구조와 기준을 세우는 데 초점을 둡니다. 구조가 잡히면 판단과 실행이 명확해집니다.',
      },
      {
        title: '단기 수익보다 지속 가능성',
        description:
          '단기 수익보다 지속 가능한 사고와 습관, 시스템을 지향합니다.',
      },
    ],
  },

  sigyeongja: {
    title: '시경자',
    definition:
      '시경자(時間經者)는 시간을 먼저 설계하는 사람입니다. 돈을 쫓기보다 자신의 시간 구조를 설계하고 그 위에 수익 구조를 올립니다.',
    whatChanges:
      '시간을 먼저 설계하면, 무엇에 쓸 시간인지·얼마나 쓸지가 먼저 정해집니다. 그 다음에 돈과 수익 구조를 그 위에 얹는 방식으로 생각을 정리할 수 있습니다.',
  },

  role: {
    title: 'Everprin의 역할',
    subtitle: '"왜"와 기준, 기록',
    points: [
      {
        title: '왜(Why)',
        description: '판단을 대신하지 않고, 기준과 배경을 설명해 스스로 판단할 수 있게 돕습니다.',
      },
      {
        title: '프레임',
        description: '사고 프레임과 구조를 정리해, 반복해서 참고할 수 있는 형태로 제공합니다.',
      },
      {
        title: '기록',
        description: '생각과 기준을 기록·정리하는 방식을 제안하고, 교육·기록 콘텐츠로 공유합니다.',
      },
    ],
  },

  mntfree: {
    title: 'Everprin과 mntfree',
    subtitle: '생각과 실행의 분리',
    flow: 'Everprin → 기준 / mntfree → 실행',
    explanation:
      'Everprin은 기준·사고·교육에, mntfree는 실무 도구와 실행 가능한 정보에 초점을 둡니다. mntfree는 유료 서비스일 수 있으며, 실제 투자·실행 단계에서 쓰는 도구와 정보를 다룹니다. 먼저 Everprin에서 "왜"와 기준을 정리한 뒤, 필요하면 mntfree에서 도구와 정보를 활용하시면 됩니다.',
    mntfreeLink: 'https://mntfree.com',
    mntfreeLabel: 'mntfree 바로가기',
  },

  cta: {
    title: '시작하기',
    items: [
      {
        label: '기준과 사고 프레임 읽기',
        href: '/framework',
        external: false,
      },
      {
        label: '기록 보기',
        href: '/notes',
        external: false,
      },
      {
        label: '실무 도구는 mntfree로',
        href: 'https://mntfree.com',
        external: true,
      },
    ],
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Everprin. All rights reserved.`,
    subline: '시간을 먼저 설계하는 사고, Everprin',
  },
} as const;
