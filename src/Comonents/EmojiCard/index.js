import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onSelected} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const onSelect = () => {
    onSelected(id)
  }

  return (
    <div className="emojiContainer">
      <img
        src={emojiUrl}
        onClick={onSelect}
        alt={emojiName}
        className="emojiImage"
      />
    </div>
  )
}

export default EmojiCard
