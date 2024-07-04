import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('articles', (table) => {
    table.increments('id');
    table.string('title')
    table.specificType('killers', 'text ARRAY');
    table.specificType('victims', 'text ARRAY');
    table.string('date')
    table.specificType('images', 'text ARRAY');
    table.text('description')
    table.text('details')
    table.text('location')
    table.text('psychologicalBackground')
    table.text('policeActions')
    table.text('lawsuit')
    table.text('socialReactions')
    table.text('legacyAndImpact')
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('articles');
}
