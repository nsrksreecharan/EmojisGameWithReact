import {Component} from 'react'

import WinOrLoseCard from '../WinOrLoseCard'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    isEnded: false,
    isWon: false,
    lastScore: 0,
  }

  onPlayAgain = () => {
    const {topScore, score} = this.state
    const ComparedScore = score > topScore ? score : topScore
    this.setState({
      score: 0,
      topScore: ComparedScore,
      isEnded: false,
      isWon: false,
      lastScore: score,
      clickedEmojis: [],
    })
  }

  onSelected = id => {
    const {clickedEmojis, topScore, score, lastScore} = this.state
    const isPresent = clickedEmojis.includes(id)
    const ComparedScore = score > topScore ? score : topScore
    if (isPresent) {
      this.setState({
        score: 0,
        topScore: ComparedScore,
        isEnded: true,
        lastScore: score,
      })
    } else if (clickedEmojis.length === 11 && isPresent === false) {
      this.setState({
        score: 0,
        topScore: ComparedScore + 1,
        isEnded: true,
        isWon: true,
        lastScore: score + 1,
      })
    } else {
      clickedEmojis.push(id)
      this.setState({clickedEmojis: [...clickedEmojis], score: score + 1})
    }
  }

  render() {
    const {score, topScore, isEnded, isWon, lastScore} = this.state
    const {emojisList} = this.props
    const shuffledEmojis = () => emojisList.sort(() => Math.random() - 0.5)
    const newEmojisList = shuffledEmojis()
    return (
      <div className="AppContainer">
        {isEnded ? (
          <div>
            <NavBar isDisplay={1} />
            <WinOrLoseCard
              isWon={isWon}
              lastScore={lastScore}
              onPlayAgain={this.onPlayAgain}
            />
          </div>
        ) : (
          <div>
            <NavBar score={score} topScore={topScore} />
            <div className="emojiListContainer">
              <div className="emojiItemsContainer">
                {newEmojisList.map(i => (
                  <EmojiCard
                    key={i.id}
                    emojiDetails={i}
                    onSelected={this.onSelected}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
