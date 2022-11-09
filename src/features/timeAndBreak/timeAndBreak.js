import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pomoTime:25,
    shortBreakTime:5,
    longBreakTime:15,
    completedPomoRound:0,
    startLongBreakIn:4,
    startBreakAutomatically:true,
    startPomodoroAutomatically:false
};

export const timeAndBreakSlice = createSlice({
  name: 'time-and-break',
  initialState,
  reducers: {
    changePomoTime:(state,action)=>{
      return {
        ...state,pomoTime:action.payload
      }
    },
    changeShortBreakTime: (state,action) => {
        return {
           ...state,shortBreakTime:action.payload
        }
    },
    changeLongBreakTime: (state,action) => {
        return {
           ...state,longBreakTime:action.payload
        }
    },
    changeLongBreakTimeStart: (state,action) => {
        return {
           ...state,startLongBreakIn:action.payload
        }
    },
    changeAutoBreakStatus: (state) => {
        return {
           ...state,startBreakAutomatically:!state.startBreakAutomatically
        }
    },
    changeAutoPomoStatus: (state,action) => {
        return {
           ...state,startPomodoroAutomatically:!state.startPomodoroAutomatically
        }
    },
  },
});

export const { changePomoTime,changeShortBreakTime,changeLongBreakTime,changeLongBreakTimeStart,changeAutoBreakStatus,changeAutoPomoStatus } = timeAndBreakSlice.actions;
export default timeAndBreakSlice.reducer;
