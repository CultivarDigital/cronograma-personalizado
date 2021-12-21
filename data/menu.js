const menu = {
  Ferramentas: [
    // {
    //   title: 'O que plantar esse mês?',
    //   description: 'Saiba quais espécies plantar em cada mês na sua região',
    //   icon: 'mdi-calendar',
    //   to: '/ferramentas/o-que-plantar-esse-mes',
    // },
    // {
    //   title: 'Catálogo de espécies',
    //   description: 'Confira a lista das espécies mais cultivadas no Brasil',
    //   icon: 'mdi-view-list',
    //   to: '/ferramentas/catalogo-de-especies',
    // },
    {
      title: 'FAQ - Perguntas frequentes',
      description: 'Encontre aqui as respostas das perguntas mais comuns',
      icon: 'mdi-frequently-asked-questions',
      to: '/faq',
    },
    // {
    //   title: 'Previsão do tempo',
    //   description: 'Confira a previsão do tempo para sua região',
    //   icon: 'mdi-weather-cloudy-clock',
    //   to: '/previsao-do-tempo',
    // },
    {
      title: 'Chat',
      description:
        'Espaço para tirar dúvidas, estabelecer conexões e trocar ideias sobre nosso dia a dia no cultivo',
      icon: 'mdi-forum',
      to: '/chat',
    },
  ],
  // Guias: [
  //   {
  //     title: 'Guia de cultivo',
  //     description:
  //       'Aprenda a plantar, colher e cuidar da sua horta de forma simples e prática',
  //     icon: 'mdi-sprout-outline',
  //     to: '/guias/guia-de-cultivo',
  //   },
  //   {
  //     title: 'Guia de compostagem',
  //     description:
  //       'Aprenda a transformar o lixo orgânico da sua casa em adubo para suas plantinhas',
  //     icon: 'mdi-recycle',
  //     to: '/guias/guia-de-compostagem',
  //   },
  // ],
  App: [
    // {
    //   title: 'Lojinha',
    //   description:
    //     'Aqui você encontra tudo o que precisa para sua horta ou jardim',
    //   icon: 'mdi-cart',
    //   to: '/lojinha',
    // },
    // {
    //   title: 'Colabore',
    //   description: 'Colabore',
    //   icon: 'mdi-hand-heart',
    //   to: '/colabore',
    // },
    {
      title: 'Sobre',
      description: 'Sobre',
      icon: 'mdi-information',
      to: '/sobre',
    },
    {
      title: 'Clientes',
      description: 'Lista de clientes',
      icon: 'mdi-account-group-outline',
      to: '/clientes',
      role: 'admin',
    },
    // {
    //   title: 'Comentários',
    //   description: 'Lista de comentários dos clientes',
    //   icon: 'mdi-comment-search-outline',
    //   to: '/comentarios',
    //   role: 'admin',
    // },
  ],
}

export default menu
