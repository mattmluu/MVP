/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { motion } from "framer-motion"
import axios from "axios"

function Form() {
  const [newWord, setNewWord] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('api/word/add', { word: newWord })
      .then((result) => (result))
      .catch((error) => console.log(error))
    setNewWord('')
  }

  const handleChange = (e) => {
    e.preventDefault()
    setNewWord(e.target.value.toUpperCase())
  }

  return (
    <form className="Submission" onSubmit={handleSubmit}>
      <div>
        <textarea
          onChange={handleChange}
          value={newWord}
          className='Add-word-input'
          placeholder='Add new word to the database'
          rows='3'
          cols='15'
          maxLength='5'
        />
      </div>

      <motion.button
        className="Submit-button"
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Add Word
      </motion.button>
    </form>
  )
}

export default Form