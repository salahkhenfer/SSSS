import React ,{useEffect} from 'react'

function LibrarySongs({currentsong,indexOfSongs,song,satcurrentsong,isPlaying,audioRef,songs}) {

 

  // console.log(songs.indexOf(song));
  const selectsongHandelar = () => {
 
    satcurrentsong(song)
    songs.map((s) => {
      if(s.id === song.id){
      s.active = true;
      }else {
       s.active = false;
      }
     })
 
  
    // if (isPlaying) {
    //   satIsPlaying(!isPlaying)
    if(isPlaying) {
      audioRef.current.play()
      const playPromise = audioRef.current.play();
      if (playPromise!== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play()
        })
      }
    }

    
  }

  return (
    <div kay={song.id}  onClick={selectsongHandelar}  className= {song.active? "library-song selected":"library-song"} >
      <img src={song.cover} alt={song.name} />
      <div className='library-disception'>
          <h2>{song.name}</h2>
          <h3>{song.artist}</h3>
      </div>
    </div>
  )
}

export default LibrarySongs
