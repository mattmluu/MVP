/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { motion } from "framer-motion"

function Letters() {
  const chars = {
    row1: ['Q','W','E','R','T','Y','U','I','O','P'],
    row2: ['A','S','D','F','G','H','J','K','L'],
    row3: ['Enter','Z','X','C','V','B','N','M','<--']
  }

  return (
    <div className="Letters">
      <span className="Letters-row">
        {chars.row1.map((char, index) =>
        <motion.div id={`${char}`} className="Letter" key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >{char}</motion.div>)}
      </span>
      <span className="Letters-row">
        {chars.row2.map((char, index) =>
        <motion.div id={`${char}`} className="Letter" key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >{char}</motion.div>)}
      </span>
      <span className="Letters-row">
        {chars.row3.map((char, index) =>
        <motion.div id={`${char}`} className="Letter" key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >{char}</motion.div>)}
      </span>
    </div>
  )
}

export default Letters