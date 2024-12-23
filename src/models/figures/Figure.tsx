import { Colors } from '../Colors'
import logo from '../../assets/black-bishop.png'
import { Cell } from '../Cell'

export enum FigureNames {
  FIGURE = 'Фигруа',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

export class Figure {
  color: Colors
  logo: typeof logo | null
  cell: Cell
  name: FigureNames
  id: number
  isCheck: boolean

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FigureNames.FIGURE
    this.id = Math.random()
    this.isCheck = false
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false
    if (target.figure?.name === FigureNames.KING) {
      target.figure.isCheck = true
      console.log(target.figure.isCheck)
      return false
    }
    return true
  }

  moveFigure(target: Cell) {}
}
