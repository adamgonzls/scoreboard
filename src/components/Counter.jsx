import './Counter.css'

export default function Counter(props) {
  const { handleAddPoints, teamScore, setScore, children } = props

  return (
    <div className='score-display'>
      <h3 className='team-name'>{children}</h3>
      <div className='score'>{teamScore}</div>
      <div className='button-container'>
        <button
          className='score-button'
          onClick={() => handleAddPoints(1, setScore)}
        >
          +1
        </button>
        <button
          className='score-button'
          onClick={() => handleAddPoints(2, setScore)}
        >
          +2
        </button>
        <button
          className='score-button'
          onClick={() => handleAddPoints(3, setScore)}
        >
          +3
        </button>
      </div>
    </div>
  )
}
