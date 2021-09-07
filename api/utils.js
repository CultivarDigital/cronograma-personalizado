const slugify = require('slugify')

const getNames = (scientificName, qtdWords = 2) => {
  const str = JSON.parse(JSON.stringify(scientificName))
  return str
    .toLowerCase()
    .replace('’', ' ')
    .replace('-', ' ')
    .replace(' cf.', '')
    .replace(' sp.', '')
    .replace(' x ', '')
    .replace('(', ' ')
    .replace(')', ' ')
    .replace('.', ' ')
    .replace(/\s{2,}/g, ' ')
    .replace('.', ' ')
    .replace('-', ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .slice(0, qtdWords)
    .join(' ')
}

module.exports = {
  generateSlug(scientificName, qtdWords = 2) {
    return slugify(getNames(scientificName, qtdWords)).toLowerCase()
  },
}
