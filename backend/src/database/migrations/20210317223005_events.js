
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
<<<<<<< HEAD
        table.integer('likes').defaultTo(0);
=======
        table.integer('likes').defaultTo(1);
>>>>>>> 9810e70f46d8a0ecf25960b8938889b724f8382c
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('evento')

};
