import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import {changePomoTime,changeShortBreakTime,changeLongBreakTime,changeLongBreakTimeStart,changeAutoBreakStatus,changeAutoPomoStatus} from '../../features/timeAndBreak/timeAndBreak'

const TimeAndBreak=()=> {

  const dispatch = useDispatch()
  const timeAndBreak = useSelector(state=>state.timeAndBreak)

  const[pomoTime,setPomoTime] = useState(timeAndBreak.pomoTime)
  const[shortTime,setShortTime] = useState(timeAndBreak.shortBreakTime)
  const[longTime,setLongTime] = useState(timeAndBreak.longBreakTime)
  const[pomoTimeStartIn,setPomoTimeStartIn] = useState(timeAndBreak.startLongBreakIn)
  const[changed,setChanged] = useState(false)
  const[loading,setLoading] = useState(false)

  const validateInput=()=>{
    setLoading(true)
    if(pomoTime!==0 && pomoTime > 0 && pomoTime!=="" && pomoTime <60){
      dispatch(changePomoTime(pomoTime))
    }else{
      alert("Ideal Pomo time is 25 - 59")
      setPomoTime(timeAndBreak.pomoTime)
    }

    if(shortTime!==0 && shortTime!=="" && shortTime > 0 && shortTime <60){
      dispatch(changeShortBreakTime(shortTime))
    }else{
      alert("Ideal Short break time is 5 - 10")
      setShortTime(timeAndBreak.shortBreakTime)
    }

    if(longTime!==0 && longTime!=="" && longTime > 0 && longTime <60){
      dispatch(changeLongBreakTime(longTime))
    }else{
      alert("Ideal Short break time is 15 - 25")
      setLongTime(timeAndBreak.longBreakTime)
    }

    if(pomoTimeStartIn!==0 && pomoTimeStartIn!=="" && pomoTimeStartIn > 0 && pomoTimeStartIn <10){
      dispatch(changeLongBreakTimeStart(pomoTimeStartIn))
    }else{
      alert("Ideal Short break time is 2 - 5")
      setPomoTimeStartIn(timeAndBreak.startLongBreakIn)
    }
    setChanged(false)
    setTimeout(()=>{
      setLoading(false)
    },300)
  }

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className='px-10'>
      <div className='flex items-center justify-between gap-3 mb-5'>
        <section>
        <label htmlFor="pomo_time" className="block mb-2 text-gray-900"><h3 className='whitespace-nowrap font-medium'>Pomo Time</h3></label>
        <input type="number" value={pomoTime} onChange={(e)=>{
          setChanged(true)
          setPomoTime(e.target.value)
        }} id="pomo_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="25" />
        </section>

        <section>
        <label htmlFor="short_time" className="block mb-2 text-gray-900"><h3 className='whitespace-nowrap font-medium'>Short Break</h3></label>
        <input type="number" value={shortTime} onChange={(e)=>{
          setChanged(true)
          setShortTime(e.target.value)
        }} id="short_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5" />
        </section>

        <section>
        <label htmlFor="long_time" className="block mb-2 text-gray-900"><h3 className='whitespace-nowrap font-medium'>Long Break</h3></label>
        <input type="number" value={longTime} onChange={(e)=>{
          setChanged(true)
          setLongTime(e.target.value)
        }} id="long_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15" />
        </section> 
      </div>

      <div className='flex items-center justify-between gap-3 mb-5'>
        <section>
        <label htmlFor="long_time" className="block mb-2 text-gray-900"><h3 className='whitespace-nowrap font-medium'>Long Break Starts in :</h3></label>
        <div className='flex items-center'>
        <input type="number" value={pomoTimeStartIn} onChange={(e)=>{
          setPomoTimeStartIn(e.target.value)
          setChanged(true)
        }} id="long_time" className=" text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15" />
        <p className='ml-2'> Pomodoro</p>
        </div>
        </section> 
        {changed&&<button onClick={validateInput} className='bg-slate-700 text-white px-3 py-2 hover:bg-slate-600 rounded text-sm active:scale-[0.95]'>update</button>}
        {loading && <ClipLoader
        color={"#ffffff"}
        loading={true}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      </div>

      {/* <div className='flex justify-between items-center mb-8'>
            <h3 className='font-medium'>Start Break Automatically</h3>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={timeAndBreak.startBreakAutomatically} readOnly/>
            <div onClick={() => {dispatch(changeAutoBreakStatus())}} className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>   
            </label>   
      </div>

      <div className='flex justify-between items-center mb-5'>
            <h3 className='font-medium'>Start Pomodoro Automatically</h3>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={timeAndBreak.startPomodoroAutomatically} readOnly/>
            <div onClick={() => {dispatch(changeAutoPomoStatus())}} className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>   
            </label>   
      </div> */}

    </div>
  )
}

export default TimeAndBreak