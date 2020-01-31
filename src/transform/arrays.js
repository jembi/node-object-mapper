'use strict'

// The capturing group contains everything before the '[]' and ensures that there is at least one word character
const getLastArray = /(.*\w)\[\]/

exports.arrays = {
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

    let arryRegex = new RegExp(getLastArray, 'g')
    const lastArrayContainingSegment = arryRegex.exec(toKey)

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
  },
  appendArray: function(fromValue, _fromObject, toObject, _fromKey, toKey) {
    let arryRegex = new RegExp(getLastArray, 'g')
    const nestedFieldName = arryRegex.exec(toKey)

    if (!nestedFieldName) {
      throw new Error(`Invalid Transform Key: ${toKey}`)
    }

    let nestedObject = toObject
    const arrayOfNestedFields = nestedFieldName[1].split('.')

    arrayOfNestedFields.forEach((key, index) => {
      if (arrayOfNestedFields.length - 1 === index) {
        if (!nestedObject[key]) {
          nestedObject[key] = [...fromValue]
          return
        } else {
          nestedObject[key].push(...fromValue)
          return
        }
      }

      if (!nestedObject[key]) {
        nestedObject[key] = {}
      }
      // Move down the nested object
      nestedObject = nestedObject[key]
    })
  }
}
