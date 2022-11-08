import { configureStore } from '@reduxjs/toolkit';
import mainBackgroundSlice from '../features/mainBackground/mainBackgroundSlice'; 
import musicSlice from '../features/musicSystem/musicSlice';
import notficationAndAlarmSlice from '../features/musicSystem/notficationAndAlarmSlice';
import timeAndBreak from '../features/timeAndBreak/timeAndBreak';

export const store = configureStore({
  reducer: {
    background: mainBackgroundSlice,
    music : musicSlice,
    notification : notficationAndAlarmSlice,
    timeAndBreak : timeAndBreak
  },
});
