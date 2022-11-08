import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {TbArrowsMaximize,TbArrowsMinimize} from 'react-icons/tb'

const MainBackground=(props)=> {
  const handle = useFullScreenHandle();
  const [isFullScreen,setIsFullScreen] = useState(false);

  const bg = useSelector((state)=>state.background)
  return (
    <FullScreen handle={handle}>
      <div className={` px-[5%] h-[100vh] w-[100%] fixed top-0 left-0`} style={{ background:bg.isBgAnImage?'white':bg.bgColors[bg.bgColorIndex],animation:"slide linear 1s"}}>
        {bg.isBgAnImage&&<img src={bg.bgImages[bg.bgImageIndex]} alt="hero-background" className='h-[100vh] w-[100%] absolute top-0 left-0 object-cover -z-10'/>}
        {props.children}
        
        {!isFullScreen&&<button onClick={()=>{
          handle.enter()
          setIsFullScreen(!isFullScreen)
        }} className="flex items-center gap-2 absolute bottom-[8%] right-[5%] text-white m-3">
          <p>Enter Fullscreen</p>
          <TbArrowsMaximize size={20}/>
        </button>}
        {isFullScreen&&<button onClick={()=>{
          handle.exit()
          setIsFullScreen(!isFullScreen)
        }} className="flex items-center gap-2 absolute bottom-[8%] right-[5%] text-white m-3">
          <p>Exit Fullscreen</p>
          <TbArrowsMinimize size={20}/>
        </button>}
      </div>
    </FullScreen>
  )
}

export default MainBackground