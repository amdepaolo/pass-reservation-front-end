import React, {useState} from "react";
import EditReservation from "./EditReservation";

function ReservationInfo({reservation, onResponse}){
    const [edit, setEdit] = useState(false);

    function cleanUpDate(dateString){
        if (dateString === null) {return 'Error! No specified date!'}
        else return dateString.split('T')[0]
    }

    function cancelClick(id){
        fetch(`http://localhost:9292/reservations/${id}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        })
        .then(r => r.json())
        .then(r => console.log(r))
    }

    if (edit) {
        return(
            <EditReservation reservation={reservation} setEdit={setEdit} cleanUpDate={cleanUpDate} onResponse={onResponse} />
        )
    }

    else return(
        <tr>
            <td>{reservation.name}</td>
            <td>{reservation.email}</td>
            <td>{cleanUpDate(reservation.check_out)}</td>
            <td>{cleanUpDate(reservation.check_in)}</td>
            <td><button onClick={()=>cancelClick(reservation.id)}>Cancel Reservation?</button></td>
            <td><button onClick={()=>setEdit(true)}>Edit Reservation?</button></td>
        </tr>
    )
}

export default ReservationInfo