// For more information about this file see https://dove.feathersjs.com/guides/cli/knexfile.html
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('personality-quiz', (table) => {
    table.increments('id')
    table.string('question')
    table.jsonb('answers')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('personality-quiz')
}
