import { FaBan } from 'react-icons/fa'

const Shifts = ({ shifts, setShifts }) => {
    const onDelete = async (id) => {
        setShifts(shifts.filter(shift => shift.id !== id))

    }

    return (
        <div className="container mt-3">
            { shifts.length > 0 ? <table className="table table-striped table-bordered table-hover table-condensed">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {shifts.map(shift => {
                        return (
                            <tr key={shift.id}>
                                <td>{shift.date}</td>
                                <td>{shift.time}</td>
                                <td>
                                    <div className="dlt-btn text-center" onClick={() => {
                                        const id = shift.id;
                                        onDelete(id)
                                        }}>
                                        <FaBan />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <h5>You have no shifts logged.</h5>}
        </div>
    )
}

export default Shifts