import { createSlice } from '@reduxjs/toolkit';

//music sources
import alarm1 from '../../assets/bell.mp3';
import alarm2 from '../../assets/alarm.mp3';
import alarm3 from '../../assets/bird.mp3';
import tiktik from '../../assets/tiktik.mp3';

const initialState = {
  tiktikSound:tiktik,
  tiktikEnabled:false,
  notificationEnabled:false,
  alarmCollection:[
    {
      title:"Bell Sound",
      src:alarm1
    },
    {
      title:"Danger Alarm",
      src:alarm2
    },
    {
      title:"Birds",
      src:alarm3
    }
  ],
  alarmVolumeLevel:'1.0',
  alarmIndex:2,
};

export const notficationAndAlarmSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {

  changeAlarmVolume: (state,action) => {
    return {
       ...state,alarmVolumeLevel:action.payload
       }
  },
  changeAlarm: (state,action) => {
    return {
       ...state,alarmIndex:action.payload
       }
  },
  toggleTiktikSound:(state)=>{
    return {
        ...state,tiktikEnabled:!state.tiktikEnabled
    }
  },
  toggleNotification:(state)=>{
    return {
        ...state,notificationEnabled:!state.notificationEnabled
    }
  }
  },
});

export const { changeAlarmVolume,changeAlarm,toggleNotification,toggleTiktikSound } = notficationAndAlarmSlice.actions;
export default notficationAndAlarmSlice.reducer;
