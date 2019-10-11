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
    if (val === 'false') {
      return false
    }

    // null or undefined values will return null
    if (val == null) {
      return null
    }

    // all other values will be converted to boolean by their truthy or falsy value
    // ie: 0, 0n, '', ``, "", NaN, false are falsy and everything else including -1, {}, [] are truthy
    return !!val
  }
}
