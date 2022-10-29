import './index.css'

const WinOrLoseCards = props => {
  const {isWon, lastScore, onPlayAgain} = props
  const PlayAgain = () => {
    onPlayAgain()
  }
  return (
    <div className="resultCard">
      {isWon ? (
        <div className="winnerCard">
          <div className="ResultContainer">
            <div className="Image1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                alt="won"
              />
            </div>
            <h1 className="resultHeading">You Won</h1>
            <div className="ScoreBoard">
              <p className="resultName">Best Score</p>
              <p className="finalScore">{lastScore}/12</p>
            </div>
            <button
              type="button"
              onClick={PlayAgain}
              className="playAgainButton"
            >
              Play Again
            </button>
          </div>
          <div className="ResultImageContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="won"
              className="Image2"
            />
          </div>
        </div>
      ) : (
        <div className="winnerCard">
          <div className="ResultContainer">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                alt="lost"
                className="Image1"
              />
            </div>
            <h1 className="resultHeading">You Lose</h1>
            <div className="ScoreBoard">
              <p className="resultName">Your Score</p>
              <p className="finalScore">{lastScore}/12</p>
            </div>
            <button
              type="button"
              onClick={PlayAgain}
              className="playAgainButton"
            >
              Play Again
            </button>
          </div>
          <div className="ResultImageContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="lost"
              className="Image2"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCards
