import {qs, qsa, $on, $parent} from './helpers'

export default class PendingBoardView {
  constructor(storage) {
    var pendingConst = this;
    this.storage = storage;
    this.pedingTask = JSON.parse(localStorage['pending']);    
    this.$taskList = qs('.pending-body')
    this.$newTask = qs('.pendingInputCard')
    this.$newTaskButton = qs('.pendingInputCardButton')
    this.$sortby = qs('#sortby');
    this.$prior = qs('#priority');
    
    window.removePending = function(e){
      pendingConst.storage.remove(window.removePendingButtonId, function(){
        pendingConst.render('showEntries');
        window.buttonId = null;
      });
    };

    window.movePending = function(e){
      pendingConst.storage.move(window.movePendingbuttonId, 'done', function(){
        pendingConst.render('showEntries');
        window.buttonId = null;
      });
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
            <div>Priority: ${card.priority}</div>
            <button class="removePending" id="${card.id}" onclick="window.removePendingButtonId = ${card.id}; removePending(this)">Remove</button>
            <button class="movePending" id="${card.id}" onclick="window.movePendingbuttonId = ${card.id}; movePending(this)">Move to Done</button>
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
      }
    }

    viewCommands[viewCmd]()
  }

  bind(event, handler) {
    var that = this
    if(event === 'loadTask'){
      $on(document, 'click', function() {
        handler();
      });
    } else if (event === 'newTask') {
      $on(that.$newTaskButton, 'click', function() {
        handler(that.$newTask.value, that.$newTask.value)
      })

    } else if (event === 'removeCompleted') {
      $on(that.$clearCompleted, 'click', function() {
        handler()
      })

    } else if (event === 'itemEdit') {

    }
    else if (event === 'sortBy') {
      $on(that.$sortby, 'change', function() {
        handler(that.$prior.options[that.$prior.selectedIndex].value)
      })

    }
    else if (event === 'priority') {
      $on(that.$prior, 'change', function(e) {
        handler(that.$prior.options[that.$prior.selectedIndex].value)
      })

    }
  }
}
