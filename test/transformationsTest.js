'use strict'

const test = require('tape')
const transforms = require('../src/transform/handler')

test.test('Transformations', t => {
  t.test('dateTimeToDate()', t => {
    t.test('should convert iso datetime string to date', t => {
      const inputDate = '1988-03-24T00:00:00.000+0800'
      const expected = '1988-03-24'

      const result = transforms['dateTimeToDate'](inputDate)

      t.equal(result, expected)
      t.end()
    })
  })

  t.test('mapCodes()', t => {
    t.test('should convert single letter code to word', t => {
      const inputCode = 'F'
      const expectedOutput = 'female'

      const functionParameters = {
        F: 'female',
        M: 'male',
        O: 'other'
      }

      const result = transforms['mapCodes'](
        inputCode,
        null,
        null,
        null,
        null,
        functionParameters
      )

      t.equal(result, expectedOutput)
      t.end()
    })

    t.test(
      'should convert unhandled codes to default value if specified',
      t => {
        const inputCode = 7
        const expectedOutput = 'unknown'
        const functionParameters = {
          F: 'female',
          M: 'male',
          O: 'other',
          default: 'unknown'
        }

        const result = transforms['mapCodes'](
          inputCode,
          null,
          null,
          null,
          null,
          functionParameters
        )

        t.equal(result, expectedOutput)
        t.end()
      }
    )

    t.test(
      'should convert unhandled codes to undefined if no default specified',
      t => {
        const inputCode = 7
        const expectedOutput = undefined
        const functionParameters = {
          F: 'female',
          M: 'male',
          O: 'other'
        }

        const result = transforms['mapCodes'](
          inputCode,
          null,
          null,
          null,
          null,
          functionParameters
        )

        t.equal(result, expectedOutput)
        t.end()
      }
    )

    t.test(
      'should convert null codes to value if null case is specified',
      t => {
        const inputCode = null
        const expectedOutput = 'unknown'

        const functionParameters = {
          F: 'female',
          M: 'male',
          O: 'other',
          null: 'unknown'
        }

        const result = transforms['mapCodes'](
          inputCode,
          null,
          null,
          null,
          null,
          functionParameters
        )

        t.equal(result, expectedOutput)
        t.end()
      }
    )

    t.test(
      'should convert null codes to default value if null case is not specified but default is',
      t => {
        const inputCode = null
        const expectedOutput = 'unknown'

        const functionParameters = {
          F: 'female',
          M: 'male',
          O: 'other',
          default: 'unknown'
        }

        const result = transforms['mapCodes'](
          inputCode,
          null,
          null,
          null,
          null,
          functionParameters
        )

        t.equal(result, expectedOutput)
        t.end()
      }
    )

    t.test('should convert null code to null if not handled', t => {
      const inputCode = null
      const expectedOutput = null

      const functionParameters = {
        F: 'female',
        M: 'male',
        O: 'other'
      }

      const result = transforms['mapCodes'](
        inputCode,
        null,
        null,
        null,
        null,
        functionParameters
      )

      t.equal(result, expectedOutput)
      t.end()
    })
  })

  t.test('booleanFlip()', t => {
    t.test('should convert true to false', t => {
      const booleanInput = true
      const expectedOutput = false

      const result = transforms.booleanFlip(booleanInput)

      t.equal(result, expectedOutput)
      t.end()
    })

    t.test('should convert false to true', t => {
      const booleanInput = false
      const expectedOutput = true

      const result = transforms.booleanFlip(booleanInput)

      t.equal(result, expectedOutput)
      t.end()
    })

    t.test(
      'should return null if input is not a primitive boolean data type',
      t => {
        const booleanInput = 'test'
        const expectedOutput = null

        const result = transforms.booleanFlip(booleanInput)

        t.equal(result, expectedOutput)
        t.end()
      }
    )

    t.test('should return null if input is a falsy', t => {
      const booleanInput = 0
      const expectedOutput = null

      const result = transforms.booleanFlip(booleanInput)

      t.equal(result, expectedOutput)
      t.end()
    })

    t.test('should return null if input is null', t => {
      const booleanInput = null
      const expectedOutput = null

      const result = transforms.booleanFlip(booleanInput)

      t.equal(result, expectedOutput)
      t.end()
    })
  })

  t.test('booleanify', t => {
    t.test('should convert empty string to false', t => {
      const input = ''
      const expected = false

      const result = transforms['booleanify'](input)

      t.equal(result, expected)
      t.end()
    })

    t.test('should return null if input is null', t => {
      const input = null
      const expected = null

      const result = transforms['booleanify'](input)

      t.equal(result, expected)
      t.end()
    })

    t.test('should return false if input is string false', t => {
      const input = 'false'
      const expected = false

      const result = transforms['booleanify'](input)

      t.equal(result, expected)
      t.end()
    })

    t.test('should return true if input is a truthy', t => {
      const input = []
      const expected = true

      const result = transforms['booleanify'](input)

      t.equal(result, expected)
      t.end()
    })
  })
})
