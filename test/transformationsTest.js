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

  t.test('getGenderFromCode()', t => {
    t.test('should convert single letter code to word', t => {
      const inputCode = 'F'
      const expectedOutput = 'female'

      const result = transforms['getGenderFromCode'](inputCode)

      t.equal(result, expectedOutput)
      t.end()
    })

    t.test('should convert unhandled gender codes to unknown', t => {
      const inputCode = 7
      const expectedOutput = 'unknown'

      const result = transforms['getGenderFromCode'](inputCode)

      t.equal(result, expectedOutput)
      t.end()
    })

    t.test('should convert null gender codes to unknown', t => {
      const inputCode = null
      const expectedOutput = 'unknown'

      const result = transforms['getGenderFromCode'](inputCode)

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

    t.test('should return null if input is not a primitive boolean data type', t => {
      const booleanInput = 'test'
      const expectedOutput = null

      const result = transforms.booleanFlip(booleanInput)

      t.equal(result, expectedOutput)
      t.end()
    })

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
})
