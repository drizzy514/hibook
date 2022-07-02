const {insertCategory, deleteCategory, getCategory} = require('./model');

module.exports = {
    GET: async (req, res) => {
        const categories = await getCategory()
        return res.json(categories)
    },

    POST: async ( req, res) => {
        const {name} = req.body
        const category = await insertCategory(name)
         return   res.send("ok")
    },
    DEL: async (req, res) => {
            const categoryId = req.params.id
            try {
                    await deleteCategory(categoryId)
                    return res.json('category deleted')
            } catch(err) {
                console.log(err)
            }
    }
}