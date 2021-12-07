const portfolios = [
  {
    id: 1,
    title: 'Modal Rakyat',
    description:
      'Investment Peer to Peer Landing that connects Lender & Borrower.',
    platform: 'Android - iOS',
    times: '2019 - 2021',
    tech: ['React Native'],
    links: [
      {
        playstore:
          'https://play.google.com/store/apps/details?id=com.modalrakyat.android'
      },
      {appstore: 'https://apps.apple.com/id/app/modal-rakyat/id1498413893'},
      {appgallery: 'https://appgallery.huawei.com/app/C102433621'}
    ],
    images: {
      banner: '/static/images/modalrakyat.png',
      previews: []
    },
    content: '/static/markdown/modalrakyat.md'
  },
  {
    id: 2,
    title: 'Warunggaib',
    description:
      'Marketplace for Antique Goods & Spiritual Services in Indonesia.',
    platform: 'Android & iOS',
    times: '2020',
    tech: ['React Native'],
    links: [
      {
        playstore:
          'https://play.google.com/store/apps/details?id=com.warunggaibbuyer'
      },
      {appstore: 'https://apps.apple.com/id/app/warunggaib/id1535055181'}
    ],
    images: {
      banner: '/static/images/warunggaib.png',
      previews: []
    },
    content: '/static/markdown/warunggaib.md'
  },
  {
    id: 3,
    title: 'Otuchat',
    description:
      'Messenger application with bonus feature like payment & transactions',
    platform: 'Android',
    times: '2019',
    tech: ['React Native'],
    links: [
      {
        web: 'https://apktada.com/app/com.eklanku.otuChat'
      }
    ],
    images: {
      banner: '/static/images/otuchat.png',
      previews: []
    },
    content: ''
  },
  {
    id: 4,
    title: 'NewsTime',
    description: 'News apps for search and read an articles.',
    platform: 'Android',
    times: '2019',
    tech: ['React Native'],
    links: [
      {
        github: 'https://github.com/RadiRS/news-app'
      }
    ],
    images: {
      banner: '/static/images/newstime.png',
      previews: []
    },
    content: ''
  }
];

export default portfolios;
