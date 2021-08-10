const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const SpecieSchema = mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    scientific_name: {
      type: String,
      required: true,
    },
    popular_name: [String],
    category: [String],
    description: String,
    source: String,
    images: [Object],
    climate: [String],
    origin: [String],
    height: [String],
    luminosity: [String],
    ciclo: [String],
    synonymy: [String],
    harvest_time: String,
    spacing: String,
    companion_species: [String],
    additional_fields: [Object],
    medicinal: Object,
    stratum: String,
    cycle: String,
    warning: String,
    user: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
)

mongoose.model('Specie', SpecieSchema)
