const express = require('express')
const app = express()
const port = 7000


const connectDb = require("./database");
connectDb()

const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to Api PHRASES! Get it all at: https://phrasesapi.onrender.com/getAllPhrases or filter by categories at https://github.com/MCeciliaLuna/phrases-API')
})

app.use("/", routes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
