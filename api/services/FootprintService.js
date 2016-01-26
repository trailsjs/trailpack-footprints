'use strict'

const Service = require('trails-service')

/**
 * @module FootprintService
 * @description The FootprintService transforms and forwards queries to the DatastoreService
 */
module.exports = class FootprintService extends Service {

  create (modelName, values, options) {
    throw new Error('FootprintService.create must be overridden by subclass')
  }

  find (modelName, criteria, options) {
    throw new Error('FootprintService.find must be overridden by subclass')
  }

  update (modelName, criteria, values, options) {
    throw new Error('FootprintService.update must be overridden by subclass')
  }

  destroy (modelName, criteria, options) {
    throw new Error('FootprintService.destroy must be overridden by subclass')
  }

  createAssociation (parentModelName, parentId, childAttributeName, values, options) {
    throw new Error('FootprintService.createAssociation must be overridden by subclass')
  }

  findAssociation (parentModelName, parentId, childAttributeName, criteria, options) {
    throw new Error('FootprintService.findAssociation must be overridden by subclass')
  }

  updateAssociation (parentModelName, parentId, childAttributeName, criteria, values, options) {
    throw new Error('FootprintService.updateAssociation must be overridden by subclass')
  }

  destroyAssociation (parentModelName, parentId, childAttributeName, criteria, options) {
    throw new Error('FootprintService.destroyAssociation must be overridden by subclass')
  }
}
