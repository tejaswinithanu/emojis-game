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

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    shuffledEmojisList: emojisList,
    selectedEmojis: [],
    endGame: false,
  }

  renderEmojisPart = () => {
    const {shuffledEmojisList} = this.state
    return (
      <ul className="emojis-list">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            onClickEmoji={this.onClickEmoji}
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
          />
        ))}
      </ul>
    )
  }

  onClickEmoji = emojiName => {
    const {selectedEmojis, topScore, score} = this.state
    if (!selectedEmojis.includes(emojiName)) {
      this.setState(prevState => ({
        selectedEmojis: [...prevState.selectedEmojis, emojiName],
        score: prevState.score + 1,
      }))
      const modifiedEmojisList = () =>
        emojisList.sort(() => Math.random() - 0.5)
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
    const {score, topScore, endGame} = this.state

    return (
      <div className="bg-container">
        <NavBar endGame={endGame} score={score} topScore={topScore} />
        <div className="emojis-container">
          {endGame === true ? (
            <WinOrLoseCard onPlayAgain={this.onPlayAgain} score={score} />
          ) : (
            this.renderEmojisPart()
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
