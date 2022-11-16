import React from "react";

function ReservationInfo({reservation}){ 
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

    return(
        <tr>
            <td>{reservation.name}</td>
            <td>{reservation.email}</td>
            <td>{cleanUpDate(reservation.check_out)}</td>
            <td>{cleanUpDate(reservation.check_in)}</td>
            <td><button onClick={()=>cancelClick(reservation.id)}>cancel</button></td>
        </tr>
    )
}

export default ReservationInfo