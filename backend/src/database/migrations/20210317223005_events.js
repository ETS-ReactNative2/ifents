
exports.up = function (knex) {
    return knex.schema.createTable('evento', function (table) {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('local').notNullable();
        table.string('contato').notNullable();
        table.string('tipo').notNullable();
        table.date('data_inicio').notNullable();
        table.date('data_termino').notNullable();
        table.time('hora_inicio').notNullable();
        table.time('hora_termino').notNullable();
        table.integer('likes').defaultTo(1);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('evento')

};
