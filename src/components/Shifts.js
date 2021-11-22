import Shift from './Shift'

const Shifts = ({ shifts, onDelete }) => {

    return (
        <div className="container mt-3">
            { shifts.length > 0 ? <table className="table table-striped table-bordered table-hover table-condensed">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Hours</th>
                        <th>Minutes</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {shifts.map(shift => {
                        return (
                            <Shift key={shift.id} shift={shift} onDelete={onDelete} />
                        )
                    })}
                </tbody>
            </table> : <h5 className="text-center mt-5">You have no shifts logged.</h5> }
        </div>
    )
}

export default Shifts