const express = require('express')
const {PORT} = require('./assets/config')
const router= require('./modules/routes')

const app = express()
const cors = require('cors')

app.use(express.json())
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  };
app.use(cors(corsOptions))


app.use(router)







app.listen(PORT, () => console.log(`Server is runing in http://localhost:${PORT}`))