import React, {useState} from 'react'

function ReservationForm({passId, passName, onResponse}){
    const [resFormObj, setResFormObj] = useState({name: '', email: '', check_out: ''})
    const disableButton = passId === undefined? true: false

    function updateResForm(key, value){
       const updatedResForm = {...resFormObj, [key]:value};
       setResFormObj(updatedResForm)
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:9292/passes/${passId}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resFormObj)
        })
        .then(r => r.json())
        .then(onResponse) 
        .then(()=>setResFormObj({name: '', email: '', check_out: ''}))    
    }

    return(
        <form className='panel'>
            <h2>Create Reservation for {passName}</h2>
            <label>Name: </label>
            <input
                value={resFormObj.name} 
                onChange={e => updateResForm('name', e.target.value)} 
                type='text' 
            /><br/>
            <label>Email: </label>
            <input 
                value={resFormObj.email}
                onChange={e => updateResForm('email', e.target.value)}
                type='text'
            /><br/>
            <label>Choose Date: </label>
            <input 
                value={resFormObj.check_out}
                onChange={e => updateResForm('check_out', e.target.value)} 
                type='date' 
            />
            <button onClick={handleSubmit} disabled={disableButton}>Submit</button>
        </form>
    )
}

export default ReservationForm