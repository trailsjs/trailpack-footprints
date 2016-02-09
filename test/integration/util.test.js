'use strict'

const _ = require('lodash')
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

  describe('#getControllerFootprints', () => {

    it('should return controller footprint routes', () => {
      const footprints = lib.Util.getControllerFootprints(global.app)

      assert.equal(footprints.length, 1)
      assert(_.find(footprints, { handler: 'TestController.testHandler' }))
      assert(_.find(footprints, { path: '/test/testHandler' }))
    })

  })
})

