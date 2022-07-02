const postgres = require('../../lib/postgres')

const ORDER_USER = `
    insert into users(
        user_fname,
        user_lname,
        user_phone,
        user_adress,
        user_email,
        user_book
    )
    values($1, $2, $3, $4,$5,$6)
`

const GET_USER = `
        select 
            user_fname,
            user_lname,
            user_email,
            user_phone,
            user_adress,
            book_img,
            book_title,
            book_price,
            book_description,
            category_name, 
            author_fname,
            author_lname
        from users inner join books on users.user_book = books.book_id
        inner join authors on books.book_author = authors.author_id
        inner join category on books.book_category = category.category_id
         order by book_created_at;
`

const insertUser = (fname, lname, phone, email, adress, book) => postgres.pg(ORDER_USER, fname, lname, phone, email, adress, book )
const getUsers = () => postgres.pg(GET_USER)

module.exports ={
    insertUser,
    getUsers
}