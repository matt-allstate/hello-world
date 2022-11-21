import { useState } from "react";
import Song from "./Song";

const SongList = () => {

    const [visible, setVisible]  = useState(false);
      
    const toggleVisibility = () => {
        setVisible(!visible);
    }
    
    return (
        <div>
            <h1>Your favourite songs are:</h1>
            <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"} songs</button>
            <ul style={{display: visible ? "block" : "none" }}>
                <Song title="Last thing on my mind" artist="Steps" />
                <Song title="If you're over me" artist="Years and years" />
            </ul>
        </div>
    );
}

export default SongList;