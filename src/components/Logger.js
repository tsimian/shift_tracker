import uuid from 'react-uuid'

const Logger = ({ setShifts, totalHours, setTotalHours, totalMinutes, setTotalMinutes }) => {

    const updateLog = (e) => {
        e.preventDefault()

        const form = document.getElementById('form')
        const date = new Date(document.querySelector('#date').value)
        const hours = document.querySelector('#hours').value
        const minutes = document.querySelector('#minutes').value

        setShifts(shifts => [...shifts, {
            id: uuid(),
            date: `${date.getMonth()}.${date.getDay()}.${date.getFullYear()}`,
            time: `${hours}h ${minutes}m`
        }])

        setTotalHours(prevCount => prevCount + hours)
        setTotalMinutes(prevCount => prevCount + minutes)

        form.reset()
    }
    return (
        <div>
            <form onSubmit={updateLog} id="form">
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" />
                </div>
                <div className="form-group">
                    <label htmlFor="hours">Hours</label>
                    <input type="number" className="form-control" id="hours" />
                </div>
                <div className="form-group">
                    <label htmlFor="minutes">Minutes</label>
                    <input type="number" className="form-control" id="minutes" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add to Backlog</button>
            </form>
        </div>
    )
}

export default Logger;