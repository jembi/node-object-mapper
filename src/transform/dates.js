'use strict'

// This file should only contain files that handle date manipulations

exports.dates = {
  dateTimeToDate: function(stringISODateTime) {
    if (!stringISODateTime) {
      return null
    }

    return stringISODateTime.split('T')[0]
  }
}
