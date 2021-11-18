import lune from 'lune'

const info = {
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
        description: 'Limpeza, Produção de matéria seca',
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
      { title: 'Podar', description: 'Brotação rápida' },
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
        description: 'Bambus, Madeiras para construção, Cabos para ferramentas',
      },
    ],
  },
}

const diffDates = (date1, date2) => {
  return (date2 - date1) / (1000 * 60 * 60 * 24)
}

const getInfo = (date) => {
  const moon = {}
  moon.calc = lune.phase(date)
  const recentPhases = lune.phase_hunt(date)
  const phase = moon.calc.phase * 100
  if (phase < 25) {
    moon.name = 'nova'
    moon.next_moon = diffDates(date, new Date(recentPhases.q1_date))
    if (phase < 12.5) {
      moon.icon = 'mdi-moon-new'
    } else {
      moon.icon = 'mdi-moon-waning-crescent'
    }
  } else if (phase < 50) {
    moon.name = 'crescente'
    moon.next_moon = diffDates(date, new Date(recentPhases.full_date))
    if (phase < 37.5) {
      moon.icon = 'mdi-moon-last-quarter'
    } else {
      moon.icon = 'mdi-moon-waning-gibbous'
    }
  } else if (phase < 75) {
    moon.name = 'cheia'
    moon.next_moon = diffDates(date, new Date(recentPhases.q3_date))
    if (phase < 62.5) {
      moon.icon = 'mdi-moon-full'
    } else {
      moon.icon = 'mdi-moon-waxing-gibbous'
    }
  } else {
    moon.name = 'minguante'
    moon.next_moon = diffDates(date, new Date(recentPhases.nextnew_date))
    if (phase < 82.5) {
      moon.icon = 'mdi-moon-first-quarter'
    } else {
      moon.icon = 'mdi-moon-waxing-crescent'
    }
  }

  moon.info = info[moon.name]
  return moon
}

export default {
  getInfo,
  info,
  diffDates,
}
