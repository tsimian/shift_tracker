import { FaMoon, FaSun } from 'react-icons/fa';

const Logger = ({ onAdd, onUpdate, shifts, showForm, setShowForm, theme, setTheme }) => {

    const form = document.getElementById('form')
    
    const openForm = () => {
        form.reset()
        setShowForm(!showForm)
    }

    const updateLog = (e) => {
        e.preventDefault()
        
        let date = document.getElementById('date').value
        let hours = document.getElementById('hours').value
        let minutes = document.getElementById('minutes').value

        // Handle empty input fields
        if (!hours && !minutes) {
            alert('Time logged must be greater than 0 minutes')
            form.reset()
            return
        }   else if (!hours) {
            hours = 0
        }   else if (!minutes) {
            minutes = 0
        }

        // Handle existing shift
        if (shifts.some(shift => shift.date === date)) {
            for (let i = 0; i < shifts.length; i++) {
                let curr = shifts[i]
        
                if (curr.date === date) {
                    curr.hours = parseInt(curr.hours) + parseInt(hours)
                    curr.minutes = parseInt(curr.minutes) + parseInt(minutes)
        
                    onUpdate(curr)
                    form.reset()
                    return
                }
            }

        }   else {

            // Add new shift
            onAdd({ date, hours, minutes })
            form.reset()
            
        }
        
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }   else {
            setTheme('light')
        }
    }
    

    return (
        <div className="container">
            <div className="btn-wrapper">

                {/* Form Add/Cancel Btns */}
                <button 
                    type="submit" 
                    id="add-btn" 
                    className={!showForm ? "btn btn-primary mt-3" : "btn btn-danger mt-3"} 
                    onClick={openForm}
                >
                    {!showForm ? 'Add Shift' : 'Cancel'}
                </button>

                {/* Theme Toggler Btn */}
                <button 
                    className={theme === 'light' ? "btn btn-dark mt-3" : "btn btn-light mt-3" } id="theme-toggler" 
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>
            </div>

            {/* Form w/ Toggle */}
            <form onSubmit={updateLog} id="form" className="mt-2" style={{
                display: !showForm && 'none'
            }}>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="date"
                        placeholder="dd.mm.yyyy"
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hours">Hours</label>
                    <input 
                        type="number" className="form-control" 
                        id="hours"
                        onWheel={(e) => e.target.blur()}
                        placeholder="0" 
                        min="0" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        type="number" className="form-control" 
                        id="minutes"
                        onWheel={(e) => e.target.blur()}
                        placeholder="0" 
                        min="0" 
                        max="59" 
                    />
                </div>
                <button type="submit" className="btn btn-success mt-3" id="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default Logger;