/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

function Board({ userInput, guessNumber }) {
  const [board, setBoard] = useState(
    [
      [ '', '', '', '', '' ],
      [ '', '', '', '', '' ],
      [ '', '', '', '', '' ],
      [ '', '', '', '', '' ],
      [ '', '', '', '', '' ],
      [ '', '', '', '', '' ]
    ]
  )

  useEffect(() => {
    //loop to create a copy of the board otherwise component wont re-render
    //references:
    //https://stackoverflow.com/questions/58106664/react-usestate-hook-not-triggering-re-render-of-child-component
    //https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
    let newBoard = [];
    for (let row = 0; row < board.length; row++) {
      newBoard.push([])
      for (let col = 0; col < board[row].length; col++) {
        newBoard[row].push(board[row][col])
      }
    }

    //issue: backspaces are no longer handled (the state is cleared but not the board state)
    //idea instead of looping thru just the length of the userInput,
    //convert userInput to an array with chars and empty string "if userInput < 5" that way when
    //reassigning the values of the new board, empty strings will essentially clear backspaced letters
    let input = [ '', '', '', '', '' ]
    for (let i = 0; i < userInput.length; i++) {
      input[i] = userInput[i]
    }

    //update state of the board to trigger the re-render
    for (let i = 0; i < input.length; i++) {
      if (guessNumber <=6) {
        newBoard[guessNumber - 1][i] = input[i]
        setBoard(newBoard)
      }
    }
  }, [userInput]); // <-- watch for changes to userInput values otherwise this will loop infinitely


  return (
    <div className="Board">
      {
        board.map((word, rowIndex) =>
          <div className="Word" id={`Word${rowIndex+1}`} key={rowIndex}>
            {
              board[rowIndex].map((char, colIndex) =>
                <motion.span
                  id={`Row${rowIndex}Col${colIndex}`}
                  className="Coordinate"
                  key={colIndex}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="Char">{board[rowIndex][colIndex]}</div>
                </motion.span>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default Board