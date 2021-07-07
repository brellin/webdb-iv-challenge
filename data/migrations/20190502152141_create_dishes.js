
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('dishes', function (col) {
            col.increments()

            col
                .string('name', 128)
                .notNullable()
                .unique()
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('dishes')
};
