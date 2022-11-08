import { useSelector,useDispatch } from 'react-redux'
import {changeBgImageIndex,changeBgColorIndex} from '../../features/mainBackground/mainBackgroundSlice' 
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BackgroundOptions=()=> {

  const background = useSelector(state=>state.background)
  const dispatch = useDispatch()

  return (
    <div className='px-10 my-5 text-gray-900'>
        <h3 className='font-medium'>Background Colors</h3>
        <div className='flex flex-wrap gap-3 my-5'>
            {background.bgColors.map((x,index)=>{
              return <div key={index+'a'} onClick={()=>dispatch(changeBgColorIndex(index))} className="h-[50px] w-[50px] rounded cursor-pointer hover:scale-[1.05]" style={{background:x}}></div>
            })}
        </div>
        <h3 className='font-medium'>Background Images</h3>
        <div className='grid grid-cols-2 gap-2 my-5'>
            {background.bgImages.map((x,index)=>{
              return <LazyLoadImage  key={index+'a'} onClick={()=>dispatch(changeBgImageIndex(index))} src={x} className="rounded cursor-pointer hover:scale-[1.05]" alt="bg demos"/>
            })}
        </div>
        
    </div>
  )
}

export default BackgroundOptions