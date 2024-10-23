import { Cell } from '../models/Cell'

interface CellProps {
  cell: Cell
}

function CellComponent({ cell }: CellProps) {
  return <div className={['cell', cell.color].join(' ')}>{cell.figure?.logo && <img src={cell.figure.logo} />}</div>
}

export default CellComponent
