const menu = {
  nova: {
    title: 'Lua nova',
    description:
      'Nessa fase a seiva manifesta-se em maior quantidade no caule, em direção aos ramos',
    next_moon: 'quarto crescente',
    image: 'home-lua-nova.png',
    good_to: [
      { title: 'Colher', categories: ['Bulbosas', 'Raízes e Rizomas'] },
      {
        title: 'Podar',
        description: 'para limpeza e produção de matéria seca',
      },
    ],
  },
  crescente: {
    title: 'Lua crescente',
    description:
      'Nessa fase a seiva está presente em maior quantidade no caule, nos ramos e nas folhas',
    next_moon: 'lua cheia',
    image: 'home-lua-crescente.png',
    good_to: [
      {
        title: 'Plantar',
        categories: [
          'Frutas e Legumes',
          'Folhas e Flores',
          'Árvores Frutíferas',
        ],
      },
      { title: 'Podar', description: 'para brotação rápida' },
    ],
  },
  cheia: {
    title: 'Lua cheia',
    description:
      'Nessa fase a seiva manifesta-se em maior quantidade na copa da planta (folhas e flores)',
    next_moon: 'quarto minguante',
    image: 'home-lua-cheia.png',
    good_to: [
      {
        title: 'Colher',
        categories: ['Frutas e Legumes', 'Folhas e Flores'],
      },
    ],
  },
  minguante: {
    title: 'Lua minguante',
    description:
      'Nessa fase a planta absorve menos quantidade de seiva no caule, nas folhas e nos ramos',
    next_moon: 'lua nova',
    image: 'home-lua-minguante.png',
    good_to: [
      { title: 'Plantar', categories: ['Bulbosas', 'Raízes e Rizomas'] },
      {
        title: 'Colher',
        description:
          'bambus, madeiras para construção e cabos para ferramentas',
      },
    ],
  },
}

export default menu
