import { useState } from "react";
import Song from "./Song";
import './Songs.css'

const SongList = () => {

    const [visible, setVisible]  = useState(false);
      
    const toggleVisibility = () => {
        setVisible(!visible);
    }

    const [song1, setSong1] = useState({title : "Last thing on my mind", artist: "Steps"});
    const [song2, setSong2] = useState({title: "If you're over me", artist: "Years and years" });
    
    const changeSong1 = () => {
        setSong1({...song1, title: "Tragedy"});
    }

    return (
        <div>
            <h1>Your favourite songs are:</h1>
            <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"} songs</button>
            <ul className={visible ? "songs-display" : "songs-hidden"}>
                <Song song={song1} />
                <Song song={song2} />
            </ul>
            <button onClick={changeSong1}>Change song 1</button>
        </div>
    );
}

export default SongList;