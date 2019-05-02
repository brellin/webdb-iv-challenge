
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { id: 1, name: 'Burrito' },
        { id: 2, name: 'Taco' },
        { id: 3, name: 'Cake' }
      ]);
    });
};
