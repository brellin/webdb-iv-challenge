
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('recipes', function (col) {
            col.increments()

            col
                .string('name', 255)
                .notNullable()
                .unique()

            col
                .integer('dish_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('dishes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            col
                .integer('ing_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            col
                .specificType('quantity', 'INT[]')
                .notNullable()
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
};
