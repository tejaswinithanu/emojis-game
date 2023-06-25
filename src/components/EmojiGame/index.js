/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const EmojisPart = props => {
  const {emojisList, onClickEmoji} = props
  return (
    <ul className="emojis-list">
      {emojisList.map(eachEmoji => (
        <EmojiCard
          onClickEmoji={onClickEmoji}
          key={eachEmoji.id}
          emojiDetails={eachEmoji}
        />
      ))}
    </ul>
  )
}

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    shuffledEmojisList: [],
    selectedEmojis: [],
    endGame: false,
  }

  onClickEmoji = emojiName => {
    const {selectedEmojis, topScore, score, endGame} = this.state
    if (!selectedEmojis.includes(emojiName)) {
      this.setState(prevState => ({
        selectedEmojis: [...prevState.selectedEmojis, emojiName],
        score: prevState.score + 1,
      }))
      const modifiedEmojisList = () => {
        const {emojisList} = this.props
        return emojisList.sort(() => Math.random() - 0.5)
      }
      this.setState({shuffledEmojisList: modifiedEmojisList()})
      if (score === 11) {
        if (topScore < score) {
          this.setState({topScore: score})
        }
        this.setState({endGame: true})
      }
    } else if (topScore < score) {
      this.setState({topScore: score})
      this.setState({endGame: true})
    }
  }

  onPlayAgain = () => {
    this.setState({score: 0, selectedEmojis: [], endGame: false})
  }

  render() {
    const {score, shuffledEmojisList, topScore, endGame} = this.state
    const {emojisList} = this.props

    return (
      <div className="bg-container">
        <NavBar endGame={endGame} score={score} topScore={topScore} />
        <div className="emojis-container">
          {endGame === true ? (
            <WinOrLoseCard onPlayAgain={this.onPlayAgain} score={score} />
          ) : (
            <EmojisPart
              emojisList={emojisList}
              onClickEmoji={this.onClickEmoji}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
