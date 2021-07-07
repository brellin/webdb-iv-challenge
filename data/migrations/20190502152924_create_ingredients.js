
exports.up = function (knex, Promise) {

    return knex.schema
        .createTable('ingredients', function (col) {
            col.increments()

            col
                .string('name', 255)
                .notNullable()
                .unique()
        })
};

exports.down = function (knex, Promise) {
    knex.schema.dropTableIfExists('ingredients')
};
