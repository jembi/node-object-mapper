'use strict'

// This file is purely used group all the different
// types of transformations into one object to be more
// robust against file changes and additions

const {arrays} = require('./arrays')
const {objects} = require('./objects')
const {codes} = require('./codes')
const {dates} = require('./dates')
const {primitives} = require('./primitives')
const {tests} = require('./tests')

const transform = {}

Object.assign(transform, arrays, objects, codes, dates, primitives)

if (process.env.NODE_ENV === 'test') {
  Object.assign(transform, tests)
}

module.exports = transform
