// require('../api/database')
// const mongoose = require('mongoose')
// const { generateSlug } = require('../api/utils')
// const Specie = mongoose.model('Specie')

// const fixSpecieUrls = async () => {
//   const species = await Specie.find()

//   for (const specie of species) {
//     specie.stratum = specie.luminosity
//       .filter((l) => l)
//       .map((luminosity) => {
//         if (
//           luminosity === 'Luz' ||
//           luminosity === 'Luz Filtrada' ||
//           luminosity === 'Meia Sombra'
//         ) {
//           return 'Médio (Meia sombra)'
//         } else if (luminosity === 'Sombra' || luminosity === 'Luz Difusa') {
//           return 'Baixo (Sombra)'
//         } else {
//           return 'Alto (Sol pleno)'
//         }
//       })
//     specie.stratum = [...new Set(specie.stratum)]

//     specie.cycle = specie.cycle
//       .filter((l) => l)
//       .map((cycle) => {
//         if (cycle === 'Anual') {
//           return 'Curto (Anual)'
//         } else if (cycle === 'Bienal') {
//           return 'Médio (Bienal)'
//         } else {
//           return 'Longo (Perene)'
//         }
//       })
//     specie.cycle = [...new Set(specie.cycle)]

//     specie.slug =
//       generateSlug(specie.name, 4) + '-' + generateSlug(specie.scientific_name)
//     await specie.save()
//   }
// }
// const fix = async () => {
//   await fixSpecieUrls()
//   process.exit()
// }

// fix()
