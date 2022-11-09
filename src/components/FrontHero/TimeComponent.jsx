import React from 'react'

const TimeComponent=({minutes,seconds})=> {
  return (
    <div className='mt-[5rem] flex items-center justify-center flex-col'>
        <div className='w-[300px]'>
           <p style={{fontFamily:"Rubik"}} className='sm:text-[120px] text-[85px] sm:text-left text-center text-white font-700 mx-auto sm:pl-[2rem]'>
            <span>
            {minutes}</span>:<span>{seconds}</span>
            </p>
        </div>
    </div>
  )
}

export default TimeComponent