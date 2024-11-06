import { Fragment } from 'react/jsx-runtime'
import { Board } from '../models/Board'
import CellComponent from './CellComponent'
import { useEffect, useState } from 'react'
import { Cell } from '../models/Cell'
import { Player } from '../models/Player'
import { Colors } from '../models/Colors'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
}

function BoardComponent({ board, setBoard, currentPlayer, swapPlayer }: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
    } else {
      if (cell.figure?.color === currentPlayer?.color) setSelectedCell(cell)
    }
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div>
      <h3>Текщий игрок: {currentPlayer?.color}</h3>
      <div
        className="board"
        style={{
          transform: currentPlayer?.color === Colors.BLACK ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
      >
        {board.cells.map((row, index) => (
          <Fragment key={index}>
            {row.map(cell => (
              <CellComponent
                click={click}
                isCheck={false}
                currentPlayer={currentPlayer}
                cell={cell}
                key={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default BoardComponent
