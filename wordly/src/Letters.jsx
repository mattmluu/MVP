/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { motion } from "framer-motion"

function Letters() {
  const chars = {
    col1: ['A','B','C','D','E','F','G','H','I'],
    col2: ['J','K','L','M','N','O','P','Q','R'],
    col3: ['S','T','U','V','W','X','Y','Z']
  }
  //im lazy
  return (
    <div className="Letters">
      <span>
        {chars.col1.map((char, index) =>
        <div id={`${char}`} className="Letter" key={index}>{char}</div>)}
      </span>
      <span>
        {chars.col2.map((char, index) =>
        <div id={`${char}`} className="Letter" key={index}>{char}</div>)}
      </span>
      <span>
        {chars.col3.map((char, index) =>
        <div id={`${char}`} className="Letter" key={index}>{char}</div>)}
      </span>
    </div>
  )
}

export default Letters