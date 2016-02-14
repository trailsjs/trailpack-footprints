'use strict'

//const _ = require('lodash')
const assert = require('assert')
const lib = require('../../../lib')

describe('lib.Util', () => {
  describe('#getHandlerName', () => {
    it('should return the handler name in a route handler', () => {
      assert.equal(lib.Util.getHandlerName('TestController.testHandler'), 'testHandler')
    })
  })

  describe('#getControllerHandler', () => {
    it('should correctly combine controller and handler', () => {
      assert.equal(
        lib.Util.getControllerHandler('TestController', 'testHandler'),
        'TestController.testHandler'
      )
    })
  })
})

