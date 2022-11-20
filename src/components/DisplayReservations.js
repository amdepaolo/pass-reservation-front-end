import React  from "react";
import ReservationInfo from "./ReservationInfo";

function DisplayReservations({currentPass}){
    const reservations = currentPass.reservations;
    const reservationList = reservations.map(reservation =>{
        return (
            <ReservationInfo key={reservation.id} reservation={reservation}/>
        )
    })

    return(
        <div>
            <h2>Reservations for {currentPass.name}:</h2>
            <table>
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