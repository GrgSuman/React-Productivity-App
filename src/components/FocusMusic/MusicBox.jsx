import React,{useState,useRef,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {IoPlay} from 'react-icons/io5'
import {BsPauseFill} from 'react-icons/bs'
import {FiVolume2,FiVolume1,FiVolumeX} from 'react-icons/fi'
import {MdSkipNext,MdSkipPrevious} from 'react-icons/md'
import musicIcon from '../../assets/music.jpg'
import {changeMusicVolume,playPreviousMusic,playNextMusic} from '../../features/musicSystem/musicSlice';

const MusicBox=()=> {
  const currentMusic = useRef();
  const[musicState,setMusicState] = useState(false)
  const music = useSelector(state=>state.music)
  const dispatch = useDispatch()
  

  useEffect(() => {
    if (musicState) {
      currentMusic.current.play();
    } else {
      currentMusic.current.pause();
    }
  },[music.musicIndex,musicState]);

  useEffect(() => {
   currentMusic.current.volume = music.musicVolumeLevel;
  },[music.musicVolumeLevel]);

  return (
    <div className='w-[200px] bg-[#00000095] h-[130px] rounded-lg absolute left-[5%] bottom-[8%] flex justify-center gap-4 items-center'>
        <img src={musicIcon} className="h-[120px] -z-10 rounded-lg w-[180px] absolute top-0 left-0" alt="musicIcon"/>
 
        <audio ref={currentMusic} src={music.musicCollection[music.musicIndex].src}></audio>

        <div onClick={()=>{
          if(music.musicIndex!==0){
            dispatch(playPreviousMusic())
          }
        }} className='text-[#ffffff97] hover:text-white cursor-pointer'>
          <MdSkipPrevious size={25}/>
        </div>

        {!musicState&&<div onClick={()=>{
          currentMusic.current.play()
          setMusicState(true)
        }} className='p-2 rounded-full bg-[#ffffff6c] hover:bg-white cursor-pointer'>
          <IoPlay size={20}/>
        </div>}

        {musicState&&<div onClick={()=>{
          currentMusic.current.pause()
          setMusicState(false)
        }} className='p-2 rounded-full bg-[#ffffff6c] hover:bg-white cursor-pointer'>
          <BsPauseFill size={20}/>
        </div>}

        <div onClick={()=>{
          if(music.musicIndex<(music.musicCollection.length-1)){
            dispatch(playNextMusic())
          }
        }} className='text-[#ffffff97] hover:text-white cursor-pointer'>
        <MdSkipNext size={25}/>
      </div>

        <div className='absolute -top-1 left-0 m-3 text-[#ffffffbf]'>
          {music.musicCollection[music.musicIndex].title}
        </div>

        <div className='my-5 flex items-center gap-1 m-3 absolute -bottom-2 text-[#ffffffbf] ease-linear duration-300 hover:text-white cursor-pointer'>
          {music.musicVolumeLevel===0.0 && <FiVolumeX onClick={()=>dispatch(changeMusicVolume(0.3))} size={20}/>}
          {music.musicVolumeLevel > 0.0 && music.musicVolumeLevel <= 0.5 && <FiVolume1 onClick={()=>dispatch(changeMusicVolume(0.0))} size={20}/>}
          {music.musicVolumeLevel > 0.5 && <FiVolume2 onClick={()=>dispatch(changeMusicVolume(0.0))} size={20}/>}
          <input type="range" onChange={(e)=>{
            dispatch(changeMusicVolume(e.target.value/100))
          }} 
          value={music.musicVolumeLevel*100}
          className="opacity-[0.3] hover:opacity-[0.8] ease-linear duration-300 w-full h-[2px] bg-gray-100 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"/>
        </div>

    </div>
  )
}

export default MusicBox