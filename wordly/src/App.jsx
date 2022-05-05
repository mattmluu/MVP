/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import wordList from './FakeDB'
import './styles/App.css'
import Board from './Board.jsx'
import Letters from './Letters.jsx'
import Form from './Form.jsx'

function App() {
  const [userInput, setUserInput] = useState('')
  const [guessNumber, setGuessNumber] = useState(1);
  const [reveal, setReveal] = useState(false);
  const [secretWord, setSecretWord] = useState(
    wordList[Math.floor(Math.random() * wordList.length)]
  );
  const chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  useEffect(() => {
    axios.get('api/word/secret')
      .then((result) => setSecretWord(result.data))
      .catch((error) => console.log(error))
  }, [])

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
    if (guessNumber <= 6 ) {
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
        handleEnter()
      }
    }
  }

  useEventListener("keydown", handler)

  const changeColor = (divId, color) => {
    document.getElementById(divId).style.backgroundColor = color;
  }

  const handleEnter = () => {
    if (userInput.length === 5 && guessNumber <= 6) {
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === secretWord[i]) {
          changeColor(`Row${guessNumber - 1}Col${i}`, 'rgb(115, 165, 125)')
          changeColor(userInput[i], 'rgb(25, 25, 30)')
        } else if (secretWord.includes(userInput[i])) {
          changeColor(`Row${guessNumber - 1}Col${i}`, 'rgb(190, 90, 75)')
          changeColor(userInput[i], 'rgb(25, 25, 30)')
        } else {
          changeColor(`Row${guessNumber - 1}Col${i}`, 'rgb(25, 25, 30)')
          changeColor(userInput[i], 'rgb(25, 25, 30)')
        }
      }
      setGuessNumber(guessNumber + 1)
      setUserInput('')
    }
  }

  return (
    <div className="App">
      <h1 className="App-title">WORDLY</h1>
      <header className="Main-Content">

        <div className="Left-side-content">
          <Board userInput={userInput} guessNumber={guessNumber}/>
          <Letters />
        </div>

        <div className="Right-side-content">
          <motion.div
            id="Answer-reveal-button"
            onClick={() => {setReveal(true)}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {reveal ? secretWord : 'Reveal Answer'}
          </motion.div>
          <Form />
        </div>


      </header>
    </div>
  )
}

export default App
