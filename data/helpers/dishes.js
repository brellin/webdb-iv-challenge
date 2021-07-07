const db = require('../dbConfig')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('dishes')
}

function findById(id) {
    return db('dishes')
        .where({ id })
        .first();
}

function add(dish) {
    return db('dishes')
        .insert(dish)
}

function update(id, changes) {
    return db('dishes')
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
    return db('dishes')
        .where({ id })
        .del();
}
