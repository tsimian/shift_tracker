const Header = ({ totalHours, totalMinutes }) => {
    return (
        <div className="container d-flex justify-content-between">
            <h1>Shift Tracker</h1>
            <div className="total-wrapper">
                <span>{totalHours}h {totalMinutes}m</span>
            </div>
        </div>
    )
}

export default Header