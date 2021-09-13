const mongoose = require('mongoose')

const SpecieSchema = mongoose.Schema(
  {
    source: String,
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    scientific_name: {
      type: String,
      required: true,
    },
    family: String,
    popular_names: [String],
    categories: [String],
    description: String,
    images: [Object],
    climate: [String],
    origin: [String],
    height: [String],
    spacing: String,
    stratum: [String],
    cycle: [String],
    synonymy: [String],
    use: String,
    medicinal_use: Object,
    warnings: [String],
    planting_time: Object,
    planting_time_description: String,
    harvest_time: String,
    companion_species: [String],
    additional_fields: [Object],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
)

const schemaFields = Object.keys(SpecieSchema.tree)

SpecieSchema.set('toJSON', {
  transform(doc, ret, options) {
    const result = {}
    Object.keys(ret).forEach((key) => {
      if (schemaFields.includes(key)) {
        result[key] = ret[key]
      }
    })

    return result
  },
})
mongoose.model('Specie', SpecieSchema)
