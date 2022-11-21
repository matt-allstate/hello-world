import { useState } from "react";
import Song from "./Song";
import './Songs.css'

const SongList = () => {

    const [visible, setVisible]  = useState(false);
      
    const toggleVisibility = () => {
        setVisible(!visible);
    }

    const [song1, setSong1] = useState({title : "Last thing on my mind", artist: "Steps", votes: 0});
    const [song2, setSong2] = useState({title: "If you're over me", artist: "Years and years", votes :0 });
    
    const changeSong1 = () => {
        setSong1({...song1, title: "Tragedy"});
    }

    const voteForSong1 = () => {
        setSong1({...song1, votes : song1.votes + 1});
    }

    const voteForSong2 = () => {
        setSong2({...song2, votes : song2.votes + 1});
    }

    return (
        <div>
            <h1>Your favourite songs are:</h1>
            <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"} songs</button>
            <ul className={visible ? "songs-display" : "songs-hidden"}>
                <Song song={song1} vote={voteForSong1} />
                <Song song={song2} vote={voteForSong2} />
            </ul>
            <button onClick={changeSong1}>Change song 1</button>
        </div>
    );
}

export default SongList;