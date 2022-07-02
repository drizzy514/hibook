const pg = require('../../lib/postgres')



const INSERT_BOOK = `
    insert into books(
        book_title,
        book_price,
        book_img,
        book_description,
        book_category,
        book_author
    )values($1,$2,$3,$4,$5,$6)

`
const GET_BOOK = `
select book_title,
    book_price,
    book_description,
    book_img,
    category_name,
    author_fname,
    author_lname,
    author_img

from books inner join category on books.book_category = category.category_id
inner join authors on books.book_author = authors.author_id
order by book_created_at;

`
const DEL_BOOK = `
        delete from books where book_id = $1
`

const insertBook = (title, price, img, description, categroy, author) => pg.pg(INSERT_BOOK, title, price, img, description, categroy, author)
const getBooks = () => pg.pg(GET_BOOK)
const deleteBooks = (bookID) => pg.pg(DEL_BOOK, bookID)
module.exports = {
    insertBook, 
    getBooks,
    deleteBooks
}