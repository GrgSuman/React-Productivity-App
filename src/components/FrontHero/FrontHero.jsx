import React,{useState,useRef} from 'react'
import MusicBox from '../FocusMusic/MusicBox';
import { useSelector } from 'react-redux';
import ClockNew from './ClockNew';

const FrontHero=()=> {
    const[focusState,setFocusState] = useState('pomo')

    const notificationAudio = useRef();

    const showMusicWidget = useSelector(state=>state.music.showMusicWidget)
    const notificationState = useSelector(state=>state.notification)
    const timeAndBreak = useSelector(state=>state.timeAndBreak)


    // Renderer callback with condition
    // const renderer = ({ hours, minutes, seconds, completed }) => {
    //   if (completed) {
    //     if(notificationState.notificationEnabled){
    //         notificationAudio.current.play()
    //         notificationAudio.current.volume=notificationState.alarmVolumeLevel
    //     }
    //     // change on completion of state
    //     return focusState==="pomo"?onCompletePomo():focusState==="short"?onCompleteShort():onCompleteLong();
    //   } else {
    //     // Render a countdown
    //     return <TimeComponent hours={hours} minutes={minutes} seconds={seconds}/>
    //   }
    // };

    // const onCompletePomo=()=>{
    //   setFocusState('short')
    // }

    // const onCompleteShort=()=>{
    //   setFocusState('long')
    // }

    // const onCompleteLong=()=>{
    //   setFocusState('pomo')
    // }

  return (

    <div className='min-h-[80vh] mx-auto mt-[4%] w-[100%] lg:w-[50%]'>
        <audio ref={notificationAudio} src={notificationState.alarmCollection[notificationState.alarmIndex].src}></audio>
        <div className='flex items-center justify-between'>
            <h2 onClick={()=>setFocusState('pomo')} style={{background:focusState==='pomo'?'white':'#ffffff63',color:focusState==='pomo'?'black':'white'}} className='cursor-pointer px-[30px] py-[10px] text-[1.3rem] rounded-full font-medium whitespace-nowrap'>pomodoro</h2>
            <h2 onClick={()=>setFocusState('short')} style={{background:focusState==='short'?'white':'#ffffff63',color:focusState==='short'?'black':'white'}} className='cursor-pointer px-[30px] py-[10px] text-[1.3rem] rounded-full font-medium whitespace-nowrap'>short break</h2>
            <h2 onClick={()=>setFocusState('long')} style={{background:focusState==='long'?'white':'#ffffff63',color:focusState==='long'?'black':'white'}} className='cursor-pointer px-[30px] py-[10px] text-[1.3rem] rounded-full font-medium whitespace-nowrap'>long break</h2>
        </div>

        {focusState==='pomo'&&<ClockNew seconds={timeAndBreak.pomoTime*60}/>}

        {focusState==='short'&&<ClockNew seconds={timeAndBreak.shortBreakTime*60}/>}

        {focusState==='long'&&<ClockNew seconds={timeAndBreak.longBreakTime*60}/>}

        {/* music widget show area */}
        {showMusicWidget && <MusicBox/>}

    </div>
  )
}

export default FrontHero