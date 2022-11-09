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

    const playAlarm=()=>{
      notificationAudio.current.volume=notificationState.alarmVolumeLevel
      notificationAudio.current.play()
    }

  return (

    <div className='min-h-[80vh] mx-auto sm:mt-[6%] mt-[20%] xl:w-[50%] w-[100%]'>
        <audio ref={notificationAudio} src={notificationState.alarmCollection[notificationState.alarmIndex].src}></audio>
        <div className='flex items-center justify-between'>
            <h2 onClick={()=>setFocusState('pomo')} style={{background:focusState==='pomo'?'white':'#ffffff63',color:focusState==='pomo'?'black':'white'}} className='cursor-pointer px-[10px] py-[8px] text-[1rem] sm:px-[30px] sm:py-[10px] sm:text-[1.3rem] rounded-full font-medium whitespace-nowrap'>pomodoro</h2>
            <h2 onClick={()=>setFocusState('short')} style={{background:focusState==='short'?'white':'#ffffff63',color:focusState==='short'?'black':'white'}} className='cursor-pointer px-[10px] py-[8px] text-[1rem] sm:px-[30px] sm:py-[10px] sm:text-[1.3rem] rounded-full font-medium whitespace-nowrap'>short break</h2>
            <h2 onClick={()=>setFocusState('long')} style={{background:focusState==='long'?'white':'#ffffff63',color:focusState==='long'?'black':'white'}} className='cursor-pointer px-[10px] py-[8px] text-[1rem] sm:px-[30px] sm:py-[10px] sm:text-[1.3rem] rounded-full font-medium whitespace-nowrap'>long break</h2>
        </div>

        {focusState==='pomo'&&<ClockNew seconds={timeAndBreak.pomoTime*60} playAlarm={playAlarm} nextState="short" setFocusState={setFocusState}/>}

        {focusState==='short'&&<ClockNew seconds={timeAndBreak.shortBreakTime*60} playAlarm={playAlarm} nextState="long" setFocusState={setFocusState}/>}

        {focusState==='long'&&<ClockNew seconds={timeAndBreak.longBreakTime*60} playAlarm={playAlarm} nextState="pomo" setFocusState={setFocusState}/>}

        {/* music widget show area */}
        {showMusicWidget && <MusicBox/>}

    </div>
  )
}

export default FrontHero