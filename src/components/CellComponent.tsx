import { Cell } from '../models/Cell'

interface CellProps {
  cell: Cell
}

function CellComponent({ cell }: CellProps) {
  return <div className={['cell', cell.color].join(' ')}></div>
}

export default CellComponent
