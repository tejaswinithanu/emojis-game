// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgain} = props
  const gameResult = score === 12 ? 'Won' : 'Lose'
  const onClickPlayButton = () => {
    onPlayAgain()
  }
  const scoreText = score === 12 ? 'Best Score' : 'Score'
  const resultImage =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="card-bg">
      <div className="result-board">
        <h1 className="result">You {gameResult}</h1>
        <div className="score-board">
          <p className="score-text">{scoreText}</p>
          <p className="display-score">{score}/12</p>
          <button
            onClick={onClickPlayButton}
            className="play-button"
            type="button"
          >
            Play Again
          </button>
        </div>
      </div>
      <img className="win-lose-img" alt="win or lose" src={resultImage} />
    </div>
  )
}

export default WinOrLoseCard
