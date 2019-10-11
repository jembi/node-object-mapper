'use strict'

// This file should only contain functions that do manipulations on
// primitive data types

exports.primitives = {
  booleanFlip: function(val) {
    if (typeof val === 'boolean') {
      return !val
    }

    return null
  },
  booleanify: function(val) {
    // all other values will be converted to boolean by their truthy or falsy value
    // ie: 0, 0n, '', ``, "", NaN, and false are falsy and everything else including -1, {}, and [] are truthy
    return Boolean(val)
  }
}
