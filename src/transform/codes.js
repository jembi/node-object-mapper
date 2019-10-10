'use strict'

// This file should only deal with functions that involve
// transforming system codes to values or vice versa

exports.codes = {
  'getGenderFromCode': function (val) {
    switch (val) {
      case 'M':
        return 'male'
      case 'F':
        return 'female'
      case 'O':
        return 'other'
      default:
        return 'unknown'
    }
  }
}
