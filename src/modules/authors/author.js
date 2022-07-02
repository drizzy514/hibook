const {authors, allAuthor} = require('./model')


module.exports ={
    POST: async(req, res ) => {
        const {fname, lname, img} = req.body
        const author = await authors(fname, lname, img)

        return res.json(author)
    },
    GET: async(_, res) => {
        const allAuthors = await allAuthor()
        return res.send(allAuthors)
    }
}