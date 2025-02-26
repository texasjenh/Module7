import { useEmojiContext } from "../context/emojiContext";

function Emoji () {
    const {emoji, handleSwitchEmoji} = useEmojiContext();

    // const [emoji, setEmoji] = useState('😊')

    // const handleSwithEmoji = () => {
    //     let newEmoji = emoji === '😊' ? "😒" : "😊"
    //     setEmoji(newEmoji)
    // }

    return (
        <div className="Emoji componentBox">
            Emoji: {emoji}
            <button onClick={handleSwitchEmoji}> Change Mood </button>
        </div>
    )
}

export default Emoji
