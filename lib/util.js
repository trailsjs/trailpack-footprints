'use strict'

const _ = require('lodash')
const lib = require('.')

module.exports = {

  /**
   * Compile controller handlers into route objects
   */
  getControllerFootprints (app) {
    const controllers = _.omit(app.controllers, _.get(app.config, 'footprints.controllers.ignore'))
    const prefix = _.get(app.config, 'footprints.prefix')

    return _.flatten(_.map(controllers, (controller, controllerName) => {

      return _.map(controller.methods, handlerName => {
        return {
          method: _.get(app.config, 'footprints.controllers.method') || [ 'GET', 'POST' ],
          path: lib.Util.getHandlerPath(app, prefix, controller.id, handlerName),
          handler: lib.Util.getControllerHandler(controllerName, handlerName)
        }
      })
    }))
  },

  /**
   * Select the model footprint routes that the configuration allows.
   */
  getModelFootprints (app) {
    const actionsConfig = _.get(app.config, 'footprints.models.actions')
    const prefix = _.get(app.config, 'footprints.prefix');

    return _(lib.Routes)
      .filter(route => {
        const handlerName = lib.Util.getHandlerName(route.handler)
        return actionsConfig[handlerName]
      })
      .map(route => Object.assign(route, { path: `${prefix}${route.path}` }))
      .value()
  },

  getControllerHandler (controllerName, handlerName) {
    return `${controllerName}.${handlerName}`
  },

  getHandlerName (routeHandler) {
    return (routeHandler || '').split('.')[1]
  },

  getHandlerPath (app, prefix, controllerId, handlerName) {
    return app.packs.router.util.getRoutePath([
      '/', prefix, controllerId, handlerName
    ])
  }
}
