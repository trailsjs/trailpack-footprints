'use strict'

const Controller = require('trails-controller')

/**
 * @module FootprintController
 * @description The purpose of the FootprintController is to transform and
 * forward requests to the FootprintService.
 */
module.exports = class FootprintController extends Controller {

  create (request, reply) {
    throw new Error('FootprintController.create must be overridden by subclass')
  }

  find (request, reply) {
    throw new Error('FootprintController.find must be overridden by subclass')
  }

  update (request, reply) {
    throw new Error('FootprintController.update must be overridden by subclass')
  }

  destroy (request, reply) {
    throw new Error('FootprintController.destroy must be overridden by subclass')
  }

  createAssociation (request, reply) {
    throw new Error('FootprintController.createAssociation must be overridden by subclass')
  }

  findAssociation (request, reply) {
    throw new Error('FootprintController.findAssociation must be overridden by subclass')
  }

  updateAssociation (request, reply) {
    throw new Error('FootprintController.updateAssociation must be overridden by subclass')
  }

  destroyAssociation (request, reply) {
    throw new Error('FootprintController.destroyAssociation must be overridden by subclass')
  }
}

