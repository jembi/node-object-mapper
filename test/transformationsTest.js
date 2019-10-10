'use strict'

const test = require('tape')
const transformations = require('../src/transform/handler')

test.test('Transformations', t => {
  t.test('dateTimeToDate()', t => {
    t.test('should convert iso datetime string to date', t => {
      const inputDate = '1988-03-24T00:00:00.000+0800'
      const expected = '1988-03-24'

      const result = transformations.dateTimeToDate(inputDate)

      t.equal(result, expected)
      t.end()
    })      
  })

  t.test('createBahmniFhirIdentifier()', t => {
    t.test('should convert iso datetime string to date', t => {
      const inputDate = '1988-03-24T00:00:00.000+0800'
      const expected = '1988-03-24'

      const result = transformations.dateTimeToDate(inputDate)

      t.equal(result, expected)
      t.end()
    })      
  })
})
