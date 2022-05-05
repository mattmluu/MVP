const mongoose = require('mongoose')
const random = require('mongoose-random');

const Schema = new mongoose.Schema({ word: String })
Schema.plugin(random, { path: 'r' })
const Word = mongoose.model('Word', Schema)

mongoose.connect('mongodb://localhost:27017/MVP', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('connected')
  }
})

module.exports.Word = Word