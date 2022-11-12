import React  from "react";

function DisplayReservations({currentPassAndRes}){
    const reservations = currentPassAndRes.reservations;
    const reservationList = reservations.map(reservation =>{
        return (
            <li>Name: {reservation.name} Check-out date: {reservation.check_out} Check-in date: {reservation.check_in}</li>
        )
    })

    return(
        <div>
            <ul>
                {reservationList}
            </ul>
        </div>
    )

}

export default DisplayReservations