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

  that.view.bind('sortBy', function(sortBy) {
    that.sort(sortBy);
  })

  that.view.bind('priority', function(priority) {
    that.priority(priority);
  })

  that.view.bind('loadTask', function() {
    that.loadTask();
  })
}

PendingBoardController.prototype.loadTask = function(){
  var that = this;
  that.model.loadTask(function() {
    that.view.render('showEntries');
  })
};

PendingBoardController.prototype.sort = function(sortBy){
  var that = this;
  that.model.sort(sortBy, function() {
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


PendingBoardController.prototype.removeItem = function(id) {
  var that = this
  that.model.remove(id, function() {
    that.view.render('removeItem', id)
  })

  that._filter()
}
