
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'Tortilla' },
        { id: 2, name: 'Meat' },
        { id: 3, name: 'Flour' }
      ]);
    });
};
