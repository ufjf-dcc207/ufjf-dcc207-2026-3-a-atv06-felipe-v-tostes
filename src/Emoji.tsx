import './Emoji.css';
type EMOJIS_KEYS = "happy" | "sick" | "dead";
const EMOJIS_MAP = new Map<EMOJIS_KEYS, string>([
    ["happy", "😊​"],
    ["sick", "🤢​"],
    ["dead", "😵​"],
]);

export default function Emoji(){
    let status:EMOJIS_KEYS = "sick";
    function HappyClick(){
    console.log("Status: ", status);
    console.log("Happy!!!");
    status = "happy";
    console.log("Status: ", status);
}
    return ( 
    <>
    <div className="emoji">
        {EMOJIS_MAP.get(status) || ​"🤔"}
    </div>
    <div className="acoes"> 
    <button onClick={HappyClick}>Happy</button>
    </div>
    </>
    
    );
}