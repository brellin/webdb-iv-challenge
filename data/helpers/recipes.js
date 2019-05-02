const db = require('../dbConfig')('recipes')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db
        .join('ingredients as i', 'recipes.ing_id', 'i.id')
        .select('recipes.name as recipe', 'recipes.quantity', 'i.name as ingredients');
}

function findById(id) {
    return db
        .where({ id })
        .first();
}

function add(recipe) {
    return db.insert(recipe);
}

function update(id, changes) {
    return db
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
    return db
        .where({ id })
        .del();
}
