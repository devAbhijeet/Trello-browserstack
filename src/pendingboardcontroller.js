export default PendingBoardController

function PendingBoardController(model, view) {
  var that = this
  that.model = model
  that.view = view

  that.view.bind('newTask', function(title, description) {
    that.addItem(title, description)
  })

  // that.view.bind('itemEdit', function(item) {
  //   that.editItem(item.id)
  // })

  // that.view.bind('itemEditDone', function(item) {
  //   that.editItemSave(item.id, item.title)
  // })

  that.view.bind('itemRemove', function(item) {
    console.log(item);
    // that.removeItem(item.id)
  })

  that.view.bind('sortBy', function() {
    that.sort();
  })

  that.view.bind('priority', function(priority) {
    that.priority(priority);
  })
}

PendingBoardController.prototype.showAll = function() {
  var that = this
  that.model.read(function(data) {
    that.view.render('showEntries', data)
  })
}

PendingBoardController.prototype.sort = function(){
  var that = this;
  that.model.sort(function() {
    that.view.render('showEntries');
  })
};

PendingBoardController.prototype.priority = function(priority){
  var that = this;
  that.model.priority(priority, function() {
    that.view.render('showEntries');
  })
};

PendingBoardController.prototype.addItem = function(title, description) {
  var that = this

  if (title.trim() === '') {
    return
  }

  if (description.trim() === '') {
    return
  }

  that.model.create(title,description,  function() {
    that.view.render('clearNewTask')
    that.view.render('showEntries');
    // that._filter(true)
  })
}

PendingBoardController.prototype.editItem = function(id) {
  var that = this
  that.model.read(id, function(data) {
    that.view.render('editItem', {id, title: data[0].title})
  })
}


PendingBoardController.prototype.editItemSave = function(id, title) {
  var that = this
  if (title.trim()) {
    that.model.update(id, {title}, function() {
      that.view.render('editItemDone', {id, title})
    })
  } else {
    that.removeItem(id)
  }
}

/*
* Cancels the item editing mode.
*/
PendingBoardController.prototype.editItemCancel = function(id) {
  var that = this
  that.model.read(id, function(data) {
    that.view.render('editItemDone', {id, title: data[0].title})
  })
}


PendingBoardController.prototype.removeItem = function(id) {
  var that = this
  that.model.remove(id, function() {
    that.view.render('removeItem', id)
  })

  that._filter()
}


PendingBoardController.prototype._filter = function(force) {
  var activeRoute = this._activeRoute.charAt(0).toUpperCase() + this._activeRoute.substr(1)

  // Update the elements on the page, which change with each completed todo
  this._updateCount()

  // If the last active route isn't "All", or we're switching routes, we
  // re-create the todo item elements, calling:
  //   this.show[All|Active|Completed]();
  if (force || this._lastActiveRoute !== 'All' || this._lastActiveRoute !== activeRoute) {
    this['show' + activeRoute]()
  }

  this._lastActiveRoute = activeRoute
}
