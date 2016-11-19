'use strict'

const Schema = use('Schema')

class InventoryTableSchema extends Schema {

  up () {
    this.create('inventory', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('inventory')
  }

}

module.exports = InventoryTableSchema
