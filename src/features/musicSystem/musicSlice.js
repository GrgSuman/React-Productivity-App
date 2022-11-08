import { createSlice } from '@reduxjs/toolkit';

//music sources
import music1 from '../../assets/music1.mp3';
import music2 from '../../assets/music2.mp3';
import music3 from '../../assets/music3.mp3';

const initialState = {
  showMusicWidget : true,
  musicCollection:[
    {
      title:"Deep Focus",
      src:music1
    },
    {
      title:"Feel Relax",
      src:music2
    },
    {
      title:"Concentration",
      src:music3
    }
  ],
  musicVolumeLevel:'1.0',
  musicIndex:0,
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    showHideMusicWidget:(state)=>{
      return {
        ...state,showMusicWidget:!state.showMusicWidget
      }
    },
    playPreviousMusic: (state,action) => {
        return {
           ...state,musicIndex:state.musicIndex-1
           }
    },
    playNextMusic: (state,action) => {
        return {
           ...state,musicIndex:state.musicIndex+1
           }
    },
    changeMusicVolume: (state,action) => {
      return {
         ...state,musicVolumeLevel:action.payload
         }
  }
  },
});

export const { showHideMusicWidget,playPreviousMusic, playNextMusic,changeMusicVolume } = musicSlice.actions;
export default musicSlice.reducer;
