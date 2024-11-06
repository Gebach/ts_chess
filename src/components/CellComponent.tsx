import { Cell } from '../models/Cell'
import { Colors } from '../models/Colors'
import { Player } from '../models/Player'

interface CellProps {
  cell: Cell
  selected: boolean
  currentPlayer: Player | null
  isCheck: boolean
  click: (cell: Cell) => void
}

function CellComponent({ cell, selected, click, currentPlayer, isCheck }: CellProps) {
  return (
    <div
      className={['cell', cell.color, selected && 'selected', isCheck && 'check'].join(' ')}
      onClick={() => click(cell)}
      style={{ background: cell.available && cell.figure ? 'green' : '' }}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && (
        <img
          style={{ transform: currentPlayer?.color === Colors.BLACK ? 'rotate(180deg)' : 'rotate(0deg)' }}
          src={cell.figure.logo}
        />
      )}
    </div>
  )
}

export default CellComponent
