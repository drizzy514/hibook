const {insertUser, getUsers} = require('./model')


module.exports = {
    POST: async(req, res) => {
        try{
                const {fname, lname, phone, email, adress, book} = req.body
             await insertUser(fname, lname, phone, email, adress, book)

                res.status(201).json({message: "ordered"})
        } catch(err) {
            console.log(err)
        }
    },
    GET: async (req, res) => {
        try{ 
            const users = await getUsers()

            if(users.length === 0) {
                return res.status(404).send({message: "user not found"})
            }

            res.json(users)

        } catch(Err) {
            console.log(Err)
        }
    }
}