// import React,{useEffect} from 'react'
// import { useSelector} from 'react-redux';
import './App.css';
import FrontHero from './components/FrontHero/FrontHero';
import MainBackground from './components/MainBackground/MainBackground';
import Navbar from './components/Navbar/Navbar';

function App() {

//   const notificationState = useSelector(state=>state.notification) 
//   useEffect(()=>{
//     if(notificationState.notificationEnabled){
//         if (!Notification) {
//             alert('Desktop notifications are not available in your browser.');
//             return;
//           }
//         if (Notification.permission !== 'granted') {
//             Notification.requestPermission();
//         }
//     }
// },[notificationState.notificationEnabled])

  return (
    <div className="App">
      <MainBackground>
        <Navbar/>
        <FrontHero/>
      </MainBackground>
    </div>
  );
}

export default App;
