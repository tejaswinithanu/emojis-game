// Write your code here.
import './index.css'

const ScoreBoard = props => {
  const {score, topScore} = props
  return (
    <div className="score-section">
      <p className="score">Score: {score}</p>
      <p className="score">Top Score: {topScore}</p>
    </div>
  )
}

const NavBar = props => {
  const {score, topScore, endGame} = props
  const displayScore =
    endGame === true ? null : <ScoreBoard score={score} topScore={topScore} />
  return (
    <nav className="nav-bg">
      <div className="logo-section">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {displayScore}
    </nav>
  )
}

export default NavBar
