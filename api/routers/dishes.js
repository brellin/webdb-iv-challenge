const router = require('express').Router();

const dishes = require('../../data/helpers/dishes')

router.get('/', async (req, res) => {
    try {
        const get = await dishes.find()
        res.status(200).json(get)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const getById = await dishes.findById(id)
        getById ?
            res.status(200).json(getById)
            :
            res.status(404).json({
                error: 'No dish exists with the provided id. Please try again.'
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
        const post = await dishes.add(body)
        res.status(200).json({
            name: body.name,
            id: post[0]
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err.code,
            message: `'${body.name}' already exists as a dish. Please try again.`
        })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    try {
        const put = await dishes.update(id, body)
        const get = await dishes.find()
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
        const del = await dishes.remove(id)
        const get = await dishes.find()
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
