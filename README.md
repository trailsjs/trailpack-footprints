# trailpack-footprints

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Footprints Trailpack. This trailpack provides the footprint interface, which
other trailpacks such as [trailpack-waterline](https://github.com/trailsjs/trailpack-waterline)
and [trailpack-knex](https://github.com/trailsjs/trailpack-knex) implement,
as well as a suite of tests that Footprint implementations should pass.

[![Trails Footprints Diagram][diagram-image]][]

## API

### `api.services.FootprintService`

The purpose of `FootprintService` is to transform and forward queries to the datastore.

#### `create (modelName, values, [options])`

| param | required? | description | example |
|:---|:---|:---|:---|
| `modelName` | Yes | The name of the model to create (in `api.models`) | `User` |
| `values` | Yes | An object containing the values of the record to create | `{ username: 'admin' }` |
| `options` | No | Datastore-specific options |

#### `find (modelName, criteria, [options])`

| param | required? | description | example |
|:---|:---|:---|:---|
| `modelName` | Yes | The name of the model to search for (in `api.models`) | `User` |
| `criteria` | Yes | An object containing the query criteria | `{ username: 'admin' }` |
| `options` | No | Datastore-specific options |

#### `update (modelName, criteria, values, [options])`

| param | required? | description | example |
|:---|:---|:---|:---|
| `modelName` | Yes | The name of the model to create (in `api.models`) | `User` |
| `criteria` | Yes | An object containing the query criteria | `{ username: 'admin' }` |
| `values` | Yes | An object containing the values to update | `{ username: 'tjwebb' }` |
| `options` | No | Datastore-specific options |

#### `destroy (modelName, criteria, options)`

| param | required? | description | example |
|:---|:---|:---|:---|
| `modelName` | Yes | The name of the model to create (in `api.models`) | `User` |
| `criteria` | Yes | An object containing the query criteria | `{ username: 'admin' }` |
| `values` | Yes | An object containing the values to update | `{ username: 'tjwebb' }` |
| `options` | No | Datastore-specific options |

#### `createAssociation (parentModelName, parentId, childAttributeName, values, [options])`

#### `findAssociation (parentModelName, parentId, childAttributeName, criteria, [options])`

#### `updateAssociation (parentModelName, parentId, childAttributeName, criteria, values, [options])`

#### `destroyAssociation (parentModelName, parentId, childAttributeName, criteria, [options])`

### `api.controllers.FootprintController`

The purpose of the `FootprintController` is to transform and forward requests to the `FootprintService`.


[diagram-image]: http://i.imgur.com/olRxPS8.png
[npm-image]: https://img.shields.io/npm/v/trailpack-footprints.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-footprints
[ci-image]: https://img.shields.io/travis/trailsjs/trailpack-footprints/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/trailpack-footprints
[daviddm-image]: http://img.shields.io/david/trailsjs/trailpack-footprints.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/trailpack-footprints
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/trailpack-footprints.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/trailsjs/trailpack-footprints

