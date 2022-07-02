const postgres = require('../../lib/postgres');


const INSERT_CATEGORY = `
    insert into category(
        category_name
    )values($1)
`
const GET_CATEGORY = `
        select * from category
`

const DEL_CATEGORY = `
        delete  from categroy where category_id =$1
`


const insertCategory = (name) => postgres.pg(INSERT_CATEGORY, name)
const getCategory = () => postgres.pg(GET_CATEGORY)
const deleteCategory = (id) => postgres.pg(DEL_CATEGORY, id)

module.exports ={
    insertCategory,
    getCategory,
    deleteCategory
}