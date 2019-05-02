const db = require('../dbConfig')('dishes')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db;
}

function findById(id) {
    return db
        .where({ id })
        .first();
}

function add(dish) {
    return db.insert(dish);
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
