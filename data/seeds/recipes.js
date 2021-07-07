
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, name: 'Homestyle', dish_id: 3, ing_id: 1, quantity: 1 },
        { id: 2, name: 'Mexican', dish_id: 2, ing_id: 2, quantity: 1 },
        { id: 3, name: "Momma's", dish_id: 1, ing_id: 3, quantity: 1 }
      ]);
    });
};
