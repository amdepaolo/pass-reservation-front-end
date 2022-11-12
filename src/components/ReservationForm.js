import React from 'react'

function ReservationForm(){
    return(
        <form>
            <label>Name: </label>
            <input onChange={e => console.log(e.target.value)} type='text' placeholder='name'/>
            <label>Email: </label>
            <input type='email' placeholder='email'/>
            <label>Choose Date: </label>
            <input id='date-selector' onChange={e => console.log(e.target.value)} type='date' />
            <button>Submit</button>
        </form>
    )
}

export default ReservationForm