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
    //note to self row index is guess num - 1
    let newBoard = board
    for (let i = 0; i < userInput.length; i++) {
      newBoard[guessNumber - 1][i] = userInput[i]
      setBoard(newBoard)
    }
  });


  return (
    <div className="Board">
      {
        board.map((word, rowIndex) =>
          <div className="Word" id={`Word${rowIndex+1}`} key={rowIndex}>
            {
              board[rowIndex].map((char, colIndex) =>
                <motion.span
                  id={`Row${rowIndex+1}Col${colIndex+1}`}
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