const TotalTime = ({ shifts }) => {

    // Get all hours and minutes
    const allHours = shifts.map(shift => parseInt(shift.hours))
    const allMins = shifts.map(shift => parseInt(shift.minutes))

    // Get sum of all hours and minutes
    let sumHours = allHours.reduce((a, b) => a + b, 0)
    let sumMins = allMins.reduce((a, b) => a + b, 0)

    // Convert sum of hours and minutes into minutes for conversion
    const totalMins = (sumHours * 60) + sumMins


    return (
        <div className="container total-wrapper d-flex justify-content-evenly">
            <h5>Total Time</h5>
            <p>{Math.floor(totalMins / 60)}</p>
            <p>{totalMins % 60}</p>
        </div>
    )
}

export default TotalTime