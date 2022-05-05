const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
  word: String
})
const Word = mongoose.model('Word', wordSchema)

mongoose.connect('mongodb://localhost:27017/MVP', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('connected')
  }
})

module.exports.Word = Word