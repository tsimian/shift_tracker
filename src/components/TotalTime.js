const TotalTime = ({ shifts }) => {
    // Get all hours and minutes
    const allHours = shifts.map(shift => parseInt(shift.hours))
    const allMins = shifts.map(shift => parseInt(shift.minutes))

    // Get sum of all hours and minutes
    let totalHours = allHours.reduce((a, b) => a + b, 0)
    let totalMins = allMins.reduce((a, b) => a + b, 0)

    return (
        <div className="container total-wrapper d-flex justify-content-evenly">
            <h5>Total Time</h5>
            <p>{totalMins >= 60 ? totalHours += 1 : totalHours}</p>
            <p>{totalMins >= 60 ? totalMins % 60 : totalMins}</p>
        </div>
    )
}

export default TotalTime