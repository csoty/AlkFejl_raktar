'use strict'

const Database = use('Database')

class RaktarController {
    * index (request, response) {
        yield response.sendView('welcome');
    }


    * newItem (request, response) {
        yield response.send(request.currentUser.username);
    }
}

module.exports = RaktarController;