const TotalTime = ({ shifts }) => {
    // Get all hours and minutes
    const allHours = shifts.map(shift => parseInt(shift.hours))
    const allMins = shifts.map(shift => parseInt(shift.minutes))

    // Get sum of all hours and minutes
    const totalHours = allHours.reduce((a, b) => a + b, 0)
    const totalMins = allMins.reduce((a, b) => a + b, 0)

    return (
        <div className="container total-wrapper">
            <h5>Total Time</h5>
            <p>{totalHours}</p>
            <p>{totalMins}</p>
        </div>
    )
}

export default TotalTime