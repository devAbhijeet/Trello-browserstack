export default Store

function Store(name, callback) {
  callback = callback || function() {
  }

  this._dbName = name

  if (!localStorage[name]) {
    var data = {
      cards: []
    }

    localStorage[name] = JSON.stringify(data)
  }

  callback.call(this, JSON.parse(localStorage[name]))
}

Store.prototype.find = function(query, callback) {
  if (!callback) {
    return
  }

  var todos = JSON.parse(localStorage[this._dbName]).todos

  callback.call(this, todos.filter(function(todo) {
    for (var q in query) {
      if (query[q] !== todo[q]) {
        return false
      }
    }
    return true
  }))
}


Store.prototype.findAll = function(callback) {
  callback = callback || function() {
  }
  callback.call(this, JSON.parse(localStorage[this._dbName]).todos)
}

Store.prototype.save = function(updateData, callback, id) {
  var data = JSON.parse(localStorage[this._dbName])
  var cards = data.cards

  callback = callback || function() {
  }

  // If an ID was actually given, find the item and update each property
  if (id) {
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].id === id) {
        for (var key in updateData) { // eslint-disable-line guard-for-in
          cards[i][key] = updateData[key]
        }
        break
      }
    }

    localStorage[this._dbName] = JSON.stringify(data)
    callback.call(this, JSON.parse(localStorage[this._dbName]).cards)
  } else {
    // Generate an ID
    updateData.id = new Date().getTime()

    cards.push(updateData)
    localStorage[this._dbName] = JSON.stringify(data)
    callback.call(this, [updateData])
  }
}

Store.prototype.remove = function(id, callback) {
  var data = JSON.parse(localStorage[this._dbName])
  var cards = data.cards

  for (var i = 0; i < cards.length; i++) {
    if (todos[i].id === id) {
        cards.splice(i, 1)
      break
    }
  }

  localStorage[this._dbName] = JSON.stringify(data)
  callback.call(this, JSON.parse(localStorage[this._dbName]).cards)
}

Store.prototype.sort = function(callback){
    var data = JSON.parse(localStorage[this._dbName])
    var card = data.cards

    data.cards = card.sort(function(a, b) { 
        return b.timePass - a.timePass;
    });

    localStorage[this._dbName] = JSON.stringify(data)
    callback.call(this, JSON.parse(localStorage[this._dbName]).cards)
};

Store.prototype.filter = function(priority, callback){
    var data = JSON.parse(localStorage[this._dbName])
    var card = data.cards

    data.cards = card.filter(function(card){
        return card.priority == priority;
    });

    localStorage[this._dbName] = JSON.stringify(data)
    callback.call(this, JSON.parse(localStorage[this._dbName]).cards)
};

Store.prototype.drop = function(callback) {
  localStorage[this._dbName] = JSON.stringify({todos: []})
  callback.call(this, JSON.parse(localStorage[this._dbName]).todos)
}
