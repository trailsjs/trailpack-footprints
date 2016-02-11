'use strict'

const _ = require('lodash')
const Trailpack = require('trailpack')
const lib = require('./lib')

module.exports = class FootprintsTrailpack extends Trailpack {

  /**
   * In order to activate footprints, a FootprintController and
   * FootprintService must be provided by other trailpacks. Ensure that
   * these are available and appear valid.
   */
  validate () {
    this.modelFootprints = true

    if (!this.app.api.services.FootprintService) {
      this.log.warn('trailpack-footprints is installed, but FootprintService is not provided')
      this.modelFootprints = false
    }
    if (!this.app.api.controllers.FootprintController) {
      this.log.warn('trailpack-footprints is installed, but FootprintController is not provided')
      this.modelFootprints = false
    }
  }

  /**
   * Compile routes for controller handlers, and filter model actions based
   * on the footprints config.
   *
   * 1. ETL controller handlers into the standard (hapijs-based) route format.
   *    For example, the controller handler ExampleController.exampleHandler will
   *    generate a hapijs route object of the following form:
   *    {
   *      method: '*',
   *      path: '/example/exampleHandler',
   *      handler: 'ExampleController.exampleHandler'
   *    }
   *
   * 2. Create CRUD Route definition which maps to api.controllers.FootprintController
   *
   *    Operation | Method | Path                       | Footprint Handler
   *    ----------+--------+----------------------------+-------------------
   *    Create    | POST   | /model                     | FootprintController.create
   *    Create    | POST   | /model/{id}/{child}        | FootprintController.createAssociation
   *    Read      | GET    | /model/{id?}               | FootprintController.find
   *    Read      | GET    | /model/{id}/{child}/{id?}  | FootprintController.findAssociation
   *    Update    | PUT    | /model/{id?}               | FootprintController.update
   *    Update    | PUT    | /model/{id}/{child}/{id?}  | FootprintController.updateAssociation
   *    Delete    | DELETE | /model/{id?}               | FootprintController.destroy
   *    Delete    | DELETE | /model/{id}/{child}/{id?}  | FootprintController.destroyAssociation
   */
  configure () {
    const routerUtil = this.app.packs.router.util
    const controllerFootprints = lib.Util.getControllerFootprints(this.app)
    const modelFootprints = this.modelFootprints ? lib.Util.getModelFootprints(this.app) : [ ]

    const footprintRoutes = _.union(controllerFootprints, modelFootprints)

    this.app.config.routes = routerUtil.mergeRoutes(footprintRoutes, this.app.config.routes)
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

