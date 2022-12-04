import React  from "react";
import ReservationInfo from "./ReservationInfo";

function DisplayReservations({currentPass, onDelete, onEdit}){
    const reservations = currentPass.reservations;
    const reservationList = reservations.map(reservation =>{
        return (
            <ReservationInfo key={reservation.id} reservation={reservation} onDelete={onDelete} onEdit={onEdit}/>
        )
    })

    return(
        <div className="reservations">
            <h2>Reservations for {currentPass.name}:</h2>
            <table className="reservations">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Check-out Date</th>
                        <th>Check-in Date</th>
                        <th>Cancel?</th>
                        <th>Edit?</th>
                    </tr>
                </thead>
                <tbody>
                    {reservationList}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayReservations