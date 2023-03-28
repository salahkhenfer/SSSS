import React from 'react'
import LibrarySongs from './LibrarySongs'
function Library({currentsong,indexOfSongs,songs,satcurrentsong,isPlaying,satIsPlaying,audioRef,navHover}) {



  return (
    <div className={navHover?'library library-active':"library" }   >
      <h2 className='library-h2'>المكتبة</h2>
      <div className='library-songs'>
      {songs.map((song) => 
          <LibrarySongs currentsong={currentsong} indexOfSongs={indexOfSongs} key={song.id} satcurrentsong={satcurrentsong}  song={song} isPlaying={isPlaying} satIsPlaying={satIsPlaying} audioRef={audioRef} songs={songs} />
      )}
      
      </div>
    </div>
  )
}

export default Library
