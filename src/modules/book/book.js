const insertModel = require('./model');




module.exports = {
    POST: async (req, res) => {
        const {title, price, img, description, category, author } = req.body
        if(title && price && img && description && category && author){
            const book = await insertModel.insertBook(title, price, img, description, category, author)
            res.send(book)
        }

    },
    GET: async (req, res) => {
        const books = await insertModel.getBooks()
        return res.send(books)
    },
    DEL: async( req, res) => {
        const booksID = req.params.bookId
        const delBook = await insertModel.deleteBooks(booksID)
        return res.send(delBook)
    }

}
