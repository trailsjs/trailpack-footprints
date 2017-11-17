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

      console.log('footprints', footprints)

      assert.equal(footprints.length, 1)
      assert(_.find(footprints, {handler: 'TestController.testHandler'}))
      assert(_.find(footprints, {path: global.app.config.footprints.prefix + '/test/testHandler'}))
    })

    it('should return an empty array if controller footprint routes are disabled', () => {
      const footprintConfig = _.cloneDeep(global.app.config.footprints)
      footprintConfig.controllers = false
      const footprints = lib.Util.getControllerFootprints({config: {footprints: footprintConfig}})

      assert.equal(footprints.length, 0)
    })

  })
})

