import React,{useState} from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import {FcIdea} from 'react-icons/fc'
import SettingsDrawer from "../SettingsDrawer/SettingsDrawer";

const Navbar=()=> {
  const[settingsDrawerPosition,setSettingsDrawerPosition] = useState('-450px')
  return (
    <div className="mt-8 max-w-full">
      <div className="flex justify-between items-center">
        <section className="flex items-center cursor-pointer">
          <h1 className="sm:text-[2rem] text-[1.8rem] font-bold text-white flex items-center">
            <a href="/">focus<span>goals</span></a>
            <FcIdea size={30} className="ml-1"/>
          </h1>
        </section>

      {settingsDrawerPosition==='-450px' && <section className="flex items-center gap-2 sm:gap-5">
          {/* <p className="bg-[white]  text-black rounded-full p-2 sm:p-3 cursor-pointer active:scale-[0.95]"><VscGraph size={22}/></p>
          <p className="bg-[white]  text-black rounded-full p-2 sm:p-3 cursor-pointer active:scale-[0.95]"><AiOutlineUser size={22} /></p> */}
          <p onClick={()=>setSettingsDrawerPosition('0px')} className="bg-[white]  text-black rounded-full p-2 sm:p-3 cursor-pointer active:scale-[0.95]"><IoSettingsSharp size={22} /></p>
        </section>}
      
        {settingsDrawerPosition!=='-450px' && <div onClick={()=>setSettingsDrawerPosition('-450px')} className="h-[100vh] w-[100vw] absolute top-0 left-0 bg-[#00000080] z-10"></div>}
      </div>

      <SettingsDrawer settingsDrawerPosition={settingsDrawerPosition} setSettingsDrawerPosition={setSettingsDrawerPosition}/>
    </div>
  );
}

export default Navbar;
