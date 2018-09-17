import {$on, qsa, removeClass} from './helpers'
import Store from './store'

import PendingBoardModel from './pendingboardmodel'
import PendingBoardController from './pendingboardcontroller'
import PendingBoardView from './pendingboardview'

import DoneBoardModel from './doneboardmodel'
import DoneBoardController from './doneboardcontroller'
import DoneBoardView from './doneboardview'

let pending,done;

function PendingBoard(boardName){
    this.storage = new Store(boardName);
    this.model = new PendingBoardModel(this.storage);
    this.view = new PendingBoardView(this.storage);
    this.controller = new PendingBoardController(this.model, this.view);
};

function DoneBoard(boardName){
    this.storage = new Store(boardName);
    this.model = new DoneBoardModel(this.storage);
    this.view = new DoneBoardView(this.storage);
    this.controller = new DoneBoardController(this.model, this.view);
};

$on(window, 'load', function(){
    pending = new PendingBoard('pending');
    done = new DoneBoard('done');
});
