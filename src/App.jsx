import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [homeScore, setHomeScore] = useState(0)
  const [guestScore, setGuestScore] = useState(0)

  function addPoints(value, setScore) {
    setScore((prevScore) => (prevScore += value))
  }

  return (
    <div className='App'>
      <div className='scoreboard'>
        <Counter
          handleAddPoints={addPoints}
          teamScore={homeScore}
          setScore={setHomeScore}
        >
          Home
        </Counter>
        <Counter
          handleAddPoints={addPoints}
          teamScore={guestScore}
          setScore={setGuestScore}
        >
          Guest
        </Counter>
      </div>
    </div>
  )
}

export default App
