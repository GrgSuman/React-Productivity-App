import React,{useRef,useEffect} from 'react'
import {IoPlay} from 'react-icons/io5'
import {MdReplay} from 'react-icons/md'
import {BsPauseFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'

function TimeController({resetTime,toggleClock,isClockActive}) {
    const alarm = useSelector(state=>state.notification)
    const currentTikTikSound = useRef();

    useEffect(()=>{
        if(alarm.tiktikEnabled&&isClockActive){
          currentTikTikSound.current.play() 
        }else{
          currentTikTikSound.current.load() //we can do pause also but load sets to start sound from start
        }
    },[alarm.tiktikEnabled,isClockActive])

  return (
    <div className='flex justify-center items-center mt-[4%]'>
        <audio ref={currentTikTikSound} src={alarm.tiktikSound}></audio>
        <div onClick={()=>{
            resetTime()
        }}><MdReplay className='active:scale-[0.95] text-[2.5rem] transition ease-linear duration-200 text-white font-bold cursor-pointer'/></div>

       {!isClockActive && <button onClick={()=>{
            toggleClock(true)
       }} className='active:scale-[0.95] bg-white mx-[2rem] px-[2rem] py-[0.6rem] text-[1rem] sm:text-[1.6rem] font-medium rounded-full flex items-center justify-center'>
            <span>start</span>
            <span className='ml-2 font-normal'><IoPlay/></span>
        </button> }

       {isClockActive && <button onClick={()=>{
            toggleClock(false)
       }} className='active:scale-[0.95] bg-white mx-[2rem] px-[2rem] py-[0.6rem] text-[1rem] sm:text-[1.6rem] font-medium rounded-full flex items-center justify-center'>
            <span>pause</span>
            <span className='ml-2 font-normal'><BsPauseFill/></span>
        </button> }
    </div>
  )
}

export default TimeController