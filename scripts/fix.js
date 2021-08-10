require('../api/database')
const path = require('path')
const mongoose = require('mongoose')
const Specie = mongoose.model('Specie')

const generateImageObject = (url) => {
  const imagesUrl = '/api/uploads/images/'
  const thumbsUrl = '/api/uploads/thumbs/'

  const filename = path.basename(url)
  return {
    url: imagesUrl + filename,
    thumb: thumbsUrl + filename,
  }
}
const fixImages = async () => {
  const species = await Specie.find()
  for (const specie of species) {
    const images = [generateImageObject(specie.picture.url)]

    for (const picture of specie.pictures) {
      images.push(generateImageObject(picture))
    }
    console.log(images)
    specie.images = images
    specie.picture = null
    specie.pictures = null

    await specie.save()
  }
}
const fix = async () => {
  await fixImages()
  process.exit()
}

fix()
