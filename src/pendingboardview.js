import {qs, qsa, $on, $parent} from './helpers'

export default class PendingBoardView {
  constructor(storage) {
    this.storage = storage;
    this.pedingTask = JSON.parse(localStorage['pending']);    
    this.$taskList = qs('.pending-body')
    this.$newTask = qs('.pendingInputCard')
    this.$newTaskButton = qs('.pendingInputCardButton')
    this.$sortby = qs('.sortby');
    this.$prior = qs('.prior-1');
    window.remove = function(e){
      console.log();
    };
  }

  render(viewCmd, parameter) {
    var that = this
    var viewCommands = {
      showEntries: function() {
        that.$taskList.innerHTML = JSON.parse(localStorage['pending']).cards.map(function(card){
          return `<li>
            <div>Title: ${card.title}</div>
            <div>Description: ${card.description}</div>
            <div>Time: ${card.time}</div>
            <button class="removePending" data-id="${card.id}" onclick="remove(this)">Remove</button>
          </li>`
        }).join("");
      },
      removeItem: function() {
        that._removeItem(parameter)
      },
      setFilter: function() {
        _setFilter(parameter)
      },
      clearNewTask: function() {
        that.$newTask.value = ''
      },
      editItem: function() {
        _editItem(parameter.id, parameter.title)
      },
      editItemDone: function() {
        that._editItemDone(parameter.id, parameter.title)
      }
    }

    viewCommands[viewCmd]()
  }

  bind(event, handler) {
    var that = this
    if (event === 'newTask') {
      $on(that.$newTaskButton, 'click', function() {
        handler(that.$newTask.value, that.$newTask.value)
      })

    } else if (event === 'removeCompleted') {
      $on(that.$clearCompleted, 'click', function() {
        handler()
      })

    } else if (event === 'itemEdit') {
      $delegate(that.$todoList, 'li label', 'dblclick', function() {
        handler({id: _itemId(this)})
      })

    }
    else if (event === 'sortBy') {
      $on(that.$sortby, 'click', function() {
        handler()
      })

    }
    else if (event === 'priority') {
      $on(that.$prior, 'click', function(prior) {
        handler(prior)
      })

    }
  }
}

function _setFilter(currentPage) {
  qs('.filters .selected').className = ''
  qs('.filters [href="#/' + currentPage + '"]').className = 'selected'
}

function _elementComplete(id, completed) {
  var listItem = qs('[data-id="' + id + '"]')

  if (!listItem) {
    return
  }

  listItem.className = completed ? 'completed' : ''

  // In case it was toggled from an event and not by clicking the checkbox
  qs('input', listItem).checked = completed
}

function _editItem(id, title) {
  var listItem = qs('[data-id="' + id + '"]')

  if (!listItem) {
    return
  }

  listItem.className = listItem.className + ' editing'

  var input = document.createElement('input')
  input.className = 'edit'

  listItem.appendChild(input)
  input.focus()
  input.value = title
}

function _itemId(element) {
  var li = $parent(element, 'li')
  return parseInt(li.dataset.id, 10)
}
