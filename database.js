require('dotenv').config()
const mongoose = require('mongoose');

const connectDb = async () => {
  const database = process.env.MONGODB_URI
  try {
   mongoose.connect(database)
   console.log('Database connected')
 } catch (error) {
   console.error(error)
 }
}

module.exports = connectDb;