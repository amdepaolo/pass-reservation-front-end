import React,{useState} from "react";

function EditReservation({reservation, setEdit, cleanUpDate}){
    const [editResObj, setEditResObj] = useState(reservation)

    function updateEditResObj(key, value){  
        const updatedEditRes = {...editResObj, [key]:value};
        setEditResObj(updatedEditRes)
        console.log(editResObj)
    }

    function saveEdit(){
        fetch(`http://localhost:9292/reservations/${reservation.id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editResObj)
        })
        .then(r => r.json())
        .then(()=>setEdit(false))
    }

    return (
        <tr>
            <td><input type='text' value={editResObj.name} onChange={e =>updateEditResObj('name', e.target.value)} /></td>
            <td><input type='text' value={editResObj.email} onChange={e =>updateEditResObj('email', e.target.value)}/></td>
            <td><input type='date' value={cleanUpDate(editResObj.check_out)} onChange={e =>updateEditResObj('check_out', e.target.value)}/></td>
            <td><input type='date' value={cleanUpDate(editResObj.check_in)} onChange={e =>updateEditResObj('check_in', e.target.value)} /></td>
            <td><button onClick={()=>setEdit(false)}>Don't save edit?</button></td>
            <td><button onClick={saveEdit}>Save Edit?</button></td>
        </tr>
    )
}

export default EditReservation