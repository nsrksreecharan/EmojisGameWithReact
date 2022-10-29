import './index.css'

const NavBar = props => {
  const {score, topScore, isDisplay} = props
  return (
    <nav className="navBar">
      <div className="logoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="Logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isDisplay ? null : (
        <div className="scoreContainer">
          <p className="Score">
            Score: <span>{score}</span> | Top Score: <span>{topScore}</span>
          </p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
