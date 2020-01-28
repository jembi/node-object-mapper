'use strict'

exports.oneToMany = {
  oneToAllElements: function(fromValue, _fromObject, toObject) {
    if (toObject == null) {
      throw new Error('Invalid value for toObject')
    }

    const result = []
    const outputArray = Object.values(toObject)[0]
    if (Array.isArray(outputArray)) {
      outputArray.forEach(() => {
        result.push(fromValue)
      })
    }
    return result
  }
}
