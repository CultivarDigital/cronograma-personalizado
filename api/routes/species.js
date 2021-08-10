const axios = require('axios')
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const slugify = require('slugify')
const { authenticated } = require('../config/auth')
const Specie = mongoose.model('Specie')

router.get('/', function (req, res) {
  const perPage = req.query.per_page || 100000
  const page = req.query.page || 1
  const query = {}
  if (req.query.search) {
    query.$or = [
      {
        name: { $regex: req.query.search, $options: 'i' },
      },
      {
        scientific_name: { $regex: req.query.search, $options: 'i' },
      },
      {
        popular_name: { $regex: req.query.search, $options: 'i' },
      },
    ]
  } else {
    if (req.query.cycle) {
      query.cycle = req.query.cycle
    }
    if (req.query.stratum) {
      query.stratum = req.query.stratum
    }
  }
  Specie.find(query, req.params.select)
    .sort(req.params.sort || 'name')
    .skip((page - 1) * perPage)
    .limit(perPage)
    .exec(function (err, species) {
      if (err) {
        res.status(422).send(err.message)
      } else {
        res.json(species)
      }
    })
})

router.get('/:id', function (req, res) {
  Specie.findOne({
    $or: [{ _id: req.params.id }, { slug: req.params.id }],
  }).exec(function (err, specie) {
    if (err) {
      res.status(422).send(err.message)
    } else {
      res.json(specie)
    }
  })
})

router.post('/', authenticated, function (req, res) {
  const newSpecie = new Specie(req.body)
  newSpecie.slug = slugify(newSpecie.name).toLowerCase()
  newSpecie.user = req.payload.id
  newSpecie.save(function (err, specie) {
    if (err) {
      res.status(422).send(err.message)
    } else {
      res.send(specie)
    }
  })
})

router.put('/:id', authenticated, function (req, res) {
  const params = req.body
  params.slug = slugify(params.name).toLowerCase()
  Specie.findOneAndUpdate(
    {
      $or: [{ _id: req.params.id }, { slug: req.params.id }],
    },
    {
      $set: params,
    },
    {
      upsert: true,
    },
    function (err, specie) {
      if (err) {
        res.status(422).send(err.message)
      } else {
        res.send(specie)
      }
    }
  )
})

router.delete('/:id', authenticated, function (req, res) {
  Specie.findOne({
    $or: [{ _id: req.params.id }, { slug: req.params.id }],
  }).exec(function (err, specie) {
    if (err) {
      res.status(422).send(err.message)
    } else {
      specie.remove()
      res.send(specie)
    }
  })
})

module.exports = router
