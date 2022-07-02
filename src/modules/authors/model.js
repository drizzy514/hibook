const postgres = require('../../lib/postgres');


const INSERT_AUTHOR =  `
    INSERT INTO 
    authors(author_fname, author_lname, author_img)
    VALUES($1,$2,$3)
`
const GET_AUTHOR = `
    select * from authors
`

const authors = (fname, lname, img) => postgres.pg(INSERT_AUTHOR, fname, lname, img)
const allAuthor = () => postgres.pg(GET_AUTHOR)

module.exports = {
    authors,
    allAuthor
}