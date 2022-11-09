import React,{useState} from 'react'
import {VscClose,VscChevronLeft,VscChevronDown,VscChevronUp} from 'react-icons/vsc'
import BackgroundOptions from '../SubSettings/BackgroundOptions'
import TimeAndBreak from '../SubSettings/TimeAndBreak'
import SoundsAndNotifications from '../SubSettings/SoundsAndNotifications'
import Widgets from '../SubSettings/Widgets'

const SettingsDrawer = ({settingsDrawerPosition,setSettingsDrawerPosition}) => {
  const[innerSetting,setInnerSetting] = useState(false)
  const[controllerOpen,setControllerOpen] = useState({
       isDailyGoalsOpen:false,
       isTimeAndBreakOpen:false,
       isSoundAndNotificationOpen:false,
       isSetBackgroundOpen:false,
       isAddRemoveWidgetOpen:false,
  })

  const closeSubOption = (x)=>{
       setControllerOpen((prev)=>{
         const newobj = {
            isDailyGoalsOpen:false,
            isTimeAndBreakOpen:false,
            isSoundAndNotificationOpen:false,
            isSetBackgroundOpen:false,
            isAddRemoveWidgetOpen:false,
         }
         for (let key in newobj) {
            if(key===x){
               newobj[key] = !prev[x]
            }
            else{
               newobj[key]=false
            }
          }
         return newobj
       })
  }

  return (
    <div className={`h-[100vh] bg-white w-[330px] sm:w-[450px] fixed top-0 overflow-y-scroll z-20`} style={{right:settingsDrawerPosition,transition:'linear .2s'}}>

      {/* top-controllers */}
      <div className='flex items-center justify-between px-4 py-2 border-b-2'>
        {innerSetting&&<div onClick={()=>setInnerSetting(!innerSetting)} className="rounded-full py-3 cursor-pointer active:bg-gray-100"><VscChevronLeft size={25}/></div>}
        <h1 className='text-xl font-semibold'>Settings</h1>
        <div onClick={()=>{
          setSettingsDrawerPosition('-450px')
          setControllerOpen({
            isDailyGoalsOpen:false,
            isTimeAndBreakOpen:false,
            isSoundAndNotificationOpen:false,
            isSetBackgroundOpen:false,
            isAddRemoveWidgetOpen:false
         })
         }} style={{visibility:innerSetting?'hidden':'visible'}} className="rounded-full p-3 cursor-pointer bg-gray-100 active:bg-gray-200"><VscClose size={25}/></div>
      </div>

      {/* setting options */}
      <h2 className='text-[1.1rem] cursor-pointer flex justify-between items-center my-5 hover:bg-gray-50 active:bg-gray-100 py-4 px-7'>
         <span className='font-semibold'>Set Daily Goals</span>
         <VscChevronDown size={25}/>
      </h2>


      {/* Custom time and break controllers */}
      <h2 onClick={()=>closeSubOption('isTimeAndBreakOpen')} className='text-[1.1rem] cursor-pointer flex justify-between items-center my-5 hover:bg-gray-50 active:bg-gray-100 py-4 px-7'>
         <span className='font-semibold'>Manage Break and Timer</span>
         {controllerOpen.isTimeAndBreakOpen?<VscChevronUp size={25}/>:<VscChevronDown size={25}/>}
      </h2>
      {controllerOpen.isTimeAndBreakOpen&&<TimeAndBreak/>}

      {/* sound and notification controllers */}
      <h2 onClick={()=>closeSubOption('isSoundAndNotificationOpen')} className='text-[1.1rem] cursor-pointer flex justify-between items-center my-5 hover:bg-gray-50 active:bg-gray-100 py-4 px-7'>
         <span className='font-semibold'>Sounds and Notifications</span>
         {controllerOpen.isSoundAndNotificationOpen?<VscChevronUp size={25}/>:<VscChevronDown size={25}/>}
      </h2>
      {controllerOpen.isSoundAndNotificationOpen&&<SoundsAndNotifications/>}


      <h2 onClick={()=>closeSubOption('isSetBackgroundOpen')} className='text-[1.1rem] cursor-pointer flex justify-between items-center my-5 hover:bg-gray-50 active:bg-gray-100 py-4 px-7'>
         <span className='font-semibold'>Change Background</span>
         {controllerOpen.isSetBackgroundOpen?<VscChevronUp size={25}/>:<VscChevronDown size={25}/>}
      </h2>
      {controllerOpen.isSetBackgroundOpen&&<BackgroundOptions/>}

      <h2 onClick={()=>closeSubOption('isAddRemoveWidgetOpen')} className='text-[1.1rem] cursor-pointer flex justify-between items-center my-5 hover:bg-gray-50 active:bg-gray-100 py-4 px-7'>
         <span className='font-semibold'>Show / Hide Widgets</span>
         {controllerOpen.isTimeAndBreakOpen?<VscChevronUp size={25}/>:<VscChevronDown size={25}/>}
      </h2>
      {controllerOpen.isAddRemoveWidgetOpen&&<Widgets/>}

    </div>
  )
}

export default SettingsDrawer