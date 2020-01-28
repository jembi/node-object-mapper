'use strict'

exports.oneToMany = {
  oneToAllElements: function(fromValue, _fromObject, toObject) {
    const result = []
    if (toObject != null && Array.isArray(Object.values(toObject)[0])) {
      Object.values(toObject)[0].forEach(() => {
        result.push(fromValue)
      })
    } else {
      throw new Error('Incorrect values in function parameters')
    }

    return result
  }
}
