const _ = require('lodash')
const smokesignals = require('smokesignals')
const Model = require('trails/lib/Model')
const Controller = require('trails/lib/Controller')
const Policy = require('trails/lib/Policy')

module.exports = _.defaultsDeep({
  pkg: {
    name: 'footprints-trailpack-test'
  },
  api: {
    services: {
      FootprintService: class FootprintService extends Controller {

      }
    },
    policies: {
      TestPolicy: class TestPolicy extends Policy {
        test() {
        }
      }
    },
    controllers: {
      TestController: class TestController extends Controller {
        testHandler() {
        }
      },
      FootprintController: class FootprintController extends Controller {
        create() {
        }

        update() {
        }
      }
    },
    models: {
      User: class User extends Model {
        static config() {
          return {}
        }

        static schema() {
          return {
            name: 'string',
            roles: {
              collection: 'Role',
              via: 'user'
            }
          }
        }
      },
      Role: class Role extends Model {
        static config() {
          return {
            store: 'storeoverride'
          }
        }

        static schema() {
          return {
            name: 'string',
            user: {
              model: 'User'
            }
          }
        }
      }
    }
  },
  config: {
    footprints: {
      prefix: '/api/v1'
    },
    main: {
      packs: [
        require('../../'),
        require('trailpack-router')
      ]
    },
    log: {
      logger: new smokesignals.Logger('debug')
    },
    routes: [
      {
        method: 'GET',
        path: '/test/testHandler',
        handler: 'TestController.testHandler',
        config: {
          pre: [
            'TestPolicy.test'
          ]
        }
      }
    ]
  }
}, smokesignals.FailsafeConfig)

