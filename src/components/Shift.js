import { FaMinusCircle } from 'react-icons/fa'

const Shift = ({ shift, onDelete }) => {
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
        </tr>
        </>
    )
}

export default Shift