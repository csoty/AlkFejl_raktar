'use strict'

const Database = use('Database')

class RaktarController {
    * index (request, response) {
        yield response.sendView('welcome');
    }
}

module.exports = RaktarController;