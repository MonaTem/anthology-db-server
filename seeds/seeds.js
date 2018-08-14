exports.seed =  async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex('authors').del();
  await knex.raw("ALTER TABLE authors ALTER COLUMN author_id RESTART WITH 1");
  await knex('publications').del();
  await knex('author_services').del();
  await knex.raw("INSERT INTO authors () VALUES ('')");
  await knex.raw("INSERT INTO publicaitons () VALUES ('',1)");

};
