import { useState, useEffect } from 'react'
import Header from './components/Header'
import Logger from './components/Logger'
import Shifts from './components/Shifts'
import TotalTime from './components/TotalTime'
import Footer from './components/Footer'

function App() {
  const [shifts, setShifts] = useState([])
  const [showForm, setShowForm] = useState(false)

  // Theme/Styles
  const lightTheme = {
    backgroundColor: "#fff",
    color: "#000",
    transition: "0.25s ease-in"
  }

  const darkTheme = {
    backgroundColor: "#000",
    color: "#fff",
    transition: "0.25s ease-in"
  }

  const [theme, setTheme] = useState('dark')

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

  // Fill Form
  const fillForm = (shift) => {
    setShowForm(true)

    let formDate = document.getElementById('date')
    let formHours = document.getElementById('hours')
    let formMins = document.getElementById('minutes')

    formDate.value = shift.date 
    formHours.value = shift.hours
    formMins.value = shift.minutes

  }

  // Update Shift
  const updateShift = async (shift) => {
    await fetch(`http://localhost:5000/shifts/${shift.id}`, {
      method: 'PATCH',
      headers: {
         'Accept': "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(shift)
    })

    if (shift.minutes >= 60) {
      shift.minutes = shift.minutes % 60
      shift.hours += 1
    }

    setShifts([...shifts])

  }
  
  return (
    <div className="App" style={theme === 'light' ? lightTheme : darkTheme}>
      <Header />
      <Logger onAdd={addShift} onUpdate={updateShift} shifts={shifts} showForm={showForm} setShowForm={setShowForm} theme={theme} setTheme={setTheme} />
      <Shifts shifts={shifts} onDelete={deleteShift} onEdit={fillForm} theme={theme} />
      {shifts.length > 0 ? <TotalTime shifts={shifts} /> : ''}
      <Footer />
    </div>
  );
}

export default App
