const Song = (props) => {

//const song1 = {title : "Last thing on my mind", artist: "Steps"};

return (
   <li>{props.song.title} by {props.song.artist}</li> 
)
}

export default Song;