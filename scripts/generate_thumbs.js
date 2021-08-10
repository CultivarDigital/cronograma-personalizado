/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const generateThumbs = () => {
  const dir = path.join(__dirname, '../api/uploads/images/')
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(err)
    } else {
      files.forEach((file) => {
        const fileUrl = dir + file
        const thumbUrl = fileUrl.replace('/images/', '/thumbs/')
        console.log(fileUrl)
        sharp(fileUrl)
          .resize({
            width: 64,
            height: 64,
            withoutEnlargement: true,
            fit: sharp.fit.cover,
          })
          .toFile(thumbUrl, function (err) {
            if (!err) {
              console.log('Generated: ' + thumbUrl)
            }
          })
      })
    }
  })
}
generateThumbs()
