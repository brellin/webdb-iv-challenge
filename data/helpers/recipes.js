const db = require('../dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('recipes as r')
        .select('r.name as recipe', 'd.name as dish')
        .join('dishes as d', 'r.dish_id', 'd.id')
}

function findById(id) {
    return db('recipes as r')
        .select('r.name as recipe', 'r.quantity', 'i.name as ingredients')
        .where({ 'r.id': id })
        .join('ingredients as i', 'r.ing_id', 'i.id')
        .first();
}

function add(recipe) {
    return db('recipes').insert(recipe);
}

function update(id, changes) {
    return db('recipes')
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return find()
            } else {
                return null
            }
        });
}

function remove(id) {
    return db('recipes')
        .where({ id })
        .del();
}
