module.exports = [
  {
    method: 'POST',
    path: '/{model}',
    handler: 'FootprintController.create'
  },
  {
    method: 'GET',
    path: '/{model}/{id?}',
    handler: 'FootprintController.find'
  },
  {
    method: [ 'PUT', 'PATCH' ],
    path: '/{model}/{id?}',
    handler: 'FootprintController.update'
  },
  {
    method: 'DELETE',
    path: '/{model}/{id?}',
    handler: 'FootprintController.destroy'
  },
  {
    method: 'POST',
    path: '/{parentModel}/{parentId}/{childAttribute}',
    handler: 'FootprintController.createAssociation'
  },
  {
    method: 'GET',
    path: '/{parentModel}/{parentId}/{childAttribute}/{childId?}',
    handler: 'FootprintController.findAssociation'
  },
  {
    method: 'PUT',
    path: '/{parentModel}/{parentId}/{childAttribute}/{childId?}',
    handler: 'FootprintController.updateAssociation'
  },
  {
    method: 'DELETE',
    path: '/{parentModel}/{parentId}/{childAttribute}/{childId?}',
    handler: 'FootprintController.destroyAssociation'
  }
]

