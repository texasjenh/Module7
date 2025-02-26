import { useEmojiContext } from "../src/context/EmojiContext";

function Emoji () {

    const {emoji, handleSwitchEmoji} = useEmojiContext();

    return (
        <div className="Emoji componentBox">
            Emoji: {emoji}
            <button onClick={handleSwitchEmoji}> Change Mood </button>
        </div>
    )
}

export default Emoji
