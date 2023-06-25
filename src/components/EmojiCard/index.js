// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiUrl, emojiName} = emojiDetails
  const onSelectEmoji = () => {
    onClickEmoji(emojiName)
  }
  return (
    <li className="emoji-list-item">
      <button onClick={onSelectEmoji} className="emoji-container" type="button">
        <img className="emoji-img" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
