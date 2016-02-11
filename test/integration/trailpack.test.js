'use strict'

const _ = require('lodash')
const assert = require('assert')

describe('Router Trailpack', () => {

  describe('#initialize', () => {
    it('should include footprint routes (Controllers) in app.routes', () => {
      const routes = global.app.routes

      assert.equal(routes.length, 3)
      assert(_.find(routes, { path: '/test/testHandler' }))
    })
    it('should include footprint routes (Models) in app.routes', () => {
      const routes = global.app.routes

      assert.equal(routes.length, 3)
      assert(_.find(routes, { path: '/{model}', method: 'POST' }))
    })
    it('should bind route handler to controller method', () => {
      const routes = global.app.routes

      assert(_.isFunction(routes[0].handler))
    })
    it('should attach prerequisite methods', () => {
      const routes = global.app.routes

      const configRoute = _.find(routes, { path: '/test/testHandler' })

      assert(_.isFunction(configRoute.config.pre[0]))
    })
  })
})
