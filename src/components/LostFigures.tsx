import { Figure } from '../models/figures/Figure'

interface lostFiguresProps {
  title: string
  figures: Figure[]
}

function LostFigures({ title, figures }: lostFiguresProps) {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figures.map(figure => (
        <div key={figure.id}>
          {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} />}
        </div>
      ))}
    </div>
  )
}

export default LostFigures
