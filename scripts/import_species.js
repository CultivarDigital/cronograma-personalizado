const fs = require('fs')
require('../api/database')
const path = require('path')
const mongoose = require('mongoose')
const Specie = mongoose.model('Specie')

// const cheerio = require('cheerio')
// const axios = require('axios')
// const specieUrls = require('./urls.json')
const items = require('./species.json')

// const importLinks = async () => {
//   const url = 'https://www.jardineiro.net/plantas-de-a-a-z-por-nome-cientifico'
//   console.log('Importando: ' + url)
//   const resp = await axios.get(url)
//   const $ = cheerio.load(resp.data)
//   const urls = []
//   $('a').each((i, e) => {
//     const url = $(e).attr('href')
//     if (url && url.startsWith('https://www.jardineiro.net/plantas/')) {
//       urls.push(url)
//     }
//   })
//   if (urls.length) {
//     fs.writeFileSync('scripts/urls.json', JSON.stringify(urls))
//   }
//   return urls
// }

// const importSpecie = async (url) => {
//   console.log('Importando: ' + url)
//   const resp = await axios.get(url)
//   const $ = cheerio.load(resp.data)
//   const specie = { url, slug: path.basename(url).replace('.html', '') }
//   specie.name = $('h1.entry-title.post-title').text().split(' – ')[0]
//   specie.description = ''
//   $('div.pf-content > p').each((i, p) => {
//     specie.description += '<p>' + $(p).html() + '</p>'
//   })
//   specie.images = []
//   const image = $('#post_image').attr('src')
//   if (image) {
//     specie.images.push(image)
//   }
//   $('img.size-full').each((i, img) => {
//     specie.images.push($(img).attr('src'))
//   })
//   const info = {}
//   $('#custom_type_fields ul li').each((i, li) => {
//     const label = $(li).find('strong').text()
//     let value = $(li).find('em').text()
//     if (!value) {
//       const values = []
//       $(li)
//         .find('a')
//         .each((i, a) => {
//           values.push($(a).text())
//         })
//       if (values.length) {
//         value = values.join(', ')
//       }
//     }
//     if (!value) {
//       value = $(li)
//         .contents()
//         .filter(function () {
//           return this.type === 'text'
//         })
//         .text()
//     }
//     info[label] = value
//   })
//   specie.info = info

//   specie.medicinal = {}

//   $('#medicinal ul li').each((i, li) => {
//     specie.medicinal[$(li).find('strong').text()] = $(li)
//       .contents()
//       .filter(function () {
//         return this.type === 'text'
//       })
//       .text()
//   })
//   specie.alertas = []
//   $('#cuidado p').each((i, p) => {
//     specie.alertas.push($(p).text())
//   })

//   return specie
// }
const arr = (item) => {
  if (item) {
    if (item.includes(',')) {
      return item
        .split(',')
        .map((i) => i.trim())
        .filter((i) => i)
    } else {
      return [item.trim()]
    }
  }
  return []
}
const importSpecies = () => {
  // const urls = await importLinks()
  // const species = []
  // for (const url of specieUrls) {
  //   const specie = await importSpecie(url)
  //   console.log(specie)
  //   species.push(specie)
  // }
  // if (species.length) {
  //   fs.writeFileSync('scripts/species.json', JSON.stringify(species))
  // }

  // url
  // slug
  // name
  // description
  // images
  // info
  // medicinal
  // alertas
  // Nome Científico
  // Sinonímia
  // Nomes Populares
  // Família
  // Categoria
  // Clima
  // Origem
  // Altura
  // Luminosidade
  // Ciclo de Vida
  let images = ''
  for (const item of items) {
    const specie = new Specie()
    specie.source = item.url
    specie.slug = item.slug
    specie.name = item.name
    specie.family = item.info['Família:'].trim()
    specie.scientific_name = item.info['Nome Científico:'].trim()
    specie.popular_names = arr(item.info['Nomes Populares:'])
    specie.categories = arr(item.info['Categoria:'])
    specie.description = item.description
    specie.images = item.images.map((img) => {
      images += img + '\n'
      const filename = path.basename(img)
      return {
        url: '/api/uploads/images/' + filename,
        thumb: '/api/uploads/thumbs/' + filename,
      }
    })
    specie.climate = arr(item.info['Clima:'])
    specie.origin = arr(item.info['Origem:'])
    specie.height = arr(item.info['Altura:'])
    specie.luminosity = arr(item.info['Luminosidade:'])
    specie.cycle = arr(item.info['Ciclo de Vida:'])
    specie.synonymy = arr(item.info['Sinonímia:'])
    specie.medicinal_use = {}
    Object.keys(item.medicinal).forEach((k) => {
      specie.medicinal_use[k.replace(':', '').trim()] = arr(item.medicinal[k])
    })
    specie.warnings = []
    item.alertas.forEach((alerta) => {
      alerta
        .split('\n')
        .map((i) => i.trim())
        .filter((i) => i)
        .forEach((i) => {
          specie.warnings.push(i)
        })
    })
    // await specie.save()
  }
  fs.writeFileSync('api/uploads/images/files.txt  ', images)
  process.exit()
}

importSpecies()
