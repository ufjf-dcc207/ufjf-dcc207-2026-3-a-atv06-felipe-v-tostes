import './Emoji.css';
type EMOJIS_KEYS = "happy" | "sick" | "dead";
const EMOJIS_MAP = new Map<EMOJIS_KEYS, string>([
    ["happy", "😊​"],
    ["sick", "🤢​"],
    ["dead", "😵​"],
]);
export default function Emoji(){
    return (
    <div className="emoji">
        {EMOJIS_MAP.get("sick") || ​"🤔"}
    </div>
    );
}