import React from 'react'

const TimeComponent=({time})=> {
  return (
    <div className='mt-[5rem] flex items-center justify-center flex-col'>
        <div className='w-[300px]'>
           <p style={{fontFamily:"Rubik"}} className='text-[120px] text-white font-700 mx-auto pl-[2rem]'>
            <span>
            {time().minutes}</span>:<span>{time().seconds}</span>
            </p>
        </div>
    </div>
  )
}

export default TimeComponent