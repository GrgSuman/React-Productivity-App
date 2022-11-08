import React,{useState,useEffect} from 'react'
import TimeComponent from './TimeComponent';
import TimeController from './TimeController';

const ClockNew =({seconds})=> {

const[time,setTime] = useState(seconds)
const[active,setActive] = useState(false)

    useEffect(()=>{

        if(active&&time>0){
            var interval = setInterval(()=>{
                setTime((time)=>time-1)
            },1000);
        }
        return () => clearInterval(interval);
    
    },[time,active])

    const toggleClock=()=>{
        setActive(!active)
    }

    const resetTime=()=>{
        setTime(seconds)
    }

    const getTime = ()=>{
        const min = Math.floor(time/60)
        const sec = time%60
        return{
            minutes: min<10?'0'+min:min,
            seconds:sec<10?'0'+sec:sec
        }
    }

  return (
    <div>
        <TimeComponent time={getTime}/>
        <TimeController resetTime={resetTime} toggleClock={toggleClock} isClockActive={active}/>
    </div>
  )
}

export default ClockNew