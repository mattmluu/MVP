/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { motion } from "framer-motion"

function Form() {

  return (
    <form className="Submission">
      <div>
        <textArea
        />
      </div>

      <motion.button
        className="Submit-button"
        type="button"

        whileHover={{ scale:1.1 }}
        whileTap={{ scale:0.9 }}
      >
        Submit Word
      </motion.button>
    </form>
  )
}

export default Form