import {useState} from 'react'
import uuid from 'react-uuid'

const Logger = ({ setShifts }) => {
    const [showForm, setShowForm] = useState(false);


    const updateLog = (e) => {
        e.preventDefault()

        const form = document.getElementById('form')
        let date = document.querySelector('#date').value
        let hours = document.querySelector('#hours').value
        let minutes = document.querySelector('#minutes').value

        if (!hours) {
            hours = 0
        }

        if (!minutes) {
            minutes = 0
        }

        setShifts(shifts => [...shifts, {
            id: uuid(),
            date: date,
            hours: hours,
            minutes: minutes
        }])

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
                    <input type="date" className="form-control" id="date" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="hours">Hours</label>
                    <input type="number" className="form-control" id="hours" placeholder="0" min="0" />
                </div>
                <div className="form-group">
                    <label htmlFor="minutes">Minutes</label>
                    <input type="number" className="form-control" id="minutes" placeholder="0" min="0" max="59" />
                </div>
                <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
            }   
        </div>
    )
}

export default Logger;