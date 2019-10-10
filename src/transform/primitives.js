'use strict'

// This file should only contain functions that do manipulations on
// primitive data types

exports.primitives = {
  booleanFlip: function(val) {
    if (typeof val === 'boolean') {
      return !val
    }

    return null
  }
}
