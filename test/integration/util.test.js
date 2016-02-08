'use strict'

//const _ = require('lodash')
const assert = require('assert')
const lib = require('../../lib')

describe('lib.Util', () => {
  describe('#getHandlerPath', () => {
    it('should return correct url path for controller handler', () => {
      assert.equal(
        lib.Util.getHandlerPath(global.app, '/prefix', 'test', 'test'),
        '/prefix/test/test'
      )
    })
  })
})

