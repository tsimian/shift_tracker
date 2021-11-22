import { useState, useEffect } from 'react'
import Header from './components/Header'
import Logger from './components/Logger'
import Shifts from './components/Shifts'
import TotalTime from './components/TotalTime'
import Footer from './components/Footer'

const LOCAL_STORAGE_KEY = 'shift_tracker.shifts'

function App() {
  const [shifts, setShifts] = useState([])

  useEffect(() => {
    const storedShifts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedShifts) {
      setShifts(storedShifts)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shifts))
  }, [shifts]);

  
  return (
    <div className="App container">
      <Header />
      <Logger shifts={shifts} setShifts={setShifts} />
      <Shifts shifts={shifts} setShifts={setShifts} />
      {shifts.length > 0 ? <TotalTime shifts={shifts} /> : ''}
      <Footer />
    </div>
  );
}

export default App
