export default DoneBoardModel


function DoneBoardModel(storage) {
  this.storage = storage
}

DoneBoardModel.prototype.create = function(title, description, callback) {
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

DoneBoardModel.prototype.loadTask = function(callback) {
  callback = callback || function() {};
  this.storage.loadTask(callback)
}


DoneBoardModel.prototype.sort = function(sortBy, callback) {
  callback = callback || function() {};
  this.storage.sort(sortBy, callback)
}

DoneBoardModel.prototype.priority = function(priority, callback) {
  callback = callback || function() {};
  this.storage.filter(priority, callback)
}


DoneBoardModel.prototype.update = function(id, data, callback) {
  this.storage.save(data, callback, id)
}

DoneBoardModel.prototype.remove = function(id, callback) {
  this.storage.remove(id, callback)
}
