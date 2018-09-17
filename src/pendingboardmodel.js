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


PendingBoardModel.prototype.sort = function(callback) {
  callback = callback || function() {};
  this.storage.sort(callback)
}

PendingBoardModel.prototype.priority = function(priority, callback) {
  callback = callback || function() {};
  this.storage.filter(1, callback)
}

PendingBoardModel.prototype.read = function(query, callback) {
  var queryType = typeof query
  callback = callback || function() {
  }

  if (queryType === 'function') {
    callback = query
    return this.storage.findAll(callback)
  } else if (queryType === 'string' || queryType === 'number') {
    query = parseInt(query, 10)
    this.storage.find({id: query}, callback)
  } else {
    this.storage.find(query, callback)
  }
  return undefined
}


PendingBoardModel.prototype.update = function(id, data, callback) {
  this.storage.save(data, callback, id)
}


PendingBoardModel.prototype.remove = function(id, callback) {
  this.storage.remove(id, callback)
}

PendingBoardModel.prototype.removeAll = function(callback) {
  this.storage.drop(callback)
}

PendingBoardModel.prototype.getCount = function(callback) {
  var todos = {
    active: 0,
    completed: 0,
    total: 0
  }

  this.storage.findAll(function(data) {
    data.forEach(function(todo) {
      if (todo.completed) {
        todos.completed++
      } else {
        todos.active++
      }

      todos.total++
    })
    callback(todos)
  })
}
