const _ = require('lodash')
const assert = require('assert')

describe('Router Trailpack', () => {

  describe('#initialize', () => {
    it('should include footprint routes (Controllers) in app.routes', () => {
      const routes = global.app.routes

      assert.equal(routes.length, 4)
      assert(_.find(routes, {path: global.app.config.footprints.prefix + '/test/testHandler'}))
    })
    it('should include footprint routes (Models) in app.routes', () => {
      const routes = global.app.routes

      assert.equal(routes.length, 4)
      assert(_.find(routes, {path: global.app.config.footprints.prefix + '/{model}', method: 'POST'}))
    })
    it('should bind route handler to controller method', () => {
      const routes = global.app.routes

      assert(_.isFunction(routes[0].handler))
    })
    it('should attach prerequisite methods', () => {
      const routes = global.app.routes
      const configRoute = routes.find(r => {
        return (
          r.path === global.app.config.footprints.prefix + '/test/testHandler' &&
          r.method === 'GET'
        )
      })

      console.log('configRoute', configRoute)
      console.log('app.routes', global.app.routes)

      assert(_.isFunction(configRoute.config.pre[0]))
    })
  })
})
