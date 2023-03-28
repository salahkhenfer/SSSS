import React, { useState,useRef,useEffect } from "react";
// import components 
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import scss style
import "./styles/app.scss"
// import util 
import data from "./util"

function App() {
// states 
  const [songs, satSongs] = useState(data())
  const audioRef = useRef(null);
  const [indexOfSongs,satIndexOfSongs] = useState(0)
  const [currentsong, satcurrentsong] = useState(songs[indexOfSongs])
  const [isPlaying, satIsPlaying] = useState(false)
  const [navHover, satnavHover] = useState(false);
  const [songInfo ,setSongInfo] =useState({current:0,duration:0,animation :0,})
 // 
useEffect(() => {
  satcurrentsong(songs[indexOfSongs]);
  songs.map((s) => {
    if(s.id === songs[indexOfSongs].id){
    s.active = true;
    }else {
     s.active = false;
    }
   })
   if(isPlaying) {
    audioRef.current.play()
    const playPromise = audioRef.current.play();
    if (playPromise!== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play()
      })
    }
  }

},[indexOfSongs]);

  return (
    <div className={navHover?"App app-active ":"App"}>
      <Nav navHover={ navHover} satnavHover={ satnavHover} />
      <Song  currentsong={currentsong} />
      <Player  setSongInfo={setSongInfo} songInfo={songInfo} songs ={songs} indexOfSongs ={indexOfSongs}   satIndexOfSongs = {satIndexOfSongs} isPlaying={isPlaying} satIsPlaying={satIsPlaying} currentsong={currentsong} audioRef= {audioRef} />
      <Library 
      indexOfSongs = {indexOfSongs}
      navHover={navHover}
      songs={songs} 
      satcurrentsong={satcurrentsong}
      isPlaying={isPlaying} 
      satIsPlaying={satIsPlaying} 
      audioRef ={audioRef}
      currentsong ={currentsong}
      />
      <Footer/>
    </div>
  );
}

export default App;
