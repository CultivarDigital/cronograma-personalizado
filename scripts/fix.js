// require('../api/database')
// const path = require('path')
// const mongoose = require('mongoose')
// const Specie = mongoose.model('Specie')
// const especies = require('../data/especies.json')

// const joinSpecies = async () => {
//   const species = await Specie.find()

//   for (const especie of especies) {
//     const specie = species.find((s) => s.name === especie.nome)
//     if (specie) {
//       const img = {
//         url: '/api/uploads/images/' + especie.slug + '.png',
//         thumb: '/api/uploads/thumbs/' + especie.slug + '.png',
//       }
//       if (specie.images) {
//         specie.images = [img].concat(specie.images)
//       } else {
//         specie.images = [img]
//       }
//       console.log(specie.images)
//       await specie.save()
//     }
//   }
// }
// const fix = async () => {
//   await joinSpecies()
//   process.exit()
// }

// fix()
