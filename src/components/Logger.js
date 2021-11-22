import {useState} from 'react'

const Logger = ({ onAdd }) => {
    const [showForm, setShowForm] = useState(false);
    const [date, setDate] = useState('')
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)


    const updateLog = (e) => {
        e.preventDefault()

        const form = document.getElementById('form')

        if (!hours) {
            setHours(0)
        }

        if (!minutes) {
            setMinutes(0)
        }

        onAdd({ date, hours, minutes })

        form.reset()
    }

    return (
        <div className="container">
            <div className="btn-wrapper">
                {/* Form Add/Cancel Btns */}
                <button type="submit" id="add-btn" className={!showForm ? "btn btn-primary mt-3" : "btn btn-danger mt-3"} onClick={() => setShowForm(!showForm)}>{!showForm ? 'Add Shift' : 'Cancel'}</button>
            </div>
            {showForm && <form onSubmit={updateLog} id="form">
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" className="form-control" 
                        id="date"
                        onChange={(e) => setDate(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hours">Hours</label>
                    <input 
                        type="number" className="form-control" 
                        id="hours"
                        onChange={(e) => setHours(e.target.value)}
                        placeholder="0" min="0" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        type="number" className="form-control" 
                        id="minutes"
                        onChange={(e) => setMinutes(e.target.value)}
                        placeholder="0" min="0" 
                        max="59" 
                    />
                </div>
                <button type="submit" className="btn btn-success mt-3" id="submit-btn">Submit</button>
            </form>
            }   
        </div>
    )
}

export default Logger;