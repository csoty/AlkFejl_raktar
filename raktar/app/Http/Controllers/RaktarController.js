'use strict'

const Database = use('Database');
const Inventory = use('App/Model/Inventory');

class RaktarController {
    * index (request, response) {
        yield response.sendView('welcome');
    }


    * showNewItem (request, response) {
        yield response.sendView("newitem");
    }

    * createNewItem (request, response) {
        const newItem = request.except('_csrf');
        yield Inventory.create(newItem);
        response.redirect('/listKeszlet');
    }

    * listAllItems (request, response) {
        const itemArray = yield Inventory.all();
        yield response.sendView('inventory', { items : itemArray.toJSON() });
    }

    * chooseItemToAdd (request, response) {
        const itemArray = yield Inventory.all();
        yield response.sendView('selectitemadd', { items : itemArray.toJSON() });
    }

    /* goToAdd (request, response) {
        const info = request.except('_csrf');
        const id = info.id;
        const selected = yield Inventory.find(id);
        yield response.sendView('setqty', { item : selected.toJSON()});
    } */

    * setQtyToAdd (request, response) {
        const info = request.except('_csrf');
        const selected = yield Inventory.find(info.id);
        yield response.sendView('setqty', { item : selected.toJSON() });
    }

    * updateQty (request, response) {
        const info = request.except('_csrf');
        const addVal = parseInt(info.qtyToAdd);
        const selected = yield Inventory.find(info.id);
        const oldVal = parseInt(selected.qty);
        selected.qty = addVal + oldVal;
        yield selected.save();
        response.redirect('/listKeszlet');
    }

    * chooseItemToDel (request, response) {
        const itemArray = yield Inventory.all();
        yield response.sendView('selectitemtodel', { items : itemArray.toJSON() });
    }

    * deleteItem (request, response) {
        const info = request.except('_csrf');
        const item = yield Inventory.find(info.id);
        yield item.delete();
        response.redirect('/listKeszlet');
    }

    * chooseItemToDispose (request, response) {
        const itemArray = yield Inventory.all();
        yield response.sendView('selectitemtodisp', { items : itemArray.toJSON()});
    }

    * setQtyToDispose (request, response) {
        const info = request.except('_csrf');
        const id = info.id;
        const selected = yield Inventory.find(id);
        yield response.sendView('setdispqty', { item : selected.toJSON()});
    }

    * dispose (request, response) {
        const info = request.except('_csrf');
        const disposeQty = parseInt(info.qtyToDisp);
        const selected = yield Inventory.find(info.id);
        const oldVal = parseInt(selected.qty);
        selected.qty = oldVal - disposeQty;
        yield selected.save();
        response.redirect('/listKeszlet');
    }
}

module.exports = RaktarController;