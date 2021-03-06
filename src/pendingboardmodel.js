export default PendingBoardModel


function PendingBoardModel(storage) {
  this.storage = storage
}

PendingBoardModel.prototype.create = function(title, description, callback) {
  title = title || ''
  description = description || ''
  callback = callback || function() {
  }

  var newItem = {
    title: title.trim(),
    description: description.trim(),
    time: new Date().toDateString(),
    timePass: new Date().getTime(),
    priority: Math.floor(Math.random() * 5) + 0
  }

  this.storage.save(newItem, callback)
}

PendingBoardModel.prototype.loadTask = function(callback) {
  callback = callback || function() {};
  this.storage.loadTask(callback)
}


PendingBoardModel.prototype.sort = function(sortBy, callback) {
  callback = callback || function() {};
  this.storage.sort(sortBy, callback)
}

PendingBoardModel.prototype.priority = function(priority, callback) {
  callback = callback || function() {};
  this.storage.filter(priority, callback)
}

PendingBoardModel.prototype.update = function(id, data, callback) {
  this.storage.save(data, callback, id)
}

PendingBoardModel.prototype.remove = function(id, callback) {
  this.storage.remove(id, callback)
}
