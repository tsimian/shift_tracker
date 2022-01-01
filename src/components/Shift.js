import { FaMinusCircle, FaEdit } from 'react-icons/fa'

const Shift = ({ shift, onDelete, onEdit }) => {
    return (
        <>
        <tr>
            <td>{shift.date}</td>
            <td>{shift.hours}</td>
            <td>{shift.minutes}</td>
            <td>
                <div className="dlt-btn text-center" onClick={() => {
                    const id = shift.id;
                    onDelete(id)
                }}>
                <FaMinusCircle />
                </div>
            </td>
            <td>
                <div className="edit-btn text-center" onClick={() => {
                    onEdit(shift)
                }}>
                <FaEdit/>
                </div>
            </td>
        </tr>
        </>
    )
}

export default Shift