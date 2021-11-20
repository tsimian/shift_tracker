import { useState, useEffect } from 'react'
import Header from './components/Header'
import Logger from './components/Logger'
import Shifts from './components/Shifts'
import Footer from './components/Footer'

const LOCAL_STORAGE_KEY = 'shift_tracker.shifts'

function App() {
  const [shifts, setShifts] = useState([
    // {
    //   id: 1,
    //   date: "10.31.21",
    //   time: "8h 45m"
    // },
    // {
    //   id: 2,
    //   date: "11.2.21",
    //   time: "7h 46m",
    // },
    // {
    //   id: 3,
    //   date: "11.7.21",
    //   time: "9h"
    // }
  ])

  const [totalHours, setTotalHours] = useState(0)
  const [totalMinutes, setTotalMinutes] = useState(0)

  useEffect(() => {
    const storedShifts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedShifts) {
      setShifts(storedShifts)
      // setTotalHours(storedShifts.reduce((acc, curr) => {
      //   acc + curr.time;
      // }, totalHours))
    }
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shifts))
}, [shifts]);

  
  return (
    <div className="App container">
      <Header totalHours={totalHours} totalMinutes={totalMinutes} />
      <Logger shifts={shifts} setShifts={setShifts} totalHours={totalHours} setTotalHours={setTotalHours} totalMinutes={totalMinutes} setTotalMinutes={setTotalMinutes} />
      <Shifts shifts={shifts} setShifts={setShifts} />
      <Footer />
    </div>
  );
}

export default App
