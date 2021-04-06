
exports.up = function (knex) {
    return knex.schema.createTable('usuario', function (table) {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('ra').notNullable();
        table.string('senha').notNullable();
        table.string('foto');
        table.boolean('adm').defaultTo(false);

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuario')
};
