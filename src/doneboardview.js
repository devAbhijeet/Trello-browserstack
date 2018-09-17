import {qs, qsa, $on, $parent} from './helpers'

export default class DoneBoardView {
  constructor(storage) {
    var pendingConst = this;
    this.storage = storage;
    this.pedingTask = JSON.parse(localStorage['pending']);    
    this.$taskList = qs('.done-body')
    this.$newTask = qs('.doneInputCard')
    this.$newTaskButton = qs('.doneInputCardButton')
    this.$sortby = qs('#done-sortby');
    this.$prior = qs('#done-priority');
    
    window.removeDone = function(e){
      pendingConst.storage.remove(window.removeDonebuttonId, function(){
        pendingConst.render('showEntries');
        window.buttonId = null;
      });
    };

    window.moveDone = function(e){
      pendingConst.storage.move(window.moveDoneButtonId, 'pending', function(){
        pendingConst.render('showEntries');
        window.buttonId = null;
      });
    };
  }

  render(viewCmd, parameter) {
    var that = this
    var viewCommands = {
      showEntries: function() {
        that.$taskList.innerHTML = JSON.parse(localStorage['done']).cards.map(function(card){
          return `<li>
            <div>Title: ${card.title}</div>
            <div>Description: ${card.description}</div>
            <div>Time: ${card.time}</div>
            <div>Priority: ${card.priority}</div>
            <button class="removeDone" id="${card.id}" onclick="window.removeDonebuttonId = ${card.id}; removeDone(this)">Remove</button>
            <button class="moveDone" id="${card.id}" onclick="window.moveDoneButtonId = ${card.id}; moveDone(this)">Move to Pending</button>
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

    } else if (event === 'sortBy') {
      $on(that.$sortby, 'change', function() {
        handler(that.$prior.options[that.$prior.selectedIndex].value)
      })

    } else if (event === 'priority') {
      $on(that.$prior, 'change', function(e) {
        handler(that.$prior.options[that.$prior.selectedIndex].value)
      })

    }
  }
}
