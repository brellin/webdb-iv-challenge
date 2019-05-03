const router = require('express').Router();

const recipes = require('../../data/helpers/recipes')

router.get('/', async (req, res) => {
    try {
        const get = await recipes.find()
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const getById = await recipes.findById(id)
        getById ?
            res.status(200).json(getById)
            :
            res.status(404).json({
                error: 'No recipe exists with the provided id. Please try again.'
            })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err.errno,
            message: 'Something went wrong. Please try again later.'
        })
    }
})

router.post('/', async (req, res) => {
    const { body } = req
    try {
        const post = await recipes.add(body)
        const get = await recipes.find()
        post ?
            res.status(200).json(get)
            :
            res.status(400).json({
                message: `'${body.name}' already exists as a recipe. Please try again.`
            })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err.code,
        })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        const put = await recipes.update(id, body)
        const get = await recipes.find()
        put ?
            res.status(200).json(get)
            :
            res.status(404).json({
                error: `'${id}' is not an existing id. Please try again.`
            })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err.errno,
            message: 'Something went wrong. Please try again later.'
        })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const del = await recipes.remove(id)
        const get = await recipes.find()
        del ?
            res.status(200).json(get)
            :
            res.status(404).json({
                error: `'${id}' is not an existing id. Please try again.`
            })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err.errno,
            message: 'Something went wrong. Please try again later.'
        })
    }
})

module.exports = router
