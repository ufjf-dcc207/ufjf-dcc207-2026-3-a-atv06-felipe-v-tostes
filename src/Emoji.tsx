import './Emoji.css';
const EMOJIS = new Map<string, string>([
    ["happy", "😊​"],
    ["sick", "🤢​"],
    ["dead", "😵​"],
]);
export default function Emoji(){
    return (
    <div className="emoji">
        🙂
    </div>
    );
}