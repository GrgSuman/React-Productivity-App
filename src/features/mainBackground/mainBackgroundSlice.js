import { createSlice } from '@reduxjs/toolkit';

import img1 from '../../assets/backgrounds/1.jpg'
import img2 from '../../assets/backgrounds/2.jpg'
import img3 from '../../assets/backgrounds/3.jpg'
import img4 from '../../assets/backgrounds/4.jpg'
import img5 from '../../assets/backgrounds/5.jpg'
import img6 from '../../assets/backgrounds/6.jpg'
import img7 from '../../assets/backgrounds/7.jpg'

const initialState = {
  isBgAnImage : true,
  bgImages : [img1,img2,img3,img4,img5,img6,img7],
  bgImageIndex : 0,
  bgColors : [
    "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% )",
    "linear-gradient( 89.9deg,  rgba(255,190,32,1) 0.6%, rgba(251,112,71,1) 124.3% )",
    "linear-gradient(to right, #f00000, #dc281e)",
    "linear-gradient(to left, #0575e6, #021b79)"
  ],
  bgColorIndex : 0
};

export const mainBackgroundSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeBgImageIndex: (state,action) => {
        return {
           ...state,bgImageIndex:action.payload,isBgAnImage:true
           }
    },
    changeBgColorIndex: (state,action) => {
        return {
           ...state,bgColorIndex:action.payload,isBgAnImage:false
           }
    },
  },
});

export const { changeBgImageIndex, changeBgColorIndex } = mainBackgroundSlice.actions;

export default mainBackgroundSlice.reducer;
