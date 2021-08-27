// require('../api/database')
// const mongoose = require('mongoose')
// const Specie = mongoose.model('Specie')

// const fixSpecieUrls = async () => {
//   const species = await Specie.find()

//   for (const specie of species) {
//     specie.images = specie.images.map((image) => {
//       return {
//         url: image.url.replace('/species/species/', '/species/'),
//         thumb: image.thumb.replace('/species/species/', '/species/'),
//       }
//     })
//     console.log(specie.images)
//     await specie.save()
//   }
// }
// const fix = async () => {
//   await fixSpecieUrls()
//   process.exit()
// }

// fix()
