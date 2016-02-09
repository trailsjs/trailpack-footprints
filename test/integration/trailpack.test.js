'use strict'

const _ = require('lodash')
const assert = require('assert')

describe('Router Trailpack', () => {

  describe('#initialize', () => {

    it('should include footprint routes in app.routes', () => {
      const routes = global.app.routes

      assert.equal(routes.length, 1)
      assert(_.isFunction(routes[0].handler))
    })
  })
})
