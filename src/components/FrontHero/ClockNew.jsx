import React,{useState,useEffect} from 'react'
import TimeComponent from './TimeComponent';
import TimeController from './TimeController';
import { useSelector } from 'react-redux';


const ClockNew =({seconds,playAlarm,nextState,setFocusState})=> {

const[time,setTime] = useState(seconds)
const[active,setActive] = useState(false)

const notificationState = useSelector(state=>state.notification)

    useEffect(()=>{

        if(active && time>0){
            var interval = setInterval(()=>{
                setTime((time)=>time-1)
            },1000);
        }
        if(time===0){
            setFocusState(nextState)
            notificationState.notificationEnabled && playAlarm()
        }
        return () => clearInterval(interval);
    
    },[time,active,setFocusState,nextState,playAlarm,notificationState.notificationEnabled])


// DO NOT UPDATE TIME WHEN TIME IS RUNNING BUT UPDATE SHOWS IMMEDIATELY IF NOT ACTIVE
    // useEffect(()=>{
    //     !active && setTime(seconds)
    // },[seconds,active])

    const toggleClock=(status)=>{
        setActive(status)
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
        <TimeComponent minutes={getTime().minutes} seconds={getTime().seconds}/>
        <TimeController resetTime={resetTime} toggleClock={toggleClock} isClockActive={active}/>
    </div>
  )
}

export default ClockNew