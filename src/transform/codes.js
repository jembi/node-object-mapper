'use strict'

// This file should only deal with functions that involve
// transforming system codes to values or vice versa

exports.codes = {
  mapCodes: function(
    val,
    _fromObject,
    _toObject,
    _fromKey,
    _toKey,
    parameters
  ) {
    const parameterKeys = Object.keys(parameters)
    if (val === null) {
      if (parameterKeys.includes('null')) {
        return parameters['null']
      }
      if (parameterKeys.includes('default')) {
        return parameters['default']
      }
      return null
    } else {
      return parameters[val] ? parameters[val] : parameters['default']
    }
  }
}
