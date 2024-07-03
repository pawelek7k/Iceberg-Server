import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('articles', (table) => {
    table.increments('id');
    table.string('title')
    table.specificType('killers', 'text ARRAY');
    table.specificType('victims', 'text ARRAY');
    table.string('date')
    table.specificType('images', 'text ARRAY');
    table.string('description')
    table.string('details')
    table.string('location')
    table.string('psychologicalBackground')
    table.string('policeActions')
    table.string('lawsuit')
    table.string('socialReactions')
    table.string('legacyAndImpact')
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('articles');
}
