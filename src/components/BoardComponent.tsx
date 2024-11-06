import { Fragment } from 'react/jsx-runtime'
import { Board } from '../models/Board'
import CellComponent from './CellComponent'
import { useEffect, useState } from 'react'
import { Cell } from '../models/Cell'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

function BoardComponent({ board, setBoard }: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
    } else setSelectedCell(cell)
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
    <div className="board">
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map(cell => (
            <CellComponent
              click={click}
              cell={cell}
              key={cell.id}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default BoardComponent
