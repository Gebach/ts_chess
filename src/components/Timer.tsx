import { useEffect, useRef, useState } from 'react'
import { Player } from '../models/Player'
import { Colors } from '../models/Colors'

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}

function Timer({ currentPlayer, restart }: TimerProps) {
  const [blackTime, setBlackTime] = useState(300)
  const [whiteTime, setWhiteTime] = useState(300)
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  useEffect(() => {
    if (whiteTime === 0 || blackTime === 0) {
      alert(`${currentPlayer?.color} проиграл :(`)
      handleRestart()
    }
  }, [whiteTime, blackTime])

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }

    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer

    timer.current = setInterval(callback, 1000)
    if (timer.current <= 0) {
      alert(`${currentPlayer?.color} проиграл :(`)
    }
  }

  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1)
  }

  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1)
  }

  function handleRestart() {
    setWhiteTime(300)
    setBlackTime(300)
    restart()
  }

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart</button>
      </div>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  )
}

export default Timer
