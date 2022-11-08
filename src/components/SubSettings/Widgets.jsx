import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {showHideMusicWidget} from '../../features/musicSystem/musicSlice'

const Widgets=()=> {
    const showMusicWidget = useSelector(state=>state.music.showMusicWidget)
    const dispath = useDispatch()
  return (
    <div className='px-10'>
      <div className='flex justify-between items-center mb-5'>
            <h3 className='font-medium'>Show Musicbox in dashboard</h3>
            <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={showMusicWidget} readOnly/>
            <div onClick={() => {
                dispath(showHideMusicWidget())
            }} className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>   
            </label>   
      </div>
    </div>
  )
}

export default Widgets