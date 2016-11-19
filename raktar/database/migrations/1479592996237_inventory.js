'use strict'

const Schema = use('Schema')

class InventoryTableSchema extends Schema {

  up () {
    this.create('inventory', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('desc').defaultTo("Leiras")
      table.integer('qty').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('inventory')
  }

}

module.exports = InventoryTableSchema
