import { Fragment } from 'react/jsx-runtime'
import { Board } from '../models/Board'
import CellComponent from './CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

function BoardComponent({ board, setBoard }: BoardProps) {
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map(cell => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default BoardComponent
