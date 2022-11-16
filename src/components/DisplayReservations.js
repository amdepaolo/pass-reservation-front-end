import React  from "react";
import ReservationInfo from "./ReservationInfo";

function DisplayReservations({currentPassAndRes}){
    const reservations = currentPassAndRes.reservations;
    const reservationList = reservations.map(reservation =>{
        return (
            <ReservationInfo key={reservation.id} reservation={reservation}/>
        )
    })

    return(
        <div>
            <h2>Reservations:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Check-out Date</th>
                        <th>Check-in Date</th>
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