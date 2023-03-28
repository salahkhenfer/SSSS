import React, {  useState ,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause ,faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons'
function Player({ setSongInfo,songInfo,songs,indexOfSongs, satIndexOfSongs ,currentsong ,isPlaying ,satIsPlaying,audioRef}) {


    
    const playSongHandler = () => {
        if (!isPlaying){ 
            audioRef.current.play()
            satIsPlaying(!isPlaying)
           }else {
        
            audioRef.current.pause()
            satIsPlaying(!isPlaying)
        } 
     
       
      
    }

    
  const timeUpdateHandeler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      const animation = Math.round((current/duration)*100)
      setSongInfo({...songInfo ,current,duration,animation})
  }
  const getTime=(time) => {
  return (
   Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  )
  }
  const DragHandaler = (e) => {
      audioRef.current.currentTime = e.target.value;
      
      setSongInfo({ ...songInfo, current: e.target.value });
      
  }
  const skipBackHandaler = () => {
  if (indexOfSongs === 0) {
    satIndexOfSongs(songs.length - 1)
  } 
  else {satIndexOfSongs(indexOfSongs => indexOfSongs - 1)
  }
  }

  useEffect(() => {
    setSongInfo({ ...songInfo,animation:songInfo.animation})
  }, [songInfo.animation]);
  
    const skipForwardHandaler = () => {
  
   if (indexOfSongs ===songs.length - 1) {
    satIndexOfSongs(0)
  }
  else {satIndexOfSongs(indexOfSongs => indexOfSongs + 1)
  }
  
  }

  const styledTrack= {
    transform:`translateX(${songInfo.animation}%)`
  }
 const skiprHandaler =  () => {
    if (indexOfSongs ===songs.length - 1) {
        satIndexOfSongs(0)
      }
      else { satIndexOfSongs(indexOfSongs + 1)
      
        
      }
     if (isPlaying) audioRef.current.play();
      }
    
 
  return (
    <div className='Player'>
        <div  className='time-control'>
              
              <p>{getTime(songInfo.current) }</p>
              <div   className='track'>
            <input 
           
            min={0} max={songInfo.duration}
            value={songInfo.current}
            onChange={DragHandaler}
            type="range" 
            />
            <div style={styledTrack} className='track-animate'></div>
            </div>
            <p>{getTime(songInfo.duration ||0 )}</p>  
        </div>
        <div className='play-control'>
        <FontAwesomeIcon onClick={skipBackHandaler} className='skip-back' icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} className='play' icon={isPlaying?faPause:faPlay} />
        <FontAwesomeIcon onClick={skipForwardHandaler} className='skip-forward' icon={faAngleRight} />
        </div>
        <audio onEnded={skiprHandaler} onTimeUpdate={timeUpdateHandeler} ref={audioRef} src={currentsong.audio}></audio>
    </div>
  )
}

export default Player
