import React,{useRef,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {changeAlarmVolume,changeAlarm,toggleNotification,toggleTiktikSound} from '../../features/musicSystem/notficationAndAlarmSlice';
import {FiVolume2,FiVolume1,FiVolumeX} from 'react-icons/fi'

const SoundsAndNotifications=()=> {

  const currentAlarmSound = useRef();

  const alarm = useSelector(state=>state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    currentAlarmSound.current.volume = alarm.alarmVolumeLevel;
   },[alarm.alarmVolumeLevel]);

  return (
    <div className='px-10'>
        <div className='flex justify-between items-center mb-7'>
            <h3 className='font-medium'>Play Tik-Tik on Countdown</h3>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={alarm.tiktikEnabled} readOnly/>
            <div onClick={() => {dispatch(toggleTiktikSound())}} className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>   
            </label>   
        </div>

        <div className='flex justify-between items-center mb-7'>
            <h3 className='font-medium'>Play alarm sound when time ends</h3>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={alarm.notificationEnabled} readOnly/>
            <div onClick={() => {dispatch(toggleNotification());}} className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>   
            </label>   
        </div>

        <div className='mb-5'>
        <audio ref={currentAlarmSound} src={alarm.alarmCollection[alarm.alarmIndex].src}></audio>
        <label htmlFor="countries" className="block text-gray-900 dark:text-gray-400"><h3 className='font-medium'>Select alarm sound</h3></label>
          <select onChange={(e)=>{
              dispatch(changeAlarm(e.target.value))
            }}
            id="countries" className="bg-gray-50 border mt-2 border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {alarm.alarmCollection.map((x,index)=>{
              return <option selected={alarm.alarmIndex===index?true:false}  key={index+1} value={index}>{x.title}</option>
            })}
          </select>
        </div>

        <h3 className='font-medium'>Adjust alarm volume</h3>
        <div className='my-5 flex items-center gap-1'>
          {alarm.alarmVolumeLevel === 0.0 ? <FiVolumeX onClick={()=>dispatch(changeAlarmVolume(0.3))} size={20}/>:null}
          {alarm.alarmVolumeLevel > 0.0 && alarm.alarmVolumeLevel <= 0.5 && <FiVolume1 onClick={()=>dispatch(changeAlarmVolume(0.0))} size={20}/>}
          {alarm.alarmVolumeLevel > 0.5 && <FiVolume2 onClick={()=>dispatch(changeAlarmVolume(0.0))} size={20}/>}
          <input onChange={(e)=>{
             dispatch(changeAlarmVolume(e.target.value/100))
              currentAlarmSound.current.play()
          }}
          value={alarm.alarmVolumeLevel*100} type="range"  className=" w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"/>
        </div> 


    </div>
  )
}

export default SoundsAndNotifications