const express = require('express')
const {Word} = require('../db/db.js')
const app = express();

app.use(express.json());


app.get('/test/server', (req, res) => {res.send({results: 'success'})})
app.get('/word/secret', (req, res) => {
  Word.findOne()
    .then((result) => res.send(result))
    .catch((error) => res.status(500).send(error))
})

app.post('/word/add', (req, res) => {
  let word = req.query
  Word.findOneAndUpdate(word, word, { new: true, upsert: true })
    .then((result) => res.status(200).send('nice'))
    .catch((error) => res.status(500).send(error))
})




app.listen(4000, () => {
  console.log(`server listening on port:'${4000}`)
});