import React, {useState} from 'react'

function ReservationForm({passId}){
    const [resFormObj, setResFormObj] = useState({name: '', email: '', check_out: ''})

    function updateResForm(key, value){
       const updatedResForm = {...resFormObj, [key]:value};
       setResFormObj(updatedResForm)
       console.log(resFormObj)
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:9292/passes/${passId}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resFormObj)
        })
        .then(r => r.json())
        .then(r => console.log(r))
        
    }

    return(
        <form>
            <h2>Create Reservation</h2>
            <label>Name: </label>
            <input
                value={resFormObj.name} 
                onChange={e => updateResForm('name', e.target.value)} 
                type='text' 
            />
            <label>Email: </label>
            <input 
                value={resFormObj.email}
                onChange={e => updateResForm('email', e.target.value)}
                type='text'
            />
            <label>Choose Date: </label>
            <input 
                value={resFormObj.checkOut}
                onChange={e => updateResForm('check_out', e.target.value)} 
                type='date' 
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default ReservationForm