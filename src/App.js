import { useState, useEffect } from 'react'
import Header from './components/Header'
import Logger from './components/Logger'
import Shifts from './components/Shifts'
import TotalTime from './components/TotalTime'
import Footer from './components/Footer'

function App() {
  const [shifts, setShifts] = useState([])

  useEffect(() => {
    const getShifts = async () => {
      const shiftsFromServer = await fetchShifts()

      setShifts(shiftsFromServer)
    }

    getShifts()
  }, [])

  // Fetch Shifts
  const fetchShifts = async () => {
    const res = await fetch('http://localhost:5000/shifts')
    const data = await res.json()
    
    return data
  }

  // Add Shift
  const addShift = async (shift) => {
    const res = await fetch('http://localhost:5000/shifts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(shift)
    })

    const data = await res.json()

    setShifts([...shifts, data])
  }

  // Delete Shift
  const deleteShift = async (id) => {
    await fetch(`http://localhost:5000/shifts/${id}`, {
        method: 'DELETE'
    })

    setShifts(shifts.filter(shift => shift.id !== id))

}
  
  return (
    <div className="App container">
      <Header />
      <Logger onAdd={addShift} />
      <Shifts shifts={shifts} onDelete={deleteShift} />
      {shifts.length > 0 ? <TotalTime shifts={shifts} /> : ''}
      <Footer />
    </div>
  );
}

export default App
