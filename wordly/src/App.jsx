/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import './styles/App.css'
import Board from './Board.jsx'

function App() {
  const [userInput, setUserInput] = useState('')
  const [guessNumber, setGuessNumber] = useState(1);
  const chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef()
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler])
    useEffect(() => {
      const eventListener = (event) => savedHandler.current(event)
      element.addEventListener(eventName, eventListener)
      return () => {
        element.removeEventListener(eventName, eventListener)
      };
    }, [eventName, element])
  };

  const handler = ({ key }) => {
    let keyPress = String(key).toUpperCase()
    console.log(keyPress)
    if (userInput.length < 5) {
      if (chars.includes(keyPress)) {
        let newInput = userInput + keyPress
        setUserInput(newInput)
      }
    }
    if (keyPress === 'BACKSPACE') {
      setUserInput(userInput.slice(0, -1))
    }
    if (keyPress === 'ENTER') {
      handleSubmit()
    }
  }

  useEventListener("keydown", handler)

  const changeColors = (coordinate, color) => {
    document.getElementById( 'Row2Col2' ).style.backgroundColor = "green"
  }

  const handleSubmit = () => {
    if (userInput.length === 5 && guessNumber <= 6) {
      setGuessNumber(guessNumber + 1)
      setUserInput('')
    }
  }

  return (
    <div className="App">
      <h1 className="App-title">WORDLY</h1>
      <header className="App-header">

        <Board userInput={userInput} guessNumber={guessNumber}/>

        <motion.button
          className="Submit-button"
          type="button"
          onClick={handleSubmit}
          whileHover={{ scale:1.1 }}
          whileTap={{ scale:0.9 }}
        >
          Submit Word
        </motion.button>


      </header>
    </div>
  )
}

export default App
