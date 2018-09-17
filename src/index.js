import {$on, qsa, removeClass} from './helpers'
import Store from './store'
import PendingBoardModel from './pendingboardmodel'
// import DoneBoardModel from './doneboardmodel'
import PendingBoardController from './pendingboardcontroller'
import PendingBoardView from './pendingboardview'
// import DoneController from './donecontroller'

let pending,done;

function PendingBoard(boardName){
    this.storage = new Store(boardName);
    this.model = new PendingBoardModel(this.storage);
    this.view = new PendingBoardView(this.storage);
    this.controller = new PendingBoardController(this.model, this.view);
};

function DoneBoard(boardName){
    this.storage = new Store(boardName);
    // this.model = new DoneBoardModel(boardName);
    // this.controller = new DoneController(this.model, this.view);
};

$on(window, 'load', function(){
    pending = new PendingBoard('pending');
    // done = new DoneBoard('done');
});
