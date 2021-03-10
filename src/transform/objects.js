'use strict'

exports.objects = {
  // When mapping data, the top level object is passed through as is 
  // instead of nesting it in the toObject. This function is useful so 
  // as not to have to copy each field over manually
  passThroughObject: function(
    fromValue,
    _fromObject,
    toObject
  ) {
    Object.assign(toObject, fromValue)
  }
}
