'use strict'

exports.oneToMany = {
  oneToAllElements: function(
    fromValue,
    _fromObject,
    toObject,
    _fromKey,
    toKey
  ) {
    if (!toObject || !toKey) {
      throw new Error(
        `Invalid value for parameters. Output Object: ${toObject}, Transform Key: ${toKey}`
      )
    }

    // The capturing group contains everything before the '[]' and ensures that there is at least one word character
    const getLastArray = /(.*\w)\[\]/g

    const lastArrayContainingSegment = getLastArray.exec(toKey)

    if (!lastArrayContainingSegment) {
      throw new Error(`Invalid Transform Key value: ${toKey}`)
    }

    const arrayFieldName = lastArrayContainingSegment[1].split('.')[0]

    const result = []
    const outputArray = toObject[arrayFieldName]

    if (Array.isArray(outputArray) && outputArray.length > 0) {
      outputArray.forEach(() => {
        result.push(fromValue)
      })
    } else {
      console.warn(
        `Mapping Mediator received blank array for One to Many transform.\nTransform Key: ${toKey}\nOutput Object: ${JSON.stringify(
          toObject
        )}`
      )
    }
    return result
  }
}
